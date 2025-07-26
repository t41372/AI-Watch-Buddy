'use client';

import { useState, useEffect, useRef, useCallback, ReactNode, useMemo } from 'react';
import { useChat } from '@/context/chat-context';
import { useLive2DExpression } from '@/hooks/use-live2d-expression';
import { useSettings } from '@/context/settings-context';
import { 
  WebSocketContext, 
  WebSocketStatus, 
  WebSocketMessage, 
  SessionStatus, 
  AIAction, 
  ProcessingError 
} from '@/context/websocket-context';

interface WebSocketHandlerProps {
  children: ReactNode;
  url?: string;
}

export function WebSocketHandler({ children, url }: WebSocketHandlerProps) {
  const { generalSettings } = useSettings();
  // WebSocket 连接状态
  const [status, setStatus] = useState<WebSocketStatus>('disconnected');
  const [error, setError] = useState<string | null>(null);
  
  // Session 状态
  const [sessionStatus, setSessionStatus] = useState<SessionStatus>('idle');
  const [processingError, setProcessingError] = useState<ProcessingError | null>(null);
  
  // AI Actions
  const [receivedActions, setReceivedActions] = useState<AIAction[]>([]);
  
  const wsRef = useRef<WebSocket | null>(null);
  const reconnectTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const reconnectAttemptsRef = useRef(0);
  const currentSessionIdRef = useRef<string | null>(null);
  
  const { addMessage } = useChat();
  const { setExpression } = useLive2DExpression();

  // Control methods
  const clearReceivedActions = useCallback(() => {
    setReceivedActions([]);
  }, []);

  const clearError = useCallback(() => {
    setProcessingError(null);
    if (sessionStatus === 'error') {
      setSessionStatus('idle');
    }
  }, [sessionStatus]);

  const resetHandler = useCallback(() => {
    setSessionStatus('idle');
    setProcessingError(null);
    setReceivedActions([]);
  }, []);

  // Computed values
  const isSessionReady = sessionStatus === 'ready';

  // Helper function to validate single action data
  const isValidSingleAction = useCallback((actionData: any): boolean => {
    return (
      actionData &&
      typeof actionData.action_type === 'string' &&
      ['SPEAK', 'PAUSE', 'SEEK', 'REPLAY_SEGMENT', 'END_REACTION', 'EXPRESSION'].includes(actionData.action_type) &&
      typeof actionData.id === 'string' &&
      typeof actionData.trigger_timestamp === 'number' &&
      typeof actionData.comment === 'string'
    );
  }, []);

  // 处理 WebSocket 消息 - 完整的 message handler 逻辑
  const handleMessage = useCallback((event: MessageEvent) => {
    try {
      const message: WebSocketMessage = JSON.parse(event.data);
      console.log('📨 Received WebSocket message:', message);

      switch (message.type) {
        case 'session_ready':
          console.log('✅ Session is ready! Setting status to ready');
          setSessionStatus('ready');
          setProcessingError(null);
          addMessage({
            type: 'system',
            content: 'Session ready! You can start chatting.',
          });
          break;

        case 'processing_error':
          console.error('Processing error received:', message);
          console.error('Full error details:', JSON.stringify(message, null, 2));
          const error: ProcessingError = {
            error_code: message.error_code || 'UNKNOWN_ERROR',
            message: message.message || 'An unknown error occurred'
          };
          setProcessingError(error);
          setSessionStatus('error');
          addMessage({
            type: 'system',
            content: `Processing Error: ${error.message}`,
          });
          break;

        case 'ai_action':
          console.log('Received AI action message:', message);
          if (message.action && isValidSingleAction(message.action)) {
            const actionData = message.action;
            const action: AIAction = {
              action_type: actionData.action_type,
              id: actionData.id,
              trigger_timestamp: actionData.trigger_timestamp,
              comment: actionData.comment,
              text: actionData.text,
              audio: actionData.audio,
              pause_video: actionData.pause_video,
              duration_seconds: actionData.duration_seconds,
              target_timestamp: actionData.target_timestamp,
              post_seek_behavior: actionData.post_seek_behavior,
              start_timestamp: actionData.start_timestamp,
              end_timestamp: actionData.end_timestamp,
              post_replay_behavior: actionData.post_replay_behavior,
              emotion_expressions: actionData.emotion_expressions
            };

            setReceivedActions(prev => {
              // Check if action with same ID already exists
              const existingActionIndex = prev.findIndex(existingAction => existingAction.id === action.id);
              
              if (existingActionIndex !== -1) {
                console.log(`Action with ID ${action.id} already exists, skipping duplicate`);
                return prev; // Don't add duplicate
              }
              
              // Insert action in the correct position based on trigger_timestamp
              const newActions = [...prev, action];
              return newActions.sort((a, b) => a.trigger_timestamp - b.trigger_timestamp);
            });

            // Only trigger immediate handling for non-SPEAK actions
            if (action.action_type !== 'SPEAK') {
              handleAIAction(action);
            }
          } else {
            console.warn('Received invalid ai_action message:', message);
          }
          break;

        case 'error':
          console.error('❌ Server error:', message);
          setError(message.message || 'Server error occurred');
          addMessage({
            type: 'system',
            content: `Server Error: ${message.message || 'Unknown server error'}`,
          });
          break;

        case 'audio_received':
          console.log('✅ Audio processing acknowledged by server');
          break;

        default:
          console.log('Unhandled message type:', message.type);
          break;
      }
    } catch (err) {
      console.error('Failed to parse WebSocket message:', event.data, err);
      setError('Invalid message format received');
    }
  }, [addMessage, isValidSingleAction]);

  // 处理 AI 动作 - 只处理即时执行的动作，不包括SPEAK
  const handleAIAction = useCallback((action: AIAction) => {
    switch (action.action_type) {
      case 'EXPRESSION':
        if (action.emotion_expressions) {
          const lappAdapter = (window as any).getLAppAdapter?.();
          if (lappAdapter) {
            setExpression(
              action.emotion_expressions,
              lappAdapter,
              `Set expression to: ${action.emotion_expressions}`
            );
          }
        }
        break;

      case 'PAUSE':
        console.log(`⏸️ AI pausing for ${action.duration_seconds}s`);
        break;

      case 'SEEK':
        console.log(`⏩ AI seeking to ${action.target_timestamp}s`);
        break;

      case 'REPLAY_SEGMENT':
        console.log(`🔄 AI replaying segment ${action.start_timestamp}s - ${action.end_timestamp}s`);
        break;

      case 'END_REACTION':
        console.log('🏁 AI ended reaction');
        break;

      default:
        console.warn('⚠️ Unknown AI action type:', action.action_type);
        break;
    }
  }, [setExpression]);

  // 发送消息
  const sendMessage = useCallback((message: WebSocketMessage) => {
    if (wsRef.current?.readyState === WebSocket.OPEN) {
      try {
        wsRef.current.send(JSON.stringify(message));
        console.log('📤 Sent WebSocket message:', message);
      } catch (err) {
        console.error('Failed to send WebSocket message:', err);
        setError('Failed to send message');
      }
    } else {
      console.warn('WebSocket is not connected. Cannot send message:', message);
      setError('WebSocket not connected');
    }
  }, []);

  // 连接 WebSocket
  const connect = useCallback((sessionId: string) => {
    const baseWsUrl = url || generalSettings.websocketBaseUrl;
    const wsUrl = `${baseWsUrl}/${sessionId}`;
    
    if (!sessionId || wsRef.current?.readyState === WebSocket.OPEN) {
      return; // No sessionId or already connected
    }

    // 保存 sessionId 用于重连
    currentSessionIdRef.current = sessionId;

    try {
      setError(null);
      setStatus('connecting');
      
      console.log('🔗 Connecting to WebSocket:', wsUrl);
      wsRef.current = new WebSocket(wsUrl);

      wsRef.current.onopen = () => {
        console.log('🔗 WebSocket connected to:', wsUrl);
        setStatus('connected');
        reconnectAttemptsRef.current = 0;
      };

      wsRef.current.onmessage = handleMessage;

      wsRef.current.onclose = (event) => {
        console.log('❌ WebSocket disconnected:', event.code, event.reason);
        setStatus('disconnected');
        
        // Auto-reconnect with exponential backoff
        if (reconnectAttemptsRef.current < 5) {
          reconnectAttemptsRef.current++;
          const delay = Math.min(1000 * Math.pow(2, reconnectAttemptsRef.current), 30000);
          console.log(`🔄 Attempting to reconnect in ${delay}ms (attempt ${reconnectAttemptsRef.current}/5)`);
          
          reconnectTimeoutRef.current = setTimeout(() => {
            if (currentSessionIdRef.current) {
              connect(currentSessionIdRef.current);
            }
          }, delay);
        } else {
          setError('Connection lost. Max reconnection attempts reached.');
        }
      };

      wsRef.current.onerror = (event) => {
        console.error('🚨 WebSocket error:', event);
        setStatus('error');
        setError('Connection error occurred');
      };

    } catch (err) {
      console.error('Failed to create WebSocket connection:', err);
      setStatus('error');
      setError('Failed to create connection');
    }
  }, [url, generalSettings.websocketBaseUrl, handleMessage]);

  // 断开连接
  const disconnect = useCallback(() => {
    if (reconnectTimeoutRef.current) {
      clearTimeout(reconnectTimeoutRef.current);
      reconnectTimeoutRef.current = null;
    }

    if (wsRef.current) {
      wsRef.current.close();
      wsRef.current = null;
    }
    
    setStatus('disconnected');
    setSessionStatus('idle');
    setProcessingError(null);
    setReceivedActions([]);
    reconnectAttemptsRef.current = 0;
  }, []);

  // Debug: Log session status changes
  useEffect(() => {
    console.log('📊 Message handler session status changed:', sessionStatus, 'isReady:', isSessionReady);
  }, [sessionStatus, isSessionReady]);

  useEffect(() => {
    return () => {
      disconnect();
    };
  }, []);

  // Context value
  const contextValue = useMemo(() => ({
    // WebSocket 连接状态
    status,
    sendMessage,
    error,
    connect,
    disconnect,

    // Session 状态
    sessionStatus,
    processingError,
    isSessionReady,

    // AI Actions
    receivedActions,
    clearReceivedActions,

    // Control methods
    clearError,
    resetHandler,
  }), [
    status, 
    sendMessage, 
    error, 
    connect, 
    disconnect,
    sessionStatus,
    processingError,
    isSessionReady,
    receivedActions,
    clearReceivedActions,
    clearError,
    resetHandler
  ]);

  return (
    <WebSocketContext.Provider value={contextValue}>
      {children}
    </WebSocketContext.Provider>
  );
} 