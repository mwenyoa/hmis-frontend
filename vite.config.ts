import { defineConfig } from "vite";
import { externalizeDeps } from "vite-plugin-externalize-deps";
import circleDependency from "vite-plugin-circular-dependency";
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react(), externalizeDeps(), circleDependency()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      },
    },
  }
});