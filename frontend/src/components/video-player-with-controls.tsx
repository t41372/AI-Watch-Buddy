'use client';

import React, { useState, useRef, useCallback, forwardRef, useImperativeHandle } from "react";
import ReactPlayer from "react-player";
import Duration from "./duration";
import { VideoPlayerState, VideoPlayerEventHandlers } from "@/types/video-player";

interface VideoPlayerWithControlsProps {
  src?: string;
  className?: string;
  isSessionReady?: boolean;
  onCurrentTimeChange?: (currentTime: number) => void;
}

export interface VideoPlayerWithControlsRef {
  pause: () => void;
  resume: () => void;
  seek: (time: number) => void;
  getCurrentTime: () => number;
  getDuration: () => number;
  showPauseOverlay: () => void;
  hidePauseOverlay: () => void;
  showSpeakingOverlay: () => void;
  hideSpeakingOverlay: () => void;
  animateSeek: (targetTime: number, duration: number) => Promise<void>;
  setVolume: (volume: number) => void;
  getVolume: () => number;
}

export const VideoPlayerWithControls = forwardRef<VideoPlayerWithControlsRef, VideoPlayerWithControlsProps>(({ 
  src, 
  className = "", 
  isSessionReady = false,
  onCurrentTimeChange 
}, ref) => {
  // Follow App.tsx exactly - playerRef should point to HTMLVideoElement
  const playerRef = useRef<HTMLVideoElement | null>(null);
  const [showPauseOverlay, setShowPauseOverlay] = useState(false);
  const [showSpeakingOverlay, setShowSpeakingOverlay] = useState(false);
  const seekAnimationRef = useRef<number | null>(null);

  // Expose control methods via ref
  useImperativeHandle(ref, () => ({
    pause: () => {
      if (playerRef.current) {
        playerRef.current.pause();
        setState((prevState) => ({ ...prevState, playing: false }));
      }
    },
    resume: () => {
      if (playerRef.current && isSessionReady) {
        playerRef.current.play();
        setState((prevState) => ({ ...prevState, playing: true }));
      }
    },
    seek: (time: number) => {
      if (playerRef.current) {
        playerRef.current.currentTime = time;
      }
    },
    getCurrentTime: () => {
      return playerRef.current?.currentTime || 0;
    },
    getDuration: () => {
      return playerRef.current?.duration || 0;
    },
    showPauseOverlay: () => {
      setShowPauseOverlay(true);
    },
    hidePauseOverlay: () => {
      setShowPauseOverlay(false);
    },
    showSpeakingOverlay: () => {
      setShowSpeakingOverlay(true);
    },
    hideSpeakingOverlay: () => {
      setShowSpeakingOverlay(false);
    },
    animateSeek: async (targetTime: number, duration: number = 1000) => {
      if (!playerRef.current) return;
      
      const startTime = playerRef.current.currentTime;
      const startTimestamp = Date.now();
      
      // Cancel any existing animation
      if (seekAnimationRef.current) {
        cancelAnimationFrame(seekAnimationRef.current);
      }
      
      return new Promise<void>((resolve) => {
        const animate = () => {
          const elapsed = Date.now() - startTimestamp;
          const progress = Math.min(elapsed / duration, 1);
          
          // Easing function for more natural movement
          const easeInOutQuad = (t: number) => 
            t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
          
          const easedProgress = easeInOutQuad(progress);
          const currentTime = startTime + (targetTime - startTime) * easedProgress;
          
          if (playerRef.current) {
            playerRef.current.currentTime = currentTime;
            
            // Also update the progress bar
            const duration = playerRef.current.duration || 0;
            if (duration > 0) {
              setState((prevState) => ({
                ...prevState,
                played: currentTime / duration,
                playedSeconds: currentTime
              }));
            }
          }
          
          if (progress < 1) {
            seekAnimationRef.current = requestAnimationFrame(animate);
          } else {
            seekAnimationRef.current = null;
            resolve();
          }
        };
        
        animate();
      });
    },
    setVolume: (volume: number) => {
      const clampedVolume = Math.max(0, Math.min(1, volume));
      setState((prevState) => ({ ...prevState, volume: clampedVolume }));
      console.log(`Video volume set to: ${clampedVolume}`);
    },
    getVolume: () => {
      return state.volume;
    }
      }), [isSessionReady]);

  const initialState = {
    src: src || undefined,
    pip: false,
    playing: false,
    controls: true,
    light: false,
    volume: 1,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false,
    seeking: false,
    loadedSeconds: 0,
    playedSeconds: 0,
  };

  type PlayerState = typeof initialState;
  const [state, setState] = useState<PlayerState>(initialState);

  // Play/pause control - disabled when session is not ready
  const handlePlayPause = () => {
    if (!isSessionReady) {
      console.log("Play/pause disabled: session not ready");
      return;
    }
    setState((prevState) => ({ ...prevState, playing: !prevState.playing }));
  };

  // Stop playback
  const handleStop = () => {
    setState((prevState) => ({ ...prevState, playing: false }));
    if (playerRef.current) {
      playerRef.current.currentTime = 0;
    }
  };

  // Volume control
  const handleVolumeChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const inputTarget = event.target as HTMLInputElement;
    setState((prevState) => ({
      ...prevState,
      volume: Number.parseFloat(inputTarget.value),
    }));
  };

  // Toggle mute
  const handleToggleMuted = () => {
    setState((prevState) => ({ ...prevState, muted: !prevState.muted }));
  };

  // Playback rate control
  const handleSetPlaybackRate = (rate: number) => {
    setState((prevState) => ({
      ...prevState,
      playbackRate: rate,
    }));
  };

  // Progress bar control - exactly like App.tsx
  const handleSeekMouseDown = () => {
    setState((prevState) => ({ ...prevState, seeking: true }));
  };

  const handleSeekChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const inputTarget = event.target as HTMLInputElement;
    setState((prevState) => ({
      ...prevState,
      played: Number.parseFloat(inputTarget.value),
    }));
  };

  const handleSeekMouseUp = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const inputTarget = event.target as HTMLInputElement;
    setState((prevState) => ({ ...prevState, seeking: false }));
    if (playerRef.current) {
      playerRef.current.currentTime =
        Number.parseFloat(inputTarget.value) * playerRef.current.duration;
    }
  };

  // Seek forward/backward buttons - using currentTime like App.tsx
  const handleSeekBy = (seconds: number) => {
    if (playerRef.current) {
      const newTime = Math.max(0, Math.min(playerRef.current.currentTime + seconds, playerRef.current.duration));
      playerRef.current.currentTime = newTime;
    }
  };

  // Event handlers - exactly like App.tsx
  const handlePlay = () => {
    console.log("onPlay");
    setState((prevState) => ({ ...prevState, playing: true }));
  };

  const handlePause = () => {
    console.log("onPause");
    setState((prevState) => ({ ...prevState, playing: false }));
  };

  const handleProgress = () => {
    const player = playerRef.current;
    // We only want to update time slider if we are not currently seeking
    if (!player || state.seeking || !player.buffered?.length) return;

    console.log("onProgress");

    setState((prevState) => ({
      ...prevState,
      loadedSeconds: player.buffered?.end(player.buffered?.length - 1),
      loaded:
        player.buffered?.end(player.buffered?.length - 1) / player.duration,
    }));
  };

  const handleTimeUpdate = () => {
    const player = playerRef.current;
    // We only want to update time slider if we are not currently seeking
    if (!player || state.seeking) return;

    console.log("onTimeUpdate", player.currentTime);

    if (!player.duration) return;

    // Notify parent component of current time changes
    onCurrentTimeChange?.(player.currentTime);

    setState((prevState) => ({
      ...prevState,
      playedSeconds: player.currentTime,
      played: player.currentTime / player.duration,
    }));
  };

  const handleEnded = () => {
    console.log("onEnded");
    setState((prevState) => ({ ...prevState, playing: prevState.loop }));
  };

  const handleDurationChange = () => {
    const player = playerRef.current;
    if (!player) return;

    console.log("onDurationChange", player.duration);
    setState((prevState) => ({ ...prevState, duration: player.duration }));
  };

  // Set player ref - exactly like App.tsx
  const setPlayerRef = useCallback((player: HTMLVideoElement) => {
    if (!player) return;
    playerRef.current = player;
    console.log(player);
  }, []);

  if (!src) {
    return (
      <div className={`${className} bg-gray-100 rounded-lg p-8 text-center`}>
        <p className="text-gray-500">No video selected</p>
      </div>
    );
  }

  return (
    <div className={`${className} bg-white rounded-lg shadow-lg overflow-hidden`}>
      {/* Video player */}
      <div className="relative bg-black" style={{ aspectRatio: "16/9" }}>
        <ReactPlayer
          ref={setPlayerRef}
          className="react-player"
          style={{ width: "100%", height: "100%", aspectRatio: "16/9" }}
          src={src}
          pip={state.pip}
          playing={state.playing && isSessionReady}
          controls={state.controls}
          light={state.light}
          loop={state.loop}
          playbackRate={state.playbackRate}
          volume={state.volume}
          muted={state.muted}
          onLoadStart={() => console.log("onLoadStart")}
          onPlay={handlePlay}
          onPause={handlePause}
          onSeeking={(e) => console.log("onSeeking", e)}
          onSeeked={(e) => console.log("onSeeked", e)}
          onEnded={handleEnded}
          onError={(e) => console.log("onError", e)}
          onTimeUpdate={handleTimeUpdate}
          onProgress={handleProgress}
          onDurationChange={handleDurationChange}
        />
        
        {/* Session not ready overlay */}
        {!isSessionReady && (
          <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center z-10">
            <div className="text-center text-white">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
              <p className="text-sm text-gray-300 mt-2">
                Connecting to AI companion...
              </p>
            </div>
          </div>
        )}

        {/* AI Pause Overlay */}
        {showPauseOverlay && (
          <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-20 transition-all duration-300">
            <div className="relative">
              {/* Pause Icon with animation */}
              <div className="bg-white bg-opacity-20 rounded-full p-8 backdrop-blur-md animate-pulse">
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                </svg>
              </div>
            </div>
          </div>
        )}

        {/* AI Speaking Overlay */}
        {showSpeakingOverlay && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-center z-20 transition-all duration-300">
            <div className="relative pb-16 w-full max-w-2xl px-8">
              {/* Speaking indicator */}
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="bg-white rounded-full p-1">
                  <svg className="w-6 h-6 text-blue-600 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
                    <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
                  </svg>
                </div>
                <div className="flex gap-1">
                  <div className="w-1 h-4 bg-white rounded-full animate-pulse" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-1 h-6 bg-white rounded-full animate-pulse" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-1 h-5 bg-white rounded-full animate-pulse" style={{ animationDelay: '300ms' }}></div>
                  <div className="w-1 h-7 bg-white rounded-full animate-pulse" style={{ animationDelay: '450ms' }}></div>
                  <div className="w-1 h-4 bg-white rounded-full animate-pulse" style={{ animationDelay: '600ms' }}></div>
                </div>
              </div>
              <p className="text-white text-center text-sm animate-fade-in">
                AI is speaking...
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

VideoPlayerWithControls.displayName = 'VideoPlayerWithControls'; 