import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import terser from '@rollup/plugin-terser';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: './dist/report.html',
      open: true,
      brotliSize: true,
    }),
    process.env.NODE_ENV === 'production' &&
      terser({
        output: {
          comments: false,
        },
        compress: {
          drop_console: true,
        },
      }),
  ].filter(Boolean),
  server: {
    proxy: {
      '/api': {
        target: 'http://117.17.102.143:8001',
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
