"""
TTS集成测试文件 - Base64版本
演示如何使用TTS生成器处理视频分析结果
支持用户交互式选择语音音色，输出base64音频数据
"""

from tts_generator import TTSGenerator, quick_video_to_speech
import os
import json
import base64
from datetime import datetime
from pathlib import Path

from tts_generator import TTSGenerator, quick_video_to_speech
import os
import json
import base64
from datetime import datetime
from pathlib import Path


class TTSBase64Manager:
    """TTS Base64管理器，基于MiniMax TTS引擎，输出base64音频数据"""

    def __init__(self):
        self.tts_generator = TTSGenerator()
        print("✅ TTS Base64管理器初始化成功 (MiniMax)")

    def generate_speech_base64(self, text: str, voice_id: str = None) -> dict:
        """
        生成语音的base64数据

        Args:
            text: 要转换的文本
            voice_id: 语音ID

        Returns:
            dict: 包含结果信息的字典
        """
        try:
            print(f"🔄 生成语音: {text[:30]}... (使用MiniMax TTS)")

            # 使用现有的generate_single_audio方法，但不保存文件
            audio_bytes = self.tts_generator.generate_single_audio(
                text=text,
                voice_id=voice_id,
                output_path=None,  # 不保存文件
            )

            if audio_bytes:
                base64_audio = base64.b64encode(audio_bytes).decode("utf-8")
                return {
                    "success": True,
                    "text": text,
                    "voice_id": voice_id or self.tts_generator.default_voice_id,
                    "base64_audio": base64_audio,
                    "audio_length": len(base64_audio),
                    "audio_size_bytes": len(audio_bytes),
                    "timestamp": datetime.now().isoformat(),
                }
            else:
                return {
                    "success": False,
                    "text": text,
                    "voice_id": voice_id,
                    "error": "语音生成失败",
                    "timestamp": datetime.now().isoformat(),
                }

        except Exception as e:
            print(f"❌ 语音生成异常: {e}")
            return {
                "success": False,
                "text": text,
                "voice_id": voice_id,
                "error": str(e),
                "timestamp": datetime.now().isoformat(),
            }

    def process_text_batch(self, texts: list, voice_id: str = None) -> dict:
        """
        批量处理文本生成语音base64数据

        Args:
            texts: 文本列表
            voice_id: 语音ID

        Returns:
            dict: 批量处理结果
        """
        results = []
        successful_count = 0

        print(f"\n🎵 开始批量生成语音 (共 {len(texts)} 条) - MiniMax TTS")
        print("=" * 60)

        for i, text in enumerate(texts, 1):
            print(f"🔄 处理 {i}/{len(texts)}: {text[:40]}...")

            result = self.generate_speech_base64(text, voice_id)
            results.append(result)

            if result["success"]:
                successful_count += 1
                print(
                    f"✅ 成功 - 音频长度: {result['audio_length']} 字符 ({result['audio_size_bytes']} bytes)"
                )
            else:
                print(f"❌ 失败 - {result['error']}")

        return {
            "success": True,
            "total_texts": len(texts),
            "successful_generations": successful_count,
            "results": results,
            "voice_id": voice_id or self.tts_generator.default_voice_id,
            "timestamp": datetime.now().isoformat(),
        }


def get_user_voice_choice():
    """
    交互式获取用户选择的语音
    返回选择的语音ID和名称
    """
    print("\n🎤 选择语音音色")
    print("=" * 40)

    # MiniMax推荐音色选项
    voice_options = [
        {"id": "female-zh", "name": "女声1 - 官方中文女声", "desc": "中文, 女声"},
        {"id": "male-zh", "name": "男声1 - 官方中文男声", "desc": "中文, 男声"},
        {"id": "female-en", "name": "女声2 - 英文女声", "desc": "英文, 女声"},
        {"id": "male-en", "name": "男声2 - 英文男声", "desc": "英文, 男声"},
    ]

    print("📋 推荐音色选项:")
    for i, voice in enumerate(voice_options, 1):
        print(f"{i}. {voice['name']} - {voice['desc']}")
        print("-" * 30)
    print(f"{len(voice_options) + 1}. 查看所有可用音色")
    print(f"{len(voice_options) + 2}. 使用默认音色 (女声1)")

    while True:
        try:
            choice = input(f"\n请选择音色 (1-{len(voice_options) + 2}): ").strip()
            if not choice:
                print("⚠️  请输入选择")
                continue
            choice_num = int(choice)
            if 1 <= choice_num <= len(voice_options):
                selected_voice = voice_options[choice_num - 1]
                print(
                    f"\n✅ 您选择了: {selected_voice['name']} - {selected_voice['desc']}"
                )
                return selected_voice["id"], selected_voice["name"]
            elif choice_num == len(voice_options) + 1:
                # 查看所有可用音色
                return get_all_voices_choice()
            elif choice_num == len(voice_options) + 2:
                # 使用默认音色
                print(f"\n✅ 使用默认音色: 女声1")
                return None, "女声1 (默认)"
            else:
                print(f"⚠️  请输入 1 到 {len(voice_options) + 2} 之间的数字")
        except ValueError:
            print("⚠️  请输入有效的数字")
        except KeyboardInterrupt:
            print("\n\n⚠️  用户取消选择，使用默认音色")
            return None, "女声1 (默认)"


def get_all_voices_choice():
    """
    显示所有可用语音供用户选择
    """
    try:
        print("\n🔄 获取所有可用语音...")
        tts_gen = TTSGenerator()
        voices = tts_gen.get_available_voices()
        if not voices:
            print("❌ 无法获取语音列表，使用默认语音")
            return None, "George (默认)"
        print(f"\n🎤 所有可用语音 (共 {len(voices)} 个):")
        print("=" * 60)
        for i, voice in enumerate(voices, 1):
            print(f"{i:2d}. {voice['name']} ({voice['voice_id']})")
            if voice["description"]:
                print(f"     描述: {voice['description']}")
            print("-" * 40)
        print(f"{len(voices) + 1}. 返回推荐列表")
        print(f"{len(voices) + 2}. 使用默认语音")
        while True:
            try:
                choice = input(f"\n请选择语音 (1-{len(voices) + 2}): ").strip()
                if not choice:
                    continue
                choice_num = int(choice)
                if 1 <= choice_num <= len(voices):
                    selected_voice = voices[choice_num - 1]
                    print(f"\n✅ 您选择了: {selected_voice['name']}")
                    return selected_voice["voice_id"], selected_voice["name"]
                elif choice_num == len(voices) + 1:
                    return get_user_voice_choice()  # 返回推荐列表
                elif choice_num == len(voices) + 2:
                    print(f"\n✅ 使用默认语音: George")
                    return None, "George (默认)"
                else:
                    print(f"⚠️  请输入 1 到 {len(voices) + 2} 之间的数字")
            except ValueError:
                print("⚠️  请输入有效的数字")
            except KeyboardInterrupt:
                print("\n\n⚠️  用户取消选择，使用默认语音")
                return None, "George (默认)"
    except Exception as e:
        print(f"❌ 获取语音列表失败: {e}")
        print("使用默认语音")
        return None, "George (默认)"


def preview_voice_sample(voice_id, voice_name):
    """
    预览语音样本 - 生成base64数据版本
    """
    try:
        print(f"\n🔊 正在生成 {voice_name} 的语音预览...")

        sample_texts = [
            "你好，欢迎观看今天的视频内容！",
            "哈哈哈这也太搞笑了吧！",
            "呜呜呜好感动啊！",
        ]

        tts_manager = TTSBase64Manager()
        preview_results = []

        for i, text in enumerate(sample_texts, 1):
            print(f"  生成样本 {i}/3: {text}")

            import asyncio

            result = tts_manager.generate_speech_base64(text, voice_id)

            if result["success"]:
                preview_results.append(result)
                print(f"    ✅ 生成成功 - 音频长度: {result['audio_length']} 字符")

                # 保存预览数据到JSON文件
                output_file = f"./test_output/voice_preview_{voice_name.replace(' ', '_')}_{i}.json"
                os.makedirs("./test_output", exist_ok=True)
                with open(output_file, "w", encoding="utf-8") as f:
                    json.dump(result, f, ensure_ascii=False, indent=2)
                print(f"    💾 预览数据已保存: {output_file}")
            else:
                print(f"    ❌ 生成失败: {result['error']}")

        print(f"\n💡 语音预览完成，生成了 {len(preview_results)} 个样本")
        print("💡 所有音频数据都以base64格式保存，可直接用于WebSocket传输")

        # 询问是否确认使用此语音
        while True:
            confirm = input(f"\n确认使用 {voice_name} 语音吗？(y/n): ").strip().lower()
            if confirm in ["y", "yes", "是", "确认"]:
                return True
            elif confirm in ["n", "no", "否", "取消"]:
                return False
            else:
                print("请输入 y/n")

    except Exception as e:
        print(f"❌ 语音预览失败: {e}")
        return True  # 预览失败时默认确认使用


def test_simple_base64_tts():
    """测试简单的Base64 TTS功能"""
    print("\n📍 测试1: 简单Base64 TTS功能")
    print("=" * 50)

    tts_manager = TTSBase64Manager()

    # 选择语音
    voice_id, voice_name = get_user_voice_choice()

    # 测试文本
    test_texts = [
        "你好，我是你的AI语音陪伴！",
        "哈哈哈这个视频太搞笑了！",
        "呜呜呜好感动，我都要哭了！",
        "诶？这是什么情况？我有点懵！",
    ]

    print(f"\n🧪 使用 {voice_name} 测试 {len(test_texts)} 条文本...")

    # 批量处理
    result = tts_manager.process_text_batch(test_texts, voice_id)

    if result["success"]:
        print(f"\n🎉 批量处理完成！")
        print(
            f"📊 成功生成: {result['successful_generations']}/{result['total_texts']}"
        )

        # 保存结果到文件
        output_file = f"./test_output/tts_base64_result_{datetime.now().strftime('%Y%m%d_%H%M%S')}.json"
        os.makedirs("./test_output", exist_ok=True)

        with open(output_file, "w", encoding="utf-8") as f:
            json.dump(result, f, ensure_ascii=False, indent=2)

        print(f"💾 Base64结果已保存到: {output_file}")

        # 显示部分结果信息
        print(f"\n📋 结果预览:")
        for i, res in enumerate(result["results"][:2], 1):
            if res["success"]:
                print(f"  {i}. 文本: {res['text'][:30]}...")
                print(f"     音频长度: {res['audio_length']} 字符")
                print(f"     音频大小: {res['audio_size_bytes']} bytes")
                print(f"     base64前缀: {res['base64_audio'][:50]}...")
            else:
                print(f"  {i}. 失败: {res['error']}")

        print(f"\n💡 所有音频数据都以base64格式存储，可直接用于WebSocket传输")
    else:
        print(f"❌ 批量处理失败")


def test_video_reaction_base64():
    """模拟视频反应的Base64 TTS处理"""
    print("\n📍 测试2: 模拟视频反应Base64 TTS")
    print("=" * 50)

    tts_manager = TTSBase64Manager()

    # 选择语音
    voice_id, voice_name = get_user_voice_choice()

    # 模拟视频分析结果
    mock_video_reactions = [
        {"timestamp": 0.0, "text": "哇！这个视频开始了！我好期待啊！"},
        {"timestamp": 15.2, "text": "哈哈哈哈！这也太搞笑了吧！"},
        {"timestamp": 32.5, "text": "诶？这个转折我没想到！"},
        {"timestamp": 48.7, "text": "呜呜呜，好感动啊，我都要哭了！"},
        {"timestamp": 65.1, "text": "等等等等，这是什么神操作？"},
        {"timestamp": 80.3, "text": "太厉害了！我学到了新东西！"},
        {"timestamp": 95.8, "text": "这个视频真的很棒，谢谢分享！"},
    ]

    print(f"\n🎬 模拟处理 {len(mock_video_reactions)} 个视频反应...")
    print(f"🎵 使用语音: {voice_name}")

    # 提取文本
    texts = [reaction["text"] for reaction in mock_video_reactions]

    # 批量生成
    result = tts_manager.process_text_batch(texts, voice_id)

    if result["success"]:
        # 合并时间戳信息
        enhanced_results = []
        for i, (reaction, tts_result) in enumerate(
            zip(mock_video_reactions, result["results"])
        ):
            enhanced_result = {
                **tts_result,
                "timestamp": reaction["timestamp"],
                "reaction_index": i,
            }
            enhanced_results.append(enhanced_result)

        # 保存完整结果
        output_data = {
            "video_info": {
                "total_reactions": len(mock_video_reactions),
                "voice_used": voice_name,
                "voice_id": voice_id or tts_manager.tts_generator.default_voice_id,
                "processing_time": datetime.now().isoformat(),
            },
            "tts_summary": {
                "total_texts": result["total_texts"],
                "successful_generations": result["successful_generations"],
                "success_rate": f"{(result['successful_generations'] / result['total_texts'] * 100):.1f}%",
            },
            "reactions": enhanced_results,
        }

        output_file = f"./test_output/video_reaction_base64_{datetime.now().strftime('%Y%m%d_%H%M%S')}.json"
        os.makedirs("./test_output", exist_ok=True)

        with open(output_file, "w", encoding="utf-8") as f:
            json.dump(output_data, f, ensure_ascii=False, indent=2)

        print(f"\n🎉 视频反应Base64 TTS处理完成！")
        print(f"📊 成功率: {output_data['tts_summary']['success_rate']}")
        print(f"💾 完整结果已保存到: {output_file}")

        # 显示时间轴预览
        print(f"\n⏰ 反应时间轴预览:")
        for reaction in enhanced_results[:3]:
            if reaction["success"]:
                print(f"  {reaction['timestamp']:>6.1f}s: {reaction['text'][:40]}...")
                print(
                    f"           音频: {reaction['audio_size_bytes']} bytes -> {reaction['audio_length']} chars (base64)"
                )
            else:
                print(f"  {reaction['timestamp']:>6.1f}s: ❌ {reaction['error']}")

        print(f"\n💡 所有音频数据都以base64格式存储，适合WebSocket实时传输")
    else:
        print(f"❌ 视频反应Base64 TTS处理失败")


def test_video_to_speech_base64():
    """测试视频分析 + Base64 TTS语音生成完整流程"""

    # 配置参数
    video_path = r"C:\Users\86182\Desktop\31182686022-1-192.mp4"  # 你的视频路径
    output_dir = "./batch_test_output_base64"  # 输出目录

    print("🎬🎵 开始视频分析 + Base64 TTS语音生成测试")
    print("=" * 60)

    # 用户选择语音
    print("\n🎤 首先选择您喜欢的语音音色...")
    voice_id, voice_name = get_user_voice_choice()

    # 是否要预览语音样本
    if voice_id:  # 如果选择了非默认语音
        preview_choice = (
            input(f"\n是否要预览 {voice_name} 的语音样本？(y/n): ").strip().lower()
        )
        if preview_choice in ["y", "yes", "是"]:
            if not preview_voice_sample(voice_id, voice_name):
                print("重新选择语音...")
                voice_id, voice_name = get_user_voice_choice()

    print(f"\n🎵 将使用语音: {voice_name}")
    if voice_id:
        print(f"🆔 语音ID: {voice_id}")

    # 系统提示词（使用你之前优化过的）
    system_prompt = """# SYSTEM PROMPT

You are reacting to a video with your human friend (the user). Your task is to generate a "Reaction Script" in JSON format that details the sequence of actions you will take while watching a video. Your reaction should be natural, engaging, and feel like a real person watching and commenting.

## 角色设定
下面你将扮演的角色具有以下特征：

**核心人设：**

**语言风格：**

**反应特点：**

## 输出规则
**RULES:**
1. You MUST output a valid JSON object that strictly adheres to the provided JSON Schema.
2. Your output MUST be a single JSON object, starting with { and ending with }.
3. Use the comment field in each action object to explain your thought process.
4. Make your speech (text in SPEAK actions) lively and in character as defined.
5. The final action MUST be "END_REACTION" or "ASK_USER".

**JSON SCHEMA:** [省略具体schema以节省空间]
"""

    user_prompt = "请分析这个视频中的主要动作和情感变化，为桌宠生成相应的反应动作。"

    try:
        print(f"\n📍 开始处理视频，使用语音: {voice_name}")

        # 1. 创建TTS管理器
        tts_manager = TTSBase64Manager()

        # 2. 使用现有的视频分析功能
        from ai_watch_buddy.prompts.video_analyzer import invoke_gemini_vids

        print("🎬 开始视频分析...")
        analysis_result = invoke_gemini_vids(
            video_path=video_path, system_prompt=system_prompt, user_prompt=user_prompt
        )

        if not analysis_result.get("success"):
            print(f"❌ 视频分析失败: {analysis_result.get('error', '未知错误')}")
            return

        # 3. 提取所有SPEAK动作的文本
        action_list = analysis_result["action_list"]
        speak_actions = [
            action for action in action_list if action.get("action_type") == "SPEAK"
        ]

        if not speak_actions:
            print("❌ 未找到任何SPEAK动作")
            return

        print(f"🗣️  找到 {len(speak_actions)} 条语音动作")

        # 4. 提取文本并批量生成base64音频
        texts = [
            action.get("text", "").strip()
            for action in speak_actions
            if action.get("text", "").strip()
        ]

        import asyncio

        batch_result = tts_manager.process_text_batch(texts, voice_id)

        if batch_result["success"]:
            # 5. 合并时间戳和其他信息
            enhanced_results = []
            for i, (action, tts_result) in enumerate(
                zip(speak_actions, batch_result["results"])
            ):
                enhanced_result = {
                    **tts_result,
                    "action_id": action.get("id"),
                    "timestamp": action.get("trigger_timestamp", 0),
                    "action_index": i,
                    "comment": action.get("comment", ""),
                }
                enhanced_results.append(enhanced_result)

            # 6. 创建完整的输出数据
            complete_result = {
                "video_info": {
                    "video_path": video_path,
                    "total_actions": len(action_list),
                    "speak_actions": len(speak_actions),
                    "voice_used": voice_name,
                    "voice_id": voice_id or tts_manager.tts_generator.default_voice_id,
                    "processing_time": datetime.now().isoformat(),
                },
                "tts_summary": {
                    "total_texts": batch_result["total_texts"],
                    "successful_generations": batch_result["successful_generations"],
                    "success_rate": f"{(batch_result['successful_generations'] / batch_result['total_texts'] * 100):.1f}%",
                },
                "audio_data": enhanced_results,
                "original_actions": action_list,  # 保留原始动作列表
            }

            # 7. 保存结果
            os.makedirs(output_dir, exist_ok=True)
            output_file = f"{output_dir}/video_tts_base64_{datetime.now().strftime('%Y%m%d_%H%M%S')}.json"

            with open(output_file, "w", encoding="utf-8") as f:
                json.dump(complete_result, f, ensure_ascii=False, indent=2)

            print(f"\n✅ 视频分析 + Base64 TTS处理成功！")
            print(f"🎵 使用语音: {voice_name}")
            print(f"📁 输出文件: {output_file}")
            print(
                f"🎵 成功生成: {batch_result['successful_generations']}/{batch_result['total_texts']} 个base64音频"
            )
            print(f"� 成功率: {complete_result['tts_summary']['success_rate']}")

            # 显示部分生成的结果
            print(f"\n📄 生成的音频数据示例:")
            for i, audio_data in enumerate(enhanced_results[:3]):
                if audio_data["success"]:
                    print(f"  {i + 1}. 时间: {audio_data['timestamp']}s")
                    print(f"     文本: {audio_data['text'][:40]}...")
                    print(
                        f"     音频: {audio_data['audio_size_bytes']} bytes -> {audio_data['audio_length']} chars (base64)"
                    )
                else:
                    print(f"  {i + 1}. ❌ 失败: {audio_data['error']}")

            if len(enhanced_results) > 3:
                print(f"     ... 还有 {len(enhanced_results) - 3} 个音频数据")

            print(f"\n💡 所有音频数据都以base64格式存储，可直接用于WebSocket传输")

        else:
            print(f"❌ 批量TTS处理失败")

    except Exception as e:
        print(f"❌ 处理异常: {e}")
        import traceback

        traceback.print_exc()


def test_custom_voice_comparison():
    """测试多种语音对比"""

    print("\n📍 语音对比测试")
    print("=" * 40)

    # 测试文本
    test_text = "哈哈哈这也太搞笑了吧！我笑死了！"

    # 多个语音进行对比
    voice_options = [
        ("JBFqnCBsd6RMkjVDRZzb", "George"),
        ("EXAVITQu4vr4xnSDxMaL", "Sarah"),
        ("cgSgspJ2msm6clMCkdW9", "Jessica"),
        ("TX3LPaxmHKxFdv7VOQHJ", "Liam"),
    ]

    try:
        tts_gen = TTSGenerator()

        print(f"🧪 用文本 '{test_text}' 测试不同语音:")
        print("-" * 50)

        for voice_id, voice_name in voice_options:
            print(f"\n🎤 测试语音: {voice_name}")

            output_path = f"./test_output/comparison_{voice_name.lower()}.mp3"
            audio = tts_gen.generate_single_audio(
                text=test_text,
                voice_id=voice_id,
                output_path=output_path,
                play_audio=False,
            )

            if audio:
                print(f"✅ 生成成功: {output_path}")
            else:
                print(f"❌ 生成失败")

        print(f"\n💡 对比文件已保存到 ./test_output/ 目录")
        print("可以播放这些文件来对比不同语音的效果")

    except Exception as e:
        print(f"❌ 语音对比测试失败: {e}")
    """测试自定义语音"""

    print("\n📍 方法2: 使用自定义语音设置")

    try:
        # 创建TTS生成器
        tts_gen = TTSGenerator()

        # 显示可用语音（可选）
        print("\n🎤 获取可用语音列表...")
        voices = tts_gen.get_available_voices()
        if voices:
            print(f"找到 {len(voices)} 个可用语音")
            # 显示前5个语音
            for i, voice in enumerate(voices[:5]):
                print(
                    f"{i + 1}. {voice['name']} ({voice['voice_id']}) - {voice['category']}"
                )

        # 测试单条语音生成
        test_texts = [
            "哈哈哈哈这也太搞笑了吧！",
            "呜呜呜我哭死了好感动啊！",
            "诶？这是什么情况？",
        ]

        print(f"\n🧪 测试自定义语音生成...")
        for i, text in enumerate(test_texts, 1):
            audio = tts_gen.generate_single_audio(
                text=text,
                output_path=f"./test_output/test_{i}_{text}.mp3",
                play_audio=False,
            )

            if audio:
                print(f"✅ 测试 {i}/3 成功")
            else:
                print(f"❌ 测试 {i}/3 失败")

    except Exception as e:
        print(f"❌ 自定义语音测试失败: {e}")


def test_batch_processing():
    """测试批量处理"""

    print("\n📍 方法3: 使用完整的批量处理")

    video_path = r"C:\Users\86182\Desktop\31182686022-1-192.mp4"

    # 简化的系统提示词
    simple_system_prompt = """
You are a cute AI character reacting to videos. Generate a JSON array of reactions.
Each reaction should have: action_type, trigger_timestamp, text (for SPEAK actions), comment.
Make your speech natural and engaging. Use SPEAK actions to comment on the video.
End with END_REACTION action.
"""

    user_prompt = "React to this video with enthusiasm and natural comments."

    try:
        tts_gen = TTSGenerator()

        result = tts_gen.process_video_analysis_to_speech(
            video_path=video_path,
            system_prompt=simple_system_prompt,
            user_prompt=user_prompt,
            output_dir="./batch_test_output",
            play_audio=False,  # 设为True可以播放音频
        )

        if result["success"]:
            print(f"🎉 批量处理成功！")
            print(f"📊 统计信息:")
            print(f"  - 总动作数: {result['total_actions']}")
            print(f"  - 成功生成: {result['successful_generations']}")
            print(f"  - 输出目录: {result['output_dir']}")
            print(f"  - 元数据: {result['metadata_path']}")

            # 显示生成的文件列表
            if result["generated_files"]:
                print(f"\n📄 生成的音频文件:")
                for file_info in result["generated_files"][:5]:  # 只显示前5个
                    print(f"  - {file_info['file_path']}")
                    print(f"    文本: {file_info['text'][:50]}...")
                    print(f"    时间: {file_info['timestamp']}s")

                if len(result["generated_files"]) > 5:
                    print(f"  ... 还有 {len(result['generated_files']) - 5} 个文件")
        else:
            print(f"❌ 批量处理失败: {result['error']}")

    except Exception as e:
        print(f"❌ 批量处理异常: {e}")


if __name__ == "__main__":
    print("🎵 TTS集成测试开始 - Base64版本")
    print("=" * 60)

    # 检查必要的环境变量
    required_keys = ["MINIMAX_API_KEY", "GEMINI_API_KEY"]
    missing_keys = [key for key in required_keys if not os.getenv(key)]

    if missing_keys:
        print(f"❌ 缺少必要的环境变量: {', '.join(missing_keys)}")
        print("请确保 .env 文件包含所有必要的API密钥")
        exit(1)

    try:
        # 运行测试
        test_simple_base64_tts()  # 简单Base64 TTS测试
        test_video_reaction_base64()  # 视频反应Base64测试
        test_video_to_speech_base64()  # 完整流程Base64测试

        print("\n🎉 TTS集成测试完成！")
        print("💡 所有音频数据都以base64格式存储，可直接用于WebSocket传输")

    except KeyboardInterrupt:
        print("\n⚠️  用户中断测试")
    except Exception as e:
        print(f"\n❌ 测试过程中发生异常: {e}")
        import traceback

        traceback.print_exc()
