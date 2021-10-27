import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/pixi-practice/',
  build: {
    assetsDir: '',
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    alias: [
      { find: /^~/, replacement: path.resolve(__dirname, './') },
      { find: '@', replacement: path.resolve(__dirname, 'src') },
    ],
  },
  server: {
    host: true,
    // proxy: ,
  },
})
