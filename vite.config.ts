import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/ALFRESCOSITO/' : '/',
  plugins: [
    react(),
    {
      name: 'remove-bolt-badge',
      transformIndexHtml: {
        order: 'post',
        handler(html) {
          return html.replace(/<script[^>]*bolt\.new[^>]*><\/script>/gi, '');
        },
      },
    },
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
        entryFileNames: 'assets/[hash].js',
        chunkFileNames: 'assets/[hash].js',
        assetFileNames: 'assets/[hash].[ext]'
      }
    }
  }
}));
