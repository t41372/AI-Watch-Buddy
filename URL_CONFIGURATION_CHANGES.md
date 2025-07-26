# URL 配置修改总结

## 概述
根据用户要求，移除了设置管理中的 baseurl 功能，不再使用 localStorage 存储 URL 配置，改为使用硬编码的 URL 常量。

## 主要修改

### 1. Settings Context (`frontend/src/context/settings-context.tsx`)
- **移除** `GeneralSettings` 接口中的 `baseUrl` 和 `websocketBaseUrl` 字段
- **移除** localStorage 中 URL 相关的存储和读取逻辑
- **新增** 硬编码 URL 常量：
  - `API_BASE_URL = 'http://127.0.0.1:8000'`
  - `WEBSOCKET_BASE_URL = 'ws://127.0.0.1:8000/ws'`

### 2. Settings Modal (`frontend/src/components/settings-modal.tsx`)
- **移除** Base URL 和 WebSocket Base URL 的输入字段
- **替换** 为只读的硬编码 URL 显示区域

### 3. WebSocket Handler (`frontend/src/components/websocket-handler.tsx`)
- **修改** 导入语句，添加 `WEBSOCKET_BASE_URL` 常量
- **替换** `getWebSocketBaseUrl()` 为 `WEBSOCKET_BASE_URL`
- **移除** 对 `generalSettings.websocketBaseUrl` 的依赖

### 4. Session Hook (`frontend/src/hooks/use-session.ts`)
- **修改** 导入语句，添加 `API_BASE_URL` 常量
- **替换** `getApiBaseUrl()` 为 `API_BASE_URL`

### 5. Live2D Config Context (`frontend/src/context/live2d-config-context.tsx`)
- **修改** 导入语句，添加 `API_BASE_URL` 常量
- **替换** `getApiBaseUrl()` 为 `API_BASE_URL`
- **移除** 对 `generalSettings.baseUrl` 的依赖

### 6. 环境变量文件
- **删除** `.env.local` 和 `.env.sample` 文件
- **移除** 所有环境变量相关的配置

## 硬编码 URL 配置

### 当前配置的 URL
```typescript
// API 基础 URL
API_BASE_URL = 'http://127.0.0.1:8000'

// WebSocket 基础 URL
WEBSOCKET_BASE_URL = 'ws://127.0.0.1:8000/ws'
```

## 优势

1. **简化配置管理**: 不再需要在 UI 中管理 URL 设置
2. **简化部署**: 不需要配置环境变量
3. **一致性**: 所有组件都使用相同的硬编码 URL
4. **开发友好**: 开发时不需要额外的配置文件
5. **减少复杂性**: 移除了环境变量管理的复杂性

## 向后兼容性

- 现有的 localStorage 中的其他设置（如音频设置、背景设置等）仍然保留
- 只有 URL 相关的设置被移除
- 硬编码的 URL 确保在所有环境中都能正常工作

## 如果需要修改 URL

如果需要修改 URL，只需要在 `frontend/src/context/settings-context.tsx` 文件中修改以下常量：

```typescript
export const API_BASE_URL = 'http://127.0.0.1:8000';
export const WEBSOCKET_BASE_URL = 'ws://127.0.0.1:8000/ws';
```

## 测试

- ✅ 构建测试通过
- ✅ 开发服务器启动正常
- ✅ 所有 URL 相关的功能现在都使用硬编码常量
- ✅ 环境变量文件已清理 