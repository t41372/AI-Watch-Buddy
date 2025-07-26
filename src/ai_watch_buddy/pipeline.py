import json
import asyncio
from loguru import logger
from typing import Optional
import os
from dotenv import load_dotenv

from .actions import Action, SpeakAction
from .tts.edge_tts import TTSEngine as EdgeTTSEngine
from .tts.fish_audio_tts import FishAudioTTSEngine
from .session import session_storage
from .fetch_video import download_video_async
from .agent.video_analyzer_agent import VideoAnalyzerAgent
from .prompts.character_prompts import cute_prompt

load_dotenv()


def get_interruption_timestamp(user_action_list: list[Action]) -> Optional[float]:
    """Extracts the interruption timestamp from the user action list."""
    if user_action_list:
        # The timestamp of the first user action is the definitive point of interruption.
        return user_action_list[0].trigger_timestamp
    return None


async def run_conversation_pipeline(
    session_id: str, user_action_list: list[Action], pending_action_list: list[Action]
) -> None:
    """
    Handles a user interruption by sending a concise "Situation Report" to the agent.
    The agent's System Prompt contains all the logic for how to handle this report.
    """
    session = session_storage.get(session_id)
    if not session or not session.agent:
        logger.error(
            f"[{session_id}] Cannot run conversation: session or agent not found."
        )
        return

    interruption_timestamp = get_interruption_timestamp(user_action_list)
    if interruption_timestamp is None:
        logger.warning(
            f"[{session_id}] Could not determine interruption timestamp. Defaulting to 0."
        )
        interruption_timestamp = 0.0

    # This context_message is a simple, clean data report.
    # All the complex instructions have been moved to the System Prompt in action_gen.py.
    context_message = f"""
## User Interruption Report

- **Interruption Timestamp:** {interruption_timestamp} (The video is PAUSED at this time)
- **User Actions:**
{json.dumps([action.model_dump() for action in user_action_list], indent=2)}

- **Your Cancelled Actions:**
{json.dumps([action.model_dump() for action in pending_action_list], indent=2)}

Based on this report and your core instructions, generate your new Reaction Script now.
"""

    session.agent.add_content(role="user", text=context_message)

    # The rest of the logic remains the same.
    session.action_generation_task = asyncio.create_task(
        generate_and_queue_actions(
            session_id, mode="summary", clear_pending_actions=True
        )
    )
    logger.info(
        f"[{session_id}] Sent interruption report for timestamp {interruption_timestamp}. New generation task created."
    )


async def generate_and_queue_actions(
    session_id: str,
    mode: str,
    clear_pending_actions: bool = True,
    early_ready: bool = False,
) -> None:
    """
    Generic function to generate actions using the session's agent and put them in the queue.

    Args:
        session_id: The session identifier
        mode: The generation mode (e.g., "video", "summary")
        clear_pending_actions: Whether to clear existing pending actions
        early_ready: Whether to set session ready after first audio generation
    """
    session = session_storage.get(session_id)
    if not session or not session.agent:
        logger.error(
            f"[{session_id}] Cannot generate actions: session or agent not found."
        )
        return

    try:
        if clear_pending_actions:
            while not session.action_queue.empty():
                session.action_queue.get_nowait()
            logger.info(f"[{session_id}] Cleared pending actions from the queue.")

        session.status = "generating_actions"
        logger.info(f"[{session_id}] Starting action generation with mode '{mode}'...")

        actions_generated_count = 0
        first_audio_generated = False

        action_source = session.agent.produce_action_stream(mode=mode)

        async for action in action_source:
            # Handle both Action objects (from mock) and dict (from agent)

            # 这个回来一定是个 Action 对象，所以不用 validate 了
            # if isinstance(action_data, Action):
            #     action = action_data
            # else:
            #     action = Action.model_validate(action_data)

            # Generate audio for SpeakAction
            if isinstance(action, SpeakAction):
                # Initialize Fish Audio TTS - you'll need to provide your API key
                tts_instance = FishAudioTTSEngine(
                    api_key=os.getenv("FISH_AUDIO_API_KEY")
                )
                # tts_instance = EdgeTTSEngine()
                audio_base64 = await tts_instance.generate_audio(action.text)
                if audio_base64:
                    action.audio = audio_base64
                    
                    # Set session ready after first audio generation if early_ready is True
                    if early_ready and not first_audio_generated and session.status != "error":
                        first_audio_generated = True
                        session.status = "session_ready"
                        logger.info(
                            f"[{session_id}] ✅ First audio generated successfully. Status set to 'session_ready'."
                        )
                else:
                    logger.warning(
                        f"[{session_id}] Failed to generate audio for action: {action.id}"
                    )

            await session.action_queue.put(action)
            actions_generated_count += 1
            logger.info(
                f"[{session_id}] Queued action: {action.action_type} at {action.trigger_timestamp}s"
            )

        logger.info(
            f"[{session_id}] Action generation stream finished. Total new actions: {actions_generated_count}."
        )

    except asyncio.CancelledError:
        logger.info(f"[{session_id}] Action generation task was cancelled.")
    except Exception as e:
        logger.error(
            f"[{session_id}] Error during action generation: {e}", exc_info=True
        )
        session.status = "error"
        session.processing_error = str(e)
        error_payload = {
            "type": "processing_error",
            "error_code": "ACTION_GENERATION_FAILED",
            "message": str(e),
        }
        await session.action_queue.put(error_payload)
    finally:
        await session.action_queue.put(None)


async def run_initial_generation(session_id: str):
    """
    Runs initial action generation and summary generation in parallel.
    Session ready is set when the first audio is generated (in action generation).

    Args:
        session_id: The session identifier
    """
    session = session_storage.get(session_id)
    if not session or not session.agent:
        logger.error(
            f"[{session_id}] Session or agent not found in run_initial_generation"
        )
        return

    try:
        # Determine the video input for the agent: use local path if available, otherwise use original URL.
        video_input = (
            session.local_video_path if session.local_video_path else session.video_url
        )

        logger.info(
            f"[{session_id}] Starting parallel summary and action generation for: {video_input}"
        )

        # Create both tasks to run in parallel
        summary_task = asyncio.create_task(
            session.agent.get_video_summary(video_path_or_url=video_input)
        )

        action_generation_task = asyncio.create_task(
            generate_and_queue_actions(
                session_id, mode="summary", clear_pending_actions=False, early_ready=False
            )
        )

        # Wait for both tasks to complete
        await asyncio.gather(summary_task, action_generation_task)

        logger.info(f"[{session_id}] Both summary and action generation completed.")

        if not session.agent.summary_ready:
            raise RuntimeError(
                "Agent summary was not ready after summary task completion."
            )
            
        session.status = "session_ready"

        # Session ready is already set by generate_and_queue_actions when first audio is ready
        logger.info(
            f"[{session_id}] ✅ Initial pipeline complete. Summary generation finished."
        )

    except Exception as e:
        logger.error(
            f"[{session_id}] Error during initial generation: {e}", exc_info=True
        )
        session.status = "error"
        session.processing_error = str(e)
        error_payload = {
            "type": "processing_error",
            "error_code": "INITIAL_GENERATION_FAILED",
            "message": str(e),
        }
        await session.action_queue.put(error_payload)
        await session.action_queue.put(None)


async def initial_pipeline(session_id: str) -> None:
    """
    The initial background task that runs when a session is created.
    """
    session = session_storage.get(session_id)
    if not session:
        return

    try:
        # Step 1: Check video URL and download if necessary
        video_url = session.video_url
        is_youtube_url = "youtube.com" in video_url or "youtu.be" in video_url

        if is_youtube_url:
            logger.info(
                f"[{session_id}] YouTube URL detected, skipping download: {video_url}"
            )
            session.local_video_path = None
        else:
            session.status = "downloading_video"
            logger.info(
                f"[{session_id}] Non-YouTube URL detected, downloading from: {video_url}"
            )
            local_video_path = str(
                await download_video_async(session.video_url, target_dir="video_cache")
            )
            session.local_video_path = local_video_path
            logger.info(
                f"[{session_id}] Video downloaded and ready at: {local_video_path}"
            )

        session.status = "video_ready"

        # Step 2: Initialize the agent
        persona = session.character_prompt or cute_prompt
        agent = VideoAnalyzerAgent(persona_prompt=persona)
        session.agent = agent
        logger.info(f"[{session_id}] Agent initialized with persona.")

        # Step 3: Start parallel summary and action generation in the background.
        session.action_generation_task = asyncio.create_task(
            run_initial_generation(session_id)
        )
        logger.info(
            f"[{session_id}] Summary and action generation started in the background."
        )

    except Exception as e:
        logger.error(
            f"[{session_id}] Error during initial pipeline setup: {e}", exc_info=True
        )
        session.status = "error"
        session.processing_error = str(e)
        if session:
            error_payload = {
                "type": "processing_error",
                "error_code": "INITIAL_PIPELINE_FAILED",
                "message": str(e),
            }
            await session.action_queue.put(error_payload)
            await session.action_queue.put(None)
