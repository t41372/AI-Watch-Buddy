'use client';

/* eslint-disable func-names */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useRef, useCallback } from 'react';
import { useLive2DExpression } from '@/hooks/use-live2d-expression';
import * as LAppDefine from '@cubismsdksamples/lappdefine';

// Simple type alias for Live2D model
type Live2DModel = any;

interface AudioTaskOptions {
  audioBase64: string
  volumes: number[]
  sliceLength: number
  expressions?: string[] | number[] | null
}

/**
 * Custom hook for handling audio playback tasks with Live2D lip sync
 */
export const useAudioTask = () => {
  const { setExpression } = useLive2DExpression();

  // Track current audio and model
  const currentAudioRef = useRef<HTMLAudioElement | null>(null);
  const currentModelRef = useRef<Live2DModel | null>(null);

  /**
   * Stop current audio playback and lip sync
   */
  const stopCurrentAudioAndLipSync = useCallback(() => {
    if (currentAudioRef.current) {
      console.log('Stopping current audio and lip sync');
      const audio = currentAudioRef.current;
      audio.pause();
      audio.src = '';
      audio.load();

      const model = currentModelRef.current;
      if (model && model._wavFileHandler) {
        try {
          // Release PCM data to stop lip sync calculation in update()
          model._wavFileHandler.releasePcmData();
          console.log('Called _wavFileHandler.releasePcmData()');

          // Additional reset of state variables as fallback
          model._wavFileHandler._lastRms = 0.0;
          model._wavFileHandler._sampleOffset = 0;
          model._wavFileHandler._userTimeSeconds = 0.0;
          console.log('Also reset _lastRms, _sampleOffset, _userTimeSeconds as fallback');
        } catch (e) {
          console.error('Error stopping/resetting wavFileHandler:', e);
        }
      } else if (model) {
        console.warn('Current model does not have _wavFileHandler to stop/reset.');
      } else {
        console.log('No associated model found to stop lip sync.');
      }

      currentAudioRef.current = null;
      currentModelRef.current = null;
    } else {
      console.log('No current audio playing to stop.');
    }
  }, []);

  /**
   * Handle audio playback with Live2D lip sync
   */
  const handleAudioPlayback = (options: AudioTaskOptions): Promise<void> => new Promise((resolve) => {
    const { audioBase64, expressions } = options;

    try {
      // Check if audioBase64 is valid before proceeding
      if (!audioBase64 || audioBase64.trim() === '' || audioBase64.trim().length < 10) {
        console.log(`No valid audio data provided (${audioBase64?.length || 0} chars), skipping audio playback`);
        resolve();
        return;
      }

      // Validate base64 string format
      const base64Pattern = /^[A-Za-z0-9+/]*={0,2}$/;
      if (!base64Pattern.test(audioBase64.trim())) {
        console.error('Invalid base64 audio data format');
        resolve();
        return;
      }

      stopCurrentAudioAndLipSync();

      // Process audio if available
      if (audioBase64) {
        // Change the MIME type to audio/wav
        const audioDataUrl = `data:audio/wav;base64,${audioBase64}`;
        
        // Validate the data URL
        if (!audioDataUrl || audioDataUrl === 'data:audio/wav;base64,') {
          console.error('Invalid audio data URL generated');
          resolve();
          return;
        }

        // Get Live2D manager and model
        const live2dManager = (window as any).getLive2DManager?.();
        if (!live2dManager) {
          console.error('Live2D manager not found');
          resolve();
          return;
        }

        const model = live2dManager.getModel(0);
        if (!model) {
          console.error('Live2D model not found at index 0');
          resolve();
          return;
        }
        console.log('Found model for audio playback');
        currentModelRef.current = model;

        if (!model._wavFileHandler) {
          console.warn('Model does not have _wavFileHandler for lip sync');
        } else {
          console.log('Model has _wavFileHandler available');
        }

        // Set expression if available
        const lappAdapter = (window as any).getLAppAdapter?.();
        if (lappAdapter && expressions?.[0] !== undefined) {
          setExpression(
            expressions[0],
            lappAdapter,
            `Set expression to: ${expressions[0]}`,
          );
        }

        // Start talk motion
        if (LAppDefine && LAppDefine.PriorityNormal) {
          console.log("Starting random 'Talk' motion");
          model.startRandomMotion(
            "Talk",
            LAppDefine.PriorityNormal,
          );
        } else {
          console.warn("LAppDefine.PriorityNormal not found - cannot start talk motion");
        }

        // Setup audio element
        const audio = new Audio();
        currentAudioRef.current = audio;
        let isFinished = false;
        let isCleanedUp = false;

        const cleanup = () => {
          if (isCleanedUp) return; // 防止重复清理
          isCleanedUp = true;

          console.log('Cleaning up audio playback');
          
          // 只清理当前正在播放的音频
          if (currentAudioRef.current === audio) {
            currentAudioRef.current = null;
            currentModelRef.current = null;
          }
          
          if (!isFinished) {
            isFinished = true;
            resolve();
          }
        };

        // Enhance lip sync sensitivity
        const lipSyncScale = 2.0;

        audio.addEventListener('canplaythrough', () => {
          // Check for interruption before playback
          if (currentAudioRef.current !== audio || isCleanedUp) {
            console.warn('Audio playback cancelled due to new audio or cleanup');
            cleanup();
            return;
          }

          console.log('Starting audio playback with lip sync');
          audio.play().catch((err) => {
            console.error("Audio play error:", err);
            cleanup();
          });

          // Setup lip sync
          if (model._wavFileHandler && !isCleanedUp) {
            if (!model._wavFileHandler._initialized) {
              console.log('Applying enhanced lip sync');
              model._wavFileHandler._initialized = true;

              const originalUpdate = model._wavFileHandler.update.bind(model._wavFileHandler);
              model._wavFileHandler.update = function (deltaTimeSeconds: number) {
                const result = originalUpdate(deltaTimeSeconds);
                // @ts-ignore
                this._lastRms = Math.min(2.0, this._lastRms * lipSyncScale);
                return result;
              };
            }

            if (currentAudioRef.current === audio && !isCleanedUp) {
              model._wavFileHandler.start(audioDataUrl);
            } else {
              console.warn('WavFileHandler start skipped - audio was stopped or cleaned up');
            }
          }
        });

        audio.addEventListener('ended', () => {
          if (!isCleanedUp) {
            console.log("Audio playback completed");
            cleanup();
          }
        });

        audio.addEventListener('error', (error) => {
          // 只处理当前活跃音频的错误，忽略已经清理的音频错误
          if (currentAudioRef.current !== audio || isCleanedUp) {
            console.log('Ignoring error from stopped/cleaned audio');
            return;
          }

          console.error("Audio playback error:", error);
          // Add more detailed error information
          const audioElement = error.target as HTMLAudioElement;
          console.error("Audio error code:", audioElement.error?.code);
          console.error("Audio error message:", audioElement.error?.message);
          console.error("Audio src:", audioElement.src?.substring(0, 50) + '...');
          console.error("Audio readyState:", audioElement.readyState);
          console.error("Audio networkState:", audioElement.networkState);
          
          // Provide user-friendly error messages
          switch (audioElement.error?.code) {
            case 1: // MEDIA_ERR_ABORTED
              console.error("Audio playback was aborted");
              break;
            case 2: // MEDIA_ERR_NETWORK
              console.error("Network error occurred while loading audio");
              break;
            case 3: // MEDIA_ERR_DECODE
              console.error("Audio decoding error - invalid format");
              break;
            case 4: // MEDIA_ERR_SRC_NOT_SUPPORTED
              console.error("Audio source not supported or empty");
              break;
            default:
              console.error("Unknown audio error");
          }
          
          cleanup();
        });

        // Set the source after adding event listeners
        // Double-check audioDataUrl before setting
        if (audioDataUrl && 
            audioDataUrl.length > 'data:audio/wav;base64,'.length && 
            audioDataUrl !== 'data:audio/wav;base64,' &&
            !audioDataUrl.endsWith('base64,')) {
          console.log('Setting audio source, data URL length:', audioDataUrl.length);
          audio.src = audioDataUrl;
          audio.load();
        } else {
          console.error('Cannot set audio source: invalid or empty audioDataUrl:', audioDataUrl?.substring(0, 50) + '...');
          cleanup();
          return;
        }
      } else {
        resolve();
      }
    } catch (error) {
      console.error('Audio playback setup error:', error);
      currentAudioRef.current = null;
      currentModelRef.current = null;
      resolve();
    }
  });

  /**
   * Add a new audio task to the queue
   */
  const addAudioTask = async (options: AudioTaskOptions) => {
    console.log(`Playing audio with expressions: ${options.expressions}`);
    await handleAudioPlayback(options);
  };

  return {
    addAudioTask,
    stopCurrentAudioAndLipSync,
  };
};
