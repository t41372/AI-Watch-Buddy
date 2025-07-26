"""
AI Watch Buddy logging configuration module.
Provides centralized logging setup using loguru.
"""

import sys
from pathlib import Path
from loguru import logger
import os

# Flag to prevent multiple initializations
_logger_initialized = False


def configure_logger(
    log_level: str = "INFO",
    console_level: str = "INFO",
    file_level: str = "DEBUG",
    logs_dir: str = "logs",
    app_name: str = "ai_watch_buddy"
) -> None:
    """
    Configure loguru logger with file output and console output.
    
    Args:
        log_level: Default log level for all handlers
        console_level: Log level for console output
        file_level: Log level for file output
        logs_dir: Directory to store log files
        app_name: Application name for log file naming
    """
    global _logger_initialized
    
    if _logger_initialized:
        return
    
    # Remove default logger
    logger.remove()
    
    # Create logs directory if it doesn't exist
    logs_path = Path(logs_dir)
    logs_path.mkdir(exist_ok=True)
    
    # Console handler with colors (for development)
    logger.add(
        sys.stderr,
        format="<green>{time:YYYY-MM-DD HH:mm:ss.SSS}</green> | <level>{level: <8}</level> | <cyan>{name}</cyan>:<cyan>{function}</cyan>:<cyan>{line}</cyan> - <level>{message}</level>",
        level=console_level,
        colorize=True,
        backtrace=True,
        diagnose=True
    )
    
    # Main application log file (all logs)
    logger.add(
        logs_path / f"{app_name}.log",
        format="{time:YYYY-MM-DD HH:mm:ss.SSS} | {level: <8} | {name}:{function}:{line} - {message}",
        level=file_level,
        rotation="10 MB",
        retention="7 days",
        compression="zip",
        encoding="utf-8",
        backtrace=True,
        diagnose=True
    )
    
    # Error log file (errors and critical only)
    logger.add(
        logs_path / f"{app_name}_error.log",
        format="{time:YYYY-MM-DD HH:mm:ss.SSS} | {level: <8} | {name}:{function}:{line} - {message}",
        level="ERROR",
        rotation="5 MB",
        retention="30 days",
        compression="zip",
        encoding="utf-8",
        backtrace=True,
        diagnose=True
    )
    
    # WebSocket events log (for debugging WebSocket communication)
    logger.add(
        logs_path / f"{app_name}_websocket.log",
        format="{time:YYYY-MM-DD HH:mm:ss.SSS} | {level: <8} | {name}:{function}:{line} - {message}",
        level="DEBUG",
        rotation="5 MB",
        retention="3 days",
        filter=lambda record: any(keyword in record["message"].lower() for keyword in ["websocket", "ws", "socket"]),
        encoding="utf-8"
    )
    
    # TTS processing log (for TTS-related events)
    logger.add(
        logs_path / f"{app_name}_tts.log",
        format="{time:YYYY-MM-DD HH:mm:ss.SSS} | {level: <8} | {name}:{function}:{line} - {message}",
        level="DEBUG",
        rotation="3 MB",
        retention="3 days",
        filter=lambda record: any(keyword in record["message"].lower() for keyword in ["tts", "audio", "speech", "voice"]),
        encoding="utf-8"
    )
    
    # Video processing log (for video analysis events)
    logger.add(
        logs_path / f"{app_name}_video.log",
        format="{time:YYYY-MM-DD HH:mm:ss.SSS} | {level: <8} | {name}:{function}:{line} - {message}",
        level="DEBUG",
        rotation="5 MB",
        retention="5 days",
        filter=lambda record: any(keyword in record["message"].lower() for keyword in ["video", "gemini", "agent", "action", "analysis"]),
        encoding="utf-8"
    )
    
    # Session management log (for session-related events)
    logger.add(
        logs_path / f"{app_name}_session.log",
        format="{time:YYYY-MM-DD HH:mm:ss.SSS} | {level: <8} | {name}:{function}:{line} - {message}",
        level="DEBUG",
        rotation="3 MB",
        retention="3 days",
        filter=lambda record: any(keyword in record["message"].lower() for keyword in ["session", "pipeline", "初始化", "创建", "completed"]),
        encoding="utf-8"
    )
    
    # Enable trace level for streaming text output if needed
    if os.getenv("DEBUG_STREAMING", "false").lower() == "true":
        logger.add(
            logs_path / f"{app_name}_streaming.log",
            format="{time:YYYY-MM-DD HH:mm:ss.SSS} | TRACE | {name}:{function}:{line} - {message}",
            level="TRACE",
            rotation="50 MB",
            retention="1 day",
            filter=lambda record: record["level"].name == "TRACE",
            encoding="utf-8"
        )
    
    _logger_initialized = True
    logger.info(f"Logging configured for {app_name}")
    logger.info(f"Log files will be saved to: {logs_path.absolute()}")


def get_logger(name: str | None = None):
    """
    Get a logger instance. If logging is not configured, configure it first.
    
    Args:
        name: Logger name (optional)
        
    Returns:
        Logger instance
    """
    if not _logger_initialized:
        configure_logger()
    
    if name is not None:
        return logger.bind(name=name)
    return logger


# Auto-configure if this module is imported
if not _logger_initialized:
    # Get log level from environment variable, default to INFO
    log_level = os.getenv("LOG_LEVEL", "INFO").upper()
    console_level = os.getenv("CONSOLE_LOG_LEVEL", log_level).upper()
    file_level = os.getenv("FILE_LOG_LEVEL", "DEBUG").upper()
    
    configure_logger(
        log_level=log_level,
        console_level=console_level,
        file_level=file_level
    ) 