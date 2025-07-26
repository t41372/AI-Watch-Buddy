"""
Configuration management for AI Watch Buddy.
Handles environment variables and provides access to base URLs.
"""
import os
from typing import Optional


class Config:
    """Configuration class to manage environment variables and settings."""
    
    def __init__(self):
        """Initialize configuration from environment variables."""
        # OpenAI compatible API base URL (for OpenAI/MiniMax)
        self.openai_base_url: str = os.getenv("OPENAI_BASE_URL", "https://api.openai.com/v1")
        
        # API Keys
        self.openai_api_key: Optional[str] = os.getenv("OPENAI_API_KEY")
        self.gemini_api_key: Optional[str] = os.getenv("GEMINI_API_KEY")
        self.fish_audio_api_key: Optional[str] = os.getenv("FISH_AUDIO_API_KEY")
        
    def get_openai_base_url(self) -> str:
        """Get the OpenAI compatible API base URL."""
        return self.openai_base_url
    
    def get_api_key_for_service(self, service_type: str) -> Optional[str]:
        """
        Get the appropriate API key for a specific service type.
        
        Args:
            service_type: Type of service ('openai', 'minimax', 'gemini', 'fish_audio')
            
        Returns:
            The appropriate API key for the service
        """
        if service_type in ["openai", "minimax"]:
            return self.openai_api_key
        elif service_type == "gemini":
            return self.gemini_api_key
        elif service_type == "fish_audio":
            return self.fish_audio_api_key
        else:
            return None


# Global configuration instance
config = Config()