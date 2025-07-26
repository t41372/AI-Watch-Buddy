import os
import time
from typing import AsyncGenerator, Dict, List, Optional

from google import genai
from google.genai.types import File, Content, Part, FileData, GenerateContentConfig

from .text_stream_to_action import str_stream_to_actions
from .video_action_agent_interface import VideoActionAgentInterface
from ..prompts.action_gen_prompt import action_generation_prompt
from ..prompts.character_prompts import cute_prompt


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
        self._client = genai.Client(api_key=api_key or os.getenv("GEMINI_API_KEY"))
        self._video_file: FileData | File | None = None
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
    def video_file(self) -> FileData | File | None:
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
        Processes a video from a local path or URL, uploads it, and generates a summary.
        """
        try:
            # Check if it's a URL or local file
            if video_path_or_url.startswith(("http://", "https://")):
                # Handle URL case
                self._video_file = FileData(file_uri=video_path_or_url)
            else:
                # Handle local file upload
                print(f"正在上传视频文件: {video_path_or_url}")
                self._video_file = self._client.files.upload(file=video_path_or_url)

                # Wait for processing to complete
                while self._video_file.state.name == "PROCESSING":
                    print("[处理中]..", end="", flush=True)
                    time.sleep(5)
                    self._video_file = self._client.files.get(
                        name=self._video_file.name
                    )

                if self._video_file.state.name == "FAILED":
                    raise ValueError(
                        f"Video upload failed: {self._video_file.state.name}"
                    )

            # Generate summary
            from typing import cast

            if hasattr(self._video_file, "file_uri"):
                # This is a FileData object
                video_file_data = cast(FileData, self._video_file)
                contents = [
                    Part(file_data=video_file_data),
                    Content(
                        role="user",
                        parts=[
                            Part.from_text(text="请为这个视频生成一个详细的内容摘要。")
                        ],
                    ),
                ]
            else:
                # This is a File object
                contents = [
                    self._video_file,
                    Content(
                        role="user",
                        parts=[
                            Part.from_text(text="请为这个视频生成一个详细的内容摘要。")
                        ],
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

    async def generate(self, mode: str) -> AsyncGenerator[Dict, None]:
        """
        Generates a stream of content from the model.

        Supports different modes:
        - 'summary': Generate conversational responses based on video summary
        - 'action_gen': Generate action scripts in real-time (yields text chunks)
        """
        if mode not in ["summary", "action_gen"]:
            raise ValueError("Mode must be 'summary' or 'action_gen'")

        if mode == "action_gen" and not self._video_file:
            raise RuntimeError(
                "Video file is not ready. Call get_video_summary() first."
            )

        if mode == "summary" and not self._summary_ready:
            raise RuntimeError("Summary is not ready. Call get_video_summary() first.")

        # Build contents based on mode
        contents = []

        if mode == "action_gen" and self._video_file:
            # For action generation, use original video file
            if hasattr(self._video_file, "file_uri"):
                # This is a FileData object
                from typing import cast

                video_file_data = cast(FileData, self._video_file)
                contents.extend(
                    [
                        Part(file_data=video_file_data),
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
            else:
                # This is a File object, convert to content directly
                contents.extend(
                    [
                        self._video_file,
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
            # For conversation, use text summary
            contents.append(
                Content(
                    role="user",
                    parts=[
                        Part.from_text(
                            text=f"基于以下视频摘要进行对话:\n{self._summary}"
                        )
                    ],
                )
            )
            # Add conversation history
            contents.extend(self._contents)
            # Use conversation prompt for system instruction
            system_prompt = f"{self.persona_prompt}\n你正在与用户基于视频内容进行对话。"

        config = GenerateContentConfig(
            system_instruction=[Part.from_text(text=system_prompt)],
        )

        try:
            llm_stream = self._client.models.generate_content_stream(
                model="gemini-2.5-flash",
                contents=contents,
                config=config,
            )
            
            if mode == "action_gen":
                for action_chunk in str_stream_to_actions(llm_stream):
                    yield {"type": "action_chunk", "content": action_chunk}
            else:
                for chunk in llm_stream:
                    if chunk.text:
                        # For summary mode, yield conversational text
                        yield {"type": "text", "content": chunk.text}

        except Exception as e:
            print(f"生成内容时出错: {e}")
            yield {"type": "error", "content": str(e)}


if __name__ == "__main__":
    import asyncio

    async def test_video_analyzer():
        """Test both summary and action generation modes"""
        agent = VideoAnalyzerAgent(
            api_key=os.getenv("GEMINI_API_KEY"), persona_prompt=cute_prompt
        )

        # Test with a YouTube URL (from the sample)
        test_url = "https://www.youtube.com/watch?v=9hE5-98ZeCg"

        print("测试视频分析Agent...")

        try:
            # Generate summary first
            await agent.get_video_summary(test_url)
            print(f"摘要生成完成: {agent.summary_ready}")
            print(f"摘要内容: {agent.summary[:200]}..." if agent.summary else "无摘要")

            print("\n=== 测试 Summary 模式 ===")
            # Add user message
            agent.add_content("user", "请分析这个视频的主要内容")

            # Generate response using summary mode
            print("生成对话回复:")
            async for response in agent.generate("summary"):
                print(response.get("content", ""), end="", flush=True)

            print("\n\n=== 测试 Action Generation 模式 ===")
            # Test action generation mode
            print("生成动作脚本 (text chunks):")
            chunk_count = 0
            async for response in agent.generate("action_gen"):
                if response.get("type") == "action_chunk":
                    chunk_count += 1
                    content = response.get("content", "")
                    print(
                        f"[Chunk {chunk_count}]: {content[:100]}{'...' if len(content) > 100 else ''}"
                    )
                elif response.get("type") == "error":
                    print(f"Error: {response.get('content')}")
                    break

            print(f"\n总共收到 {chunk_count} 个文本块")

        except Exception as e:
            print(f"测试失败: {e}")

    # Run the test
    asyncio.run(test_video_analyzer())
