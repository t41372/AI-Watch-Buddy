'use client';

import React, { useState } from 'react';
import { VideoProcessingOptions } from '@/types/video-player';

interface VideoConfigModalProps {
  isOpen: boolean;
  videoUrl: string;
  onClose: () => void;
  onConfirm: (options: VideoProcessingOptions) => void;
}

export const VideoConfigModal = ({ isOpen, videoUrl, onClose, onConfirm }: VideoConfigModalProps) => {
  const [options, setOptions] = useState<VideoProcessingOptions>({
    startTime: 0,
    endTime: undefined,
    userRequirements: '',
    additionalFiles: [],
  });

  const handleConfirm = () => {
    onConfirm(options);
    onClose();
  };

  const getVideoTitle = (url: string) => {
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      return 'YouTube Video';
    } else if (url.includes('bilibili.com')) {
      return 'Bilibili Video';
    } else if (url.includes('.mp4') || url.includes('.webm')) {
      return 'Video File';
    }
    return 'Video';
  };

  const getFaviconIcon = (url: string) => {
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      return (
        <div className="w-4 h-4 bg-[#ff0000] rounded-sm flex items-center justify-center">
          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21.582 6.186c-.23-1.12-1.11-2.005-2.23-2.23C17.25 3.5 12 3.5 12 3.5s-5.25 0-7.352.456c-1.12.225-2.005 1.11-2.23 2.23C2 8.289 2 12.001 2 12.001s0 3.712.418 5.814c.225 1.12 1.11 2.005 2.23 2.23C6.75 20.5 12 20.5 12 20.5s5.25 0 7.352-.455c1.12-.225 2.005-1.11 2.23-2.23C22 15.712 22 12.001 22 12.001s0-3.712-.418-5.815zM10 15.5v-7l6 3.5-6 3.5z"/>
          </svg>
        </div>
      );
    } else if (url.includes('bilibili.com')) {
      return (
        <div className="w-4 h-4 bg-[#00aeec] rounded-sm flex items-center justify-center">
          <span className="text-[8px] text-white font-bold">B</span>
        </div>
      );
    }
    return (
      <div className="w-4 h-4 bg-[#5f6368] rounded-sm flex items-center justify-center">
        <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      </div>
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-[2px] flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-lg w-full mx-4 overflow-hidden border border-[#dadce0]">
        {/* Chrome-style dialog header */}
        <div className="border-b border-[#e8eaed] p-4">
          <div className="flex items-center space-x-3">
            {getFaviconIcon(videoUrl)}
            <div className="flex-1">
              <h2 className="text-[16px] font-normal text-[#202124] leading-6">
                Configure Video Settings
              </h2>
              <p className="text-[13px] text-[#5f6368] mt-0.5 break-all">
                {videoUrl}
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          {/* Video Information Section */}
          <div>
            <h3 className="text-[14px] font-medium text-[#202124] mb-3">Video Information</h3>
            <div className="bg-[#f8f9fa] border border-[#e8eaed] rounded-lg p-3">
              <div className="flex items-center space-x-2">
                {getFaviconIcon(videoUrl)}
                <span className="text-[14px] text-[#202124] font-normal">
                  {getVideoTitle(videoUrl)}
                </span>
              </div>
            </div>
          </div>

          {/* Time Range Configuration */}
          <div>
            <h3 className="text-[14px] font-medium text-[#202124] mb-3">Time Range</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[13px] text-[#5f6368] mb-2">
                  Start time (seconds)
                </label>
                <input
                  type="number"
                  min="0"
                  value={options?.startTime ?? 0}
                  onChange={(e) => setOptions(prev => ({ ...prev, startTime: Number(e.target.value) }))}
                  className="w-full px-3 py-2 text-[14px] border border-[#dadce0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a73e8] focus:ring-opacity-20 focus:border-[#1a73e8] transition-colors"
                  placeholder="0"
                />
              </div>
              
              <div>
                <label className="block text-[13px] text-[#5f6368] mb-2">
                  End time (seconds)
                </label>
                <input
                  type="number"
                  min="0"
                  value={options?.endTime ?? ''}
                  onChange={(e) => setOptions(prev => ({ ...prev, endTime: e.target.value ? Number(e.target.value) : undefined }))}
                  className="w-full px-3 py-2 text-[14px] border border-[#dadce0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a73e8] focus:ring-opacity-20 focus:border-[#1a73e8] transition-colors"
                  placeholder="End of video"
                />
              </div>
            </div>
          </div>

          {/* AI Companion Configuration */}
          <div>
            <h3 className="text-[14px] font-medium text-[#202124] mb-3">AI Companion Settings</h3>
            <div>
              <label className="block text-[13px] text-[#5f6368] mb-2">
                Instructions for your AI companion
              </label>
              <textarea
                value={options?.userRequirements ?? ''}
                onChange={(e) => setOptions(prev => ({ ...prev, userRequirements: e.target.value }))}
                placeholder="Describe how you'd like your AI companion to interact with this video. For example: 'Act as a movie critic and provide analysis', 'Explain technical concepts for beginners', 'Be enthusiastic and engaging'..."
                rows={4}
                className="w-full px-3 py-2 text-[14px] border border-[#dadce0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a73e8] focus:ring-opacity-20 focus:border-[#1a73e8] transition-colors resize-none"
              />
              <p className="mt-2 text-[12px] text-[#5f6368]">
                Optional: Provide context or specific instructions for personalized interaction
              </p>
            </div>
          </div>
        </div>

        {/* Chrome-style dialog footer */}
        <div className="bg-[#f8f9fa] border-t border-[#e8eaed] px-6 py-4 flex items-center justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-[14px] text-[#1a73e8] font-medium hover:bg-[#e8f0fe] rounded-md transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="px-6 py-2 bg-[#1a73e8] text-white text-[14px] font-medium rounded-md hover:bg-[#1557b0] transition-colors shadow-sm"
          >
            Start Watching
          </button>
        </div>
      </div>
    </div>
  );
}; 