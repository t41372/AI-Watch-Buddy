import base64
import io
import os
import sys

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
        str: base64 encoded audio data, or None if generation fails.
        """
        try:
            communicate = edge_tts.Communicate(text, voice)
            buffer = io.BytesIO()
            async for chunk in communicate.stream():
                if chunk["type"] == "audio" and "data" in chunk:
                    buffer.write(chunk["data"])

            buffer.seek(0)
            audio_bytes = buffer.read()
            base64_audio = base64.b64encode(audio_bytes).decode("utf-8")
            return base64_audio

        except Exception as e:
            logger.critical(f"\nError: edge-tts unable to generate audio: {e}")
            logger.critical("It's possible that edge-tts is blocked in your region.")
            return None


# en-US-AvaMultilingualNeural
# en-US-EmmaMultilingualNeural
# en-US-JennyNeural

if __name__ == "__main__":
    import asyncio

    tts = TTSEngine()
    text = "Hello, this is a test of the TTS engine."
    audio_base64 = asyncio.run(tts.generate_audio(text))
    if audio_base64:
        print(
            f"Generated audio (base64): {audio_base64[:50]}..."
        )  # Print first 50 chars
        # save to file for testing
        with open("test_audio.txt", "wb") as f:
            f.write(audio_base64.encode("utf-8"))
    else:
        print("Failed to generate audio.")
