import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import markdownRawPlugin from 'vite-raw-plugin';
// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    react(),
    markdownRawPlugin({
      fileRegex: /\.md$/
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    minify: true,
    // 设置为false，便不会出现源码，
    sourcemap: false,
  },
  server: {
    proxy: {
      // 代理所有请求到 127.0.0.1:8080
      '/test': {
        target: 'http://127.0.0.1:8080',
        changeOrigin: true,
      }
    }
  }
});
