'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useSettings, BackgroundSettings, GeneralSettings } from '@/context/settings-context';
import { getApiBaseUrl, getWebSocketUrl } from '@/utils/url';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type TabKey = 'general' | 'user' | 'background' | 'character';

export const SettingsModal = ({ isOpen, onClose }: SettingsModalProps) => {
  const [activeTab, setActiveTab] = useState<TabKey>('general');
  const { 
    generalSettings, 
    backgroundSettings, 
    updateGeneralSettings, 
    updateBackgroundSettings,
    saveSettings 
  } = useSettings();
  
  // Default values to prevent undefined issues
  const defaultGeneralSettings: GeneralSettings = {
    primaryBaseUrl: getApiBaseUrl(),
    secondaryBaseUrl: 'http://127.0.0.1:8001',
    websocketBaseUrl: getWebSocketUrl(),
    reduceVideoVolumeOnSpeech: true,
    videoVolumeReductionPercent: 50
  };
  
  const defaultBackgroundSettings: BackgroundSettings = {
    type: 'image',
    imageUrl: '',
    imageFile: null,
    imageScale: 1,
    imagePositionX: 50,
    imagePositionY: 50,
    imageMode: 'cover'
  };
  
  // Local state for temporary changes - ensure defaults are always used
  const [localGeneralSettings, setLocalGeneralSettings] = useState<GeneralSettings>(
    { ...defaultGeneralSettings, ...generalSettings }
  );
  const [localBackgroundSettings, setLocalBackgroundSettings] = useState<BackgroundSettings>(
    { ...defaultBackgroundSettings, ...backgroundSettings }
  );
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Update local state when context changes - ensure defaults are always merged
  useEffect(() => {
    setLocalGeneralSettings({ ...defaultGeneralSettings, ...generalSettings });
    setLocalBackgroundSettings({ ...defaultBackgroundSettings, ...backgroundSettings });
  }, [generalSettings, backgroundSettings]);

  const handleConfirm = () => {
    // Update context with local changes
    updateGeneralSettings(localGeneralSettings);
    updateBackgroundSettings(localBackgroundSettings);
    saveSettings();
    onClose();
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target?.result as string;
        setLocalBackgroundSettings(prev => ({
          ...prev,
          type: 'image',
          imageFile: file,
          imageUrl: imageUrl,
          // Reset image adjustments for new image
          imageScale: 1,
          imagePositionX: 50,
          imagePositionY: 50,
          imageMode: 'cover'
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageUrlChange = (url: string) => {
    setLocalBackgroundSettings(prev => ({
      ...prev,
      type: 'image',
      imageUrl: url,
      imageFile: null,
      // Reset image adjustments for new image
      imageScale: 1,
      imagePositionX: 50,
      imagePositionY: 50,
      imageMode: 'cover'
    }));
  };

  // Generate preview style for image adjustments
  const getImagePreviewStyle = () => {
    if (!localBackgroundSettings?.imageUrl) return {};
    
    let backgroundSize = 'cover';
    let backgroundPosition = `${localBackgroundSettings?.imagePositionX ?? 50}% ${localBackgroundSettings?.imagePositionY ?? 50}%`;
    
    switch (localBackgroundSettings?.imageMode) {
      case 'contain':
        backgroundSize = 'contain';
        break;
      case 'fill':
        backgroundSize = '100% 100%';
        break;
      case 'cover':
      default:
        backgroundSize = `${(localBackgroundSettings?.imageScale ?? 1) * 100}%`;
        break;
    }

    return {
      backgroundImage: `url(${localBackgroundSettings?.imageUrl})`,
      backgroundSize,
      backgroundPosition,
      backgroundRepeat: 'no-repeat'
    };
  };

  const tabs = [
    { key: 'general' as TabKey, label: 'General', icon: '⚙️' },
    { key: 'background' as TabKey, label: 'Background', icon: '🖼️' },
    { key: 'user' as TabKey, label: 'User', icon: '👤' },
    { key: 'character' as TabKey, label: 'Character', icon: '🎭' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'general':
        return (
          <div className="space-y-5">
            {/* Audio Settings */}
            <div className="border-b border-[#e8eaed] pb-5">
              <h3 className="text-[14px] font-medium text-[#202124] mb-4">Audio Settings</h3>
              
              {/* Reduce Video Volume on Speech */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <label className="text-[13px] font-medium text-[#202124]">
                    Reduce video volume when AI speaks
                  </label>
                  <p className="text-[12px] text-[#5f6368] mt-1">
                    Automatically lower video volume during AI speech for better clarity
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={localGeneralSettings?.reduceVideoVolumeOnSpeech ?? true}
                    onChange={(e) => setLocalGeneralSettings(prev => ({ ...prev, reduceVideoVolumeOnSpeech: e.target.checked }))}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              {/* Volume Reduction Percentage */}
              {localGeneralSettings?.reduceVideoVolumeOnSpeech && (
                <div>
                  <label className="block text-[13px] font-medium text-[#202124] mb-2">
                    Volume reduction: {localGeneralSettings?.videoVolumeReductionPercent ?? 50}%
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="90"
                    step="5"
                    value={localGeneralSettings?.videoVolumeReductionPercent ?? 50}
                    onChange={(e) => setLocalGeneralSettings(prev => ({ ...prev, videoVolumeReductionPercent: parseInt(e.target.value) }))}
                    className="w-full h-2 bg-[#e8eaed] rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-[11px] text-[#5f6368] mt-1">
                    <span>10%</span>
                    <span>50%</span>
                    <span>90%</span>
                  </div>
                  <p className="text-[12px] text-[#5f6368] mt-2">
                    Video volume will be reduced to {localGeneralSettings?.videoVolumeReductionPercent ?? 50}% of original volume
                  </p>
                </div>
              )}
            </div>

            {/* Server Settings */}
            <div>
              <h3 className="text-[14px] font-medium text-[#202124] mb-4">Server Settings</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-[13px] font-medium text-[#202124] mb-2">
                    Primary Base URL
                  </label>
                  <input
                    type="url"
                    value={localGeneralSettings?.primaryBaseUrl ?? ''}
                    onChange={(e) => setLocalGeneralSettings(prev => ({ ...prev, primaryBaseUrl: e.target.value }))}
                    placeholder={defaultGeneralSettings.primaryBaseUrl}
                    className="w-full px-3 py-2 text-[14px] border border-[#dadce0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a73e8] focus:ring-opacity-20 focus:border-[#1a73e8] transition-colors"
                  />
                  <p className="text-[12px] text-[#5f6368] mt-1">
                    Main server URL for sessions, websockets, and Live2D models
                  </p>
                </div>
                
                <div>
                  <label className="block text-[13px] font-medium text-[#202124] mb-2">
                    Secondary Base URL
                  </label>
                  <input
                    type="url"
                    value={localGeneralSettings?.secondaryBaseUrl ?? ''}
                    onChange={(e) => setLocalGeneralSettings(prev => ({ ...prev, secondaryBaseUrl: e.target.value }))}
                    placeholder="http://127.0.0.1:8001"
                    className="w-full px-3 py-2 text-[14px] border border-[#dadce0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a73e8] focus:ring-opacity-20 focus:border-[#1a73e8] transition-colors"
                  />
                  <p className="text-[12px] text-[#5f6368] mt-1">
                    Alternative server URL for additional services
                  </p>
                </div>
                
                <div>
                  <label className="block text-[13px] font-medium text-[#202124] mb-2">
                    WebSocket Base URL
                  </label>
                  <input
                    type="url"
                    value={localGeneralSettings?.websocketBaseUrl ?? ''}
                    onChange={(e) => setLocalGeneralSettings(prev => ({ ...prev, websocketBaseUrl: e.target.value }))}
                    placeholder="ws://127.0.0.1:8000/ws"
                    className="w-full px-3 py-2 text-[14px] border border-[#dadce0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a73e8] focus:ring-opacity-20 focus:border-[#1a73e8] transition-colors"
                  />
                  <p className="text-[12px] text-[#5f6368] mt-1">
                    WebSocket connection URL for real-time communication
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'user':
        return (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="text-6xl mb-4">👤</div>
            <h3 className="text-[14px] font-medium text-[#202124] mb-2">User Settings</h3>
            <p className="text-[13px] text-[#5f6368]">User configuration options will be available here</p>
          </div>
        );

      case 'background':
        return (
          <div className="space-y-5">
            {/* Image URL Input */}
            <div>
              <label className="block text-[13px] font-medium text-[#202124] mb-2">
                Image URL
              </label>
              <input
                type="url"
                value={localBackgroundSettings?.imageUrl ?? ''}
                onChange={(e) => handleImageUrlChange(e.target.value)}
                placeholder="https://example.com/image.jpg"
                className="w-full px-3 py-2 text-[14px] border border-[#dadce0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a73e8] focus:ring-opacity-20 focus:border-[#1a73e8] transition-colors"
              />
            </div>

            {/* File Upload */}
            <div>
              <label className="block text-[13px] font-medium text-[#202124] mb-2">
                Or upload local image
              </label>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="w-full px-4 py-3 border-2 border-dashed border-[#dadce0] rounded-lg text-[14px] text-[#5f6368] hover:border-[#1a73e8] hover:text-[#1a73e8] transition-colors"
              >
                <svg className="w-5 h-5 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                Click to select image file
              </button>
              {localBackgroundSettings?.imageFile && (
                <p className="mt-2 text-[12px] text-[#5f6368]">
                  Selected: {localBackgroundSettings.imageFile.name}
                </p>
              )}
            </div>

            {/* Image Adjustment Controls */}
            {localBackgroundSettings?.imageUrl && (
              <div className="space-y-4">
                {/* Display Mode */}
                <div>
                  <label className="block text-[13px] font-medium text-[#202124] mb-2">
                    Display Mode
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      onClick={() => setLocalBackgroundSettings(prev => ({ ...prev, imageMode: 'cover' }))}
                      className={`px-3 py-2 text-[12px] border rounded-md transition-colors ${
                        localBackgroundSettings?.imageMode === 'cover'
                          ? 'border-[#1a73e8] bg-[#e8f0fe] text-[#1a73e8]'
                          : 'border-[#dadce0] hover:bg-[#f8f9fa] text-[#202124]'
                      }`}
                    >
                      Cover
                    </button>
                    <button
                      onClick={() => setLocalBackgroundSettings(prev => ({ ...prev, imageMode: 'contain' }))}
                      className={`px-3 py-2 text-[12px] border rounded-md transition-colors ${
                        localBackgroundSettings?.imageMode === 'contain'
                          ? 'border-[#1a73e8] bg-[#e8f0fe] text-[#1a73e8]'
                          : 'border-[#dadce0] hover:bg-[#f8f9fa] text-[#202124]'
                      }`}
                    >
                      Contain
                    </button>
                    <button
                      onClick={() => setLocalBackgroundSettings(prev => ({ ...prev, imageMode: 'fill' }))}
                      className={`px-3 py-2 text-[12px] border rounded-md transition-colors ${
                        localBackgroundSettings?.imageMode === 'fill'
                          ? 'border-[#1a73e8] bg-[#e8f0fe] text-[#1a73e8]'
                          : 'border-[#dadce0] hover:bg-[#f8f9fa] text-[#202124]'
                      }`}
                    >
                      Fill
                    </button>
                  </div>
                </div>

                {/* Scale Control (only for cover mode) */}
                {localBackgroundSettings?.imageMode === 'cover' && (
                  <div>
                    <label className="block text-[13px] font-medium text-[#202124] mb-2">
                      Scale: {Math.round((localBackgroundSettings?.imageScale ?? 1) * 100)}%
                    </label>
                    <input
                      type="range"
                      min="0.5"
                      max="3"
                      step="0.1"
                      value={localBackgroundSettings?.imageScale ?? 1}
                      onChange={(e) => setLocalBackgroundSettings(prev => ({ ...prev, imageScale: parseFloat(e.target.value) }))}
                      className="w-full h-2 bg-[#e8eaed] rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-[11px] text-[#5f6368] mt-1">
                      <span>50%</span>
                      <span>300%</span>
                    </div>
                  </div>
                )}

                {/* Position Controls */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[13px] font-medium text-[#202124] mb-2">
                      Horizontal: {localBackgroundSettings?.imagePositionX ?? 50}%
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={localBackgroundSettings?.imagePositionX ?? 50}
                      onChange={(e) => setLocalBackgroundSettings(prev => ({ ...prev, imagePositionX: parseInt(e.target.value) }))}
                      className="w-full h-2 bg-[#e8eaed] rounded-lg appearance-none cursor-pointer slider"
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] font-medium text-[#202124] mb-2">
                      Vertical: {localBackgroundSettings?.imagePositionY ?? 50}%
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={localBackgroundSettings?.imagePositionY ?? 50}
                      onChange={(e) => setLocalBackgroundSettings(prev => ({ ...prev, imagePositionY: parseInt(e.target.value) }))}
                      className="w-full h-2 bg-[#e8eaed] rounded-lg appearance-none cursor-pointer slider"
                    />
                  </div>
                </div>

                {/* Reset Button */}
                <button
                  onClick={() => setLocalBackgroundSettings(prev => ({
                    ...prev,
                    imageScale: 1,
                    imagePositionX: 50,
                    imagePositionY: 50,
                    imageMode: 'cover'
                  }))}
                  className="w-full px-3 py-2 text-[13px] text-[#5f6368] border border-[#dadce0] rounded-md hover:bg-[#f8f9fa] transition-colors"
                >
                  Reset adjustments
                </button>

                {/* Image Preview */}
                <div>
                  <p className="text-[13px] font-medium text-[#202124] mb-2">Preview</p>
                  <div 
                    className="w-full h-32 bg-[#f8f9fa] border border-[#e8eaed] rounded-lg overflow-hidden"
                    style={getImagePreviewStyle()}
                  >
                    {!localBackgroundSettings?.imageUrl && (
                      <div className="w-full h-full flex items-center justify-center text-[#5f6368] text-[12px]">
                        Image preview
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        );

      case 'character':
        return (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="text-6xl mb-4">🎭</div>
            <h3 className="text-[14px] font-medium text-[#202124] mb-2">Character Settings</h3>
            <p className="text-[13px] text-[#5f6368]">Character configuration options will be available here</p>
          </div>
        );

      default:
        return null;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-[2px] flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-hidden border border-[#dadce0]">
        {/* Header */}
        <div className="border-b border-[#e8eaed] p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-[#5f6368] rounded-sm flex items-center justify-center">
                <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h2 className="text-[16px] font-normal text-[#202124] leading-6">
                Settings
              </h2>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full hover:bg-[#f8f9fa] flex items-center justify-center transition-colors"
            >
              <svg className="w-4 h-4 text-[#5f6368]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-[#e8eaed] px-4">
          <div className="flex space-x-0">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-3 text-[14px] font-medium border-b-2 transition-colors ${
                  activeTab === tab.key
                    ? 'border-[#1a73e8] text-[#1a73e8]'
                    : 'border-transparent text-[#5f6368] hover:text-[#202124]'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content - Scrollable */}
        <div className="overflow-y-auto max-h-[calc(90vh-200px)]">
          <div className="p-6">
            {renderTabContent()}
          </div>
        </div>

        {/* Footer */}
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
            Apply Settings
          </button>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: #1a73e8;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        
        .slider::-moz-range-thumb {
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: #1a73e8;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  );
}; 