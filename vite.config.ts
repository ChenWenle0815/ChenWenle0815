/*
 * @Author: cc_ray changrui03@meituan.com
 * @Date: 2024-05-19 16:41:17
 * @LastEditors: cc_ray changrui03@meituan.com
 * @LastEditTime: 2024-06-21 16:33:00
 * @FilePath: /ChenWenle0815/vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import markdownRawPlugin from 'vite-raw-plugin';
import vitePluginImp from 'vite-plugin-imp';
// import autoImportWiki from './plugins/vite-plugin-auto-import-wiki';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    react(),
    markdownRawPlugin({
      fileRegex: /\.md$/
    }),
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          style: name => `antd/es/${name}/style`,
        },
      ],
    }),
    // autoImportWiki()
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
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // 将 antd 单独打包到一个 chunk
            if (id.includes('node_modules/antd')) {
              return 'antd';
            }
            // 将 lodash 单独打包到一个 chunk
            if (id.includes('node_modules/lodash')) {
              return 'lodash';
            }
            // 将其他所有 node_modules 依赖打包到 vendor chunk
            return 'vendor';
          }
        }
      }
    }
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
