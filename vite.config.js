import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path, { resolve } from "path" // 内置模块直接引用
export default defineConfig({
  base: "./",
  plugins: [
    vue(),
  ],
  server: {
    host: '0.0.0.0',
    port: 5173
  },
  build: {
    minify: 'terser',
    chunkSizeWarningLimit: 1500, // 静态资源警告门槛,默认500KB
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, './index.html'),
      },
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
      },
      manualChunks(id) { // 静态资源拆分
        if (id.includes('node_modules')) {
          return id.toString().split('node_modules/')[1].split('/')[0].toString();
        }
      }
    },
    terserOptions: {//清除console.log和debugger
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    }
  }
});