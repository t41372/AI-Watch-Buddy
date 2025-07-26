'use client';

import {
  createContext, useContext, useState, useMemo,
} from 'react';
import { getLive2DModelUrl } from '@/utils/url';

/**
 * Model emotion mapping interface
 * @interface EmotionMap
 */
interface EmotionMap {
  [key: string]: number | string;
}

/**
 * Tap motion mapping interface
 * @interface TapMotionMap
 */
interface TapMotionMap {
  [key: string]: string[];
}

/**
 * Live2D model information interface
 * @interface ModelInfo
 */
export interface ModelInfo {
  /** Model name */
  name?: string;

  /** Model description */
  description?: string;

  /** Model URL */
  url: string;

  /** Scale factor */
  kScale: number;

  /** Initial X position shift */
  initialXshift: number;

  /** Initial Y position shift */
  initialYshift: number;

  /** Idle motion group name */
  idleMotionGroupName?: string;

  /** Default emotion */
  defaultEmotion?: number | string;

  /** Emotion mapping configuration */
  emotionMap: EmotionMap;

  /** Enable pointer interactivity */
  pointerInteractive?: boolean;

  /** Tap motion mapping configuration */
  tapMotions?: TapMotionMap;

  /** Enable scroll to resize */
  scrollToResize?: boolean;

  /** Initial scale */
  initialScale?: number;
}

/**
 * Live2D configuration context state interface
 * @interface Live2DConfigState
 */
interface Live2DConfigState {
  modelInfo?: ModelInfo;
  setModelInfo: (info: ModelInfo | undefined) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

/**
 * Default model configuration with specified URL
 * Optimized for right-side companion area display
 */
const getDefaultModelInfo = (): ModelInfo => ({
  name: "Elaina",
  description: "Default Live2D model - AI Companion",
  url: "https://pub-20f685e618af45a494e0d028f2f68055.r2.dev/elaina/LSS.model3.json",
  kScale: 0.8, // Slightly smaller for companion area
  initialXshift: 20, // Shift slightly right to center in right panel
  initialYshift: -50, // Shift up to account for chat interface at bottom
  idleMotionGroupName: "Idle",
  defaultEmotion: 0,
  emotionMap: {
    neutral: 0,
    coldness: 1,
    disgust: 1,
    sad: 2,
    worry: 2,
    confusion: 3,
    anger: 4,
    surprise: 5,
    expectation: 5,
    joy: 6,
    excitement: 7,
    pride: 8,
    shy: 9,
    stunned: 10,
    embarrassed: 11,
    play_cool: 12,
    drink_tea: 13,
  },
  pointerInteractive: true,
  scrollToResize: true,
  initialScale: 0.8, // Consistent with kScale
});

/**
 * Default values and constants
 */
const DEFAULT_CONFIG = {
  modelInfo: getDefaultModelInfo(),
  isLoading: false,
};

/**
 * Create the Live2D configuration context
 */
export const Live2DConfigContext = createContext<Live2DConfigState | null>(null);

/**
 * Live2D Configuration Provider Component
 * @param {Object} props - Provider props
 * @param {React.ReactNode} props.children - Child components
 */
export function Live2DConfigProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(DEFAULT_CONFIG.isLoading);
  const [modelInfo, setModelInfoState] = useState<ModelInfo | undefined>(DEFAULT_CONFIG.modelInfo);

  const setModelInfo = (info: ModelInfo | undefined) => {
    if (!info?.url) {
      setModelInfoState(undefined); // Clear state if no URL
      return;
    }

    // Always use the scale defined in the incoming info object (from config)
    const finalScale = Number(info.kScale || 0.5) * 2; // Use default scale if kScale is missing
    console.log("Setting model info with default scale:", finalScale);

    setModelInfoState({
      ...info,
      kScale: finalScale,
      // Preserve other potentially user-modified settings if needed, otherwise use defaults from info
      pointerInteractive:
        "pointerInteractive" in info
          ? info.pointerInteractive
          : (modelInfo?.pointerInteractive ?? true),
      scrollToResize:
        "scrollToResize" in info
          ? info.scrollToResize
          : (modelInfo?.scrollToResize ?? true),
    });
  };

  const contextValue = useMemo(
    () => ({
      modelInfo,
      setModelInfo,
      isLoading,
      setIsLoading,
    }),
    [modelInfo, isLoading, setIsLoading],
  );

  return (
    <Live2DConfigContext.Provider value={contextValue}>
      {children}
    </Live2DConfigContext.Provider>
  );
}

/**
 * Custom hook to use the Live2D configuration context
 * @throws {Error} If used outside of Live2DConfigProvider
 */
export function useLive2DConfig() {
  const context = useContext(Live2DConfigContext);

  if (!context) {
    throw new Error('useLive2DConfig must be used within a Live2DConfigProvider');
  }

  return context;
}
