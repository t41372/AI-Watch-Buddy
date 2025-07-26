import { useState, useCallback } from 'react';
import { useSettings } from '@/context/settings-context';
import { getServiceUrl } from '@/utils/url';

export interface SessionRequest {
  video_url: string;
  start_time: number;
  end_time?: number;
  text: string;
  character_id?: string;
  user_id?: string;
}

export interface SessionResponse {
  session_id: string;
}

export interface SessionError {
  error: string;
  message: string;
}

export type SessionStatus = 'idle' | 'creating' | 'created' | 'error';

export interface UseSessionReturn {
  status: SessionStatus;
  sessionId: string | null;
  error: SessionError | null;
  createSession: (request: SessionRequest) => Promise<string | null>;
  resetSession: () => void;
}

export const useSession = (): UseSessionReturn => {
  const { generalSettings } = useSettings();
  const [status, setStatus] = useState<SessionStatus>('idle');
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [error, setError] = useState<SessionError | null>(null);

  // Create a new session with the backend
  const createSession = useCallback(async (request: SessionRequest): Promise<string | null> => {
    try {
      setStatus('creating');
      setError(null);

      console.log('Creating session with request:', request);
      console.log('Request JSON:', JSON.stringify(request, null, 2));

      const sessionUrl = getServiceUrl(generalSettings.primaryBaseUrl, generalSettings.secondaryBaseUrl, 'session');
      const response = await fetch(`${sessionUrl}/api/v1/sessions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        if (response.status === 422) {
          // Handle validation errors
          const errorData = await response.json();
          console.log('422 Error details:', errorData); // Debug log
          const sessionError: SessionError = {
            error: errorData.detail?.error || 'VALIDATION_ERROR',
            message: errorData.detail?.message || JSON.stringify(errorData)
          };
          setError(sessionError);
          setStatus('error');
          return null;
        } else {
          // Handle other HTTP errors
          const errorData = await response.text();
          console.log(`${response.status} Error:`, errorData); // Debug log
          const sessionError: SessionError = {
            error: 'HTTP_ERROR',
            message: `Server responded with status ${response.status}: ${errorData}`
          };
          setError(sessionError);
          setStatus('error');
          return null;
        }
      }

      const data: SessionResponse = await response.json();
      
      if (!data.session_id) {
        const sessionError: SessionError = {
          error: 'INVALID_RESPONSE',
          message: 'Server response missing session_id'
        };
        setError(sessionError);
        setStatus('error');
        return null;
      }

      setSessionId(data.session_id);
      setStatus('created');
      
      console.log('Session created successfully:', data.session_id);
      return data.session_id;

    } catch (err) {
      console.error('Failed to create session:', err);
      
      const sessionError: SessionError = {
        error: 'NETWORK_ERROR',
        message: err instanceof Error ? err.message : 'Network error occurred'
      };
      setError(sessionError);
      setStatus('error');
      return null;
    }
  }, [generalSettings.primaryBaseUrl, generalSettings.secondaryBaseUrl]);

  // Reset session state
  const resetSession = useCallback(() => {
    setStatus('idle');
    setSessionId(null);
    setError(null);
  }, []);

  return {
    status,
    sessionId,
    error,
    createSession,
    resetSession
  };
}; 