import json
from collections.abc import Iterator, Generator
from json_repair import repair_json
from pydantic import ValidationError, TypeAdapter
from google.genai.types import GenerateContentResponse
from typing import Union

from ..actions import Action


def str_stream_to_actions_openai(
    llm_stream,  # OpenAI Stream[ChatCompletionChunk]
) -> Generator[Action, None, None]:
    """
    从 OpenAI/MiniMax LLM 传入的 str 流中，流式解析并 yield 出 Action 对象。

    该函数会逐步解析LLM输出的JSON数组，每当解析出完整的Action对象时就立即验证并yield。
    这样可以实现真正的流式处理，而不需要等待整个响应完成。

    Args:
        llm_stream: OpenAI/MiniMax 输出的字符串流，预期格式为JSON数组

    Yields:
        Action: 解析并验证后的Action对象

    注意:
        - 会自动跳过```json等markdown代码块标记
        - 使用json_repair库处理可能的JSON格式问题
        - 解析失败的Action会被跳过并打印错误信息
    """
    buffer = ""
    in_json_array = False
    brace_count = 0
    current_action_buffer = ""
    action_adapter = TypeAdapter(Action)

    for chunk in llm_stream:
        # Extract text from OpenAI ChatCompletionChunk
        if hasattr(chunk, 'choices') and chunk.choices:
            delta = chunk.choices[0].delta
            if hasattr(delta, 'content') and delta.content:
                text = delta.content
            else:
                text = ""
        else:
            text = ""
            
        print(text, end="", flush=True)
        buffer += text

        # 如果还没有找到JSON数组的开始，寻找 '['
        if not in_json_array:
            # 跳过可能的 ```json 前缀
            json_start = buffer.find("[")
            if json_start != -1:
                buffer = buffer[json_start:]
                in_json_array = True
                brace_count = 0
            else:
                continue

        # 逐字符处理buffer中的内容
        i = 0
        while i < len(buffer):
            char = buffer[i]

            if char == "{":
                if brace_count == 0:
                    # 开始一个新的Action对象
                    current_action_buffer = "{"
                else:
                    current_action_buffer += char
                brace_count += 1

            elif char == "}":
                current_action_buffer += char
                brace_count -= 1

                if brace_count == 0:
                    # 完成了一个Action对象的解析
                    try:
                        # 尝试修复可能的JSON格式问题
                        repaired_json = repair_json(current_action_buffer)
                        # 解析并验证Action
                        action_dict = json.loads(repaired_json)
                        action = action_adapter.validate_python(action_dict)
                        yield action
                    except (json.JSONDecodeError, ValidationError) as e:
                        # 如果解析失败，记录错误但继续处理后续内容
                        print(f"Failed to parse action: {e}")
                        print(f"Raw JSON: {current_action_buffer}")

                    current_action_buffer = ""

            elif brace_count > 0:
                # 在Action对象内部，添加字符
                current_action_buffer += char

            elif char == "]":
                # JSON数组结束
                break

            i += 1

        # 更新buffer，移除已处理的部分
        if i > 0:
            buffer = buffer[i:]


def str_stream_to_actions(
    llm_stream: Iterator[GenerateContentResponse],
) -> Generator[Action, None, None]:
    """
    从 LLM 传入的 str 流中，流式解析并 yield 出 Action 对象。

    该函数会逐步解析LLM输出的JSON数组，每当解析出完整的Action对象时就立即验证并yield。
    这样可以实现真正的流式处理，而不需要等待整个响应完成。

    Args:
        llm_stream: LLM输出的字符串流，预期格式为JSON数组

    Yields:
        Action: 解析并验证后的Action对象

    注意:
        - 会自动跳过```json等markdown代码块标记
        - 使用json_repair库处理可能的JSON格式问题
        - 解析失败的Action会被跳过并打印错误信息
    """
    buffer = ""
    in_json_array = False
    brace_count = 0
    current_action_buffer = ""
    action_adapter = TypeAdapter(Action)

    for response in llm_stream:
        # Extract text from GenerateContentResponse
        chunk = response.text if response.text else ""
        print(chunk, end="", flush=True)
        buffer += chunk

        # 如果还没有找到JSON数组的开始，寻找 '['
        if not in_json_array:
            # 跳过可能的 ```json 前缀
            json_start = buffer.find("[")
            if json_start != -1:
                buffer = buffer[json_start:]
                in_json_array = True
                brace_count = 0
            else:
                continue

        # 逐字符处理buffer中的内容
        i = 0
        while i < len(buffer):
            char = buffer[i]

            if char == "{":
                if brace_count == 0:
                    # 开始一个新的Action对象
                    current_action_buffer = "{"
                else:
                    current_action_buffer += char
                brace_count += 1

            elif char == "}":
                current_action_buffer += char
                brace_count -= 1

                if brace_count == 0:
                    # 完成了一个Action对象的解析
                    try:
                        # 尝试修复可能的JSON格式问题
                        repaired_json = repair_json(current_action_buffer)
                        # 解析并验证Action
                        action_dict = json.loads(repaired_json)
                        action = action_adapter.validate_python(action_dict)
                        yield action
                    except (json.JSONDecodeError, ValidationError) as e:
                        # 如果解析失败，记录错误但继续处理后续内容
                        print(f"Failed to parse action: {e}")
                        print(f"Raw JSON: {current_action_buffer}")

                    current_action_buffer = ""

            elif brace_count > 0:
                # 在Action对象内部，添加字符
                current_action_buffer += char

            elif char == "]":
                # JSON数组结束
                break

            i += 1

        # 更新buffer，移除已处理的部分
        if i > 0:
            buffer = buffer[i:]
