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


# --- WebSocket Endpoint ---
@app.websocket("/ws/{session_id}")
async def websocket_endpoint(websocket: WebSocket, session_id: str):
    """
    Handles real-time communication for a given session.
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

    # If processing is already done when the client connects, notify them.
    if session.status == "actions_ready":
        await manager.send_json(session_id, {"type": "session_ready"})
    elif session.status == "error":
        await manager.send_json(
            session_id,
            {
                "type": "processing_error",
                "error_code": "INITIAL_PIPELINE_FAILED",  # Or a more specific code
                "message": session.processing_error,
            },
        )

    try:
        while True:
            data = await websocket.receive_json()
            msg_type = data.get("type")

            logger.info(f"[{session_id}] 成功进入 websocket 工作流: f{msg_type}")

    except WebSocketDisconnect:
        logger.info(f"[{session_id}] WebSocket disconnected.")
    except Exception as e:
        logger.error(
            f"[{session_id}] An error occurred in the websocket: {e}", exc_info=True
        )
    finally:
        manager.disconnect(session_id)
