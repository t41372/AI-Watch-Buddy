#!/usr/bin/env python3
"""
Test script for MiniMax TTS integration.
"""

import asyncio
import os
from dotenv import load_dotenv
from tts.minimax_tts import MiniMaxTTSEngine

load_dotenv()


async def test_minimax_tts():
    """Test MiniMax TTS functionality."""
    
    # Check if required environment variables are set
    api_key = os.getenv("MINIMAX_API_KEY")
    group_id = os.getenv("MINIMAX_GROUP_ID")
    
    if not api_key or not group_id:
        print("❌ Missing required environment variables:")
        print("   Please set MINIMAX_API_KEY and MINIMAX_GROUP_ID in your .env file")
        return False
    
    print("🧪 Testing MiniMax TTS...")
    print(f"   API Key: {api_key[:8]}...")
    print(f"   Group ID: {group_id}")
    
    try:
        # Initialize MiniMax TTS engine
        tts_engine = MiniMaxTTSEngine(
            api_key=api_key,
            group_id=group_id,
            model=os.getenv("MINIMAX_MODEL", "speech-02-turbo"),
            voice_id=os.getenv("MINIMAX_VOICE_ID", "male-qn-qingse")
        )
        
        # Test text
        test_text = "Hello, this is a test of the MiniMax TTS engine."
        
        print(f"🔊 Generating audio for: '{test_text}'")
        
        # Generate audio
        audio_base64 = await tts_engine.generate_audio(test_text)
        
        if audio_base64:
            print(f"✅ Audio generated successfully!")
            print(f"   Base64 length: {len(audio_base64)} characters")
            print(f"   Preview: {audio_base64[:50]}...")
            
            # Optional: Save to file for testing
            with open("test_minimax_output.txt", "w") as f:
                f.write(audio_base64)
            print("   💾 Saved base64 audio to test_minimax_output.txt")
            
            return True
        else:
            print("❌ Failed to generate audio")
            return False
            
    except Exception as e:
        print(f"❌ Error during testing: {e}")
        return False


if __name__ == "__main__":
    success = asyncio.run(test_minimax_tts())
    if success:
        print("\n🎉 MiniMax TTS integration test passed!")
    else:
        print("\n💥 MiniMax TTS integration test failed!")