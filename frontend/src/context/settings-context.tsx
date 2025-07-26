'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getApiBaseUrl, getWebSocketUrl } from '@/utils/url';

export interface GeneralSettings {
  primaryBaseUrl: string;
  secondaryBaseUrl: string;
  websocketBaseUrl: string;
  reduceVideoVolumeOnSpeech: boolean;
  videoVolumeReductionPercent: number;
}

export interface BackgroundSettings {
  type: 'image';
  imageUrl: string;
  imageFile: File | null;
  imageScale: number;
  imagePositionX: number;
  imagePositionY: number;
  imageMode: 'cover' | 'contain' | 'fill';
}

export interface AllSettings {
  general: GeneralSettings;
  background: BackgroundSettings;
}

interface SettingsContextType {
  generalSettings: GeneralSettings;
  backgroundSettings: BackgroundSettings;
  updateGeneralSettings: (settings: Partial<GeneralSettings>) => void;
  updateBackgroundSettings: (settings: BackgroundSettings) => void;
  saveSettings: () => void;
  loadSettings: () => void;
}

const getDefaultGeneralSettings = (): GeneralSettings => ({
  primaryBaseUrl: getApiBaseUrl(),
  secondaryBaseUrl: 'http://127.0.0.1:8001',
  websocketBaseUrl: getWebSocketUrl(),
  reduceVideoVolumeOnSpeech: true,
  videoVolumeReductionPercent: 50
});

const defaultBackgroundSettings: BackgroundSettings = {
  type: 'image',
  imageUrl: '',
  imageFile: null,
  imageScale: 1,
  imagePositionX: 50,
  imagePositionY: 50,
  imageMode: 'cover'
};

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};

interface SettingsProviderProps {
  children: ReactNode;
}

export const SettingsProvider: React.FC<SettingsProviderProps> = ({ children }) => {
  const [generalSettings, setGeneralSettings] = useState<GeneralSettings>(getDefaultGeneralSettings());
  const [backgroundSettings, setBackgroundSettings] = useState<BackgroundSettings>(defaultBackgroundSettings);

  // Load settings from localStorage on mount
  useEffect(() => {
    loadSettings();
  }, []);

  const updateGeneralSettings = (settings: Partial<GeneralSettings>) => {
    setGeneralSettings(prev => ({ ...prev, ...settings }));
  };

  const updateBackgroundSettings = (settings: BackgroundSettings) => {
    setBackgroundSettings(settings);
  };

  const saveSettings = () => {
    try {
      // Save general settings
      localStorage.setItem('generalSettings', JSON.stringify(generalSettings));
      
      // Save background settings (excluding imageFile as it can't be serialized)
      const backgroundSettingsToSave = {
        ...backgroundSettings,
        imageFile: null
      };
      localStorage.setItem('backgroundSettings', JSON.stringify(backgroundSettingsToSave));
      
      console.log('Settings saved successfully');
    } catch (error) {
      console.error('Failed to save settings:', error);
    }
  };

  const loadSettings = () => {
    try {
      // Load general settings
      const savedGeneralSettings = localStorage.getItem('generalSettings');
      if (savedGeneralSettings) {
        const parsed = JSON.parse(savedGeneralSettings);
        setGeneralSettings({ ...getDefaultGeneralSettings(), ...parsed });
      } else {
        // If no saved settings, use the defaults based on current host
        setGeneralSettings(getDefaultGeneralSettings());
      }

      // Load background settings
      const savedBackgroundSettings = localStorage.getItem('backgroundSettings');
      if (savedBackgroundSettings) {
        const parsed = JSON.parse(savedBackgroundSettings);
        setBackgroundSettings({
          ...defaultBackgroundSettings,
          ...parsed,
          imageFile: null // Always reset imageFile as it can't be serialized
        });
      }
      
      console.log('Settings loaded successfully');
    } catch (error) {
      console.error('Failed to load settings:', error);
      // Reset to defaults and clear corrupted localStorage data
      setGeneralSettings(getDefaultGeneralSettings());
      setBackgroundSettings(defaultBackgroundSettings);
      try {
        localStorage.removeItem('generalSettings');
        localStorage.removeItem('backgroundSettings');
      } catch (storageError) {
        console.error('Failed to clear corrupted localStorage:', storageError);
      }
    }
  };

  const value: SettingsContextType = {
    generalSettings,
    backgroundSettings,
    updateGeneralSettings,
    updateBackgroundSettings,
    saveSettings,
    loadSettings
  };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
}; 