'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { VideoPlayerWithControls } from './video-player-with-controls';
import { useDraggable } from '@/hooks/use-draggable';
import { useSession } from '@/hooks/use-session';
import { useWebSocketContext } from '@/context/websocket-context';
import { useActionQueue } from '@/hooks/use-action-queue';
import { useActionExecutor, VideoPlayerControl } from '@/hooks/use-action-executor';
import { useSettings } from '@/context/settings-context';

interface ChromeBrowserProps {
  videoSrc?: string;
  onUrlSubmit?: (url: string, userRequirements?: string) => void;
  className?: string;
  position: { x: number, y: number };
  onPositionChange: (position: { x: number, y: number }) => void;
  sessionConfig?: {
    startTime?: number;
    endTime?: number;
    userRequirements?: string;
  };
  onVideoTimeUpdate?: (currentTime: number) => void;
}

export const ChromeBrowser = ({ 
  videoSrc, 
  onUrlSubmit, 
  className = "", 
  position, 
  onPositionChange,
  sessionConfig,
  onVideoTimeUpdate
}: ChromeBrowserProps) => {
  const [urlInput, setUrlInput] = useState(videoSrc || "");
  const [currentUrl, setCurrentUrl] = useState(videoSrc || "");

  // Update currentUrl when videoSrc prop changes
  useEffect(() => {
    if (videoSrc) {
      setCurrentUrl(videoSrc);
      setUrlInput(videoSrc);
    }
  }, [videoSrc]);
  const [currentTime, setCurrentTime] = useState(0);
  const urlInputRef = useRef<HTMLInputElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);
  const videoPlayerRef = useRef<any>(null); // Reference to VideoPlayerWithControls

  // 添加一个 ref 来跟踪正在执行的 actions
  const executingActionsRef = useRef<Set<string>>(new Set());

  const { generalSettings } = useSettings();

  const { listeners } = useDraggable({
    initialPosition: position,
    onPositionChange,
    handleRef,
  });

  // Session management
  const {
    status: sessionCreateStatus,
    sessionId,
    error: sessionError,
    createSession,
    resetSession,
  } = useSession();

  // Message handling is now part of WebSocket context

  // WebSocket connection is now handled globally

  const {
    status: wsStatus,
    sendMessage,
    error: wsError,
    connect: connectWebSocket,
    sessionStatus,
    processingError,
    isSessionReady,
    receivedActions,
    clearReceivedActions,
    clearError,
    resetHandler,
  } = useWebSocketContext();

  // Action queue management
  const {
    actionQueue,
    currentActionIndex,
    isExecuting: isQueueExecuting,
    latestTriggerTime,
    addActions,
    clearQueue,
    resetQueue,
    getNextActions,
    removeActions,
    markActionExecuted,
    checkThreshold,
  } = useActionQueue({
    threshold: 30, // Request more actions when 30 seconds remaining
    sendMessage,
  });

  // Video player control interface
  const videoPlayerControl: VideoPlayerControl = {
    pause: () => {
      if (videoPlayerRef.current?.pause) {
        videoPlayerRef.current.pause();
      }
    },
    resume: () => {
      if (videoPlayerRef.current?.resume) {
        videoPlayerRef.current.resume();
      }
    },
    seek: (time: number) => {
      if (videoPlayerRef.current?.seek) {
        videoPlayerRef.current.seek(time);
      }
    },
    getCurrentTime: () => {
      return videoPlayerRef.current?.getCurrentTime() || 0;
    },
    getDuration: () => {
      return videoPlayerRef.current?.getDuration() || 0;
    },
    showPauseOverlay: () => {
      if (videoPlayerRef.current?.showPauseOverlay) {
        videoPlayerRef.current.showPauseOverlay();
      }
    },
    hidePauseOverlay: () => {
      if (videoPlayerRef.current?.hidePauseOverlay) {
        videoPlayerRef.current.hidePauseOverlay();
      }
    },
    showSpeakingOverlay: () => {
      if (videoPlayerRef.current?.showSpeakingOverlay) {
        videoPlayerRef.current.showSpeakingOverlay();
      }
    },
    hideSpeakingOverlay: () => {
      if (videoPlayerRef.current?.hideSpeakingOverlay) {
        videoPlayerRef.current.hideSpeakingOverlay();
      }
    },
    animateSeek: async (targetTime: number, duration?: number) => {
      if (videoPlayerRef.current?.animateSeek) {
        return videoPlayerRef.current.animateSeek(targetTime, duration);
      }
    },
    setVolume: (volume: number) => {
      if (videoPlayerRef.current?.setVolume) {
        videoPlayerRef.current.setVolume(volume);
      }
    },
    getVolume: () => {
      return videoPlayerRef.current?.getVolume() || 1;
    },
  };

  // Action executor
  const { executeActions, isExecuting: isExecutorExecuting } =
    useActionExecutor({
      videoPlayerControl,
      onActionExecuted: (action) => {
        markActionExecuted(action.id);
        // 从正在执行的集合中移除
        executingActionsRef.current.delete(action.id);
        console.log(`Action executed and marked: ${action.id}`);
      },
      onExecutionError: (error, action) => {
        console.error(`Action execution failed for ${action.id}:`, error);
        // 出错时也要从正在执行的集合中移除
        executingActionsRef.current.delete(action.id);
      },
    });

  // Handle URL submission - only trigger config modal, don't set URL yet
  const handleUrlSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (!urlInput.trim()) return;

      onUrlSubmit?.(urlInput);
    },
    [urlInput, onUrlSubmit]
  );

  // Create session when sessionConfig is updated (from VideoConfigModal)
  useEffect(() => {
    const createSessionForVideo = async () => {
      if (
        !videoSrc ||
        !sessionConfig ||
        Object.keys(sessionConfig).length === 0
      ) {
        return;
      }

      try {
        // Create session with backend
        const sessionRequest = {
          video_url: videoSrc,
          start_time: sessionConfig.startTime || 0,
          end_time: sessionConfig.endTime,
          text:
            sessionConfig.userRequirements ||
            "You are a helpful AI companion watching videos with the user.",
          character_id: "placeholder", // Default character, can be made configurable later
          user_id: "placeholder", // Default user, can be made configurable later
        };

        console.log("Creating session for URL:", videoSrc);
        const newSessionId = await createSession(sessionRequest);

        if (newSessionId) {
          console.log("Session created successfully:", newSessionId);
          // 连接 WebSocket after session is created
          setTimeout(() => {
            connectWebSocket(newSessionId);
          }, 100); // 小延迟确保后端准备就绪
        }
      } catch (error) {
        console.error("Failed to create session:", error);
      }
    };

    createSessionForVideo();
  }, [videoSrc, sessionConfig, createSession, connectWebSocket]);

  // WebSocket connection is now manually triggered after session creation

  // Handle session status changes
  useEffect(() => {
    if (sessionCreateStatus === "error" && sessionError) {
      console.error("Session creation failed:", sessionError);
      // Show user-friendly error (you can replace this with a proper UI notification)
      alert(`Failed to create session: ${sessionError.message}`);
    }
  }, [sessionCreateStatus, sessionError]);

  // Handle processing errors
  useEffect(() => {
    if (processingError) {
      console.error("Video processing error:", processingError);
      alert(`Video processing failed: ${processingError.message}`);
    }
  }, [processingError]);

  // Debug: Log session and WebSocket status changes
  useEffect(() => {
    console.log("Session states:", {
      sessionCreateStatus,
      sessionId,
      wsStatus,
      isSessionReady,
      currentUrl: currentUrl || "none",
      videoSrc: videoSrc || "none",
    });
  }, [
    sessionCreateStatus,
    sessionId,
    wsStatus,
    isSessionReady,
    currentUrl,
    videoSrc,
  ]);

  // 添加一个独立的函数来检查和执行 actions
  const checkAndExecuteActions = useCallback(
    (time: number) => {
      const actionsToExecute = getNextActions(time);
      if (actionsToExecute.length > 0) {
        // 过滤掉正在执行的 actions
        const newActionsToExecute = actionsToExecute.filter((action) => {
          if (executingActionsRef.current.has(action.id)) {
            console.log(`Action ${action.id} is already executing, skipping`);
            return false;
          }
          return true;
        });

        if (newActionsToExecute.length > 0) {
          console.log(
            `Found ${newActionsToExecute.length} actions to execute at time ${time}s`
          );

          // 立即标记这些 actions 为正在执行
          newActionsToExecute.forEach((action) => {
            executingActionsRef.current.add(action.id);
          });

          // Remove actions from queue immediately to prevent re-execution
          const actionIds = newActionsToExecute.map((action) => action.id);
          removeActions(actionIds);

          // Execute the actions
          executeActions(newActionsToExecute);
        }
      }
    },
    [getNextActions, removeActions, executeActions]
  );

  // Add received actions to queue
  useEffect(() => {
    if (receivedActions.length > 0) {
      console.log(`Adding ${receivedActions.length} actions to queue`);
      addActions(receivedActions);
      clearReceivedActions();

      checkAndExecuteActions(currentTime);
    }
  }, [
    receivedActions,
    addActions,
    clearReceivedActions,
    checkAndExecuteActions,
    currentTime,
  ]);

  // Clear queue when session resets
  useEffect(() => {
    if (sessionCreateStatus === "creating") {
      clearQueue();
      resetHandler();
    }
  }, [sessionCreateStatus, clearQueue, resetHandler]);

  // Handle current time updates for action queue management
  const handleCurrentTimeChange = useCallback(
    (time: number) => {
      setCurrentTime(time);

      // Pass the current time to parent component
      onVideoTimeUpdate?.(time);

      // Check threshold for requesting more actions
      checkThreshold(time);

      // Execute any actions that should trigger at this time
      checkAndExecuteActions(time);
    },
    [checkThreshold, checkAndExecuteActions, onVideoTimeUpdate]
  );

  const handleUrlKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleUrlSubmit(e);
    }
  };

  const isVideoUrl = (url: string) => {
    return (
      url &&
      (url.includes("youtube.com") ||
        url.includes("youtu.be") ||
        url.includes("bilibili.com") ||
        url.includes(".mp4") ||
        url.includes(".webm") ||
        url.includes(".ogg"))
    );
  };

  return (
    <div
      className={`${className} bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-200`}
      style={{
        position: "absolute",
        left: position.x,
        top: position.y,
        zIndex: 10,
      }}
      {...listeners}
    >
      {/* Chrome Browser Top Bar - Drag Handle */}
      <div
        ref={handleRef}
        className="bg-[#f1f3f4] border-b border-[#dadce0] cursor-move"
      >
        {/* Window Controls and Title Bar */}
        <div className="flex items-center justify-between px-2 py-1.5 h-9">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1.5 ml-2">
              <div className="w-3 h-3 bg-[#ff5f56] rounded-full hover:bg-[#ff6259] transition-colors"></div>
              <div className="w-3 h-3 bg-[#ffbd2e] rounded-full hover:bg-[#ffbe33] transition-colors"></div>
              <div className="w-3 h-3 bg-[#27ca3f] rounded-full hover:bg-[#29cc42] transition-colors"></div>
            </div>
          </div>
          <div className="text-[13px] text-[#5f6368] font-normal tracking-[0.25px]">
            Chrome
          </div>
          <div className="w-16"></div>
        </div>

        {/* Tab Bar - Chrome accurate styling */}
        <div className="flex items-end px-2 h-8">
          <div
            className="relative bg-white h-8 min-w-[200px] max-w-[240px] flex items-center px-4 mr-1"
            style={{
              clipPath:
                "polygon(8px 0%, calc(100% - 8px) 0%, 100% 100%, 0% 100%)",
              borderTop: "1px solid #dadce0",
              borderLeft: "1px solid #dadce0",
              borderRight: "1px solid #dadce0",
            }}
          >
            <svg
              className="w-4 h-4 text-[#5f6368] mr-2 flex-shrink-0"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            <span className="text-[13px] text-[#202124] truncate flex-1 font-normal">
              {isVideoUrl(currentUrl) ? "Video Player" : "New Tab"}
            </span>
            <button className="w-4 h-4 ml-2 rounded-full hover:bg-[#f1f3f4] flex items-center justify-center flex-shrink-0">
              <svg
                className="w-3 h-3 text-[#5f6368]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <button className="w-7 h-7 ml-1 rounded-t-md hover:bg-[#e8eaed] flex items-center justify-center">
            <svg
              className="w-4 h-4 text-[#5f6368]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button>
          <div className="flex-1"></div>
        </div>

        {/* Navigation and Address Bar */}
        <div className="px-3 pb-2">
          <div className="flex items-center space-x-1">
            {/* Navigation Buttons - Chrome accurate */}
            <div className="flex">
              <button className="w-8 h-8 rounded-full hover:bg-[#e8eaed] flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed">
                <svg
                  className="w-4 h-4 text-[#5f6368]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button className="w-8 h-8 rounded-full hover:bg-[#e8eaed] flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed">
                <svg
                  className="w-4 h-4 text-[#5f6368]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
              <button className="w-8 h-8 rounded-full hover:bg-[#e8eaed] flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-[#5f6368]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </button>
            </div>

            {/* Address Bar - Chrome accurate styling */}
            <form onSubmit={handleUrlSubmit} className="flex-1 mx-2">
              <div className="flex items-center bg-white border border-[#dadce0] rounded-full px-4 py-1.5 hover:shadow-sm focus-within:shadow-md focus-within:border-[#4285f4] transition-all h-9 group">
                <svg
                  className="w-4 h-4 text-[#34a853] mr-2 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18,8a2,2 0 0,1 2,2v8a2,2 0 0,1 -2,2H6a2,2 0 0,1 -2,-2V10a2,2 0 0,1 2,-2h1V6a5,5 0 0,1 10,0v2h1m-6,9a2,2 0 0,1 -2,-2a2,2 0 0,1 2,-2a2,2 0 0,1 2,2a2,2 0 0,1 -2,2z" />
                </svg>
                <input
                  ref={urlInputRef}
                  type="text"
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  onKeyPress={handleUrlKeyPress}
                  placeholder="Search Google or type a URL"
                  className="flex-1 outline-none text-[14px] text-[#202124] placeholder-[#5f6368] font-normal"
                />
                {isVideoUrl(urlInput) && (
                  <svg
                    className="w-4 h-4 text-[#1a73e8] ml-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m-6-8h8a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2V6a2 2 0 012-2z"
                    />
                  </svg>
                )}
              </div>
            </form>

            {/* Profile and Menu */}
            <div className="flex items-center space-x-1">
              <button className="w-8 h-8 rounded-full hover:bg-[#e8eaed] flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-[#5f6368]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </button>

              <button className="w-8 h-8 rounded-full bg-[#1a73e8] text-white flex items-center justify-center text-[12px] font-medium">
                U
              </button>
              {/* Chrome menu button */}
              <button className="w-8 h-8 rounded-full hover:bg-[#e8eaed] flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-[#5f6368]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Browser Content */}
      <div className="h-[600px] bg-white overflow-hidden">
        {isVideoUrl(currentUrl) ? (
          <VideoPlayerWithControls
            ref={videoPlayerRef}
            src={currentUrl}
            className="w-full h-full"
            isSessionReady={isSessionReady}
            onCurrentTimeChange={handleCurrentTimeChange}
          />
        ) : (
          // New Tab Page - Chrome accurate styling
          <div className="h-full bg-white flex flex-col items-center justify-center p-8">
            <div className="text-center space-y-6 w-full -mt-16">
              {/* Google Logo */}
              <div className="mb-6">
                <svg
                  className="w-64 h-20 mx-auto"
                  viewBox="0 0 272 92"
                  fill="none"
                >
                  <path
                    d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
                    fill="#EA4335"
                  />
                  <path
                    d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"
                    fill="#34A853"
                  />
                  <path d="M225 3v65h-9.5V3h9.5z" fill="#EA4335" />
                  <path
                    d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z"
                    fill="#4285F4"
                  />
                </svg>
              </div>

              {/* Search Bar */}
              <div className="w-full max-w-xl mx-auto">
                <div className="relative">
                  <div className="flex items-center bg-white border border-[#dfe1e5] rounded-full px-5 py-3 hover:shadow-md focus-within:shadow-md transition-shadow">
                    <svg
                      className="w-4 h-4 text-[#9aa0a6] mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                    <input
                      type="text"
                      placeholder="Search Google or type a URL"
                      className="flex-1 outline-none text-[16px] text-[#202124] placeholder-[#9aa0a6]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}; 