import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { builderDevTools } from "@builder.io/dev-tools/vite";
import path from "path";

// https://vitejs.dev/config/

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), builderDevTools()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
