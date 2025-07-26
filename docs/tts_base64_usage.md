# TTS Base64 集成使用说明

## 概述

修改后的 `test_tts_integration.py` 现在支持生成 base64 格式的音频数据，而不是保存 MP3 文件。这使得音频数据可以直接通过 WebSocket 传输给前端。

## 主要变化

### 1. 新增 TTSBase64Manager 类

```python
class TTSBase64Manager:
    """TTS Base64管理器，基于MiniMax TTS引擎，输出base64音频数据"""
```

**核心方法：**
- `generate_speech_base64(text, voice_id)`: 生成单条语音的base64数据
- `process_text_batch(texts, voice_id)`: 批量处理文本生成base64数据

### 2. 输出格式

每个生成的音频数据包含：
```json
{
    "success": true,
    "text": "原始文本",
    "voice_id": "使用的语音ID",
    "base64_audio": "base64编码的音频数据",
    "audio_length": "base64字符串长度",
    "audio_size_bytes": "原始音频字节数",
    "timestamp": "生成时间"
}
```

### 3. 新的测试函数

- `test_simple_base64_tts()`: 简单Base64 TTS功能测试
- `test_video_reaction_base64()`: 模拟视频反应Base64 TTS
- `test_video_to_speech_base64()`: 完整的视频分析+Base64 TTS流程

## 使用方法

### 1. 环境准备

确保设置了必要的环境变量：
```
MINIMAX_API_KEY=你的MiniMax API密钥
GEMINI_API_KEY=你的Gemini API密钥
```

### 2. 运行测试

```bash
cd src/ai_watch_buddy
python test_tts_integration.py
```

### 3. 在你的项目中使用

```python
from test_tts_integration import TTSBase64Manager

# 创建管理器
tts_manager = TTSBase64Manager()

# 生成单条音频
result = tts_manager.generate_speech_base64("你好，这是测试", "female-zh")

if result["success"]:
    base64_audio = result["base64_audio"]
    # 现在可以通过WebSocket发送 base64_audio
    websocket.send(json.dumps({
        "type": "audio",
        "data": base64_audio,
        "text": result["text"]
    }))
```

### 4. 批量处理

```python
texts = ["文本1", "文本2", "文本3"]
batch_result = tts_manager.process_text_batch(texts, "female-zh")

for audio_data in batch_result["results"]:
    if audio_data["success"]:
        # 发送每个音频数据
        send_audio_to_frontend(audio_data["base64_audio"])
```

## 输出文件

所有结果都保存为 JSON 文件在以下目录：
- `./test_output/`: 单独测试结果
- `./batch_test_output_base64/`: 完整流程测试结果

## WebSocket 传输示例

前端可以这样接收和播放音频：

```javascript
// 接收WebSocket消息
websocket.onmessage = function(event) {
    const data = JSON.parse(event.data);
    
    if (data.type === "audio") {
        // 将base64转换为音频并播放
        const audioBlob = base64ToBlob(data.data, 'audio/mp3');
        const audioUrl = URL.createObjectURL(audioBlob);
        const audio = new Audio(audioUrl);
        audio.play();
    }
};

// base64转Blob辅助函数
function base64ToBlob(base64, mimeType) {
    const byteCharacters = atob(base64);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], {type: mimeType});
}
```

## 优势

1. **实时传输**: base64数据可以直接通过WebSocket发送
2. **无文件依赖**: 不需要管理音频文件的存储和清理
3. **保持原有功能**: 仍然使用MiniMax TTS，语音质量不变
4. **完整集成**: 支持视频分析+TTS的完整流程

## 注意事项

- base64编码会增加约33%的数据大小
- 对于长音频，建议考虑分段传输
- 确保WebSocket连接稳定，避免大数据包丢失
