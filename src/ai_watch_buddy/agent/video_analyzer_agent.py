import os
import time
from typing import AsyncGenerator, List, Optional
import asyncio
from loguru import logger

from google import genai
from google.genai.types import (
    File,
    Content,
    Part,
    GenerateContentConfig,
    FileData,
    GenerateContentResponse,
)

from ..actions import Action
from .minimax_llm import oai_client
from .text_stream_to_action import str_stream_to_actions, str_stream_to_actions_openai
from .video_action_agent_interface import VideoActionAgentInterface
from ..prompts.action_gen_prompt import action_generation_prompt
from ..prompts.character_prompts import cute_prompt
from .mock_text import fake_summary, sample_json

MOCK: bool = True


class VideoAnalyzerAgent(VideoActionAgentInterface):
    """
    A concrete implementation of VideoActionAgentInterface using Google Gemini API.
    """

    def __init__(self, api_key: str | None = None, persona_prompt: str = cute_prompt):
        """
        Initialize the video analyzer agent.

        Args:
            api_key: Gemini API key, defaults to GEMINI_API_KEY environment variable
        """
        if MOCK:
            self._client = genai.Client(api_key="hi")
        else:
            self._client = genai.Client(api_key=api_key or os.getenv("GEMINI_API_KEY"))

        self._video_file: Optional[File] = None
        self._video_input: Optional[str] = None  # Will store the path or URL
        self._summary: Optional[str] = None
        self._contents: List[Content] = []
        self._summary_ready: bool = False
        self.persona_prompt = persona_prompt

    @property
    def client(
        self,
    ) -> genai.Client:  # Note: Interface says GenerativeModel but sample uses Client
        """The initialized Gemini client for API communication."""
        return self._client

    @property
    def summary_prompt(self) -> str:
        """The system prompt used for generating the video summary."""
        return self._get_summary_prompt()

    @property
    def action_prompt(self) -> str:
        """The system prompt used for generating actions"""
        return self._get_action_prompt()

    @property
    def video_file(self) -> Optional[File]:
        """The File object returned by the Gemini API after video upload."""
        return self._video_file

    @property
    def summary(self) -> Optional[str]:
        """The text summary of the video, generated on demand."""
        return self._summary

    @property
    def contents(self) -> List[Content]:
        """The conversation history stored as a list of Content objects."""
        return self._contents

    @property
    def summary_ready(self) -> bool:
        """A boolean flag indicating if the video summary has been successfully generated."""
        return self._summary_ready

    @property
    def persona(self) -> str:
        """The persona prompt used for this agent."""
        return self.persona_prompt

    def _get_summary_prompt(self) -> str:
        """Placeholder for summary prompt - to be implemented later."""
        return "You are a video analysis assistant. Please provide a comprehensive summary of the video content. Your summary should be detailed and cover all key aspects of the video. The summary should capture the changes of the video content over time. This summary will later be used to replaced actual video content in the conversation."

    def _get_action_prompt(self) -> str:
        """Placeholder for action prompt - to be implemented later."""
        return action_generation_prompt(character_settings=self.persona_prompt)

    async def get_video_summary(self, video_path_or_url: str) -> None:
        """
        Processes a video from a local path or URL, uploads it if necessary, and generates a summary.
        """
        if MOCK:
            print("MOCK 模式: 使用假的视频摘要")
            self._video_input = video_path_or_url
            self._summary = fake_summary
            self._summary_ready = True
            print("视频摘要生成完成 (MOCK)")
            print(f"摘要内容: {self._summary[:200]}...")
            return

        try:
            self._video_input = video_path_or_url  # Store for later use

            if not self._client:
                raise RuntimeError("Client not initialized (possibly in MOCK mode)")

            is_url = video_path_or_url.startswith(("http://", "https://"))

            if is_url:
                # Handle URL input
                print(f"准备使用 URL 处理视频: {video_path_or_url}")
                self._video_file = None
                file_data = FileData(file_uri=video_path_or_url, mime_type="video/mp4")
                video_part_for_api = Part(file_data=file_data)
            else:
                # Handle local file upload
                print(f"正在上传视频文件: {video_path_or_url}")
                uploaded_file = self._client.files.upload(file=video_path_or_url)

                # Wait for processing to complete
                while (
                    uploaded_file
                    and uploaded_file.state
                    and uploaded_file.state.name == "PROCESSING"
                ):
                    print("[处理中]..", end="", flush=True)
                    time.sleep(5)
                    if uploaded_file.name:
                        uploaded_file = self._client.files.get(name=uploaded_file.name)

                if (
                    uploaded_file
                    and uploaded_file.state
                    and uploaded_file.state.name == "FAILED"
                ):
                    state_name = (
                        uploaded_file.state.name if uploaded_file.state else "UNKNOWN"
                    )
                    raise ValueError(f"Video upload failed: {state_name}")

                self._video_file = uploaded_file
                video_part_for_api = self._video_file

            # Generate summary
            contents = [
                video_part_for_api,
                Content(
                    role="user",
                    parts=[Part.from_text(text="请为这个视频生成一个详细的内容摘要。")],
                ),
            ]

            config = GenerateContentConfig(
                system_instruction=[Part.from_text(text=self.summary_prompt)]
            )

            response = self._client.models.generate_content(
                model="gemini-2.5-flash", contents=contents, config=config
            )

            self._summary = response.text
            self._summary_ready = True
            print("视频摘要生成完成")
            print(f"摘要内容: {self._summary}")

        except Exception as e:
            print(f"生成视频摘要时出错: {e}")
            raise

    def add_content(self, role: str, text: str) -> None:
        """
        Adds a new piece of text content to the conversation history.
        """
        if role not in ["user", "model"]:
            raise ValueError("Role must be 'user' or 'model'")

        content = Content(role=role, parts=[Part.from_text(text=text)])
        self._contents.append(content)

    async def produce_action_stream(self, mode: str) -> AsyncGenerator[Action, None]:
        """
        Generates a stream of structured actions from the model.

        Args:
            mode: The context mode for generation, either 'video' or 'summary'.

        Yields:
            Action: A structured action from the model's streamed response.

        Raises:
            RuntimeError: If `mode` is 'summary' and the `summary_ready` flag is False.
        """
        if mode not in ["video", "summary"]:
            raise ValueError("Mode must be 'video' or 'summary'")

        if mode == "video" and not self._video_input:
            raise RuntimeError(
                "Video source is not ready. Call get_video_summary() first."
            )

        if mode == "summary" and not self._summary_ready:
            raise RuntimeError("Summary is not ready. Call get_video_summary() first.")

        # Build contents based on mode
        contents = []

        if mode == "video":
            if not self._video_input:
                raise RuntimeError("Video input not set.")

            is_url = self._video_input.startswith(("http://", "https://"))
            if is_url:
                file_data = FileData(file_uri=self._video_input, mime_type="video/mp4")
                video_part = Part(file_data=file_data)
            else:
                if not self._video_file:
                    raise RuntimeError(
                        "Local video file was not properly processed and stored."
                    )
                video_part = self._video_file

            # For video mode, use original video file or URL
            contents.extend(
                [
                    video_part,
                    Content(
                        role="user",
                        parts=[
                            Part.from_text(
                                text="请为这个视频生成详细的动作脚本，按照指定的JSON格式输出。"
                            )
                        ],
                    ),
                ]
            )
            # Use action prompt for system instruction
            system_prompt = self.action_prompt
        elif mode == "summary" and self._summary:
            # For summary mode, use text summary
            logger.critical(">>>> MINIMAX")
            response = oai_client.chat.completions.create(
                model="MiniMax-M1",
                messages=[
                    {"role": "system", "content": self.action_prompt},
                    {
                        "role": "user",
                        "content": f"基于以下视频摘要，生成 action:\n{self._summary}",
                    },
                ],
                stream=True,
            )
            for action in str_stream_to_actions_openai(response):
                yield action
            return
        else:
            # This case should not be reached due to initial checks, but as a fallback:
            system_prompt = self.action_prompt

        config = GenerateContentConfig(
            system_instruction=[Part.from_text(text=system_prompt)],
        )

        try:
            if MOCK:
                # Mock 模式：创建假的流来模拟 Gemini API 响应
                print("MOCK 模式: 使用假的 action stream")

                # 创建一个模拟的流生成器
                def create_mock_stream():
                    # 将 sample_json 按字符分块发送，模拟流式响应
                    chunk_size = 50  # 每次发送50个字符
                    text = sample_json

                    for i in range(0, len(text), chunk_size):
                        chunk = text[i : i + chunk_size]
                        # 创建模拟的 GenerateContentResponse 对象
                        # 使用一个简单的类来模拟响应结构
                        mock_response = type(
                            "MockGenerateContentResponse",
                            (),
                            {"text": chunk, "candidates": None, "usage_metadata": None},
                        )()
                        yield mock_response

                mock_stream = create_mock_stream()

                # 使用类型转换来匹配预期类型，因为我们的 mock 对象实现了所需的接口
                from typing import cast, Iterator

                typed_mock_stream = cast(Iterator[GenerateContentResponse], mock_stream)

                # 使用模拟流来生成 actions
                for action in str_stream_to_actions(typed_mock_stream):
                    yield action
                return

            #!+=======================
            if not self._client:
                raise RuntimeError("Client not initialized (possibly in MOCK mode)")

            llm_stream = self._client.models.generate_content_stream(
                model="gemini-2.5-flash",
                contents=contents,
                config=config,
            )

            # Use the text_stream_to_action function to parse actions
            for action in str_stream_to_actions(llm_stream):
                yield action

        except Exception as e:
            print(f"生成内容时出错: {e}")
            # For error cases, we can't yield anything since the interface expects Action objects
            raise


if __name__ == "__main__":
    import asyncio

    async def test_video_analyzer():
        """Test both summary and video action generation modes"""
        agent = VideoAnalyzerAgent(
            api_key=os.getenv("GEMINI_API_KEY"), persona_prompt=cute_prompt
        )

        # Test with a local video file
        test_video = "/Users/tim/LocalData/coding/2025/Projects/AdventureX/2-AI-WatchBuddy/ai_watch_buddy/video_cache/【官方 MV】Never Gonna Give You Up - Rick Astley.mp4"

        print("测试视频分析Agent...")

        try:
            # Generate summary first
            await agent.get_video_summary(test_video)
            print(f"摘要生成完成: {agent.summary_ready}")
            print(f"摘要内容: {agent.summary[:200]}..." if agent.summary else "无摘要")

            print("\n=== 测试 Summary 模式 ===")
            # Add user message
            agent.add_content("user", "请分析这个视频的主要内容")

            # Generate response using summary mode
            print("生成基于摘要的动作:")
            action_count = 0
            async for action in agent.produce_action_stream("summary"):
                action_count += 1
                print(
                    f"[Action {action_count}]: {action.action_type} - {action.comment}"
                )
                if (
                    action.action_type == "SPEAK"
                    and hasattr(action, "text")
                    and action.text
                ):
                    print(
                        f"  Text: {action.text[:100]}{'...' if len(action.text) > 100 else ''}"
                    )
                elif action.action_type == "PAUSE":
                    print(f"  Duration: {action.duration_seconds}s")
                elif action.action_type == "SEEK":
                    print(
                        f"  Target: {action.target_timestamp}s, Behavior: {action.post_seek_behavior}"
                    )
                elif action.action_type == "REPLAY_SEGMENT":
                    print(
                        f"  Replay: {action.start_timestamp}s - {action.end_timestamp}s"
                    )

            print(f"\n基于摘要生成了 {action_count} 个动作")

            print("\n=== 测试 Video 模式 ===")
            # Test video mode
            print("生成基于视频的动作:")
            action_count = 0
            async for action in agent.produce_action_stream("video"):
                action_count += 1
                print(
                    f"[Action {action_count}]: {action.action_type} - {action.comment}"
                )
                if (
                    action.action_type == "SPEAK"
                    and hasattr(action, "text")
                    and action.text
                ):
                    print(
                        f"  Text: {action.text[:100]}{'...' if len(action.text) > 100 else ''}"
                    )
                elif action.action_type == "PAUSE":
                    print(f"  Duration: {action.duration_seconds}s")
                elif action.action_type == "SEEK":
                    print(
                        f"  Target: {action.target_timestamp}s, Behavior: {action.post_seek_behavior}"
                    )
                elif action.action_type == "REPLAY_SEGMENT":
                    print(
                        f"  Replay: {action.start_timestamp}s - {action.end_timestamp}s"
                    )

                # Limit output for demo
                if action_count >= 5:
                    print("(限制输出，只显示前5个动作)")
                    break

            print(f"\n基于视频生成了 {action_count} 个动作")

        except Exception as e:
            print(f"测试失败: {e}")
            import traceback

            traceback.print_exc()

    # Run the test
    asyncio.run(test_video_analyzer())
