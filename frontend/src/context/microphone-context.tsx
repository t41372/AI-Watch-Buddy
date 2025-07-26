'use client';

import { createContext, useContext, useState, useCallback, ReactNode, useEffect, useRef } from 'react';

// Import VAD module
// @ts-ignore
import createVADModule from '../../libs/ten_vad.js';

// Microphone states
export type MicrophoneState = 'idle' | 'active' | 'disabled' | 'error' | 'vad_detecting';

// VAD states
export type VADState = 'inactive' | 'detecting' | 'speech_detected' | 'speech_ended';

// Microphone context interface
interface MicrophoneContextValue {
  state: MicrophoneState;
  vadState: VADState;
  isRecording: boolean;
  hasPermission: boolean;
  error: string | null;
  startRecording: () => Promise<void>;
  stopRecording: () => void;
  toggleRecording: () => Promise<void>;
  requestPermission: () => Promise<boolean>;
  onAudioData?: (audioData: ArrayBuffer, isVADDetected: boolean) => void;
}

// Create the microphone context
const MicrophoneContext = createContext<MicrophoneContextValue | undefined>(undefined);

// Provider component
export function MicrophoneProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<MicrophoneState>('idle');
  const [vadState, setVADState] = useState<VADState>('inactive');
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [hasPermission, setHasPermission] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
  const [onAudioData, setOnAudioData] = useState<((audioData: ArrayBuffer, isVADDetected: boolean) => void) | undefined>();

  // VAD related refs
  const vadInstanceRef = useRef<any>(null);
  const vadModuleRef = useRef<any>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const processorRef = useRef<ScriptProcessorNode | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  // Initialize VAD
  const initializeVAD = useCallback(async () => {
    try {
      console.log('🎤 Initializing VAD...');
      const vadModule = await createVADModule();
      vadModuleRef.current = vadModule;
      // VAD create typically needs sample rate, window size, and threshold
      vadInstanceRef.current = vadModule._ten_vad_create(16000, 512, 0.5);
      console.log('✅ VAD initialized successfully');
    } catch (err) {
      console.error('❌ Failed to initialize VAD:', err);
      setError('Failed to initialize VAD');
    }
  }, []);

  // Cleanup VAD
  const cleanupVAD = useCallback(() => {
    if (vadInstanceRef.current && vadModuleRef.current) {
      try {
        vadModuleRef.current._ten_vad_destroy(vadInstanceRef.current);
        vadInstanceRef.current = null;
        vadModuleRef.current = null;
        console.log('🧹 VAD cleaned up');
      } catch (err) {
        console.error('Error cleaning up VAD:', err);
      }
    }

    if (audioContextRef.current) {
      audioContextRef.current.close();
      audioContextRef.current = null;
    }

    if (processorRef.current) {
      processorRef.current.disconnect();
      processorRef.current = null;
    }

    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
  }, []);

  // Process audio with VAD
  const processAudioWithVAD = useCallback((audioData: Float32Array): boolean => {
    if (!vadInstanceRef.current || !vadModuleRef.current) return false;

    try {
      // Convert Float32Array to Int16Array (VAD expects 16-bit PCM)
      const int16Data = new Int16Array(audioData.length);
      for (let i = 0; i < audioData.length; i++) {
        int16Data[i] = Math.max(-32768, Math.min(32767, audioData[i] * 32768));
      }

      // Allocate memory in WASM heap
      const dataPtr = vadModuleRef.current._malloc(int16Data.length * 2);
      vadModuleRef.current.HEAP16.set(int16Data, dataPtr / 2);

      // Call VAD process function with correct parameters
      const result = vadModuleRef.current._ten_vad_process(
        vadInstanceRef.current,
        dataPtr,
        int16Data.length,
        16000, // sample rate
        1      // channel count
      );

      // Free allocated memory
      vadModuleRef.current._free(dataPtr);

      return result > 0; // Speech detected if result > 0
    } catch (err) {
      console.error('Error processing audio with VAD:', err);
      return false;
    }
  }, []);

  // Setup audio processing
  const setupAudioProcessing = useCallback(async (stream: MediaStream) => {
    try {
      audioContextRef.current = new AudioContext({ sampleRate: 16000 });
      const source = audioContextRef.current.createMediaStreamSource(stream);
      
      // Use ScriptProcessorNode for audio processing
      processorRef.current = audioContextRef.current.createScriptProcessor(4096, 1, 1);
      
      processorRef.current.onaudioprocess = (event) => {
        const inputBuffer = event.inputBuffer;
        const inputData = inputBuffer.getChannelData(0);
        
        // Process with VAD (now synchronous)
        const isVADDetected = processAudioWithVAD(inputData);
        
        // Update VAD state
        if (isVADDetected && vadState !== 'speech_detected') {
          setVADState('speech_detected');
          console.log('🗣️ Speech detected by VAD');
        } else if (!isVADDetected && vadState === 'speech_detected') {
          setVADState('speech_ended');
          console.log('🤐 Speech ended');
          setTimeout(() => setVADState('detecting'), 100);
        }

        // Convert to ArrayBuffer for sending
        const arrayBuffer = new ArrayBuffer(inputData.length * 4);
        const view = new Float32Array(arrayBuffer);
        view.set(inputData);

        // Call audio data callback if available
        if (onAudioData) {
          onAudioData(arrayBuffer, isVADDetected);
        }
      };

      source.connect(processorRef.current);
      processorRef.current.connect(audioContextRef.current.destination);
      
      setVADState('detecting');
      console.log('🎧 Audio processing setup complete');
      
    } catch (err) {
      console.error('Error setting up audio processing:', err);
      setError('Failed to setup audio processing');
    }
  }, [vadState, processAudioWithVAD, onAudioData]);

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

  // Start recording with VAD
  const startRecording = useCallback(async () => {
    try {
      if (!hasPermission) {
        const granted = await requestPermission();
        if (!granted) return;
      }

      const stream = await navigator.mediaDevices.getUserMedia({ 
        audio: {
          sampleRate: 16000,
          channelCount: 1,
          echoCancellation: true,
          noiseSuppression: true
        }
      });
      
      streamRef.current = stream;
      
      // Setup audio processing with VAD
      await setupAudioProcessing(stream);
      
      // Also setup MediaRecorder for backup/additional features
      const recorder = new MediaRecorder(stream);
      
      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          console.log('📼 MediaRecorder audio chunk:', event.data.size, 'bytes');
        }
      };

      recorder.onstart = () => {
        setIsRecording(true);
        setState('vad_detecting');
        setError(null);
        console.log('🎙️ Recording started with VAD');
      };

      recorder.onstop = () => {
        setIsRecording(false);
        setState('idle');
        setVADState('inactive');
        cleanupVAD();
        console.log('⏹️ Recording stopped');
      };

      recorder.onerror = (event) => {
        setError('Recording error occurred');
        setState('error');
        console.error('MediaRecorder error:', event);
      };

      setMediaRecorder(recorder);
      recorder.start(100); // Record in 100ms chunks for real-time processing
      
    } catch (err) {
      setError('Failed to start recording');
      setState('error');
      console.error('Start recording error:', err);
    }
  }, [hasPermission, requestPermission, setupAudioProcessing, cleanupVAD]);

  // Stop recording
  const stopRecording = useCallback(() => {
    if (mediaRecorder && isRecording) {
      mediaRecorder.stop();
      setMediaRecorder(null);
    }
    
    cleanupVAD();
    
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
  }, [mediaRecorder, isRecording, cleanupVAD]);

  // Toggle recording state
  const toggleRecording = useCallback(async () => {
    if (isRecording) {
      stopRecording();
    } else {
      await startRecording();
    }
  }, [isRecording, startRecording, stopRecording]);

  // Set audio data callback
  const setAudioDataCallback = useCallback((callback: (audioData: ArrayBuffer, isVADDetected: boolean) => void) => {
    setOnAudioData(() => callback);
  }, []);

  // Check for microphone permission on mount
  useEffect(() => {
    checkPermission();
    initializeVAD();
    
    return () => {
      cleanupVAD();
    };
  }, []); // Empty dependency array since functions are stable with useCallback

  const value: MicrophoneContextValue = {
    state,
    vadState,
    isRecording,
    hasPermission,
    error,
    startRecording,
    stopRecording,
    toggleRecording,
    requestPermission,
    onAudioData: onAudioData,
  };

  // Expose setAudioDataCallback to context consumers
  const contextValueWithCallback = {
    ...value,
    setAudioDataCallback,
  };

  return (
    <MicrophoneContext.Provider value={contextValueWithCallback as any}>
      {children}
    </MicrophoneContext.Provider>
  );
}

// Hook to use the microphone context
export function useMicrophone() {
  const context = useContext(MicrophoneContext);
  if (context === undefined) {
    throw new Error('useMicrophone must be used within a MicrophoneProvider');
  }
  return context as MicrophoneContextValue & { setAudioDataCallback: (callback: (audioData: ArrayBuffer, isVADDetected: boolean) => void) => void };
}
