/**
 * TypeScript type definitions for video player functionality
 */

import ReactPlayer from 'react-player';

/**
 * Video progress information from react-player
 */
export interface VideoProgress {
  /** Fraction of the video that has been played (0-1) */
  played: number;
  /** Seconds of the video that have been played */
  playedSeconds: number;
  /** Fraction of the video that has been loaded (0-1) */
  loaded: number;
  /** Seconds of the video that have been loaded */
  loadedSeconds: number;
}

/**
 * Video duration information
 */
export interface VideoDuration {
  /** Total duration in seconds */
  duration: number;
}

/**
 * Video player state
 */
export interface VideoPlayerState {
  /** Current video URL */
  url: string | null;
  /** Whether video is currently playing */
  isPlaying: boolean;
  /** Whether video is loading */
  isLoading: boolean;
  /** Current playback time in seconds */
  currentTime: number;
  /** Total video duration in seconds */
  duration: number;
  /** Current volume (0-1) */
  volume: number;
  /** Current playback rate */
  playbackRate: number;
  /** Whether video is muted */
  muted: boolean;
  /** Current error if any */
  error: string | null;
}

/**
 * Video processing options for upload
 */
export interface VideoProcessingOptions {
  /** Start time in seconds */
  startTime?: number;
  /** End time in seconds */
  endTime?: number;
  /** Target FPS for processing */
  fps?: number;
  /** User requirements and instructions */
  userRequirements?: string;
  /** Additional files uploaded with video */
  additionalFiles?: File[];
}

/**
 * Video source information
 */
export interface VideoSource {
  /** Source type */
  type: 'file' | 'url';
  /** File object if type is 'file' */
  file?: File;
  /** URL string if type is 'url' */
  url?: string;
  /** Detected platform for URL sources */
  platform?: 'youtube' | 'bilibili' | 'vimeo' | 'file' | 'unknown';
}

/**
 * Video upload form state
 */
export interface VideoUploadState {
  /** Video source information */
  videoSource: VideoSource;
  /** Processing options */
  processingOptions: VideoProcessingOptions;
  /** Whether form is currently processing */
  isProcessing: boolean;
  /** Video preview information */
  preview?: {
    /** Thumbnail URL */
    thumbnail: string;
    /** Video duration in seconds */
    duration: number;
    /** Video title if available */
    title?: string;
  };
}

/**
 * React Player ref type for instance methods
 */
export type ReactPlayerRef = typeof ReactPlayer;

/**
 * Video player error types
 */
export interface VideoError {
  /** Error code */
  code: 'NETWORK_ERROR' | 'FORMAT_UNSUPPORTED' | 'DECODE_ERROR' | 'SRC_NOT_SUPPORTED' | 'UNKNOWN_ERROR';
  /** Human-readable error message */
  message: string;
  /** Whether the error is recoverable */
  recoverable: boolean;
  /** Original error object if available */
  originalError?: Error;
}

/**
 * Video player event handlers
 */
export interface VideoPlayerEventHandlers {
  /** Called when video is ready to play */
  onReady?: () => void;
  /** Called when video starts playing */
  onStart?: () => void;
  /** Called when play state changes */
  onPlay?: () => void;
  /** Called when video is paused */
  onPause?: () => void;
  /** Called on progress updates */
  onProgress?: (progress: VideoProgress) => void;
  /** Called when duration is available */
  onDuration?: (duration: number) => void;
  /** Called when video ends */
  onEnded?: () => void;
  /** Called when an error occurs */
  onError?: (error: VideoError) => void;
  /** Called when seeking starts */
  onSeeking?: () => void;
  /** Called when seeking ends */
  onSeeked?: () => void;
}

/**
 * Video player control methods
 */
export interface VideoPlayerControls {
  /** Play the video */
  play: () => void;
  /** Pause the video */
  pause: () => void;
  /** Seek to specific time in seconds */
  seekTo: (seconds: number) => void;
  /** Set volume (0-1) */
  setVolume: (volume: number) => void;
  /** Set playback rate */
  setPlaybackRate: (rate: number) => void;
  /** Toggle mute */
  toggleMute: () => void;
  /** Get current time */
  getCurrentTime: () => number;
  /** Get duration */
  getDuration: () => number;
}