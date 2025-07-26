import { useCallback, useRef, useState } from 'react';
import { AIAction } from '@/context/websocket-context';
import { useAudioTask } from './use-audio-task';
import { useLive2DExpression } from './use-live2d-expression';
import { useLive2DConfig } from '@/context/live2d-config-context';
import { useChat } from '@/context/chat-context';
import { useSettings } from '@/context/settings-context';

export interface VideoPlayerControl {
  pause: () => void;
  resume: () => void;
  seek: (time: number) => void;
  getCurrentTime: () => number;
  getDuration: () => number;
  showPauseOverlay: () => void;
  hidePauseOverlay: () => void;
  showSpeakingOverlay: () => void;
  hideSpeakingOverlay: () => void;
  animateSeek: (targetTime: number, duration?: number) => Promise<void>;
  setVolume: (volume: number) => void;
  getVolume: () => number;
}

export interface ActionExecutorOptions {
  videoPlayerControl?: VideoPlayerControl;
  onActionExecuted?: (action: AIAction) => void;
  onExecutionError?: (error: Error, action: AIAction) => void;
}

export interface UseActionExecutorReturn {
  executeAction: (action: AIAction) => Promise<void>;
  executeActions: (actions: AIAction[]) => Promise<void>;
  isExecuting: boolean;
}

export const useActionExecutor = (options: ActionExecutorOptions = {}): UseActionExecutorReturn => {
  const { videoPlayerControl, onActionExecuted, onExecutionError } = options;
  const { addAudioTask, stopCurrentAudioAndLipSync } = useAudioTask();
  const { setExpression } = useLive2DExpression();
  const { modelInfo } = useLive2DConfig();
  const { addMessage } = useChat();
  const { generalSettings } = useSettings();
  
  const [isExecuting, setIsExecuting] = useState(false);
  const originalVolumeRef = useRef<number>(1);

  // Individual action executors - defined first so they can be referenced
  const executeExpressionAction = useCallback(async (action: AIAction): Promise<void> => {
    if (!action.emotion_expressions) {
      console.warn('EXPRESSION action missing emotion_expressions');
      return;
    }

    console.log(`Setting Live2D expression: ${action.emotion_expressions} (${action.comment})`);

    try {
      // Get the Live2D adapter
      const lappAdapter = (window as any).getLAppAdapter?.();
      if (!lappAdapter) {
        console.error('Live2D adapter not available for expression');
        return;
      }

      // Map emotion name to expression index using emotionMap
      const emotionMap = modelInfo?.emotionMap;
      if (!emotionMap) {
        console.warn('No emotion map available in model info');
        return;
      }

      const expressionIndex = emotionMap[action.emotion_expressions];
      if (expressionIndex === undefined) {
        console.warn(`Emotion "${action.emotion_expressions}" not found in emotion map`);
        return;
      }

      // Set the expression
      setExpression(
        expressionIndex, 
        lappAdapter, 
        `Set expression to: ${action.emotion_expressions} (index: ${expressionIndex})`
      );

      console.log(`Successfully set Live2D expression: ${action.emotion_expressions}`);
    } catch (error) {
      console.error('Failed to execute expression action:', error);
    }
  }, [setExpression, modelInfo]);

  const executePauseAction = useCallback(async (action: AIAction): Promise<void> => {
    if (!videoPlayerControl) {
      console.warn('No video player control available for PAUSE action');
      return;
    }

    const duration = action.duration_seconds || 1.0; // Default to 1 second if not specified
    console.log(`Pausing video for ${duration}s for action: ${action.comment}`);

    // Show pause overlay and pause the video
    videoPlayerControl.showPauseOverlay();
    videoPlayerControl.pause();

    // Wait for the specified duration, then resume
    await new Promise(resolve => setTimeout(resolve, duration * 1000));
    
    // Hide overlay and resume
    videoPlayerControl.hidePauseOverlay();
    videoPlayerControl.resume();

    console.log(`Resumed video after ${duration}s pause`);
  }, [videoPlayerControl]);

  const executeSpeakAction = useCallback(async (action: AIAction): Promise<void> => {
    if (!action.text) {
      console.warn('SPEAK action missing text content');
      return;
    }

    const shouldPauseVideo = action.pause_video !== false; // Default to true if not specified
    console.log(`AI speaking: "${action.text}" (pause_video: ${shouldPauseVideo})`);

    // Add AI message to chat when actually speaking
    addMessage({
      type: 'ai',
      content: action.text,
    });

    // Stop any current audio to prevent overlapping
    stopCurrentAudioAndLipSync();

    // Store the current video time and playing state
    let videoWasPlaying = false;
    let currentVideoTime = 0;
    
    // Handle video volume reduction if enabled
    if (videoPlayerControl && generalSettings.reduceVideoVolumeOnSpeech) {
      originalVolumeRef.current = videoPlayerControl.getVolume();
      const reducedVolume = originalVolumeRef.current * (generalSettings.videoVolumeReductionPercent / 100);
      videoPlayerControl.setVolume(reducedVolume);
      console.log(`Reduced video volume from ${originalVolumeRef.current} to ${reducedVolume} (${generalSettings.videoVolumeReductionPercent}%)`);
    }
    
    // Show speaking overlay
    if (videoPlayerControl) {
      videoPlayerControl.showSpeakingOverlay();
    }
    
    // Pause video if requested
    if (shouldPauseVideo && videoPlayerControl) {
      // Check if video was playing before we pause it
      currentVideoTime = videoPlayerControl.getCurrentTime();
      // Assume video was playing if we're pausing it for speech
      videoWasPlaying = true;
      videoPlayerControl.pause();
    }

    // If audio data is available, use it for lip sync
    if (action.audio && action.audio.trim().length > 10) { // Ensure meaningful base64 data
      try {
        console.log(`Playing AI audio with ${action.audio.length} chars of base64 data`);
        await addAudioTask({
          audioBase64: action.audio,
          volumes: [], // Will be calculated by the audio task
          sliceLength: 0.1, // Default slice length
          expressions: null // Could be extended to support expressions
        });
        console.log('Audio playback with lip sync completed');
      } catch (error) {
        console.error('Failed to play audio with lip sync:', error);
        // Fallback: just display the text
        console.log(`Fallback text display: "${action.text}"`);
        // Simulate a delay for text-only speech
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    } else {
      // No audio available, just display text
      console.log(`Text-only speech: "${action.text}" (no audio data: ${action.audio?.length || 0} chars)`);
      // Simulate a delay for text-only speech
      await new Promise(resolve => setTimeout(resolve, 2000));
    }

    // Hide speaking overlay
    if (videoPlayerControl) {
      videoPlayerControl.hideSpeakingOverlay();
    }

    // Restore original video volume if it was reduced
    if (videoPlayerControl && generalSettings.reduceVideoVolumeOnSpeech) {
      videoPlayerControl.setVolume(originalVolumeRef.current);
      console.log(`Restored video volume to ${originalVolumeRef.current}`);
    }

    // Resume video if it was paused and was playing before
    if (shouldPauseVideo && videoPlayerControl && videoWasPlaying) {
      // Ensure we're at the right position (in case something changed)
      const expectedTime = currentVideoTime + (action.duration_seconds || 0);
      const actualTime = videoPlayerControl.getCurrentTime();
      
      // If the video time hasn't advanced as expected, seek to where it should be
      if (Math.abs(actualTime - expectedTime) > 0.1) {
        console.log(`Video time mismatch after speech. Expected: ${expectedTime}s, Actual: ${actualTime}s`);
        // Don't seek - let the video continue from where it is
      }
      
      console.log('Resuming video playback after speech');
      videoPlayerControl.resume();
    }
  }, [addAudioTask, stopCurrentAudioAndLipSync, videoPlayerControl, addMessage, generalSettings]);

  const executeSeekAction = useCallback(async (action: AIAction): Promise<void> => {
    if (!videoPlayerControl) {
      console.warn('No video player control available for SEEK action');
      return;
    }

    if (action.target_timestamp === undefined) {
      console.warn('SEEK action missing target_timestamp');
      return;
    }

    const duration = videoPlayerControl.getDuration();
    const targetTime = Math.max(0, Math.min(action.target_timestamp, duration));
    const currentTime = videoPlayerControl.getCurrentTime();
    
    // Calculate seek duration based on distance (300ms per 10 seconds, min 500ms, max 2000ms)
    const distance = Math.abs(targetTime - currentTime);
    const seekDuration = Math.max(500, Math.min(2000, distance * 30));

    console.log(`Animating seek from ${currentTime}s to ${targetTime}s over ${seekDuration}ms`);
    
    // Use animated seek instead of instant seek
    await videoPlayerControl.animateSeek(targetTime, seekDuration);

    // Handle post-seek behavior
    const postSeekBehavior = action.post_seek_behavior || 'STAY_PAUSED';
    if (postSeekBehavior === 'RESUME_PLAYBACK') {
      console.log('Resuming playback after seek');
      videoPlayerControl.resume();
    } else {
      console.log('Staying paused after seek');
    }
  }, [videoPlayerControl]);

  const executeReplaySegmentAction = useCallback(async (action: AIAction): Promise<void> => {
    if (!videoPlayerControl) {
      console.warn('No video player control available for REPLAY_SEGMENT action');
      return;
    }

    if (action.start_timestamp === undefined || action.end_timestamp === undefined) {
      console.warn('REPLAY_SEGMENT action missing start_timestamp or end_timestamp');
      return;
    }

    const duration = videoPlayerControl.getDuration();
    const startTime = Math.max(0, Math.min(action.start_timestamp, duration));
    const endTime = Math.max(startTime, Math.min(action.end_timestamp, duration));
    const originalTime = videoPlayerControl.getCurrentTime();

    console.log(`Replaying segment from ${startTime}s to ${endTime}s (original position: ${originalTime}s)`);

    // Animate seek to start of segment
    const seekDuration = Math.max(500, Math.min(1500, Math.abs(originalTime - startTime) * 30));
    await videoPlayerControl.animateSeek(startTime, seekDuration);
    videoPlayerControl.resume();

    // Wait for the segment to play
    const segmentDuration = endTime - startTime;
    await new Promise(resolve => setTimeout(resolve, segmentDuration * 1000));

    // Handle post-replay behavior
    const postReplayBehavior = action.post_replay_behavior || 'RESUME_FROM_ORIGINAL';
    if (postReplayBehavior === 'RESUME_FROM_ORIGINAL') {
      console.log(`Returning to original position: ${originalTime}s`);
      const returnDuration = Math.max(500, Math.min(1500, Math.abs(endTime - originalTime) * 30));
      await videoPlayerControl.animateSeek(originalTime, returnDuration);
      videoPlayerControl.resume();
    } else {
      console.log(`Staying at end of segment: ${endTime}s`);
      await videoPlayerControl.animateSeek(endTime, 300);
      videoPlayerControl.pause();
    }
  }, [videoPlayerControl]);

  const executeEndReactionAction = useCallback(async (action: AIAction): Promise<void> => {
    console.log(`End reaction reached: ${action.comment}`);

    // Stop any ongoing audio
    stopCurrentAudioAndLipSync();

    // Pause the video to wait for next user input or trigger
    if (videoPlayerControl) {
      videoPlayerControl.pause();
    }

    console.log('Reaction sequence ended, waiting for next trigger');
  }, [videoPlayerControl, stopCurrentAudioAndLipSync]);

  // Execute a single action
  const executeAction = useCallback(async (action: AIAction): Promise<void> => {
    console.log(`Executing action: ${action.action_type} at ${action.trigger_timestamp}s`, action);

    try {
      switch (action.action_type) {
        case 'PAUSE':
          await executePauseAction(action);
          break;

        case 'SPEAK':
          await executeSpeakAction(action);
          break;

        case 'SEEK':
          await executeSeekAction(action);
          break;

        case 'REPLAY_SEGMENT':
          await executeReplaySegmentAction(action);
          break;

        case 'END_REACTION':
          await executeEndReactionAction(action);
          break;

        case 'EXPRESSION':
          await executeExpressionAction(action);
          break;

        default:
          console.warn(`Unknown action type: ${action.action_type}`);
          break;
      }

      console.log(`Successfully executed action: ${action.id}`);
      // Mark action as executed after successful completion
      onActionExecuted?.(action);

    } catch (error) {
      console.error(`Failed to execute action ${action.id}:`, error);
      onExecutionError?.(error as Error, action);
      // Still mark as executed to prevent retry
      onActionExecuted?.(action);
    }
  }, [videoPlayerControl, onActionExecuted, onExecutionError, executeExpressionAction, executePauseAction, executeSpeakAction, executeSeekAction, executeReplaySegmentAction, executeEndReactionAction]);

  // Execute multiple actions (typically with same trigger_time)
  const executeActions = useCallback(async (actions: AIAction[]): Promise<void> => {
    if (actions.length === 0) return;

    setIsExecuting(true);

    try {
      console.log(`Executing ${actions.length} actions in sequence`);
      
      // Execute actions in the correct order based on their priority
      // EXPRESSION -> PAUSE -> SEEK -> REPLAY_SEGMENT -> SPEAK -> END_REACTION
      const sortedActions = [...actions].sort((a, b) => {
        const priorityOrder = { 'EXPRESSION': 0, 'PAUSE': 1, 'SEEK': 2, 'REPLAY_SEGMENT': 3, 'SPEAK': 4, 'END_REACTION': 5 };
        const aPriority = priorityOrder[a.action_type] ?? 99;
        const bPriority = priorityOrder[b.action_type] ?? 99;
        return aPriority - bPriority;
      });

      for (const action of sortedActions) {
        await executeAction(action);
        
        // Small delay between actions if needed
        if (sortedActions.indexOf(action) < sortedActions.length - 1) {
          await new Promise(resolve => setTimeout(resolve, 10));
        }
      }

    } finally {
      setIsExecuting(false);
    }
  }, [executeAction]);



  return {
    executeAction,
    executeActions,
    isExecuting
  };
}; 