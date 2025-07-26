#!/usr/bin/env python3
"""
基础测试 VideoAnalyzerAgent 的导入和初始化
"""

import os
import sys
from pathlib import Path

# Add the src directory to the path
src_path = Path(__file__).parent / "src"
sys.path.insert(0, str(src_path))

try:
    from ai_watch_buddy.agent.video_analyzer_agent import VideoAnalyzerAgent
    from ai_watch_buddy.prompts.character_prompts import cute_prompt

    print("✅ 成功导入 VideoAnalyzerAgent")

    # Test initialization without API key
    try:
        agent = VideoAnalyzerAgent(api_key="test_key", persona_prompt=cute_prompt)
        print("✅ 成功初始化 VideoAnalyzerAgent")

        # Test properties
        print(f"✅ Summary prompt 长度: {len(agent.summary_prompt)} 字符")
        print(f"✅ Action prompt 长度: {len(agent.action_prompt)} 字符")
        print(f"✅ Persona 长度: {len(agent.persona)} 字符")
        print(f"✅ Summary ready: {agent.summary_ready}")
        print(f"✅ Video file: {agent.video_file}")
        print(f"✅ Contents 长度: {len(agent.contents)}")

    except Exception as e:
        print(f"❌ 初始化失败: {e}")

except ImportError as e:
    print(f"❌ 导入失败: {e}")
    sys.exit(1)

print("\n=== 基础功能测试完成 ===")
