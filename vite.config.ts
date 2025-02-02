import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000, // Ensure this matches the actual running port
    hmr: {
      protocol: "ws",
      host: "localhost",
    },
    proxy: {
      "/api": {
        target: "http://localhost:8000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
