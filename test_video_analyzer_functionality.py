#!/usr/bin/env python3
"""
测试 VideoAnalyzerAgent 的模式和接口功能
"""

import sys
import asyncio
from pathlib import Path

# Add the src directory to the path
src_path = Path(__file__).parent / "src"
sys.path.insert(0, str(src_path))

from ai_watch_buddy.agent.video_analyzer_agent import VideoAnalyzerAgent
from ai_watch_buddy.prompts.character_prompts import cute_prompt

async def test_modes():
    """测试两种模式的参数验证"""
    agent = VideoAnalyzerAgent(api_key="test_key", persona_prompt=cute_prompt)
    
    print("=== 测试模式验证 ===")
    
    # Test invalid mode
    try:
        async for _ in agent.generate("invalid_mode"):
            pass
        print("❌ 无效模式应该抛出异常")
    except ValueError as e:
        print(f"✅ 正确捕获无效模式错误: {e}")
    
    # Test action_gen mode without video
    try:
        async for _ in agent.generate("action_gen"):
            pass
        print("❌ action_gen 模式无视频文件应该抛出异常")
    except RuntimeError as e:
        print(f"✅ 正确捕获 action_gen 无视频错误: {e}")
    
    # Test summary mode without summary
    try:
        async for _ in agent.generate("summary"):
            pass
        print("❌ summary 模式无摘要应该抛出异常")
    except RuntimeError as e:
        print(f"✅ 正确捕获 summary 无摘要错误: {e}")

def test_content_management():
    """测试内容管理功能"""
    agent = VideoAnalyzerAgent(api_key="test_key", persona_prompt=cute_prompt)
    
    print("\n=== 测试内容管理 ===")
    
    # Test adding content
    agent.add_content("user", "测试用户消息")
    agent.add_content("model", "测试模型回复")
    
    print(f"✅ 成功添加内容，当前内容数量: {len(agent.contents)}")
    
    # Test invalid role
    try:
        agent.add_content("invalid_role", "测试")
        print("❌ 无效角色应该抛出异常")
    except ValueError as e:
        print(f"✅ 正确捕获无效角色错误: {e}")

def test_properties():
    """测试属性访问"""
    agent = VideoAnalyzerAgent(api_key="test_key", persona_prompt=cute_prompt)
    
    print("\n=== 测试属性 ===")
    
    print(f"✅ Client 类型: {type(agent.client)}")
    print(f"✅ Summary prompt 前100字符: {agent.summary_prompt[:100]}...")
    print(f"✅ Action prompt 前100字符: {agent.action_prompt[:100]}...")
    print(f"✅ Persona 前100字符: {agent.persona[:100]}...")

async def main():
    await test_modes()
    test_content_management()  
    test_properties()
    print("\n=== 所有功能测试完成 ===")

if __name__ == "__main__":
    asyncio.run(main())
