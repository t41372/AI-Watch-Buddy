import base64
import io
import os
import sys
import subprocess
import tempfile

import edge_tts
from loguru import logger

current_dir = os.path.dirname(os.path.abspath(__file__))
sys.path.append(current_dir)


class TTSEngine:
    def __init__(self):
        pass

    async def generate_audio(
        self, text: str, voice: str = "zh-CN-XiaoxiaoNeural"
    ) -> str | None:
        """
        Generate speech audio and return as base64 string.
        text: str
            the text to speak

        Returns:
        str: base64 encoded WAV audio data, or None if generation fails.
        """
        try:
            # Edge-TTS generates MP3 by default, we need to convert to WAV
            communicate = edge_tts.Communicate(text, voice)
            
            # First, get the MP3 data
            mp3_buffer = io.BytesIO()
            async for chunk in communicate.stream():
                if chunk["type"] == "audio" and "data" in chunk:
                    mp3_buffer.write(chunk["data"])
            
            mp3_buffer.seek(0)
            mp3_data = mp3_buffer.read()
            
            # Use ffmpeg to convert MP3 to WAV
            with tempfile.NamedTemporaryFile(suffix=".mp3", delete=False) as mp3_file:
                mp3_file.write(mp3_data)
                mp3_path = mp3_file.name
            
            wav_path = mp3_path.replace(".mp3", ".wav")
            
            try:
                # Convert MP3 to WAV using ffmpeg
                subprocess.run(
                    ["ffmpeg", "-i", mp3_path, "-acodec", "pcm_s16le", "-ar", "44100", "-ac", "2", wav_path],
                    check=True,
                    capture_output=True
                )
                
                # Read the WAV file and encode to base64
                with open(wav_path, "rb") as wav_file:
                    wav_data = wav_file.read()
                    base64_audio = base64.b64encode(wav_data).decode("utf-8")
                
                return base64_audio
            
            finally:
                # Clean up temporary files
                if os.path.exists(mp3_path):
                    os.unlink(mp3_path)
                if os.path.exists(wav_path):
                    os.unlink(wav_path)

        except Exception as e:
            logger.critical(f"\nError: Unable to generate or convert audio: {e}")
            logger.critical("It's possible that edge-tts is blocked in your region or ffmpeg is not installed.")
            return None


# en-US-AvaMultilingualNeural
# en-US-EmmaMultilingualNeural
# en-US-JennyNeural

tts_instance = TTSEngine()

if __name__ == "__main__":
    import asyncio

    text = "Hello, this is a test of the TTS engine."
    audio_base64 = asyncio.run(tts_instance.generate_audio(text))
    if audio_base64:
        print(
            f"Generated audio (base64): {audio_base64[:50]}..."
        )  # Print first 50 chars
        # save to file for testing
        with open("test_audio.txt", "wb") as f:
            f.write(audio_base64.encode("utf-8"))
    else:
        print("Failed to generate audio.")
