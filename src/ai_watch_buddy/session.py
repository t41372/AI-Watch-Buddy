import asyncio
from typing import Literal, Optional
from .agent.video_action_agent_interface import VideoActionAgentInterface
from .actions import Action


class SessionState:
    """Holds the state for a single watching session."""

    def __init__(self, session_id: str, character_id: str, video_url: str):
        self.session_id = session_id
        self.character_id = character_id
        self.video_url = video_url
        self.local_video_path: str | None = None
        self.status: Literal[
            "created",
            "downloading_video",
            "video_ready",
            "generating_actions",
            "session_ready",
            "error",
        ] = "created"
        self.processing_error: str | None = None

        # 关键改动：为每个 session 实例创建一个 asyncio.Queue
        # 这个队列将作为生产者（pipeline）和消费者（websocket）之间的桥梁
        self.action_queue: asyncio.Queue[Action] = asyncio.Queue()
        self.agent: Optional[VideoActionAgentInterface] = None
        self.action_generation_task: Optional[asyncio.Task] = None


# A simple in-memory "database" for sessions
# This dictionary is now the single source of truth for all session states.
session_storage: dict[str, SessionState] = {} 
