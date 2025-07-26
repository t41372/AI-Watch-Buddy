import { useState, useEffect, useCallback, useRef } from 'react';
import { AIAction } from './use-message-handler';
import { WebSocketMessage } from './use-websocket';

export interface ActionQueueOptions {
  threshold?: number; // Time threshold in seconds to request more actions
  sendMessage?: (message: WebSocketMessage) => void;
}

export interface UseActionQueueReturn {
  actionQueue: AIAction[];
  currentActionIndex: number;
  isExecuting: boolean;
  latestTriggerTime: number;
  addActions: (actions: AIAction[]) => void;
  clearQueue: () => void;
  resetQueue: () => void;
  getNextActions: (currentTime: number) => AIAction[];
  removeActions: (actionIds: string[]) => void;
  markActionExecuted: (actionId: string) => void;
  checkThreshold: (currentTime: number) => void;
}

export const useActionQueue = (options: ActionQueueOptions = {}): UseActionQueueReturn => {
  const { threshold = 30, sendMessage } = options; // Default 30 seconds threshold
  
  const [actionQueue, setActionQueue] = useState<AIAction[]>([]);
  const [executedActionIds, setExecutedActionIds] = useState<Set<string>>(new Set());
  const [isExecuting, setIsExecuting] = useState(false);
  const [hasRequestedMore, setHasRequestedMore] = useState(false);

  // Calculate current action index based on executed actions
  const currentActionIndex = actionQueue.findIndex(action => !executedActionIds.has(action.id));

  // Get latest trigger time from the queue
  const latestTriggerTime = actionQueue.length > 0
    ? Math.max(...actionQueue.map(action => action.trigger_timestamp))
    : 0;

  // Add new actions to the queue
  const addActions = useCallback((actions: AIAction[]) => {
    if (actions.length === 0) return;

    setActionQueue(prevQueue => {
      // Combine and sort all actions by trigger_timestamp
      const newQueue = [...prevQueue, ...actions];
      const sortedQueue = newQueue.sort((a, b) => {
        // Primary sort by trigger_timestamp
        if (a.trigger_timestamp !== b.trigger_timestamp) {
          return a.trigger_timestamp - b.trigger_timestamp;
        }
        // Secondary sort by action type priority for same trigger_timestamp
        // PAUSE -> SEEK -> REPLAY_SEGMENT -> SPEAK -> END_REACTION
        const priorityOrder = { 'PAUSE': 0, 'SEEK': 1, 'REPLAY_SEGMENT': 2, 'SPEAK': 3, 'END_REACTION': 4 };
        const aPriority = priorityOrder[a.action_type] ?? 99;
        const bPriority = priorityOrder[b.action_type] ?? 99;
        return aPriority - bPriority;
      });

      console.log(`Added ${actions.length} actions to queue. New queue size: ${sortedQueue.length}`);
      return sortedQueue;
    });

    // Reset the request flag when new actions arrive
    setHasRequestedMore(false);
  }, []);

  // Remove actions from queue by their IDs
  const removeActions = useCallback((actionIds: string[]) => {
    if (actionIds.length === 0) return;
    
    const idsToRemove = new Set(actionIds);
    setActionQueue(prevQueue => {
      const newQueue = prevQueue.filter(action => !idsToRemove.has(action.id));
      console.log(`Removed ${actionIds.length} actions from queue. New queue size: ${newQueue.length}`);
      return newQueue;
    });
  }, []);

  // Clear all actions from queue
  const clearQueue = useCallback(() => {
    setActionQueue([]);
    setExecutedActionIds(new Set());
    setIsExecuting(false);
    setHasRequestedMore(false);
  }, []);

  // Reset queue state but keep actions
  const resetQueue = useCallback(() => {
    setExecutedActionIds(new Set());
    setIsExecuting(false);
    setHasRequestedMore(false);
  }, []);

  // Get actions that should be executed at current time
  const getNextActions = useCallback((currentTime: number): AIAction[] => {
    // No tolerance - actions can be late but not early
    const actionsToExecute = actionQueue.filter(action => {
      const shouldExecute = !executedActionIds.has(action.id) &&
                           action.trigger_timestamp <= currentTime;
      return shouldExecute;
    });

    return actionsToExecute;
  }, [actionQueue, executedActionIds]);

  // Mark an action as executed
  const markActionExecuted = useCallback((actionId: string) => {
    setExecutedActionIds(prev => {
      const newSet = new Set(prev);
      newSet.add(actionId);
      return newSet;
    });
  }, []);

  // Threshold checking for requesting more actions
  const checkThreshold = useCallback((currentTime: number) => {
    // Don't request if we already requested or no sendMessage function
    if (hasRequestedMore || !sendMessage) {
      return;
    }

    // Check if we need more actions
    const timeUntilEnd = latestTriggerTime - currentTime;
    
    if (timeUntilEnd <= threshold && timeUntilEnd > 0) {
      console.log(`Requesting more actions: current=${currentTime}, latest=${latestTriggerTime}, threshold=${threshold}`);
      
      setHasRequestedMore(true);
      sendMessage({
        type: 'more_actions'
      });
    }
  }, [latestTriggerTime, threshold, hasRequestedMore, sendMessage]);

  return {
    actionQueue,
    currentActionIndex,
    isExecuting,
    latestTriggerTime,
    addActions,
    clearQueue,
    resetQueue,
    getNextActions,
    removeActions,
    markActionExecuted,
    checkThreshold
  };
}; 