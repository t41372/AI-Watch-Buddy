# 静态前端部署指南

本项目已经配置为支持将 Next.js 前端构建为静态网站，并在 FastAPI 服务器的根路径上提供服务。

## 快速开始

### 1. 自动构建（推荐）

运行 Python 构建脚本，自动完成所有步骤：

```bash
python build-frontend.py
```

这个脚本会：
- 检查 Node.js 和 npm 依赖
- 安装前端依赖
- 构建静态网站
- 复制到正确的位置
- 提供下一步指导

### 2. 手动构建

如果你更喜欢手动控制每个步骤：

```bash
# 进入前端目录
cd frontend

# 安装依赖
npm install

# 构建静态网站并复制到父目录
npm run build:static
```

### 3. 启动服务器

```bash
# 回到项目根目录
cd ..

# 启动 FastAPI 服务器
python -m uvicorn src.ai_watch_buddy.server:app --reload
```

### 4. 访问应用

- **前端应用**: http://localhost:8000
- **API 文档**: http://localhost:8000/docs
- **WebSocket**: ws://localhost:8000/ws/{session_id}

## 项目结构

```
ai_watch_buddy/
├── frontend/                 # Next.js 前端源码
│   ├── src/                 # React 组件和页面
│   ├── dist/                # Next.js 构建输出
│   └── scripts/             # 构建脚本
├── static/                  # 静态网站文件（自动生成）
│   ├── index.html           # 主页
│   ├── _next/               # Next.js 资源
│   └── ...
├── src/ai_watch_buddy/      # Python 后端
│   └── server.py            # FastAPI 服务器
└── build-frontend.py        # 构建脚本
```

## 配置说明

### Next.js 配置 (frontend/next.config.js)

- `output: 'export'`: 启用静态导出
- `images.unoptimized: true`: 禁用图片优化（静态导出不支持）
- `trailingSlash: true`: 确保路由兼容性

### FastAPI 路由配置

- `/`: 提供 `static/index.html`
- `/_next/*`: 提供 Next.js 构建资源
- `/api/*`: API 端点
- `/ws/*`: WebSocket 端点
- 其他路径: 回退到 `index.html`（支持 SPA 路由）

## 开发流程

### 开发模式

在开发过程中，你可以分别运行前端和后端：

```bash
# 终端 1: 运行 Next.js 开发服务器
cd frontend
npm run dev

# 终端 2: 运行 FastAPI 服务器
python -m uvicorn src.ai_watch_buddy.server:app --reload
```

### 部署模式

对于生产部署，使用静态构建：

```bash
# 构建静态网站
python build-frontend.py

# 只运行 FastAPI 服务器
python -m uvicorn src.ai_watch_buddy.server:app --host 0.0.0.0 --port 8000
```

## 故障排除

### 前端构建失败

1. 检查 Node.js 版本（建议 18+）
2. 删除 `node_modules` 和重新安装：
   ```bash
   cd frontend
   rm -rf node_modules package-lock.json
   npm install
   ```

### 静态文件未更新

1. 清理构建缓存：
   ```bash
   cd frontend
   rm -rf .next dist ../static
   npm run build:static
   ```

### API 路由冲突

确保你的前端路由不以 `api/` 或 `ws/` 开头，这些是为后端 API 保留的。

## 注意事项

1. **服务端功能**: 静态导出不支持 Next.js 的服务端功能（SSR、API Routes）
2. **图片优化**: Next.js 的图片优化功能已禁用
3. **路由**: 使用客户端路由，所有路由都会回退到 `index.html`
4. **CORS**: 已配置 CORS 支持跨域请求

## 性能优化

1. **Gzip 压缩**: 考虑在生产环境中启用 gzip 压缩
2. **CDN**: 可以将静态文件部署到 CDN
3. **缓存**: 配置适当的缓存策略

## 自定义配置

如果需要自定义配置，可以修改：

- `frontend/next.config.js`: Next.js 配置
- `frontend/scripts/copy-static.js`: 静态文件复制逻辑
- `src/ai_watch_buddy/server.py`: FastAPI 路由配置 