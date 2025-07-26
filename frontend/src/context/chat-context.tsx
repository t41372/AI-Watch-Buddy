'use client';

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

// Define message types for different types of chat messages
export interface ChatMessage {
  id: string;
  type: 'ai' | 'user' | 'system';
  content: string;
  timestamp: number;
  metadata?: {
    action_type?: string;
    trigger_timestamp?: number;
  };
}

// Chat context interface
interface ChatContextValue {
  messages: ChatMessage[];
  addMessage: (message: Omit<ChatMessage, 'id' | 'timestamp'>) => void;
  clearMessages: () => void;
  isVisible: boolean;
  setIsVisible: (visible: boolean) => void;
}

// Create the chat context
const ChatContext = createContext<ChatContextValue | undefined>(undefined);

// Provider component
export function ChatProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  // Add a new message to the chat
  const addMessage = useCallback((message: Omit<ChatMessage, 'id' | 'timestamp'>) => {
    const newMessage: ChatMessage = {
      ...message,
      id: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: Date.now(),
    };
    
    setMessages(prev => [...prev, newMessage]);
  }, []);

  // Clear all messages
  const clearMessages = useCallback(() => {
    setMessages([]);
  }, []);

  const value: ChatContextValue = {
    messages,
    addMessage,
    clearMessages,
    isVisible,
    setIsVisible,
  };

  return (
    <ChatContext.Provider value={value}>
      {children}
    </ChatContext.Provider>
  );
}

// Hook to use the chat context
export function useChat() {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
}
