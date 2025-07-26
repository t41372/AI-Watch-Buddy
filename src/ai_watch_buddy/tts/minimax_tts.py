import base64
import json
import tempfile
import os
import subprocess
from typing import Optional
import aiohttp
from loguru import logger
from .tts_interface import TTSInterface


class MiniMaxTTSEngine(TTSInterface):
    """
    MiniMax TTS that calls the MiniMax T2A API service.
    """

    def __init__(
        self,
        api_key: str,
        group_id: str,
        model: str = "speech-02-turbo",
        voice_id: str = "male-qn-qingse",
        base_url: str = "https://api.minimax.io/v1/t2a_v2",
    ):
        """
        Initialize the MiniMax TTS API.

        Args:
            api_key (str): The API key for the MiniMax TTS API.
            group_id (str): The group ID for the MiniMax API.
            model (str): The model to use (speech-02-hd, speech-02-turbo, speech-01-hd, speech-01-turbo).
            voice_id (str): The voice ID to use for generation.
            base_url (str): The base URL for the MiniMax TTS API.
        """
        logger.info(
            f"\nMiniMax TTS API initialized with model: {model}, voice_id: {voice_id}"
        )

        self.api_key = api_key
        self.group_id = group_id
        self.model = model
        self.voice_id = voice_id
        self.base_url = base_url

    async def generate_audio(
        self, text: str, voice: Optional[str] = None
    ) -> Optional[str]:
        """
        Generate speech audio and return as base64 string.

        Args:
            text: The text to speak
            voice: Optional voice parameter (overrides default voice_id)

        Returns:
            Base64 encoded linear PCM WAV audio data, or None if generation fails
        """
        try:
            # Use provided voice or fall back to default
            voice_to_use = voice if voice is not None else self.voice_id

            # Prepare the request payload
            payload = {
                "model": self.model,
                "text": text,
                "stream": False,
                "voice_setting": {
                    "voice_id": voice_to_use,
                    "speed": 1.0,
                    "vol": 1.0,
                    "pitch": 0
                },
                "audio_setting": {
                    "sample_rate": 32000,
                    "bitrate": 128000,
                    "format": "mp3",
                    "channel": 1
                }
            }

            headers = {
                "Authorization": f"Bearer {self.api_key}",
                "Content-Type": "application/json"
            }

            # Make the API request
            async with aiohttp.ClientSession() as session:
                url = f"{self.base_url}?GroupId={self.group_id}"
                async with session.post(url, headers=headers, json=payload) as response:
                    if response.status != 200:
                        logger.error(f"MiniMax API request failed with status {response.status}")
                        response_text = await response.text()
                        logger.error(f"Response: {response_text}")
                        return None

                    response_data = await response.json()

                    if "data" not in response_data or "audio" not in response_data["data"]:
                        logger.error("Invalid response format from MiniMax API")
                        return None

                    # Get the hex-encoded audio data
                    hex_audio = response_data["data"]["audio"]

                    # Decode hex to bytes
                    audio_bytes = bytes.fromhex(hex_audio)

                    # Create temporary files for conversion to PCM WAV
                    with tempfile.NamedTemporaryFile(suffix=".mp3", delete=False) as mp3_temp_file:
                        mp3_temp_file.write(audio_bytes)
                        mp3_temp_path = mp3_temp_file.name

                    # Create path for PCM converted file
                    pcm_temp_path = mp3_temp_path.replace(".mp3", "_pcm.wav")

                    try:
                        # Convert to linear PCM WAV using ffmpeg (same format as other TTS engines)
                        subprocess.run(
                            [
                                "ffmpeg",
                                "-i",
                                mp3_temp_path,
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
                        if os.path.exists(mp3_temp_path):
                            os.unlink(mp3_temp_path)
                        if os.path.exists(pcm_temp_path):
                            os.unlink(pcm_temp_path)

        except subprocess.CalledProcessError as e:
            logger.critical(f"\nError: FFmpeg conversion failed: {e}")
            logger.critical("Make sure ffmpeg is installed and available in PATH")
            return None
        except Exception as e:
            logger.critical(f"\nError: MiniMax TTS API failed to generate audio: {e}")
            return None


# Available voice IDs for reference:
# Popular voices include:
# - "male-qn-qingse" (male voice)
# - "Wise_Woman" (female voice)
# - "Grinch" (character voice)
# And many more available through the MiniMax API