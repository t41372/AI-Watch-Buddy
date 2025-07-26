'use client';

import { createContext, useContext, useState, useCallback, ReactNode, useEffect, useRef } from 'react';

// Microphone states
export type MicrophoneState = 'idle' | 'recording' | 'disabled' | 'error';

// Microphone context interface
interface MicrophoneContextValue {
  state: MicrophoneState;
  isRecording: boolean;
  hasPermission: boolean;
  error: string | null;
  startRecording: () => Promise<void>;
  stopRecording: () => void;
  toggleRecording: () => Promise<void>;
  requestPermission: () => Promise<boolean>;
  onAudioData?: (audioData: ArrayBuffer) => void;
}

// Create the microphone context
const MicrophoneContext = createContext<MicrophoneContextValue | undefined>(undefined);

// Provider component
export function MicrophoneProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<MicrophoneState>('idle');
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [hasPermission, setHasPermission] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
  const [onAudioData, setOnAudioData] = useState<((audioData: ArrayBuffer) => void) | undefined>();

  // Audio chunks storage
  const audioChunksRef = useRef<Blob[]>([]);

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

  // Start recording
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
      
      // Clear previous audio chunks
      audioChunksRef.current = [];
      
      // Setup MediaRecorder
      const recorder = new MediaRecorder(stream, {
        mimeType: 'audio/webm;codecs=opus'
      });
      
      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
          console.log('📼 Audio chunk recorded:', event.data.size, 'bytes');
        }
      };

      recorder.onstart = () => {
        setIsRecording(true);
        setState('recording');
        setError(null);
        console.log('🎙️ Recording started');
      };

      recorder.onstop = () => {
        setIsRecording(false);
        setState('idle');
        
        // Process recorded audio when recording stops
        if (audioChunksRef.current.length > 0) {
          const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm;codecs=opus' });
          
          // Convert to ArrayBuffer and call callback
          audioBlob.arrayBuffer().then(arrayBuffer => {
            if (onAudioData) {
              onAudioData(arrayBuffer);
              console.log('🎵 Audio data sent:', arrayBuffer.byteLength, 'bytes');
            }
          });
        }
        
        // Stop all tracks
        stream.getTracks().forEach(track => track.stop());
        console.log('⏹️ Recording stopped and data sent');
      };

      recorder.onerror = (event) => {
        setError('Recording error occurred');
        setState('error');
        stream.getTracks().forEach(track => track.stop());
        console.error('MediaRecorder error:', event);
      };

      setMediaRecorder(recorder);
      recorder.start(100); // Record in 100ms chunks
      
    } catch (err) {
      setError('Failed to start recording');
      setState('error');
      console.error('Start recording error:', err);
    }
  }, [hasPermission, requestPermission, onAudioData]);

  // Stop recording
  const stopRecording = useCallback(() => {
    if (mediaRecorder && isRecording) {
      mediaRecorder.stop();
      setMediaRecorder(null);
    }
  }, [mediaRecorder, isRecording]);

  // Toggle recording state
  const toggleRecording = useCallback(async () => {
    if (isRecording) {
      stopRecording();
    } else {
      await startRecording();
    }
  }, [isRecording, startRecording, stopRecording]);

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
  return context as MicrophoneContextValue & { setAudioDataCallback: (callback: (audioData: ArrayBuffer) => void) => void };
}
