import { useCallback, useRef, useState } from 'react';
import { AIAction } from './use-message-handler';
import { useAudioTask } from './use-audio-task';

export interface VideoPlayerControl {
  pause: () => void;
  resume: () => void;
  seek: (time: number) => void;
  getCurrentTime: () => number;
  getDuration: () => number;
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
  
  const [isExecuting, setIsExecuting] = useState(false);

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
  }, [videoPlayerControl, onActionExecuted, onExecutionError]);

  // Execute multiple actions (typically with same trigger_time)
  const executeActions = useCallback(async (actions: AIAction[]): Promise<void> => {
    if (actions.length === 0) return;

    setIsExecuting(true);

    try {
      console.log(`Executing ${actions.length} actions in sequence`);
      
      // Execute actions in the correct order based on their priority
      // PAUSE -> SEEK -> REPLAY_SEGMENT -> SPEAK -> END_REACTION
      const sortedActions = [...actions].sort((a, b) => {
        const priorityOrder = { 'PAUSE': 0, 'SEEK': 1, 'REPLAY_SEGMENT': 2, 'SPEAK': 3, 'END_REACTION': 4 };
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

  // Individual action executors
  const executePauseAction = useCallback(async (action: AIAction): Promise<void> => {
    if (!videoPlayerControl) {
      console.warn('No video player control available for PAUSE action');
      return;
    }

    const duration = action.duration_seconds || 1.0; // Default to 1 second if not specified
    console.log(`Pausing video for ${duration}s for action: ${action.comment}`);

    videoPlayerControl.pause();

    // Wait for the specified duration, then resume
    await new Promise(resolve => setTimeout(resolve, duration * 1000));
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

    // Stop any current audio to prevent overlapping
    stopCurrentAudioAndLipSync();

    // Store the current video time and playing state
    let videoWasPlaying = false;
    let currentVideoTime = 0;
    
    // Pause video if requested
    if (shouldPauseVideo && videoPlayerControl) {
      // Check if video was playing before we pause it
      currentVideoTime = videoPlayerControl.getCurrentTime();
      // Assume video was playing if we're pausing it for speech
      videoWasPlaying = true;
      videoPlayerControl.pause();
    }

    // If audio data is available, use it for lip sync
    if (action.audio) {
      try {
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
      }
    } else {
      // No audio available, just display text
      console.log(`Text-only speech: "${action.text}"`);
      // Simulate a delay for text-only speech
      await new Promise(resolve => setTimeout(resolve, 2000));
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
  }, [addAudioTask, stopCurrentAudioAndLipSync, videoPlayerControl]);

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

    console.log(`Seeking video to ${targetTime}s (requested: ${action.target_timestamp}s)`);
    videoPlayerControl.seek(targetTime);

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

    // Seek to start of segment
    videoPlayerControl.seek(startTime);
    videoPlayerControl.resume();

    // Wait for the segment to play
    const segmentDuration = endTime - startTime;
    await new Promise(resolve => setTimeout(resolve, segmentDuration * 1000));

    // Handle post-replay behavior
    const postReplayBehavior = action.post_replay_behavior || 'RESUME_FROM_ORIGINAL';
    if (postReplayBehavior === 'RESUME_FROM_ORIGINAL') {
      console.log(`Returning to original position: ${originalTime}s`);
      videoPlayerControl.seek(originalTime);
      videoPlayerControl.resume();
    } else {
      console.log(`Staying at end of segment: ${endTime}s`);
      videoPlayerControl.seek(endTime);
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

  return {
    executeAction,
    executeActions,
    isExecuting
  };
}; 