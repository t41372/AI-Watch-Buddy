import asyncio
from pathlib import Path
from loguru import logger
from typing import List

from .ai_actions import Action, SpeakAction
from .tts import tts_instance
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

async def run_conversation_pipeline(session_id: str, user_action_list: List[Action], pending_action_list: List[Action]) -> None:
    # user_action_list 会包含: SeekAction, PauseAction, ResumeAction, SpeakAction，也都有他们的 trigger_timestamp
    # user_action_list 的 SpeakAction 会包含 text 和 audio 其中之一 (user 会发 text 和 audio) 如果是 audio 需要 ASR 成 text
    # user_action_list 的 SpeakAction 一定是 pause_video = true 的（前端会在 user 开始说时自动暂停)
    # TODO: 前端添加 Ten VAD, Audio (Mic) input 和 Chatbox 功能，前端在 VAD **真正**激活时自动暂停视频 (说明用户说的话一定会被发送)。
    # 为什么要暂停？因为 AI 需要时间来回复，当 AI 回复后，用户还可以继续提问。TODO: 但无论如何，AI 回复的文字结束后， pending_action_list 会通过 add_content 发给 AI 让 AI 更新 (user_action_lsit 用户执行的操作和说的话也会给更新 AI 来参考) ，更新的内容流式的得到 action 发给前端。实现一个更新的类，类似 run_action_generation_pipeline，流式将新的 action_list 发送给前端。更新 action_list 也使用 summary_prompt，但需要在当前信息说明更新的任务。更新任务的说明（以及对话任务的说明），不属于 system_prompt 的范畴，应该是 user_message 里被嵌入的。需要写 2 个 prompt分别是更新任务，对话任务。这样更新添加 content 包括对话添加 content，告诉 AI 这个是他的任务（修改 content）@prompt

    pass

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
            if isinstance(action, SpeakAction):
                # 生成音频并填充到 action 中
                audio_base64 = await tts_instance.generate_audio(action.text)
                if audio_base64:
                    action.audio = audio_base64
                else:
                    logger.error(
                        f"[{session_id}] Failed to generate audio for action: {action.id}"
                    )
                    continue
            # 关键改动：将 action 放入队列，而不是直接发送
            await session.action_queue.put(action)
            actions_generated_count += 1
            logger.info(
                f"[{session_id}] Put action into queue: {action.action_type} at {action.trigger_timestamp}s"
            )

        # IMPORTANT: Set status to ready only after the loop is successfully completed.
        if session.status != "error":
            session.status = "session_ready"
            logger.info(
                f"[{session_id}] Action generation completed. Total actions: {actions_generated_count}. Status set to 'session_ready'."
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

        # 2. Start action generation in the background.
        # DO NOT set status to "session_ready" here.
        asyncio.create_task(run_action_generation_pipeline(session_id))
        logger.info(f"[{session_id}] Initial pipeline complete, action generation started.")

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
