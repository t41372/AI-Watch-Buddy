import asyncio
import uuid
from loguru import logger

from fastapi import (
    FastAPI,
    WebSocket,
    BackgroundTasks,
    HTTPException,
    status,
    WebSocketDisconnect,
)
from pydantic import BaseModel

from .session import SessionState, session_storage
from .pipeline import initial_pipeline
from .ai_actions import Action
from .connection_manager import manager

app = FastAPI()


# --- Data Models for API ---
class SessionCreateRequest(BaseModel):
    video_url: str
    start_time: float = 0.0
    end_time: float | None = None
    text: str | None = None
    character_id: str
    user_id: str | None = None


class SessionCreateResponse(BaseModel):
    session_id: str


class ErrorResponse(BaseModel):
    error: str
    message: str


# --- Connection Management ---
# The ConnectionManager is now in its own file (connection_manager.py)
# to prevent circular dependencies. The `manager` instance is imported from there.


# --- API Endpoint ---
@app.post(
    "/api/v1/sessions",
    status_code=status.HTTP_202_ACCEPTED,
    response_model=SessionCreateResponse,
)
async def create_session(
    request: SessionCreateRequest, background_tasks: BackgroundTasks
):
    """
    Creates a new watching session, starts background processing,
    and returns a session_id.
    """
    session_id = f"ses_{uuid.uuid4().hex[:16]}"

    # Create the session state object and store it
    session = SessionState(
        session_id=session_id,
        character_id=request.character_id,
        video_url=request.video_url,
    )
    session_storage[session_id] = session

    # Start the processing pipeline in the background
    background_tasks.add_task(initial_pipeline, session_id=session_id)

    logger.info(f"Accepted session {session_id} for video {request.video_url}")
    return SessionCreateResponse(session_id=session_id)


# --- WebSocket Endpoint (Major Refactor) ---


async def websocket_sender(websocket: WebSocket, session: SessionState):
    """
    消费者协程：从队列中获取 action 并发送给客户端。
    """
    # 首先，等待直到 session 准备就绪
    while session.status != "session_ready" and session.status != "error":
        await asyncio.sleep(0.1)

    # 如果 session 在连接时已经出错，直接发送错误并关闭
    if session.status == "error":
        await websocket.send_json(
            {
                "type": "processing_error",
                "error_code": "INITIAL_PIPELINE_FAILED",
                "message": session.processing_error or "Unknown error during setup",
            }
        )
        return

    # 发送 session_ready 消息，通知前端可以开始交互了
    await websocket.send_json({"type": "session_ready"})
    logger.info(f"[{session.session_id}] Sent 'session_ready' to client.")

    # 进入主循环，从队列中获取并发送数据
    while True:
        # 关键：非阻塞地等待队列中的下一项
        item = await session.action_queue.get()

        # 检查是否是哨兵值 (None)
        if item is None:
            logger.info(
                f"[{session.session_id}] Sentinel (None) received from queue. Closing sender task."
            )
            break  # 收到哨兵，退出循环

        # 根据 item 类型发送消息
        if isinstance(item, Action):
            await websocket.send_json(
                {"type": "ai_action", "action": item.model_dump(mode="json")}
            )
        elif isinstance(item, dict) and item.get("type") == "processing_error":
            await websocket.send_json(item)

        # 标记任务完成，这对于队列大小管理很重要
        session.action_queue.task_done()


async def websocket_receiver(websocket: WebSocket, session: SessionState):
    """
    接收者协程：监听来自客户端的消息。
    """
    async for message in websocket.iter_json():
        msg_type = message.get("type")
        logger.info(
            f"[{session.session_id}] Received message from client: type={msg_type}, data={message}"
        )
        # 在这里处理客户端发来的消息，例如：
        # if msg_type == "timestamp_update":
        #     # ... 处理时间戳更新 ...
        # elif msg_type == "user_response":
        #     # ... 处理用户对 AI 问题的回答 ...


@app.websocket("/ws/{session_id}")
async def websocket_endpoint(websocket: WebSocket, session_id: str):
    """
    主 WebSocket 端点，管理发送者和接收者的生命周期。
    """
    session = session_storage.get(session_id)
    if not session:
        await websocket.close(code=status.WS_1008_POLICY_VIOLATION)
        logger.warning(f"WebSocket connection rejected for unknown session: {session_id}")
        return

    await manager.connect(websocket, session_id)
    logger.info(f"[{session_id}] WebSocket connection established.")

    # 创建发送者和接收者任务
    sender_task = asyncio.create_task(websocket_sender(websocket, session))
    receiver_task = asyncio.create_task(websocket_receiver(websocket, session))

    try:
        # 使用 asyncio.gather 等待两个任务中的任何一个完成
        # `return_exceptions=False` 意味着如果任何一个任务崩溃，`gather` 会立即传播异常
        done, pending = await asyncio.wait(
            [sender_task, receiver_task],
            return_when=asyncio.FIRST_COMPLETED,
        )

        # 取消仍在运行的任务，确保干净地退出
        for task in pending:
            task.cancel()

    except WebSocketDisconnect:
        logger.info(f"[{session_id}] Client disconnected.")
    except Exception as e:
        logger.error(
            f"[{session_id}] An error occurred in the websocket endpoint: {e}",
            exc_info=True,
        )
    finally:
        # 确保所有任务都被取消
        if not sender_task.done():
            sender_task.cancel()
        if not receiver_task.done():
            receiver_task.cancel()

        manager.disconnect(session_id)
        logger.info(f"[{session_id}] WebSocket connection closed and cleaned up.")
