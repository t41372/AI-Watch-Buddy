import asyncio
import uuid
from typing import List
from loguru import logger

from fastapi import (
    FastAPI,
    WebSocket,
    BackgroundTasks,
    status,
    WebSocketDisconnect,
)
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, ValidationError

from .session import SessionState, session_storage
from .pipeline import (
    initial_pipeline,
    generate_and_queue_actions,
    run_conversation_pipeline,
)       
from .actions import Action, UserInteractionPayload
from .connection_manager import manager

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


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


async def websocket_sender(websocket: WebSocket, session: SessionState):
    """Consumer coroutine: Gets actions from the queue and sends them to the client."""
    # ✅ NEW: Simplified and more accurate waiting logic.
    # It now waits for the single source of truth: the session status.
    while session.status not in ["session_ready", "error"]:
        await asyncio.sleep(0.1)

    if session.status == "error":
        await websocket.send_json(
            {
                "type": "processing_error",
                "error_code": "INITIAL_PIPELINE_FAILED",
                "message": session.processing_error,
            }
        )
        return

    # This message is now sent ONLY after the summary is ready AND the first batch of actions is in the queue.
    await websocket.send_json({"type": "session_ready"})
    logger.info(f"[{session.session_id}] Sent 'session_ready' to client.")

    while True:
        item = await session.action_queue.get()
        if item is None:
            logger.info(f"[{session.session_id}] Reached end of an action batch.")
            session.action_queue.task_done()
            continue

        if isinstance(item, Action):
            await websocket.send_json(
                {"type": "ai_action", "action": item.model_dump(mode="json")}
            )
        elif isinstance(item, dict) and item.get("type") == "processing_error":
            await websocket.send_json(item)

        session.action_queue.task_done()


# ... (The rest of the file, including websocket_receiver and websocket_endpoint, remains the same as my previous answer) ...
async def clear_action_queue(queue: asyncio.Queue):
    """Helper to empty an asyncio queue."""
    while not queue.empty():
        try:
            queue.get_nowait()
        except asyncio.QueueEmpty:
            break


async def websocket_receiver(websocket: WebSocket, session: SessionState):
    """Receiver coroutine: Listens for messages from the client and triggers backend logic."""
    async for message in websocket.iter_json():
        msg_type = message.get("type")
        logger.info(
            f"[{session.session_id}] Received message from client: type={msg_type}"
        )

        # Always interrupt any ongoing task before starting a new one.
        if session.action_generation_task and not session.action_generation_task.done():
            logger.info(
                f"[{session.session_id}] Cancelling previous action generation task."
            )
            session.action_generation_task.cancel()
            await clear_action_queue(
                session.action_queue
            )  # Clear out any partially generated actions

        if msg_type == "interrupt":
            logger.info(
                f"[{session.session_id}] Client sent interrupt. Task cancelled, queue cleared."
            )
            # The logic at the start of the loop already handles this.

        elif msg_type == "trigger-load-next":
            logger.info(
                f"[{session.session_id}] Client triggered lazy-load for next actions."
            )
            session.action_generation_task = asyncio.create_task(
                generate_and_queue_actions(
                    session.session_id, mode="summary", clear_pending_actions=True
                )
            )

        elif msg_type == "trigger-conversation":
            try:
                # Assuming the payload is in message['data']
                payload = UserInteractionPayload.model_validate(message.get("data", {}))
                logger.info(f"[{session.session_id}] Client triggered conversation.")
                # No need to store task here, run_conversation_pipeline will do it.
                asyncio.create_task(
                    run_conversation_pipeline(
                        session.session_id,
                        user_action_list=payload.user_action_list,
                        pending_action_list=payload.pending_action_list,
                    )
                )
            except ValidationError as e:
                logger.error(
                    f"[{session.session_id}] Invalid conversation payload: {e}"
                )
                await websocket.send_json(
                    {
                        "type": "error",
                        "message": "Invalid payload for trigger-conversation.",
                    }
                )


@app.websocket("/ws/{session_id}")
async def websocket_endpoint(websocket: WebSocket, session_id: str):
    """Main WebSocket endpoint that manages the sender and receiver tasks."""
    # This function remains the same. I'm including it for completeness.
    session = session_storage.get(session_id)
    if not session:
        await websocket.close(code=status.WS_1008_POLICY_VIOLATION)
        logger.warning(
            f"WebSocket connection rejected for unknown session: {session_id}"
        )
        return

    await manager.connect(websocket, session_id)
    logger.info(f"[{session_id}] WebSocket connection established.")

    sender_task = asyncio.create_task(websocket_sender(websocket, session))
    receiver_task = asyncio.create_task(websocket_receiver(websocket, session))

    try:
        await asyncio.gather(sender_task, receiver_task)
    except WebSocketDisconnect:
        logger.info(f"[{session_id}] Client disconnected.")
    except Exception as e:
        logger.error(
            f"[{session_id}] An error occurred in the websocket endpoint: {e}",
            exc_info=True,
        )
    finally:
        sender_task.cancel()
        receiver_task.cancel()
        if session.action_generation_task:
            session.action_generation_task.cancel()
        manager.disconnect(session_id)
        logger.info(f"[{session_id}] WebSocket connection closed and cleaned up.")
