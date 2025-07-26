import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceDir = path.join(__dirname, '..', 'dist');
const targetDir = path.join(__dirname, '..', '..', 'static');

async function copyStatic() {
  try {
    console.log('🧹 清理旧的静态文件...');
    await fs.remove(targetDir);
    
    console.log('📁 复制新的静态文件...');
    await fs.copy(sourceDir, targetDir);
    
    console.log('✅ 静态文件复制完成！');
    console.log(`📍 源目录: ${sourceDir}`);
    console.log(`📍 目标目录: ${targetDir}`);
  } catch (error) {
    console.error('❌ 复制静态文件失败:', error);
    process.exit(1);
  }
}

copyStatic(); 