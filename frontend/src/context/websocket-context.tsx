'use client';

import { createContext, useContext, ReactNode } from 'react';

// WebSocket 状态类型
export type WebSocketStatus = 'connecting' | 'connected' | 'disconnected' | 'error';

// Session 状态类型
export type SessionStatus = 'idle' | 'preparing' | 'ready' | 'error';

// WebSocket 消息类型
export interface WebSocketMessage {
  type: string;
  [key: string]: any;
}

// AI Action 类型
export interface AIAction {
  action_type: 'SPEAK' | 'PAUSE' | 'SEEK' | 'REPLAY_SEGMENT' | 'END_REACTION' | 'EXPRESSION';
  id: string;
  trigger_timestamp: number;
  comment: string;

  // SPEAK action fields
  text?: string;
  audio?: string;
  pause_video?: boolean;

  // PAUSE action fields
  duration_seconds?: number;

  // SEEK action fields
  target_timestamp?: number;
  post_seek_behavior?: 'RESUME_PLAYBACK' | 'STAY_PAUSED';

  // REPLAY_SEGMENT action fields
  start_timestamp?: number;
  end_timestamp?: number;
  post_replay_behavior?: 'RESUME_FROM_ORIGINAL' | 'STAY_PAUSED_AT_END';

  // EXPRESSION action fields
  emotion_expressions?: string;
}

// Processing Error 类型
export interface ProcessingError {
  error_code: string;
  message: string;
}

// WebSocket Context 接口
interface WebSocketContextValue {
  // WebSocket 连接状态
  status: WebSocketStatus;
  sendMessage: (message: WebSocketMessage) => void;
  error: string | null;
  connect: (sessionId: string) => void;
  disconnect: () => void;

  // Session 状态
  sessionStatus: SessionStatus;
  processingError: ProcessingError | null;
  isSessionReady: boolean;

  // AI Actions
  receivedActions: AIAction[];
  clearReceivedActions: () => void;

  // Control methods
  clearError: () => void;
  resetHandler: () => void;
}

// 创建 WebSocket Context
const WebSocketContext = createContext<WebSocketContextValue | undefined>(undefined);

// Hook 用于访问 WebSocket context
export function useWebSocketContext() {
  const context = useContext(WebSocketContext);
  if (context === undefined) {
    throw new Error('useWebSocketContext must be used within a WebSocketProvider');
  }
  return context;
}

export { WebSocketContext }; 