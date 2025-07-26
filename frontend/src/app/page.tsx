'use client';

import { useEffect, useRef, useState } from "react";
import { Live2D } from "../components/live2d";
import { ChromeBrowser } from "../components/chrome-browser";
import { VideoConfigModal } from "../components/video-config-modal";
import { SettingsModal } from "../components/settings-modal";
import { useSettings } from "@/context/settings-context";
import { LAppAdapter } from '@cubismsdksamples/lappadapter';
import { VideoProcessingOptions } from "@/types/video-player";
import { useDraggable } from "@/hooks/use-draggable";

export default function HomePage() {
  console.log('HomePage component is rendering!');
  const [browserPosition, setBrowserPosition] = useState({ x: 100, y: 100 });
  const [live2dPosition, setLive2dPosition] = useState({ x: 800, y: 150 });

  const live2dContainerRef = useRef<HTMLDivElement>(null);

  const { listeners: live2dListeners } = useDraggable({
    initialPosition: live2dPosition,
    onPositionChange: setLive2dPosition,
  });

  const [currentVideoUrl, setCurrentVideoUrl] = useState<string>('');
  const [showConfigModal, setShowConfigModal] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [pendingVideoUrl, setPendingVideoUrl] = useState<string>('');
  const [sessionConfig, setSessionConfig] = useState<{
    startTime?: number;
    endTime?: number;
    userRequirements?: string;
  }>({});
  
  const { backgroundSettings } = useSettings();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).getLAppAdapter = () => LAppAdapter.getInstance();
      
      // Check for video URL from upload page
      const uploadedVideoUrl = sessionStorage.getItem('watchingVideoUrl');
      if (uploadedVideoUrl) {
        setCurrentVideoUrl(uploadedVideoUrl);
        sessionStorage.removeItem('watchingVideoUrl'); // Clean up
      }

      // Settings are now managed by SettingsContext
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Set full screen styles for immersive experience
  useEffect(() => {
    // Store original styles
    const originalStyles = {
      documentOverflow: document.documentElement.style.overflow,
      bodyOverflow: document.body.style.overflow,
      documentHeight: document.documentElement.style.height,
      bodyHeight: document.body.style.height,
      documentPosition: document.documentElement.style.position,
      bodyPosition: document.body.style.position,
      documentWidth: document.documentElement.style.width,
      bodyWidth: document.body.style.width,
    };

    // Apply full screen styles
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    document.documentElement.style.height = '100%';
    document.body.style.height = '100%';
    document.documentElement.style.position = 'fixed';
    document.body.style.position = 'fixed';
    document.documentElement.style.width = '100%';
    document.body.style.width = '100%';

    // Cleanup function to restore original styles
    return () => {
      document.documentElement.style.overflow = originalStyles.documentOverflow;
      document.body.style.overflow = originalStyles.bodyOverflow;
      document.documentElement.style.height = originalStyles.documentHeight;
      document.body.style.height = originalStyles.bodyHeight;
      document.documentElement.style.position = originalStyles.documentPosition;
      document.body.style.position = originalStyles.bodyPosition;
      document.documentElement.style.width = originalStyles.documentWidth;
      document.body.style.width = originalStyles.bodyWidth;
    };
  }, []);

  const handleVideoUrlSubmit = (url: string) => {
    setPendingVideoUrl(url);
    setShowConfigModal(true);
  };

  const handleConfigConfirm = (options: VideoProcessingOptions) => {
    console.log('Video configuration:', options);
    
    // Store session configuration and set video URL
    setCurrentVideoUrl(pendingVideoUrl);
    setSessionConfig({
      startTime: options.startTime,
      endTime: options.endTime,
      userRequirements: options.userRequirements
    });
    
    setShowConfigModal(false);
  };

  const handleConfigClose = () => {
    setShowConfigModal(false);
    setPendingVideoUrl('');
  };

  // Settings are now managed by SettingsModal and SettingsContext

  // Generate background style based on settings
  const getBackgroundStyle = () => {
    if (backgroundSettings.type === 'image' && backgroundSettings.imageUrl) {
      let backgroundSize = 'cover';
      let backgroundPosition = `${backgroundSettings.imagePositionX}% ${backgroundSettings.imagePositionY}%`;
      
      switch (backgroundSettings.imageMode) {
        case 'contain':
          backgroundSize = 'contain';
          break;
        case 'fill':
          backgroundSize = '100% 100%';
          break;
        case 'cover':
        default:
          backgroundSize = `${backgroundSettings.imageScale * 100}%`;
          break;
      }

      return {
        backgroundImage: `url(${backgroundSettings.imageUrl})`,
        backgroundSize,
        backgroundPosition,
        backgroundRepeat: 'no-repeat'
      };
    } else {
      return {
        background: 'linear-gradient(135deg, #0f172a 0%, #0f172add 100%)'
      };
    }
  };

  return (
    <div 
      className="w-screen h-screen overflow-hidden relative"
      style={getBackgroundStyle()}
    >
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-gradient-to-br from-black/10 via-transparent to-black/10"></div>
      </div>

      {/* Settings Button */}
      <div className="absolute top-6 left-6 z-30">
        <button
          onClick={() => setShowSettingsModal(true)}
          className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg border border-white/20 hover:bg-white/95 transition-all duration-200 hover:scale-105"
          title="Settings"
        >
          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
      </div>

      {/* Main Content Area */}
      <div className="relative w-full h-full">
        {/* Video Display Area - AI's shared screen */}
        <ChromeBrowser
          videoSrc={currentVideoUrl}
          onUrlSubmit={handleVideoUrlSubmit}
          className="w-full max-w-5xl"
          position={browserPosition}
          onPositionChange={setBrowserPosition}
          sessionConfig={sessionConfig}
        />

        {/* Live2D Container - Right side */}
        <div 
          ref={live2dContainerRef}
          style={{ 
            position: 'absolute', 
            left: live2dPosition.x, 
            top: live2dPosition.y,
            width: '34rem', // w-96
            height: '100%',
            zIndex: 20,
            cursor: 'move',
          }}
          {...live2dListeners}
        >
          <Live2D />

        </div>
      </div>

      {/* Video Configuration Modal */}
      <VideoConfigModal
        isOpen={showConfigModal}
        videoUrl={pendingVideoUrl}
        onClose={handleConfigClose}
        onConfirm={handleConfigConfirm}
      />

      {/* Settings Modal */}
      <SettingsModal
        isOpen={showSettingsModal}
        onClose={() => setShowSettingsModal(false)}
      />
    </div>
  );
}; 