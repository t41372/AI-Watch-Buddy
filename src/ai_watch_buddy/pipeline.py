import asyncio
import json
from pathlib import Path
from loguru import logger
from typing import List, Optional

from .actions import Action, SpeakAction
from .tts import tts_instance
from .session import session_storage
from .fetch_video import download_video_async
from .action_generate import generate_actions

# TODO: You need to create and import your actual agent implementation.
# from .agent.video_action_agent_implementation import VideoActionAgentImpl
from .agent.video_action_agent_interface import VideoActionAgentInterface


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
{json.dumps(user_action_list, indent=2)}

- **Your Cancelled Actions:**
{json.dumps(pending_action_list, indent=2)}

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
    use_mock: bool = True,
) -> None:
    """
    Generic function to generate actions using the session's agent and put them in the queue.

    Args:
        session_id: The session identifier
        mode: The generation mode (e.g., "video", "summary")
        clear_pending_actions: Whether to clear existing pending actions
        use_mock: Whether to use mock data instead of the real agent
    """
    session = session_storage.get(session_id)
    if session is None:
        logger.critical(
            f"[{session_id}] Session not found in generate_and_queue_actions"
        )
    if not use_mock and (not session or not session.agent):
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
        logger.info(
            f"[{session_id}] Starting action generation with mode '{mode}' (mock={use_mock})..."
        )

        actions_generated_count = 0

        # Choose data source based on use_mock parameter
        if use_mock:
            # Use mock data from action_generate.py
            logger.info(f"[{session_id}] Using mock data for action generation")
            action_source = generate_actions(
                video_path="",  # Mock doesn't use these parameters
                start_time=0.0,
                character_prompt="",
            )
        else:
            # Use real agent
            action_source = session.agent.produce_action_stream(mode=mode)

        async for action in action_source:
            # Handle both Action objects (from mock) and dict (from agent)

            # 这个回来一定是个 Action 对象，所以不用 validate 了
            # if isinstance(action_data, Action):
            #     action = action_data
            # else:
            #     action = Action.model_validate(action_data)

            # Audio will be generated in the frontend
            # if isinstance(action, SpeakAction):
            #     audio_base64 = await tts_instance.generate_audio(action.text)
            #     if audio_base64:
            #         action.audio = audio_base64
            #     else:
            #         logger.warning(f"[{session_id}] Failed to generate audio for action: {action.id}")

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
        await session.action_queue.put(
            {
                "type": "processing_error",
                "error_code": "ACTION_GENERATION_FAILED",
                "message": str(e),
            }
        )
    finally:
        await session.action_queue.put(None)


async def run_initial_generation(session_id: str, use_mock: bool = True):
    """
    Runs initial action generation and summary generation in parallel,
    then sets session_ready when both are complete.

    Args:
        session_id: The session identifier
        use_mock: Whether to use mock data instead of the real agent
    """
    session = session_storage.get(session_id)
    if not session:
        logger.error(f"[{session_id}] Session not found in run_initial_generation")
        return

    # Only check for agent if not using mock
    if not use_mock and not session.agent:
        logger.error(f"[{session_id}] Agent not found and not using mock")
        return

    try:
        logger.info(
            f"[{session_id}] Starting parallel summary and action generation (mock={use_mock})..."
        )

        # Create both tasks to run in parallel
        if use_mock:
            # For mock mode, create a simple completed task
            summary_task = asyncio.create_task(asyncio.sleep(0))
        else:
            # For real mode, use the agent
            summary_task = asyncio.create_task(
                session.agent.get_video_summary(
                    video_path_or_url=session.local_video_path
                )
            )

        action_generation_task = asyncio.create_task(
            generate_and_queue_actions(
                session_id, mode="video", clear_pending_actions=False
            )
        )

        # Wait for both tasks to complete
        await asyncio.gather(summary_task, action_generation_task)

        logger.info(f"[{session_id}] Both summary and action generation completed.")

        # Only verify summary if not using mock
        if not use_mock and not session.agent.summary_ready:
            raise RuntimeError(
                "Agent summary was not ready after summary task completion."
            )

        # Set session ready only after both tasks complete successfully
        if session.status != "error":
            session.status = "session_ready"
            logger.info(
                f"[{session_id}] ✅ Initial pipeline complete. Status set to 'session_ready'."
            )

    except Exception as e:
        logger.error(
            f"[{session_id}] Error during initial generation: {e}", exc_info=True
        )
        session.status = "error"
        session.processing_error = str(e)
        await session.action_queue.put(
            {
                "type": "processing_error",
                "error_code": "INITIAL_GENERATION_FAILED",
                "message": str(e),
            }
        )
        await session.action_queue.put(None)


async def initial_pipeline(session_id: str) -> None:
    """
    The initial background task that runs when a session is created.
    """
    session = session_storage.get(session_id)
    if not session:
        return

    try:
        # Step 1: Download video (blocking within this pipeline)
        session.status = "downloading_video"
        local_video_path = str(
            await download_video_async(session.video_url, target_dir="video_cache")
        )
        session.local_video_path = local_video_path
        session.status = "video_ready"
        logger.info(f"[{session_id}] Video ready at: {local_video_path}")

        # Step 2: Initialize the agent
        # TODO: Replace with your actual implementation.
        # agent = VideoActionAgentImpl(...)
        # session.agent = agent
        logger.info(f"[{session_id}] Agent initialization skipped (using mock mode).")

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
            await session.action_queue.put(
                {
                    "type": "processing_error",
                    "error_code": "INITIAL_PIPELINE_FAILED",
                    "message": str(e),
                }
            )
            await session.action_queue.put(None)
