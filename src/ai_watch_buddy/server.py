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
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from .session import SessionState, session_storage
from .pipeline import initial_pipeline
from .ai_actions import Action
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


# --- WebSocket Endpoint (Major Refactor) ---


async def websocket_sender(websocket: WebSocket, session: SessionState):
    """
    Consumer coroutine: Gets actions from the queue and sends them to the client.
    This task now runs indefinitely until cancelled.
    """
    # First, wait until the session is ready or an error occurs during setup
    while session.status not in ["session_ready", "error"]:
        await asyncio.sleep(0.1)  # Small sleep to prevent a tight loop

    if session.status == "error":
        await websocket.send_json(
            {
                "type": "processing_error",
                "error_code": "INITIAL_PIPELINE_FAILED",
                "message": session.processing_error or "Unknown error during setup",
            }
        )
        return

    await websocket.send_json({"type": "session_ready"})
    logger.info(f"[{session.session_id}] Sent 'session_ready' to client.")

    # Main loop to process actions from the queue
    while True:
        item = await session.action_queue.get()

        # **MODIFICATION**: Instead of breaking, just log and continue waiting.
        # This keeps the sender alive for future actions.
        if item is None:
            logger.info(
                f"[{session.session_id}] Initial action generation complete. Sender is now idle, awaiting further actions."
            )
            session.action_queue.task_done()
            continue

        # Send the message based on the item type
        if isinstance(item, Action):
            await websocket.send_json(
                {"type": "ai_action", "action": item.model_dump(mode="json")}
            )
        elif isinstance(item, dict) and item.get("type") == "processing_error":
            await websocket.send_json(item)

        session.action_queue.task_done()


async def websocket_receiver(websocket: WebSocket, session: SessionState):
    """
    Receiver coroutine: Listens for messages from the client.
    This runs until the client disconnects, which raises WebSocketDisconnect.
    """
    async for message in websocket.iter_json():
        msg_type = message.get("type")
        logger.info(
            f"[{session.session_id}] Received message from client: type={msg_type}"
        )

        if msg_type == "trigger-load-next":
            # Here you can trigger new tasks that might put more actions into the queue
            logger.info(f"[{session.session_id}] Client triggered a future action.")

            # Here we need add a task
            # We need a mechanism to cancel the task when interrupted
            # Use
            

        if msg_type == "interrupt":

            pass

        if msg_type == "trigger-conversation":
            # The content
            # {
            #     "type": "trigger-conversation",
            #     "user_action_list": List[Action],
            #     "pending_action_list": List[Action],
            # }
            pass


@app.websocket("/ws/{session_id}")
async def websocket_endpoint(websocket: WebSocket, session_id: str):
    """
    Main WebSocket endpoint that manages the sender and receiver tasks' lifecycles.
    """
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
        # **MODIFICATION**: Use asyncio.gather to run tasks concurrently.
        # It will return only when one of the tasks raises an unhandled exception.
        await asyncio.gather(sender_task, receiver_task)
    except WebSocketDisconnect:
        logger.info(f"[{session_id}] Client disconnected.")
    except Exception as e:
        logger.error(
            f"[{session_id}] An error occurred in the websocket endpoint: {e}",
            exc_info=True,
        )
    finally:
        # Cleanly cancel both tasks and disconnect the manager.
        sender_task.cancel()
        receiver_task.cancel()
        manager.disconnect(session_id)
        logger.info(f"[{session_id}] WebSocket connection closed and cleaned up.")
