import asyncio
from loguru import logger

from .action_generate import generate_actions
from .session import session_storage
from .connection_manager import manager  # Import manager for sending updates


async def download_video(video_url: str, session_id: str) -> str:
    """
    Placeholder for the video download logic.
    In a real scenario, this would download the video from the URL
    and return the local file path.
    """
    logger.info(f"[{session_id}] Simulating video download for: {video_url}")
    await asyncio.sleep(2)  # Simulate I/O bound task
    local_path = f"/tmp/videos/{session_id}_video.mp4"  # Dummy path for the prototype
    logger.info(f"[{session_id}] Video 'downloaded' to: {local_path}")
    return local_path


async def run_action_generation_pipeline(session_id: str):
    """
    Generates the action script for a session.
    This can be reused during the session for complex logic.
    """
    session = session_storage.get(session_id)
    if not session or not session.local_video_path:
        logger.error(
            f"[{session_id}] Cannot run action generation: session or local_video_path not found."
        )
        # Optionally, notify the client about this internal error
        return

    try:
        session.status = "generating_actions"
        logger.info(f"[{session_id}] Starting action generation...")

        # Here you would perform the actual processing on the video file
        # and generate the character prompt dynamically.
        action_script = await generate_actions(
            video_path=session.local_video_path,
            start_time=0.0,  # This might need to be more flexible later
            character_prompt=f"Character ID: {session.character_id}",
        )

        session.action_script = action_script
        session.status = "actions_ready"
        logger.info(f"[{session_id}] Action generation successful.")
        
        # Notify the client that everything is ready
        await manager.send_json(session_id, {"type": "session_ready"})

    except Exception as e:
        logger.error(f"[{session_id}] Error during action generation: {e}", exc_info=True)
        session.status = "error"
        session.processing_error = str(e)
        # Notify the client about the failure
        await manager.send_json(
            session_id,
            {
                "type": "processing_error",
                "error_code": "ACTION_GENERATION_FAILED",
                "message": f"Failed to generate actions for the video: {e}",
            },
        )


async def initial_pipeline(session_id: str):
    """
    The initial background task that runs when a session is created.
    It downloads the video and then triggers the action generation.
    """
    session = session_storage.get(session_id)
    if not session:
        logger.error(f"[{session_id}] Initial pipeline failed: session not found.")
        return

    try:
        # Step 1: Download video
        session.status = "downloading_video"
        local_video_path = await download_video(session.video_url, session_id)
        session.local_video_path = local_video_path
        session.status = "video_ready"

        # Step 2: Generate actions
        await run_action_generation_pipeline(session_id)

    except Exception as e:
        logger.error(
            f"[{session_id}] Error during initial pipeline: {e}", exc_info=True
        )
        session.status = "error"
        session.processing_error = str(e)
        # Notify the client about the failure
        await manager.send_json(
            session_id,
            {
                "type": "processing_error",
                "error_code": "INITIAL_PIPELINE_FAILED",
                "message": f"Failed during the initial setup: {e}",
            },
        ) 