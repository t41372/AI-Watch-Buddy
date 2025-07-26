/** @type {import('next').NextConfig} */
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  reactStrictMode: false,
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
  async rewrites() {
    return [
      {
        source: '/libs/:path*',
        destination: '/libs/:path*',
      },
    ];
  },
};

export default nextConfig; 