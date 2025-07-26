"""ASR (Automatic Speech Recognition) interface definition."""

from abc import ABC, abstractmethod
from typing import Optional


class ASRInterface(ABC):
    """Abstract base class for ASR services."""
    
    @abstractmethod
    async def transcribe_audio(
        self, 
        audio_base64: str, 
        language: Optional[str] = None
    ) -> Optional[str]:
        """
        Transcribe base64-encoded audio to text.
        
        Args:
            audio_base64: Base64-encoded audio data
            language: Language code (e.g., "en", "zh"). If None, auto-detect.
            
        Returns:
            Transcribed text, or None if transcription failed
        """
        pass
    
    @abstractmethod
    def transcribe_audio_sync(
        self, 
        audio_base64: str, 
        language: Optional[str] = None
    ) -> Optional[str]:
        """
        Synchronous version of transcribe_audio.
        
        Args:
            audio_base64: Base64-encoded audio data
            language: Language code (e.g., "en", "zh"). If None, auto-detect.
            
        Returns:
            Transcribed text, or None if transcription failed
        """
        pass 