import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Increase chunk size warning limit if needed
    chunkSizeWarningLimit: 1000, // in kB

    rollupOptions: {
      output: {
        // Split vendor libraries into a separate chunk
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
});
