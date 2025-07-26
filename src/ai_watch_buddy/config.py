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
        # Primary base URL (for OpenAI/MiniMax)
        self.primary_base_url: str = os.getenv("OPENAI_BASE_URL", "https://api.openai.com/v1")
        
        # Secondary base URL (for additional services)
        self.secondary_base_url: str = os.getenv("SECONDARY_BASE_URL", "https://api.secondary.com/v1")
        
        # API Keys
        self.openai_api_key: Optional[str] = os.getenv("OPENAI_API_KEY")
        self.gemini_api_key: Optional[str] = os.getenv("GEMINI_API_KEY")
        self.fish_audio_api_key: Optional[str] = os.getenv("FISH_AUDIO_API_KEY")
        
    def get_primary_base_url(self) -> str:
        """Get the primary base URL for main API services."""
        return self.primary_base_url
    
    def get_secondary_base_url(self) -> str:
        """Get the secondary base URL for additional services."""
        return self.secondary_base_url
    
    def get_base_url_for_service(self, service_type: str = "primary") -> str:
        """
        Get the appropriate base URL for a specific service type.
        
        Args:
            service_type: Type of service ('primary', 'secondary', 'openai', 'minimax')
            
        Returns:
            The appropriate base URL for the service
        """
        if service_type in ["primary", "openai", "minimax"]:
            return self.primary_base_url
        elif service_type == "secondary":
            return self.secondary_base_url
        else:
            # Default to primary
            return self.primary_base_url


# Global configuration instance
config = Config()