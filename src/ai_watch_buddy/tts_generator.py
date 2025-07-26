"""
TTS语音生成器模块
结合Gemini视频分析和ElevenLabs TTS服务
"""

import os
import json
import time
from typing import List, Dict, Any, Optional, Union
from pathlib import Path
from dotenv import load_dotenv

# 导入我们封装好的Gemini分析模块
from video_analyzer import analyze_video





# 切换为MiniMax TTS
import requests
import base64
import tempfile


# 加载环境变量
load_dotenv()

class TTSGenerator:
    """TTS语音生成器类（MiniMax版）"""
    def __init__(self, api_key: Optional[str] = None, voice_id: Optional[str] = None):
        """
        初始化TTS生成器
        Args:
            api_key: MiniMax API密钥，如不提供则使用环境变量
            voice_id: 默认音色ID，如不提供则用官方默认
        """
        self.api_key = api_key or os.getenv('MINIMAX_API_KEY')
        if not self.api_key:
            raise ValueError("请设置MINIMAX_API_KEY环境变量或传入api_key参数")
        self.default_voice_id = voice_id or "female-zh"  # MiniMax官方中文女声
        print(f"✅ TTS生成器初始化成功 (MiniMax)")
        print(f"🎤 默认音色ID: {self.default_voice_id}")

    @property
    def default_model(self):
        # MiniMax TTS无模型概念，兼容旧接口
        return None
    
    def get_available_voices(self) -> List[Dict]:
        """获取MiniMax支持的音色列表（静态/可扩展）"""
        # 官方文档：https://www.minimax.chat/docs#/tts
        # 可根据API返回动态获取，这里静态列举常用音色
        return [
            {'voice_id': 'female-zh', 'name': '女声1', 'category': 'female', 'description': '官方中文女声', 'language': 'zh'},
            {'voice_id': 'male-zh', 'name': '男声1', 'category': 'male', 'description': '官方中文男声', 'language': 'zh'},
            {'voice_id': 'female-en', 'name': '女声2', 'category': 'female', 'description': '英文女声', 'language': 'en'},
            {'voice_id': 'male-en', 'name': '男声2', 'category': 'male', 'description': '英文男声', 'language': 'en'}
        ]
    
    def print_available_voices(self):
        """打印可用音色列表"""
        voices = self.get_available_voices()
        if voices:
            print("\n🎤 可用MiniMax音色列表:")
            print("=" * 80)
            for voice in voices:
                print(f"ID: {voice['voice_id']}")
                print(f"名称: {voice['name']}")
                print(f"类别: {voice['category']}")
                print(f"语言: {voice['language']}")
                print(f"描述: {voice['description']}")
                print("-" * 40)
        else:
            print("❌ 无法获取音色列表")
    
    def generate_single_audio(self, 
                            text: str, 
                            voice_id: Optional[str] = None,
                            model_id: Optional[str] = None,
                            output_path: Optional[str] = None) -> Optional[bytes]:
        """
        生成单条语音（MiniMax TTS）
        Args:
            text: 要转换的文本
            voice_id: 音色ID，如不提供则使用默认
            model_id: 保留参数，无实际作用
            output_path: 输出文件路径，如不提供则不保存
            play_audio: 是否播放音频
        Returns:
            音频数据字节流
        """
        try:
            voice = voice_id or self.default_voice_id
            print(f"🔄 生成语音: {text[:50]}{'...' if len(text) > 50 else ''}")
            print(f"🎤 使用MiniMax音色: {voice}")
            url = "https://api.minimax.com.cn/v1/tts"  # MiniMax TTS正式API地址
            headers = {
                "Authorization": f"Bearer {self.api_key}",
                "Content-Type": "application/json"
            }
            payload = {
                "text": text,
                "voice": voice,
                "format": "mp3"
            }
            # 跳过全局代理，直连MiniMax TTS
            resp = requests.post(
                url, headers=headers, json=payload, timeout=30, proxies={"http": None, "https": None}
            )
            if resp.status_code != 200:
                print(f"❌ MiniMax TTS API错误: {resp.status_code} {resp.text}")
                return None
            result = resp.json()
            audio_b64 = result.get("audio")
            if not audio_b64:
                print(f"❌ MiniMax TTS无音频返回: {result}")
                return None
            audio_bytes = base64.b64decode(audio_b64)
            if output_path:
                output_path = Path(output_path)
                output_path.parent.mkdir(parents=True, exist_ok=True)
                with open(output_path, 'wb') as f:
                    f.write(audio_bytes)
                print(f"💾 音频已保存: {output_path}")
            return audio_bytes
        except Exception as e:
            print(f"❌ 语音生成失败: {e}")
            return None
    
    def process_video_analysis_to_speech(self,
                                       video_path: str,
                                       system_prompt: str,
                                       user_prompt: str,
                                       output_dir: str = "./tts_output",
                                       voice_id: Optional[str] = None,
                                       model_id: Optional[str] = None,
                                       gemini_api_key: Optional[str] = None) -> Dict[str, Any]:
        """
        处理视频分析结果并生成语音
        
        Args:
            video_path: 视频文件路径
            system_prompt: 系统提示词
            user_prompt: 用户提示词
            output_dir: 音频输出目录
            voice_id: 语音ID
            model_id: 模型ID
            play_audio: 是否播放音频
            gemini_api_key: Gemini API密钥
            
        Returns:
            处理结果字典
        """
        try:
            # 1. 使用Gemini分析视频
            print("🎬 开始视频分析...")
            analysis_result = analyze_video(
                video_path=video_path,
                system_prompt=system_prompt,
                user_prompt=user_prompt,
                api_key=gemini_api_key
            )
            
            if not analysis_result.get('success'):
                return {
                    'success': False,
                    'error': f"视频分析失败: {analysis_result.get('error', '未知错误')}"
                }
            
            # 2. 提取所有SPEAK动作的文本
            action_list = analysis_result['action_list']
            speak_actions = [action for action in action_list if action.get('action_type') == 'SPEAK']
            
            if not speak_actions:
                return {
                    'success': False,
                    'error': '未找到任何SPEAK动作'
                }
            
            print(f"🗣️  找到 {len(speak_actions)} 条语音动作")
            
            # 3. 创建输出目录
            output_path = Path(output_dir)
            output_path.mkdir(parents=True, exist_ok=True)
            
            # 4. 生成语音文件
            generated_files = []
            successful_generations = 0
            
            for i, action in enumerate(speak_actions, 1):
                text = action.get('text', '').strip()
                if not text:
                    continue
                # 生成文件名
                timestamp = action.get('trigger_timestamp', 0)
                safe_text = text[:30].replace(' ', '_').replace('/', '_').replace('\\', '_')
                filename = f"speak_{i:03d}_{timestamp}s_{safe_text}.mp3"
                file_path = output_path / filename
                # 生成语音
                audio_data = self.generate_single_audio(
                    text=text,
                    voice_id=voice_id,
                    model_id=model_id,
                    output_path=str(file_path)
                )
                if audio_data:
                    generated_files.append({
                        'id': action.get('id'),
                        'timestamp': timestamp,
                        'text': text,
                        'file_path': str(file_path),
                        'file_size': len(audio_data)
                    })
                    successful_generations += 1
                    print(f"✅ [{i}/{len(speak_actions)}] 生成完成")
                else:
                    print(f"❌ [{i}/{len(speak_actions)}] 生成失败")
            
            # 5. 生成元数据文件
            metadata = {
                'video_path': video_path,
                'total_speak_actions': len(speak_actions),
                'successful_generations': successful_generations,
                'generated_files': generated_files,
                'generation_time': time.strftime('%Y-%m-%d %H:%M:%S'),
                'tts_settings': {
                    'voice_id': voice_id or self.default_voice_id
                }
            }
            
            metadata_path = output_path / 'audio_metadata.json'
            with open(metadata_path, 'w', encoding='utf-8') as f:
                json.dump(metadata, f, ensure_ascii=False, indent=2)
            
            print(f"\n✅ 语音生成完成！")
            print(f"📁 输出目录: {output_path}")
            print(f"🎵 成功生成: {successful_generations}/{len(speak_actions)} 个音频文件")
            print(f"📋 元数据文件: {metadata_path}")
            
            return {
                'success': True,
                'output_dir': str(output_path),
                'total_actions': len(speak_actions),
                'successful_generations': successful_generations,
                'generated_files': generated_files,
                'metadata_path': str(metadata_path)
            }
            
        except Exception as e:
            print(f"❌ 处理失败: {e}")
            return {
                'success': False,
                'error': str(e)
            }






def create_tts_generator(api_key: Optional[str] = None, voice_id: Optional[str] = None) -> TTSGenerator:
    """
    创建TTS生成器实例的便捷函数（MiniMax版）
    Args:
        api_key: MiniMax API密钥
        voice_id: 默认音色ID
    Returns:
        TTSGenerator实例
    """
    return TTSGenerator(api_key=api_key, voice_id=voice_id)


# 便捷函数




def quick_video_to_speech(video_path: str,
                         system_prompt: str,
                         user_prompt: str,
                         output_dir: str = "./tts_output",
                         minimax_api_key: Optional[str] = None,
                         gemini_api_key: Optional[str] = None,
                         voice_id: Optional[str] = None) -> Dict[str, Any]:
    """
    快速将视频分析结果转换为语音的便捷函数（MiniMax版）
    Args:
        video_path: 视频文件路径
        system_prompt: 系统提示词
        user_prompt: 用户提示词
        output_dir: 输出目录
        minimax_api_key: MiniMax API密钥
        gemini_api_key: Gemini API密钥
        voice_id: 音色ID
        play_audio: 是否播放音频
    Returns:
        处理结果字典
    """
    try:
        tts_gen = TTSGenerator(api_key=minimax_api_key, voice_id=voice_id)
        return tts_gen.process_video_analysis_to_speech(
            video_path=video_path,
            system_prompt=system_prompt,
            user_prompt=user_prompt,
            output_dir=output_dir,
            gemini_api_key=gemini_api_key
        )
    except Exception as e:
        return {
            'success': False,
            'error': str(e)
        }


if __name__ == '__main__':
    # 测试示例
    print("🎵 TTS生成器模块测试")
    
    # 检查环境变量
    if not os.getenv('ELEVENLABS_API_KEY'):
        print("❌ 请设置ELEVENLABS_API_KEY环境变量")
        exit(1)
    
    # 创建TTS生成器
    try:
        tts_gen = create_tts_generator()
        
        # 显示可用语音
        tts_gen.print_available_voices()
        
        # 测试单条语音生成
        test_text = "你好，这是一个测试语音。Hello, this is a test voice."
        print(f"\n🧪 测试语音生成: {test_text}")
        
        audio = tts_gen.generate_single_audio(
            text=test_text,
            output_path="./test_output/test_voice.mp3",
            play_audio=False
        )
        
        if audio:
            print("✅ 语音生成测试成功")
        else:
            print("❌ 语音生成测试失败")
            
    except Exception as e:
        print(f"❌ 测试失败: {e}")
