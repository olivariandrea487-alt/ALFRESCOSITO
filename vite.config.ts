import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'remove-bolt-badge',
      transformIndexHtml(html) {
        return html.replace(/<script[^>]*bolt\.new\/badge\.js[^>]*><\/script>/gi, '');
      },
    },
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
