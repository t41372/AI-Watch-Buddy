from abc import ABC, abstractmethod
from typing import Optional


class TTSInterface(ABC):
    """Abstract base class for TTS engines."""

    @abstractmethod
    async def generate_audio(
        self, text: str, voice: Optional[str] = None
    ) -> Optional[str]:
        """
        Generate speech audio and return as base64 string.

        Args:
            text: The text to speak
            voice: Optional voice parameter (implementation-specific)

        Returns:
            Base64 encoded audio data, or None if generation fails
        """
        pass
