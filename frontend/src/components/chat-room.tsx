'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { useChat, ChatMessage } from '@/context/chat-context';
import { useMicrophone } from '@/context/microphone-context';
import { useDraggable } from '@/hooks/use-draggable';
import { useWebSocketContext } from '@/context/websocket-context';
import { MicrophoneIcon } from '@heroicons/react/24/solid';
import { MicrophoneIcon as MicrophoneOutlineIcon } from '@heroicons/react/24/outline';

interface ChatRoomProps {
  className?: string;
  position?: { x: number; y: number };
  onPositionChange?: (position: { x: number; y: number }) => void;
  videoCurrentTime?: number;
}

// Individual message component
function MessageItem({ message }: { message: ChatMessage }) {
  const formatTime = (timestamp: number) => {
    return new Date(timestamp).toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getAvatar = (type: ChatMessage['type']) => {
    switch (type) {
      case 'ai':
        return (
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold shrink-0">
            AI
          </div>
        );
      case 'user':
        return (
          <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold shrink-0">
            U
          </div>
        );
      case 'system':
        return (
          <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-white text-xs font-bold shrink-0">
            S
          </div>
        );
      default:
        return (
          <div className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center text-white text-xs font-bold shrink-0">
            ?
          </div>
        );
    }
  };

  const getUsername = (type: ChatMessage['type']) => {
    switch (type) {
      case 'ai':
        return 'AI Companion';
      case 'user':
        return 'You';
      case 'system':
        return 'System';
      default:
        return 'Unknown';
    }
  };

  const getTextColor = (type: ChatMessage['type']) => {
    switch (type) {
      case 'ai':
        return 'text-blue-300';
      case 'user':
        return 'text-green-300';
      case 'system':
        return 'text-yellow-300';
      default:
        return 'text-gray-300';
    }
  };

  return (
    <div className="mb-3 animate-in slide-in-from-bottom duration-200 hover:bg-white/5 p-2 rounded-lg transition-colors">
      <div className="flex items-start gap-3">
        {getAvatar(message.type)}
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-2 mb-1">
            <span className={`text-sm font-medium ${getTextColor(message.type)}`}>
              {getUsername(message.type)}
            </span>
            <span className="text-xs text-gray-500">
              {formatTime(message.timestamp)}
            </span>
          </div>
          <p className="text-sm leading-relaxed break-words text-gray-200">{message.content}</p>
        </div>
      </div>
    </div>
  );
}

// Microphone button component with VAD integration
function MicrophoneButton({ 
  onVideoControl,
  videoCurrentTime 
}: { 
  onVideoControl?: (action: 'pause' | 'play') => void;
  videoCurrentTime?: number;
}) {
  const { state, isRecording, toggleRecording, error, setAudioDataCallback } = useMicrophone();
  const { sendMessage, status: wsStatus } = useWebSocketContext();
  const [isProcessingAudio, setIsProcessingAudio] = useState(false);

  // Setup audio data callback when recording starts
  useEffect(() => {
    if (isRecording) {
      console.log('🎯 Setting up audio data callback');
      
      setAudioDataCallback((audioData: ArrayBuffer) => {
        if (wsStatus === 'connected' && !isProcessingAudio) {
          console.log('🎵 Processing audio input...');
          setIsProcessingAudio(true);
          
          // Pause video when user starts speaking
          if (onVideoControl) {
            onVideoControl('pause');
            console.log('⏸️ Video paused for user input');
          }
          
          // Convert ArrayBuffer to base64 for transmission
          const uint8Array = new Uint8Array(audioData);
          
          // Validate audio data
          if (audioData.byteLength === 0) {
            console.warn('Empty audio data received, skipping...');
            setIsProcessingAudio(false);
            return;
          }
          
          const base64Audio = btoa(String.fromCharCode.apply(null, Array.from(uint8Array)));
          
          // Validate base64 audio
          if (!base64Audio || base64Audio.length === 0) {
            console.warn('Failed to generate base64 audio, skipping...');
            setIsProcessingAudio(false);
            return;
          }
          
          console.log('📼 Generated audio data:', audioData.byteLength, 'bytes,', base64Audio.length, 'base64 chars');
          
          // Create user action with audio data
          const userAction = {
            id: `user_speak_${Date.now()}`,
            action_type: 'SPEAK',
            trigger_timestamp: videoCurrentTime || 0,  // Use video current time, fallback to 0
            comment: 'User voice input',
            audio: base64Audio,
            pause_video: true,
          };

          // Send trigger-conversation message
          sendMessage({
            type: 'trigger-conversation',
            data: {
              user_action_list: [userAction],
              pending_action_list: [],
            },
          });

          console.log('📤 Sent trigger-conversation with user audio input');
          setIsProcessingAudio(false);
        }
      });
    } else {
      // Clear callback when not recording
      setAudioDataCallback(() => {});
    }
  }, [isRecording, setAudioDataCallback, wsStatus, isProcessingAudio, sendMessage, onVideoControl, videoCurrentTime]);

  const getMicStyle = () => {
    // Only 2 states: recording (green) or off (red)
    if (isRecording) {
      return 'bg-green-500 hover:bg-green-600 text-white';
    }
    
    // Microphone is off - red
    return 'bg-red-500 hover:bg-red-600 text-white';
  };

  const getMicIcon = () => {
    // Microphone is recording/active - normal microphone icon
    if (isRecording) {
      return <MicrophoneIcon className="w-4 h-4" />;
    }

    // Microphone is off - microphone with slash (classic muted microphone icon)
    return (
      <div className="relative w-4 h-4">
        <MicrophoneOutlineIcon className="w-4 h-4" />
        {/* Diagonal slash to indicate muted */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-5 h-0.5 bg-current transform rotate-45"></div>
        </div>
      </div>
    );
  };

  const getTooltipText = () => {
    if (error) return error;
    if (state === 'disabled') return 'Microphone access denied';
    if (state === 'error') return 'Microphone error';
    if (isRecording) return 'Recording - Click to stop';
    return 'Click to start recording';
  };

  return (
    <div className="relative flex items-center">
      <button
        onClick={toggleRecording}
        className={`p-2 rounded-lg transition-all duration-200 hover:scale-105 ${getMicStyle()} flex items-center justify-center`}
        title={getTooltipText()}
      >
        {getMicIcon()}
      </button>
    </div>
  );
}

export function ChatRoom({ className = '', position, onPositionChange, videoCurrentTime }: ChatRoomProps) {
  const { messages, addMessage, isVisible } = useChat();
  const [inputText, setInputText] = useState('');
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Use global WebSocket connection
  const { sendMessage: sendWebSocketMessage, status: wsStatus, error: wsError } = useWebSocketContext();

  // Draggable functionality
  const { listeners } = useDraggable({
    initialPosition: position || { x: 50, y: 100 },
    onPositionChange,
  });

  // Video control handler
  const handleVideoControl = useCallback((action: 'pause' | 'play') => {
    setIsVideoPlaying(action === 'play');
    console.log(`🎥 Video ${action}d`);
    
    // Here you would integrate with your video player
    // For example, if you have a video player component, you could call its methods
    // videoPlayerRef.current?.pause() or videoPlayerRef.current?.play()
  }, []);

  // Send trigger-conversation for text input
  const sendTextConversation = useCallback((text: string) => {
    if (!sendWebSocketMessage) return;

    // Pause video when user sends a message
    handleVideoControl('pause');

    // Create user action with text
    const userAction = {
      id: `user_text_${Date.now()}`,
      action_type: 'SPEAK',
      trigger_timestamp: videoCurrentTime || 0,  // Use video current time, fallback to 0
      comment: 'User text input',
      text: text,
      pause_video: true,
    };

    // Send trigger-conversation message
    sendWebSocketMessage({
      type: 'trigger-conversation',
      data: {
        user_action_list: [userAction],
        pending_action_list: [],
      },
    });

    console.log('📤 Sent trigger-conversation with user text input:', text);
  }, [sendWebSocketMessage, handleVideoControl, videoCurrentTime]);

  // Add webkit scrollbar styles
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .chat-scrollbar::-webkit-scrollbar {
        width: 6px;
      }
      .chat-scrollbar::-webkit-scrollbar-track {
        background: transparent;
      }
      .chat-scrollbar::-webkit-scrollbar-thumb {
        background: rgba(75, 85, 99, 0.5);
        border-radius: 3px;
      }
      .chat-scrollbar::-webkit-scrollbar-thumb:hover {
        background: rgba(75, 85, 99, 0.7);
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Handle input submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputText.trim()) {
      // Add message to local chat
      addMessage({
        type: 'user',
        content: inputText.trim(),
      });

      // Send to backend via WebSocket
      sendTextConversation(inputText.trim());
      
      setInputText('');
      inputRef.current?.focus();
    }
  };

  // Handle keyboard shortcuts
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div 
      className={`
        fixed flex flex-col
        w-80 h-96
        bg-black/70 backdrop-blur-sm
        border border-gray-600/50
        rounded-lg overflow-hidden
        shadow-2xl
        ${className}
      `}
      style={{
        left: position?.x || 50,
        top: position?.y || 100,
        zIndex: 30,
      }}
      {...listeners}
    >
      {/* Chat header */}
      <div className="flex items-center justify-between p-3 bg-black/50 border-b border-gray-600/50 cursor-move">
        <h3 className="text-white font-medium text-sm">Chat</h3>
        <div className="flex items-center gap-3">
          {/* WebSocket Status */}
          <div className="flex items-center gap-1">
            <div className={`w-2 h-2 rounded-full ${
              wsStatus === 'connected' ? 'bg-green-400' : 
              wsStatus === 'connecting' ? 'bg-yellow-400' : 
              wsStatus === 'error' ? 'bg-red-400' : 'bg-gray-500'
            }`} />
            <span className="text-xs text-gray-400 capitalize">{wsStatus}</span>
          </div>
          {/* Message Count */}
          <div className="flex items-center gap-1">
            <span className="text-xs text-gray-400">{messages.length} msgs</span>
          </div>
        </div>
      </div>

      {/* Messages container */}
      <div 
        className="flex-1 overflow-y-auto px-2 py-1 chat-scrollbar"
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgba(75, 85, 99, 0.5) transparent'
        }}
      >
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-gray-500 text-sm">
            <svg className="w-12 h-12 mb-2 opacity-50" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            <p>No messages yet...</p>
            <p className="text-xs mt-1 opacity-70">Start a conversation!</p>
        
          </div>
        ) : (
          <>
            {messages.map((message) => (
              <MessageItem key={message.id} message={message} />
            ))}
            <div ref={messagesEndRef} />
          </>
        )}
      </div>

      {/* Input area */}
      <div className="p-3 bg-black/50 border-t border-gray-600/50">
        <form onSubmit={handleSubmit} className="flex gap-2 items-center">
          <input
            ref={inputRef}
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message..."
            className="flex-1 px-3 py-2 bg-gray-800/80 border border-gray-600/50 rounded-lg text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent"
            maxLength={500}
          />
          <MicrophoneButton onVideoControl={handleVideoControl} videoCurrentTime={videoCurrentTime} />
        </form>
        
        {/* Character count */}
        {inputText.length > 400 && (
          <div className="text-xs text-gray-400 mt-1 text-right">
            {inputText.length}/500
          </div>
        )}
      </div>
    </div>
  );
}
