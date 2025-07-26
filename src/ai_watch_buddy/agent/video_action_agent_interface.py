import abc
from typing import AsyncGenerator, Dict, List, Optional

from google import genai
from google.genai.types import File, Content

from ..actions import Action


class VideoActionAgentInterface(abc.ABC):
    """
    An interface for a Gemini agent that analyzes a video to produce a summary
    and then generates structured actions based on different contexts.

    This agent operates in two main modes for action generation:
    1. 'video': Uses the original video file as the primary context.
    2. 'summary': Uses a pre-generated text summary of the video as context.
    """

    @property
    @abc.abstractmethod
    def client(self) -> genai.Client:
        """The initialized Gemini client for API communication."""
        raise NotImplementedError

    @property
    @abc.abstractmethod
    def summary_prompt(self) -> str:
        """The system prompt used for generating the video summary."""
        raise NotImplementedError

    @property
    @abc.abstractmethod
    def action_prompt(self) -> str:
        """The system prompt used for generating actions/dialogue."""
        raise NotImplementedError

    @property
    @abc.abstractmethod
    def video_file(self) -> Optional[File]:
        """The File object returned by the Gemini API after video upload."""
        raise NotImplementedError

    @property
    @abc.abstractmethod
    def summary(self) -> Optional[str]:
        """The text summary of the video, generated on demand."""
        raise NotImplementedError

    @property
    @abc.abstractmethod
    def contents(self) -> List[Content]:
        """The conversation history stored as a list of Content objects."""
        raise NotImplementedError

    @property
    @abc.abstractmethod
    def summary_ready(self) -> bool:
        """A boolean flag indicating if the video summary has been successfully generated."""
        raise NotImplementedError

    @abc.abstractmethod
    async def get_video_summary(self, video_path_or_url: str) -> None:
        """
        Processes a video from a local path or URL, uploads it, and generates a summary.

        This is a non-blocking asynchronous method. Upon successful completion,
        it populates the `summary` attribute and sets the `summary_ready` flag to True.

        Args:
            video_path_or_url: The local file path or a public URL to the video.
        """
        raise NotImplementedError

    @abc.abstractmethod
    def add_content(self, role: str, text: str) -> None:
        """
        Adds a new piece of text content to the conversation history.

        Args:
            role: The role of the author, must be 'user' or 'model'.
            text: The text message to add to the history.
        """
        raise NotImplementedError

    @abc.abstractmethod
    async def produce_action_stream(self, mode: str) -> AsyncGenerator[Action, None]:
        """
        Generates a stream of structured actions from the model.

        This method constructs the context based on the specified mode and streams
        the response.
        It is designed to yield a dictionary for each complete JSON object received from the model.

        Args:
            mode: The context mode for generation, either 'video' or 'summary'.

        Yields:
            A dictionary representing a single structured action from the model's streamed response.

        Raises:
            RuntimeError: If `mode` is 'summary' and the `summary_ready` flag is False.
        """
        # The 'yield' keyword makes this a generator, matching the signature.
        # This is a placeholder and will not be executed in the interface.
        raise NotImplementedError
