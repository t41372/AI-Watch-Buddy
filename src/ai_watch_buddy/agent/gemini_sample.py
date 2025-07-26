# import os
# from google import genai
# from google.genai import types


# client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

# video_file = client.files.upload(
#     file="video_cache/【官方 MV】Never Gonna Give You Up - Rick Astley.mp4"
# )


# response = client.models.generate_content(
#     model="gemini-2.5-flash",
#     contents=["这个视频是关于什么的? 请批判性的分析视频内容"],
#     config=types.GenerateContentConfig(
#         system_instruction="I say high, you say low",
#     ),
# )


# =====================


# To run this code you need to install the following dependencies:
# pip install google-genai

import base64
import os
from google import genai
from google.genai import types

# 聊天历史是 list[types.Content]


class GeminiCore:
    def __init__(self, api_key: str | None = os.getenv("GEMINI_API_KEY")):
        """
        初始化 GeminiCore 类，设置 API 密钥。

        Args:
            api_key (str | None): Gemini API 密钥，默认为环境变量中的值。
        """
        self.client = genai.Client(api_key=api_key)


def upload_video(video_path: str, client: genai.Client) -> types.File:
    """
    上传视频文件到 Gemini，并返回 FileData 对象。

    Args:
        video_path (str): 视频文件的本地路径。

    Returns:
        types.FileData: 上传后的视频文件数据对象。
    """
    print(f"正在上传视频文件: {video_path}")
    video_file = client.files.upload(file=video_path)
    import time

    # Wait until the uploaded video is available
    while video_file.state.name == "PROCESSING":
        print("[继续上传]..", end="", flush=True)
        time.sleep(5)
        video_file = client.files.get(name=video_file.name)

    if video_file.state.name == "FAILED":
        raise ValueError(video_file.state.name)

    # 拿到的 video_file 是一个 File 对象
    return video_file


def generate(
    gemini_api_key: str | None = os.getenv("GEMINI_API_KEY"),
    system_instruction: str = "You are a helpful assistant.",
    video_uri: str = "https://www.youtube.com/watch?v=9hE5-98ZeCg",
) -> None:
    client = genai.Client(api_key=gemini_api_key)

    vid_from_yt = types.FileData(file_uri=video_uri)

    model = "gemini-2.5-flash"
    contents = [
        # video_file,
        types.Part(file_data=vid_from_yt),
        types.Content(
            role="user",
            parts=[
                types.Part.from_text(text="""你好，请帮我分析这个视频的内容。"""),
            ],
        ),
        types.Content(
            role="model",
            parts=[
                types.Part.from_text(text=""""""),
                types.Part.from_text(
                    text="""你好，我立刻开始分析视频内容。我会根据你的要求，分析视频后，在我说的所有话中的尾部添加上 "喵～～" 的口癖，因为我是一只可爱的猫娘视频观众喵～"""
                ),
            ],
        ),
        types.Content(
            role="user",
            parts=[
                types.Part.from_text(text="""好的。请分析视频内容"""),
            ],
        ),
    ]
    print(contents)
    generate_content_config = types.GenerateContentConfig(
        thinking_config=types.ThinkingConfig(
            thinking_budget=-1,
        ),
        system_instruction=[
            types.Part.from_text(text=system_instruction),
        ],
    )
    print("开始生成内容...")

    for chunk in client.models.generate_content_stream(
        model=model,
        contents=contents,
        config=generate_content_config,
    ):
        print(chunk.text, end="", flush=True)


if __name__ == "__main__":
    generate()
