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
      // Process audio if available
      if (audioBase64) {
        // Change the MIME type to audio/mp3 which is more widely supported
        const audioDataUrl = `data:audio/wav;base64,${audioBase64}`;

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

        const cleanup = () => {
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
          if (currentAudioRef.current !== audio) {
            console.warn('Audio playback cancelled due to new audio');
            cleanup();
            return;
          }

          console.log('Starting audio playback with lip sync');
          audio.play().catch((err) => {
            console.error("Audio play error:", err);
            cleanup();
          });

          // Setup lip sync
          if (model._wavFileHandler) {
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

            if (currentAudioRef.current === audio) {
              model._wavFileHandler.start(audioDataUrl);
            } else {
              console.warn('WavFileHandler start skipped - audio was stopped');
            }
          }
        });

        audio.addEventListener('ended', () => {
          console.log("Audio playback completed");
          cleanup();
        });

        audio.addEventListener('error', (error) => {
          console.error("Audio playback error:", error);
          // Add more detailed error information
          const audioElement = error.target as HTMLAudioElement;
          console.error("Audio error code:", audioElement.error?.code);
          console.error("Audio error message:", audioElement.error?.message);
          cleanup();
        });

        // Set the source after adding event listeners
        audio.src = audioDataUrl;
        audio.load();
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
