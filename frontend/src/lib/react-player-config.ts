/**
 * React Player configuration for different video sources
 */

export interface ReactPlayerConfig {
  youtube: {
    rel?: number;
    iv_load_policy?: number;
    color?: 'red' | 'white';
    cc_load_policy?: number;
    disablekb?: number;
    enablejsapi?: number;
    fs?: number;
    hl?: string;
    origin?: string;
    playlist?: string;
    start?: number;
    end?: number;
  };
  vimeo: {
    byline?: boolean;
    portrait?: boolean;
    title?: boolean;
  };
  file: {
    attributes?: {
      crossOrigin?: string;
      preload?: string;
    };
    forceHLS?: boolean;
    forceDASH?: boolean;
  };
}

/**
 * Default configuration for react-player
 * Optimized for custom controls and multi-source support
 */
export const defaultPlayerConfig = {
  youtube: {
    rel: 0 as const,             // Don't show related videos
    iv_load_policy: 3 as const,  // Hide annotations
  },
  vimeo: {
    byline: false,      // Hide byline
    portrait: false,    // Hide portrait
    title: false,       // Hide title
  },
  file: {
    attributes: {
      crossOrigin: 'anonymous',
      preload: 'metadata',
    },
    forceHLS: false,      // Let react-player auto-detect
    forceDASH: false,     // Let react-player auto-detect
  },
};

/**
 * Supported video file formats
 */
export const supportedVideoFormats = [
  'mp4',
  'webm',
  'ogg',
  'avi',
  'mov',
  'wmv',
  'flv',
  'm4v',
  '3gp',
  'mkv',
];

/**
 * Supported video MIME types
 */
export const supportedMimeTypes = [
  'video/mp4',
  'video/webm',
  'video/ogg',
  'video/avi',
  'video/quicktime',
  'video/x-msvideo',
  'video/x-ms-wmv',
  'video/x-flv',
  'video/x-m4v',
  'video/3gpp',
  'video/x-matroska',
];

/**
 * Platform detection for video URLs
 */
export const detectVideoPlatform = (url: string): 'youtube' | 'bilibili' | 'vimeo' | 'file' | 'unknown' => {
  if (!url) return 'unknown';
  
  // YouTube patterns
  if (url.includes('youtube.com') || url.includes('youtu.be')) {
    return 'youtube';
  }
  
  // Bilibili patterns
  if (url.includes('bilibili.com') || url.includes('b23.tv')) {
    return 'bilibili';
  }
  
  // Vimeo patterns
  if (url.includes('vimeo.com')) {
    return 'vimeo';
  }
  
  // Check if it's a direct file URL
  const fileExtension = url.split('.').pop()?.toLowerCase();
  if (fileExtension && supportedVideoFormats.includes(fileExtension)) {
    return 'file';
  }
  
  return 'unknown';
};

/**
 * Validate video file format
 */
export const isValidVideoFile = (file: File): boolean => {
  const fileExtension = file.name.split('.').pop()?.toLowerCase();
  return fileExtension ? supportedVideoFormats.includes(fileExtension) : false;
};

/**
 * Validate video URL format
 */
export const isValidVideoUrl = (url: string): boolean => {
  try {
    new URL(url);
    const platform = detectVideoPlatform(url);
    return platform !== 'unknown';
  } catch {
    return false;
  }
};