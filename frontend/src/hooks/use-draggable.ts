'use client';

import { useState, useCallback, useRef, RefObject } from 'react';

interface Position {
  x: number;
  y: number;
}

interface UseDraggableProps {
  initialPosition?: Position;
  onPositionChange?: (position: Position) => void;
  handleRef?: RefObject<HTMLElement>;
}

export const useDraggable = ({ 
  initialPosition = { x: 0, y: 0 },
  onPositionChange,
  handleRef
}: UseDraggableProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const positionRef = useRef<Position>(initialPosition);
  const dragStartRef = useRef<Position>({ x: 0, y: 0 });

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    const target = e.target as HTMLElement;

    // Do not interfere with clicks on interactive elements like inputs or buttons
    if (
      target.tagName === "INPUT" ||
      target.tagName === "TEXTAREA" ||
      target.tagName === "BUTTON" ||
      target.isContentEditable
    ) {
      return;
    }

    setIsDragging(true);
    dragStartRef.current = {
      x: e.clientX - positionRef.current.x,
      y: e.clientY - positionRef.current.y,
    };
    // Prevent text selection while dragging
    e.preventDefault();
    e.stopPropagation();
  }, []);


  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging) return;

    const newX = e.clientX - dragStartRef.current.x;
    const newY = e.clientY - dragStartRef.current.y;
    
    positionRef.current = { x: newX, y: newY };

    if (onPositionChange) {
      onPositionChange({ x: newX, y: newY });
    }
  }, [isDragging, onPositionChange]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  return {
    isDragging,
    listeners: {
      onMouseDown: handleMouseDown,
      onMouseMove: handleMouseMove,
      onMouseUp: handleMouseUp,
      onMouseLeave: handleMouseUp, // Also stop dragging if mouse leaves the element
    },
  };
}; 