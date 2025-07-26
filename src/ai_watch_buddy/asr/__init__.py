"""AI Watch Buddy ASR (Automatic Speech Recognition) module."""

from .asr_interface import ASRInterface
from .fish_audio_asr import FishAudioASR

__all__ = ["ASRInterface", "FishAudioASR"] 