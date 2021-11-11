import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin({
      include: ['src/**/*.js', 'src/**/*.vue', 'src/**/*.ts']
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  base: './', // 打包路径

  server: {
    // port: 3000, // 端口
    open: true, // 启动打开浏览器
    cors: true, // 跨域
    proxy: {
      '/api': {
        target: 'http://192.168.1.26:8093/api/', // 目标地址
        changeOrigin: true, // 修改源
        secure: false, // ssl
        rewrite: path => path.replace('/api/', '/')
      }
    }
  }
});
