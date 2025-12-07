import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
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
});
