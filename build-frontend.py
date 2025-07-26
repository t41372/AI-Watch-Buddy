#!/usr/bin/env python3
"""
前端构建和部署脚本
自动化将 Next.js 应用构建为静态网站并部署到 FastAPI 服务器
"""

import subprocess
import sys
import os
from pathlib import Path
import shutil

def run_command(cmd, cwd=None, description=""):
    """运行命令并处理错误"""
    print(f"\n🔄 {description}")
    print(f"📍 执行: {' '.join(cmd)}")
    if cwd:
        print(f"📁 工作目录: {cwd}")
    
    try:
        result = subprocess.run(cmd, cwd=cwd, check=True, capture_output=True, text=True)
        print(f"✅ {description} 成功完成")
        return result
    except subprocess.CalledProcessError as e:
        print(f"❌ {description} 失败")
        print(f"错误代码: {e.returncode}")
        print(f"标准输出: {e.stdout}")
        print(f"错误输出: {e.stderr}")
        sys.exit(1)

def check_dependencies():
    """检查必要的依赖"""
    print("🔍 检查依赖...")
    
    # 检查 Node.js
    try:
        result = subprocess.run(['node', '--version'], capture_output=True, text=True)
        print(f"✅ Node.js: {result.stdout.strip()}")
    except FileNotFoundError:
        print("❌ 未找到 Node.js，请先安装 Node.js")
        sys.exit(1)
    
    # 检查 npm
    try:
        result = subprocess.run(['npm', '--version'], capture_output=True, text=True)
        print(f"✅ npm: {result.stdout.strip()}")
    except FileNotFoundError:
        print("❌ 未找到 npm")
        sys.exit(1)

def main():
    """主函数"""
    print("🚀 开始构建前端静态网站")
    print("=" * 50)
    
    # 检查依赖
    check_dependencies()
    
    # 获取项目根目录
    root_dir = Path(__file__).parent
    frontend_dir = root_dir / "frontend"
    static_dir = root_dir / "static"
    
    if not frontend_dir.exists():
        print("❌ 未找到 frontend 目录")
        sys.exit(1)
    
    print(f"📁 项目根目录: {root_dir}")
    print(f"📁 前端目录: {frontend_dir}")
    print(f"📁 静态目录: {static_dir}")
    
    # 检查 package.json
    package_json = frontend_dir / "package.json"
    if not package_json.exists():
        print("❌ 未找到 package.json")
        sys.exit(1)
    
    # 安装依赖
    run_command(
        ['npm', 'install'],
        cwd=frontend_dir,
        description="安装前端依赖"
    )
    
    # 构建静态网站
    run_command(
        ['npm', 'run', 'build:static'],
        cwd=frontend_dir,
        description="构建静态网站"
    )
    
    # 验证静态文件
    if static_dir.exists():
        index_html = static_dir / "index.html"
        if index_html.exists():
            print(f"✅ 静态网站构建成功！")
            print(f"📄 主页文件: {index_html}")
            
            # 显示静态目录结构
            print(f"\n📂 静态文件结构:")
            for item in static_dir.iterdir():
                if item.is_dir():
                    print(f"  📁 {item.name}/")
                else:
                    print(f"  📄 {item.name}")
        else:
            print("❌ 构建完成但未找到 index.html")
            sys.exit(1)
    else:
        print("❌ 构建完成但未找到静态目录")
        sys.exit(1)
    
    print("\n🎉 前端构建完成！")
    print("=" * 50)
    print("📋 下一步操作:")
    print("1. 启动 FastAPI 服务器: python -m uvicorn src.ai_watch_buddy.server:app --reload")
    print("2. 访问 http://localhost:8000 查看前端应用")
    print("3. API 端点仍然可以通过 http://localhost:8000/api/ 访问")

if __name__ == "__main__":
    main() 