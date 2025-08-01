/** @type {import('next').NextConfig} */
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  // 启用静态导出
  output: 'export',
  // 禁用图片优化（静态导出不支持）
  images: {
    unoptimized: true
  },
  // 设置静态导出目录
  distDir: 'dist',
  // 禁用服务端功能
  trailingSlash: true,
  
  reactStrictMode: false,
  output: 'export', // 启用静态导出
  distDir: 'dist', // 输出到 dist 目录
  trailingSlash: true, // 为静态导出添加尾部斜杠
  images: {
    unoptimized: true, // 静态导出需要禁用图片优化
  },
  eslint: {
    // 在构建过程中忽略 ESLint 错误
    ignoreDuringBuilds: true,
  },
  typescript: {
    // 在构建过程中忽略 TypeScript 类型错误
    ignoreBuildErrors: true,
  },
  webpack: (config, { webpack }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "./src"),
      "@framework": path.resolve(__dirname, "./WebSDK/Framework/src"),
      "@cubismsdksamples": path.resolve(__dirname, "./WebSDK/src"),
    };

    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      })
    );

    return config;
  },
  // 移除 rewrites，静态导出不支持
};

export default nextConfig; 