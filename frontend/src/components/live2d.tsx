'use client';

/* eslint-disable no-shadow */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { memo, useRef } from "react";
import { useLive2DConfig } from "@/context/live2d-config-context";
import { useAudioTask } from "@/hooks/use-audio-task";
import { useLive2DModel } from "@/hooks/use-live2d-model";
import { useLive2DResize } from "@/hooks/use-live2d-resize";

export const Live2D = memo(
  () => {
    const { modelInfo } = useLive2DConfig();
    const internalContainerRef = useRef<HTMLDivElement | null>(null);

    // Get canvasRef from useLive2DResize
    const { canvasRef } = useLive2DResize({
      containerRef: internalContainerRef as any,
      modelInfo,
      showSidebar: false, // No sidebar in simplified version
    });

    // Pass canvasRef to useLive2DModel, drag functionality is handled by parent
    useLive2DModel({
      modelInfo,
      canvasRef: canvasRef as any,
    });

    // Setup audio task hook for audio playback with lip sync
    useAudioTask();

    const handleContextMenu = (e: React.MouseEvent) => {
      e.preventDefault();
      console.log("[ContextMenu] Right-click detected");
    };

    return (
      <div
        ref={internalContainerRef}
        id="live2d-internal-wrapper"
        style={{
          width: "100%",
          height: "100%",
          pointerEvents: "auto",
          overflow: "hidden",
          position: "relative",
        }}
        onContextMenu={handleContextMenu}
      >
        <canvas
          id="canvas"
          ref={canvasRef}
          style={{
            width: "100%",
            height: "100%",
            pointerEvents: "auto",
            display: "block",
          }}
        />
      </div>
    );
  },
);
