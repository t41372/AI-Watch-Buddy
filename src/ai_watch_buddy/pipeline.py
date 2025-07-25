import asyncio
from pathlib import Path
from loguru import logger

from .ai_actions import Action
from .session import session_storage
from .action_generate import generate_actions
from .fetch_video import download_video_async


async def download_video(video_url: str, session_id: str) -> str:
    """
    Downloads the video from the given URL and returns the local file path.
    """
    # Create session-specific downloads directory
    downloads_dir = Path("downloads") / session_id

    # Use the imported download_video_async function
    local_path = await download_video_async(video_url, downloads_dir)

    logger.info(f"[{session_id}] Video downloaded to: {local_path}")
    return str(local_path)


async def run_action_generation_pipeline(session_id: str) -> None:
    """
    Generates actions for the video and puts them into the session's queue.
    This function is now a pure "producer".
    """
    session = session_storage.get(session_id)
    if not session or not session.local_video_path:
        logger.error(
            f"[{session_id}] Cannot run action generation: session or local_video_path not found."
        )
        if session:
            await session.action_queue.put(
                {
                    "type": "processing_error",
                    "error_code": "PIPELINE_SETUP_FAILED",
                    "message": "Session or video path not found.",
                }
            )
        return

    try:
        session.status = "generating_actions"
        logger.info(f"[{session_id}] Starting action generation...")

        actions_generated_count = 0
        async for action in generate_actions(
            video_path=session.local_video_path,
            start_time=0.0,  # 这里的参数可以从 session 中获取
            character_prompt=f"Character ID: {session.character_id}",
        ):
            # 关键改动：将 action 放入队列，而不是直接发送
            await session.action_queue.put(action)
            actions_generated_count += 1
            logger.info(
                f"[{session_id}] Put action into queue: {action.action_type} at {action.trigger_timestamp}s"
            )

        logger.info(
            f"[{session_id}] Action generation completed. Total actions put in queue: {actions_generated_count}"
        )
        

    except Exception as e:
        logger.error(
            f"[{session_id}] Error during action generation: {e}", exc_info=True
        )
        session.status = "error"
        session.processing_error = str(e)
        # 发生错误时，也向队列放入一个错误信息
        await session.action_queue.put(
            {
                "type": "processing_error",
                "error_code": "ACTION_GENERATION_FAILED",
                "message": f"Failed to generate actions for the video: {e}",
            }
        )
    finally:
        # 关键一步：发送一个“哨兵”值 (sentinel value)
        # 这就像是信件的末尾标记，告诉消费者：“没有更多信件了”。
        # 我们用 None 来作为这个哨兵。
        if session:
            await session.action_queue.put(None)


async def initial_pipeline(session_id: str) -> None:
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
        local_video_path = str(
            await download_video_async(session.video_url, target_dir="video_cache")
        )
        session.local_video_path = local_video_path
        session.status = "video_ready"

        # FIX: REMOVE this premature status change.
        # session.status = "session_ready"

        # 3. 在后台开始运行 action 生成（生产者）
        # 注意，我们在这里只是启动它，并不会等待它完成
        asyncio.create_task(run_action_generation_pipeline(session_id))
        
        # FIX: Set status to session_ready AFTER generation is complete.
        session.status = "session_ready"
        logger.info(f"[{session_id}] Session status updated to 'session_ready'.")

    except Exception as e:
        logger.error(
            f"[{session_id}] Error during initial pipeline: {e}", exc_info=True
        )
        session.status = "error"
        session.processing_error = str(e)
        # 如果初始流程就失败了，也往队列里放个错误信息和结束标记
        if session:
            await session.action_queue.put(
                {
                    "type": "processing_error",
                    "error_code": "INITIAL_PIPELINE_FAILED",
                    "message": f"Failed during the initial setup: {e}",
                }
            )
            await session.action_queue.put(None)
