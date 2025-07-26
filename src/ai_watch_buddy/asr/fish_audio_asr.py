"""Fish Audio ASR implementation for speech-to-text conversion."""

import base64
import tempfile
import os
from pathlib import Path
from typing import Optional
from loguru import logger

from .asr_interface import ASRInterface

try:
    from fish_audio_sdk import Session, ASRRequest
except ImportError:
    logger.warning("fish_audio_sdk not installed. Please install it with: pip install fish_audio_sdk")
    Session = None
    ASRRequest = None


class FishAudioASR(ASRInterface):
    """Fish Audio ASR service for converting audio to text."""
    
    def __init__(self, api_key: Optional[str] = None):
        """
        Initialize Fish Audio ASR service.
        
        Args:
            api_key: Fish Audio API key. If None, will try to get from environment.
        """
        if Session is None:
            raise ImportError("fish_audio_sdk is required. Install with: pip install fish_audio_sdk")
            
        if api_key is None:
            api_key = os.getenv("FISH_AUDIO_API_KEY")
            
        if not api_key:
            raise ValueError("Fish Audio API key is required. Set FISH_AUDIO_API_KEY environment variable or pass api_key parameter.")
            
        self.session = Session(api_key)
        logger.info("Fish Audio ASR initialized successfully")
    
    async def transcribe_audio(
        self, 
        audio_base64: str, 
        language: Optional[str] = None,
        ignore_timestamps: bool = True
    ) -> Optional[str]:
        """
        Transcribe base64-encoded audio to text.
        
        Args:
            audio_base64: Base64-encoded audio data
            language: Language code (e.g., "en", "zh"). If None, auto-detect.
            ignore_timestamps: Whether to ignore precise timestamps for faster processing
            
        Returns:
            Transcribed text, or None if transcription failed
        """
        try:
            # Decode base64 audio data
            audio_data = base64.b64decode(audio_base64)
            
            # Create temporary file for audio data
            with tempfile.NamedTemporaryFile(delete=False, suffix=".wav") as temp_file:
                temp_file.write(audio_data)
                temp_file_path = temp_file.name
            
            try:
                # Read audio file
                with open(temp_file_path, "rb") as audio_file:
                    audio_bytes = audio_file.read()
                
                # Create ASR request
                if language:
                    request = ASRRequest(
                        audio=audio_bytes, 
                        language=language, 
                        ignore_timestamps=ignore_timestamps
                    )
                else:
                    request = ASRRequest(
                        audio=audio_bytes, 
                        ignore_timestamps=ignore_timestamps
                    )
                
                # Perform ASR
                response = self.session.asr(request)
                
                logger.info(f"ASR successful: '{response.text}' (duration: {response.duration}s)")
                
                # Log segments if available
                if hasattr(response, 'segments') and response.segments:
                    for segment in response.segments:
                        logger.debug(f"Segment: '{segment.text}' [{segment.start}-{segment.end}s]")
                
                return response.text
                
            finally:
                # Clean up temporary file
                try:
                    os.unlink(temp_file_path)
                except OSError:
                    logger.warning(f"Failed to delete temporary file: {temp_file_path}")
                    
        except Exception as e:
            logger.error(f"ASR transcription failed: {e}", exc_info=True)
            return None
    
    def transcribe_audio_sync(
        self, 
        audio_base64: str, 
        language: Optional[str] = None,
        ignore_timestamps: bool = True
    ) -> Optional[str]:
        """
        Synchronous version of transcribe_audio.
        
        Args:
            audio_base64: Base64-encoded audio data
            language: Language code (e.g., "en", "zh"). If None, auto-detect.
            ignore_timestamps: Whether to ignore precise timestamps for faster processing
            
        Returns:
            Transcribed text, or None if transcription failed
        """
        try:
            # Decode base64 audio data
            audio_data = base64.b64decode(audio_base64)
            
            # Create temporary file for audio data
            with tempfile.NamedTemporaryFile(delete=False, suffix=".wav") as temp_file:
                temp_file.write(audio_data)
                temp_file_path = temp_file.name
            
            try:
                # Read audio file
                with open(temp_file_path, "rb") as audio_file:
                    audio_bytes = audio_file.read()
                
                # Create ASR request
                if language:
                    request = ASRRequest(
                        audio=audio_bytes, 
                        language=language, 
                        ignore_timestamps=ignore_timestamps
                    )
                else:
                    request = ASRRequest(
                        audio=audio_bytes, 
                        ignore_timestamps=ignore_timestamps
                    )
                
                # Perform ASR
                response = self.session.asr(request)
                
                logger.info(f"ASR successful: '{response.text}' (duration: {response.duration}s)")
                
                return response.text
                
            finally:
                # Clean up temporary file
                try:
                    os.unlink(temp_file_path)
                except OSError:
                    logger.warning(f"Failed to delete temporary file: {temp_file_path}")
                    
        except Exception as e:
            logger.error(f"ASR transcription failed: {e}", exc_info=True)
            return None 