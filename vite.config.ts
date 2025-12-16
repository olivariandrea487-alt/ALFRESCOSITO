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
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn']
      },
      mangle: {
        toplevel: true,
        properties: {
          regex: /^_/
        }
      },
      format: {
        comments: false
      }
    },
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
