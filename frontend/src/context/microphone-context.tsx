'use client';

import { createContext, useContext, useState, useCallback, ReactNode, useEffect, useRef } from 'react';
import createVADModule from '/libs/ten_vad.js';

// Types for VAD module and instance
interface TenVADModule {
  _malloc: (size: number) => number;
  _free: (ptr: number) => void;
  _ten_vad_create: (vadHandlePtr: number, hopSize: number, threshold: number) => number;
  _ten_vad_process: (vadHandle: number, audioPtr: number, hopSize: number, probPtr: number, flagPtr: number) => number;
  _ten_vad_destroy: (vadHandlePtr: number) => void;
  _ten_vad_get_version: () => number;
  HEAP16: Int16Array;
  HEAP32: Int32Array;
  HEAPF32: Float32Array;
  getValue?: (ptr: number, type: string) => number;
}

interface VADResult {
  isVoice: boolean;
  probability: number;
}

class TenVAD {
  private module: TenVADModule;
  private vadHandle: number;
  private vadHandlePtr: number;
  private hopSize: number;

  constructor(module: TenVADModule, hopSize: number, threshold: number) {
    this.module = module;
    this.hopSize = hopSize;
    this.vadHandle = 0;
    this.vadHandlePtr = 0;
    
    // Add getValue helper function if missing
    if (!this.module.getValue) {
      this.module.getValue = function (ptr: number, type: string) {
        switch (type) {
          case 'i32':
            return module.HEAP32[ptr >> 2];
          case 'float':
            return module.HEAPF32[ptr >> 2];
          default:
            throw new Error(`Unsupported type: ${type}`);
        }
      };
    }
    
    console.log('🔧 Creating VAD with hopSize:', hopSize, 'threshold:', threshold);
    
    try {
      // Allocate pointer for VAD handle
      this.vadHandlePtr = module._malloc(4);
      console.log('🔧 Allocated vadHandlePtr:', this.vadHandlePtr);
      
      // Create VAD instance - correct API: (vadHandlePtr, hopSize, threshold)
      const result = module._ten_vad_create(this.vadHandlePtr, hopSize, threshold);
      console.log('🔧 VAD create result:', result);
      
      if (result === 0) {
        // Get the actual VAD handle from the pointer
        this.vadHandle = this.module.getValue!(this.vadHandlePtr, 'i32');
        console.log('✅ VAD created successfully - vadHandle:', this.vadHandle);
      } else {
        console.error('❌ VAD creation failed with code:', result);
        if (this.vadHandlePtr) {
          module._free(this.vadHandlePtr);
          this.vadHandlePtr = 0;
        }
      }
    } catch (error) {
      console.error('❌ VAD creation error:', error);
    }
  }

  process(audioData: Int16Array): VADResult | null {
    if (!this.vadHandle || !this.vadHandlePtr) {
      console.error('❌ VAD not properly initialized');
      return null;
    }

    const audioPtr = this.module._malloc(this.hopSize * 2);
    const probPtr = this.module._malloc(4);
    const flagPtr = this.module._malloc(4);

    try {
      // Copy audio data to WASM heap
      const actualSize = Math.min(audioData.length, this.hopSize);
      const heapArray = new Int16Array(this.module.HEAP16.buffer, audioPtr, actualSize);
      heapArray.set(audioData.subarray(0, actualSize));

      // Fill remaining with zeros if needed
      for (let i = actualSize; i < this.hopSize; i++) {
        heapArray[i] = 0;
      }

      // Process with VAD - correct API: (vadHandle, audioPtr, hopSize, probPtr, flagPtr)
      const result = this.module._ten_vad_process(
        this.vadHandle,
        audioPtr,
        this.hopSize,
        probPtr,
        flagPtr
      );

      if (result === 0) {
        // Get results from output pointers
        const probability = this.module.getValue!(probPtr, 'float');
        const flag = this.module.getValue!(flagPtr, 'i32');
        
        return {
          isVoice: flag === 1,
          probability: Math.max(0, Math.min(1, probability))
        };
      } else {
        console.warn('⚠️ VAD process failed with code:', result);
        return { isVoice: false, probability: 0 };
      }
      
    } catch (error) {
      console.error('❌ VAD process error:', error);
      return { isVoice: false, probability: 0 };
    } finally {
      // Always free temporary memory
      this.module._free(audioPtr);
      this.module._free(probPtr);
      this.module._free(flagPtr);
    }
  }

  destroy() {
    console.log('🗑️ Destroying VAD instance');
    if (this.vadHandlePtr) {
      this.module._ten_vad_destroy(this.vadHandlePtr);
      this.module._free(this.vadHandlePtr);
      this.vadHandlePtr = 0;
      this.vadHandle = 0;
    }
  }
}

// Microphone states
export type MicrophoneState = 'idle' | 'listening' | 'speaking' | 'disabled' | 'error';

// VAD configuration
export interface VADConfig {
  hopSize: number;        // Samples per frame (default: 256 = 16ms at 16kHz)
  threshold: number;      // Voice detection threshold 0.0-1.0 (default: 0.5)
  silenceTimeout: number; // Silent frames before triggering send (default: 30 = ~500ms)
}

// Microphone context interface
interface MicrophoneContextValue {
  state: MicrophoneState;
  isListening: boolean;
  isSpeaking: boolean;
  isRecording: boolean; // Alias for isListening to match chat room component
  hasPermission: boolean;
  error: string | null;
  vadConfig: VADConfig;
  startListening: () => Promise<void>;
  stopListening: () => void;
  toggleListening: () => Promise<void>;
  toggleRecording: () => Promise<void>; // Alias for toggleListening to match chat room component
  requestPermission: () => Promise<boolean>;
  updateVADConfig: (config: Partial<VADConfig>) => void;
  onAudioData?: (audioData: ArrayBuffer) => void;
  setAudioDataCallback: (callback: (audioData: ArrayBuffer) => void) => void;
}

// Create the microphone context
const MicrophoneContext = createContext<MicrophoneContextValue | undefined>(undefined);

// Provider component
export function MicrophoneProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<MicrophoneState>('idle');
  const [isListening, setIsListening] = useState<boolean>(false);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [hasPermission, setHasPermission] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [vadConfig, setVADConfig] = useState<VADConfig>({
    hopSize: 256,         // 16ms at 16kHz
    threshold: 0.5,       // 50% confidence threshold
    silenceTimeout: 30    // ~500ms of silence
  });
  const [onAudioData, setOnAudioData] = useState<((audioData: ArrayBuffer) => void) | undefined>();

  // VAD and audio processing refs
  const vadModuleRef = useRef<TenVADModule | null>(null);
  const vadInstanceRef = useRef<TenVAD | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const processorRef = useRef<ScriptProcessorNode | null>(null);
  const audioBufferRef = useRef<Int16Array[]>([]);
  const silenceCountRef = useRef<number>(0);
  const isProcessingRef = useRef<boolean>(false);

  // Check if we have microphone permission
  const checkPermission = useCallback(async () => {
    try {
      if ('permissions' in navigator) {
        const result = await navigator.permissions.query({ name: 'microphone' as PermissionName });
        setHasPermission(result.state === 'granted');
        
        if (result.state === 'denied') {
          setState('disabled');
          setError('Microphone permission denied');
        }
      }
    } catch (err) {
      console.warn('Permission API not supported:', err);
    }
  }, []);

  // Request microphone permission
  const requestPermission = useCallback(async (): Promise<boolean> => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        audio: {
          sampleRate: 16000,
          channelCount: 1,
          echoCancellation: true,
          noiseSuppression: true
        }
      });
      setHasPermission(true);
      setState('idle');
      setError(null);
      
      // Stop the stream immediately as we just wanted to check permission
      stream.getTracks().forEach(track => track.stop());
      return true;
    } catch (err) {
      setHasPermission(false);
      setState('error');
      setError('Failed to access microphone');
      console.error('Microphone permission error:', err);
      return false;
    }
  }, []);

  // Initialize VAD module
  const initVAD = useCallback(async () => {
    try {
      if (!vadModuleRef.current) {
        console.log('🎛️ Loading VAD module...');
        vadModuleRef.current = await createVADModule();
        console.log('✅ VAD module loaded');
      }
      
      if (!vadInstanceRef.current) {
        vadInstanceRef.current = new TenVAD(
          vadModuleRef.current,
          vadConfig.hopSize,
          vadConfig.threshold
        );
        console.log('✅ VAD instance created');
      }
      
      return true;
    } catch (err) {
      console.error('❌ Failed to initialize VAD:', err);
      setError('Failed to initialize voice detection');
      return false;
    }
  }, [vadConfig]);

  // Send accumulated audio data
  const sendAccumulatedAudio = useCallback(() => {
    if (audioBufferRef.current.length === 0 || !onAudioData) return;

    // Calculate total samples
    const totalSamples = audioBufferRef.current.length * vadConfig.hopSize;
    const combinedBuffer = new Int16Array(totalSamples);
    
    // Combine all audio frames
    let offset = 0;
    for (const frame of audioBufferRef.current) {
      combinedBuffer.set(frame, offset);
      offset += frame.length;
    }

    // Convert to ArrayBuffer and send
    const arrayBuffer = combinedBuffer.buffer.slice(
      combinedBuffer.byteOffset,
      combinedBuffer.byteOffset + combinedBuffer.byteLength
    );
    
    onAudioData(arrayBuffer);
    console.log('🎵 Audio sent:', arrayBuffer.byteLength, 'bytes,', audioBufferRef.current.length, 'frames');
    
    // Clear buffer
    audioBufferRef.current = [];
    silenceCountRef.current = 0;
  }, [vadConfig.hopSize, onAudioData]);

  // Process audio frame with VAD
  const processAudioFrame = useCallback((audioData: Float32Array) => {
    if (!vadInstanceRef.current || !isProcessingRef.current) {
      console.warn('⚠️ VAD not ready for processing');
      return;
    }

    // Ensure we have the expected data size
    if (audioData.length !== vadConfig.hopSize) {
      console.warn('⚠️ Audio data size mismatch:', audioData.length, 'expected:', vadConfig.hopSize);
    }

    try {
      // Convert Float32Array to Int16Array with proper bounds checking
      const actualSize = Math.min(audioData.length, vadConfig.hopSize);
      const int16Data = new Int16Array(vadConfig.hopSize);
      
      // Fill the buffer, padding with zeros if needed
      for (let i = 0; i < actualSize; i++) {
        // Clamp the float32 value to [-1, 1] before conversion
        const clampedValue = Math.max(-1, Math.min(1, audioData[i]));
        int16Data[i] = Math.round(clampedValue * 32767);
      }
      
      // Fill remaining with zeros if audio data is shorter
      for (let i = actualSize; i < vadConfig.hopSize; i++) {
        int16Data[i] = 0;
      }

      // Reduced logging to avoid spam
      if (Math.random() < 0.01) { // Only log 1% of frames
        console.log('🎵 Processing audio frame:', {
          originalSize: audioData.length,
          processedSize: actualSize,
          hopSize: vadConfig.hopSize
        });
      }

      // Process with VAD
      const result = vadInstanceRef.current.process(int16Data);
      if (!result) {
        console.warn('⚠️ VAD returned null result');
        return;
      }

      const wasSpeaking = isSpeaking;
      const isVoiceDetected = result.isVoice;

      if (isVoiceDetected) {
        // Voice detected - add to buffer and reset silence counter
        audioBufferRef.current.push(int16Data);
        silenceCountRef.current = 0;
        
        if (!wasSpeaking) {
          setIsSpeaking(true);
          setState('speaking');
          console.log('🗣️ Speech started');
        }
      } else {
        // No voice detected
        if (wasSpeaking) {
          // Add silent frame to buffer (for natural speech boundaries)
          audioBufferRef.current.push(int16Data);
          silenceCountRef.current++;
          
          // Check if silence timeout reached
          if (silenceCountRef.current >= vadConfig.silenceTimeout) {
            // Send accumulated audio
            sendAccumulatedAudio();
            setIsSpeaking(false);
            setState('listening');
            console.log('🔇 Speech ended, audio sent');
          }
        }
      }

      // Only log voice detection changes or occasionally
      if (isVoiceDetected !== wasSpeaking || Math.random() < 0.005) {
        console.log(`VAD: ${result.probability.toFixed(3)} | Voice: ${result.isVoice} | Buffer: ${audioBufferRef.current.length} frames`);
      }
      
    } catch (error) {
      console.error('❌ Error in processAudioFrame:', error);
    }
  }, [vadConfig, isSpeaking, sendAccumulatedAudio]);

  // Start listening with VAD
  const startListening = useCallback(async () => {
    try {
      if (!hasPermission) {
        const granted = await requestPermission();
        if (!granted) return;
      }

      // Initialize VAD
      const vadReady = await initVAD();
      if (!vadReady) return;

      // Create audio context
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({
        sampleRate: 16000,
      });
      
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          sampleRate: 16000,
          channelCount: 1,
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: false
        }
      });
      
      streamRef.current = stream;
      const source = audioContextRef.current.createMediaStreamSource(stream);
      
      // Create script processor (fallback for better compatibility)
      const processor = audioContextRef.current.createScriptProcessor(vadConfig.hopSize, 1, 1);
      processorRef.current = processor;
      
      processor.onaudioprocess = (event) => {
        const inputBuffer = event.inputBuffer;
        const audioData = inputBuffer.getChannelData(0);
        processAudioFrame(audioData);
      };
      
      // Connect audio graph
      source.connect(processor);
      processor.connect(audioContextRef.current.destination);
      
      // Start processing
      isProcessingRef.current = true;
      setIsListening(true);
      setState('listening');
      setError(null);
      
      console.log('🎙️ VAD listening started');
      
    } catch (err) {
      setError('Failed to start voice detection');
      setState('error');
      console.error('Start listening error:', err);
    }
  }, [hasPermission, requestPermission, initVAD, vadConfig.hopSize, processAudioFrame]);

  // Stop listening
  const stopListening = useCallback(() => {
    try {
      // Stop processing
      isProcessingRef.current = false;
      
      // Send any remaining audio
      if (isSpeaking && audioBufferRef.current.length > 0) {
        sendAccumulatedAudio();
      }
      
      // Clean up audio processing
      if (processorRef.current) {
        processorRef.current.disconnect();
        processorRef.current = null;
      }
      
      if (audioContextRef.current) {
        audioContextRef.current.close();
        audioContextRef.current = null;
      }
      
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
        streamRef.current = null;
      }
      
      // Clean up VAD
      if (vadInstanceRef.current) {
        vadInstanceRef.current.destroy();
        vadInstanceRef.current = null;
      }
      
      // Reset state
      setIsListening(false);
      setIsSpeaking(false);
      setState('idle');
      audioBufferRef.current = [];
      silenceCountRef.current = 0;
      
      console.log('⏹️ VAD listening stopped');
      
    } catch (err) {
      console.error('Error stopping VAD:', err);
    }
  }, [isSpeaking, sendAccumulatedAudio]);

  // Toggle listening state
  const toggleListening = useCallback(async () => {
    if (isListening) {
      stopListening();
    } else {
      await startListening();
    }
  }, [isListening, startListening, stopListening]);

  // Update VAD configuration
  const updateVADConfig = useCallback((config: Partial<VADConfig>) => {
    setVADConfig(prev => ({ ...prev, ...config }));
    console.log('🔧 VAD config updated:', config);
  }, []);

  // Set audio data callback
  const setAudioDataCallback = useCallback((callback: (audioData: ArrayBuffer) => void) => {
    setOnAudioData(() => callback);
  }, []);

  // Check for microphone permission on mount
  useEffect(() => {
    checkPermission();
  }, [checkPermission]);

  const value: MicrophoneContextValue = {
    state,
    isListening,
    isSpeaking,
    isRecording: isListening, // Alias for chat room component compatibility
    hasPermission,
    error,
    vadConfig,
    startListening,
    stopListening,
    toggleListening,
    toggleRecording: toggleListening, // Alias for chat room component compatibility
    requestPermission,
    updateVADConfig,
    onAudioData: onAudioData,
    setAudioDataCallback,
  };

  return (
    <MicrophoneContext.Provider value={value}>
      {children}
    </MicrophoneContext.Provider>
  );
}

// Hook to use the microphone context
export function useMicrophone(): MicrophoneContextValue {
  const context = useContext(MicrophoneContext);
  if (context === undefined) {
    throw new Error('useMicrophone must be used within a MicrophoneProvider');
  }
  return context;
}
