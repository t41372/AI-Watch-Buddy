import base64
import tempfile
import os
import subprocess
from typing import Literal, Optional
from fish_audio_sdk import Session, TTSRequest
from loguru import logger
from .tts_interface import TTSInterface


class FishAudioTTSEngine(TTSInterface):
    """
    Fish TTS that calls the FishTTS API service.
    """

    file_extension: str = "wav"

    def __init__(
        self,
        api_key: str,
        reference_id="0eb38bc974e1459facca38b359e13511",
        # a554a6417bee47ae85b5445921779fab
        latency: Literal["normal", "balanced"] = "balanced",
        base_url="https://api.fish.audio",
    ):
        """
        Initialize the Fish TTS API.

        Args:
            api_key (str): The API key for the Fish TTS API.
            reference_id (str): The reference ID for the voice to be used.
                Get it on the [Fish Audio website](https://fish.audio/).
            latency (str): Either "normal" or "balanced". balance is faster but lower quality.
            base_url (str): The base URL for the Fish TTS API.
        """
        logger.info(
            f"\nFish TTS API initialized with api key: {api_key} baseurl: {base_url} reference_id: {reference_id}, latency: {latency}"
        )

        self.reference_id = reference_id
        self.latency = latency
        self.session = Session(apikey=api_key, base_url=base_url)

    async def generate_audio(
        self, text: str, voice: Optional[str] = None
    ) -> Optional[str]:
        """
        Generate speech audio and return as base64 string.

        Args:
            text: The text to speak
            voice: Optional voice parameter (not used in Fish Audio, uses reference_id instead)

        Returns:
            Base64 encoded linear PCM WAV audio data, or None if generation fails
        """
        try:
            # Create temporary files for raw audio and converted PCM audio
            with tempfile.NamedTemporaryFile(
                suffix=f".{self.file_extension}", delete=False
            ) as raw_temp_file:
                raw_temp_path = raw_temp_file.name

                # Generate audio using Fish Audio API
                for chunk in self.session.tts(
                    TTSRequest(
                        text=text, reference_id=self.reference_id, latency=self.latency
                    )
                ):
                    raw_temp_file.write(chunk)

            # Create path for PCM converted file
            pcm_temp_path = raw_temp_path.replace(f".{self.file_extension}", "_pcm.wav")

            try:
                # Convert to linear PCM WAV using ffmpeg (same as Edge TTS)
                subprocess.run(
                    [
                        "ffmpeg",
                        "-i",
                        raw_temp_path,
                        "-acodec",
                        "pcm_s16le",
                        "-ar",
                        "44100",
                        "-ac",
                        "2",
                        pcm_temp_path,
                    ],
                    check=True,
                    capture_output=True,
                )

                # Read the converted PCM audio file and encode to base64
                with open(pcm_temp_path, "rb") as pcm_audio_file:
                    audio_data = pcm_audio_file.read()
                    base64_audio = base64.b64encode(audio_data).decode("utf-8")

                return base64_audio

            finally:
                # Clean up temporary files
                if os.path.exists(raw_temp_path):
                    os.unlink(raw_temp_path)
                if os.path.exists(pcm_temp_path):
                    os.unlink(pcm_temp_path)

        except subprocess.CalledProcessError as e:
            logger.critical(f"\nError: FFmpeg conversion failed: {e}")
            logger.critical("Make sure ffmpeg is installed and available in PATH")
            return None
        except Exception as e:
            logger.critical(f"\nError: Fish TTS API failed to generate audio: {e}")
            return None


# Create a default instance - you'll need to provide your API key
# fish_tts_instance = FishAudioTTSEngine(api_key="your_api_key_here")
