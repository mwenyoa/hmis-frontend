import { defineConfig } from "vite";
import { externalizeDeps } from "vite-plugin-externalize-deps";
import circleDependency from "vite-plugin-circular-dependency";

export default defineConfig({
  server: {
    port: 3000, // Ensure this matches the actual running port
  },
  plugins: [externalizeDeps(), circleDependency()],
});
