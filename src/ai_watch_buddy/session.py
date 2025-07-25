from typing import Literal
from .ai_actions import ActionScript


class SessionState:
    """Holds the state for a single watching session."""

    def __init__(self, session_id: str, character_id: str, video_url: str):
        self.session_id = session_id
        self.character_id = character_id
        self.video_url = video_url
        self.local_video_path: str | None = None
        self.action_script: ActionScript | None = None
        self.status: Literal[
            "created",
            "downloading_video",
            "video_ready",
            "generating_actions",
            "actions_ready",
            "error",
        ] = "created"
        self.processing_error: str | None = None
        self.next_action_index: int = 0


# A simple in-memory "database" for sessions
# This dictionary is now the single source of truth for all session states.
session_storage: dict[str, SessionState] = {} 