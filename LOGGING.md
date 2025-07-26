# AI Watch Buddy 日志系统说明

本项目已完全迁移到使用 [Loguru](https://github.com/Delgan/loguru) 作为日志库，并配置自动保存日志到文件。

## 日志配置特性

### 自动日志文件分类
日志系统会自动创建以下日志文件在 `logs/` 目录下：

- **`ai_watch_buddy.log`** - 主日志文件，包含所有级别的日志
- **`ai_watch_buddy_error.log`** - 仅包含错误和严重错误日志
- **`ai_watch_buddy_websocket.log`** - WebSocket 相关事件日志
- **`ai_watch_buddy_tts.log`** - TTS 音频处理相关日志
- **`ai_watch_buddy_video.log`** - 视频分析和处理相关日志
- **`ai_watch_buddy_session.log`** - 会话管理相关日志
- **`ai_watch_buddy_streaming.log`** - 流式数据日志（需要设置环境变量）

### 日志轮转和保留
- **文件大小轮转**：日志文件达到指定大小时自动创建新文件
- **时间保留**：旧日志文件自动压缩并在指定时间后删除
- **压缩存储**：使用 ZIP 压缩减少磁盘占用

## 环境变量配置

可以通过以下环境变量自定义日志行为：

```bash
# 设置整体日志级别 (DEBUG, INFO, WARNING, ERROR, CRITICAL)
LOG_LEVEL=INFO

# 设置控制台输出日志级别
CONSOLE_LOG_LEVEL=INFO

# 设置文件日志级别
FILE_LOG_LEVEL=DEBUG

# 启用流式数据详细日志 (用于调试 LLM 流式输出)
DEBUG_STREAMING=true
```

## 在代码中使用日志

### 基本使用

```python
from loguru import logger

# 简单的日志记录
logger.info("这是一条信息日志")
logger.warning("这是一条警告")
logger.error("这是一条错误", exc_info=True)
```

### 使用共享配置

```python
# 推荐方式：使用共享的日志配置
from .logging_config import get_logger

# 获取带模块名的日志器
logger = get_logger("my_module")

logger.info("模块特定的日志消息")
```

### 日志级别说明

- **TRACE** - 最详细的调试信息（默认不启用）
- **DEBUG** - 调试信息
- **INFO** - 一般信息
- **WARNING** - 警告信息
- **ERROR** - 错误信息
- **CRITICAL** - 严重错误

## 日志文件结构

```
logs/
├── ai_watch_buddy.log                 # 主日志
├── ai_watch_buddy_error.log          # 错误日志
├── ai_watch_buddy_websocket.log      # WebSocket 日志
├── ai_watch_buddy_tts.log            # TTS 日志
├── ai_watch_buddy_video.log          # 视频处理日志
├── ai_watch_buddy_session.log        # 会话日志
└── ai_watch_buddy_streaming.log      # 流式数据日志（可选）
```

## 日志查看和分析

### 实时查看日志
```bash
# 查看主日志
tail -f logs/ai_watch_buddy.log

# 查看错误日志
tail -f logs/ai_watch_buddy_error.log

# 查看特定模块日志
tail -f logs/ai_watch_buddy_websocket.log
```

### 搜索特定内容
```bash
# 搜索错误
grep "ERROR" logs/ai_watch_buddy.log

# 搜索特定会话
grep "session_123" logs/ai_watch_buddy.log
```

## 开发调试

### 启用详细日志
```bash
# 启用流式数据日志用于调试 LLM 输出
export DEBUG_STREAMING=true

# 设置更详细的控制台输出
export CONSOLE_LOG_LEVEL=DEBUG
```

### 调试 WebSocket 问题
WebSocket 相关的所有日志会自动保存到 `ai_watch_buddy_websocket.log`：
```bash
tail -f logs/ai_watch_buddy_websocket.log
```

### 调试 TTS 问题
TTS 相关的所有日志会自动保存到 `ai_watch_buddy_tts.log`：
```bash
tail -f logs/ai_watch_buddy_tts.log
```

## 生产环境建议

1. **设置适当的日志级别**：
   ```bash
   export LOG_LEVEL=INFO
   export CONSOLE_LOG_LEVEL=WARNING
   ```

2. **定期清理日志**：
   日志文件会自动轮转和清理，但建议定期检查磁盘空间。

3. **监控错误日志**：
   重点监控 `ai_watch_buddy_error.log` 文件中的错误。

## 故障排除

### 日志文件未创建
- 检查应用是否有写入 `logs/` 目录的权限
- 确认 loguru 库已正确安装

### 日志级别不正确
- 检查环境变量设置
- 确认使用了正确的日志级别名称

### 性能问题
- 如果日志过多影响性能，可以调高日志级别
- 检查 `DEBUG_STREAMING` 是否意外启用 