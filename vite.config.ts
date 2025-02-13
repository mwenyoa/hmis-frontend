import { defineConfig } from "vite";
import { externalizeDeps } from "vite-plugin-externalize-deps";
import circleDependency from "vite-plugin-circular-dependency";
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react(), externalizeDeps(), circleDependency()],
  server: {
      port: 3000,
      proxy: {
          '/api': {
              target: 'http://localhost:8000', // Laravel API
              changeOrigin: true,
              rewrite: (path) => path.replace(/^\/api/, ''),
          },
      },
  },
});



