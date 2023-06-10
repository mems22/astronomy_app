/// <reference types="vitest"/>
/// <reference types="vite/client"/>
/** @type {import('jest').Config} */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    css: true,
    setupFiles: "./src/test/setup.ts",
    coverage: {
      all: true,
      provider: "istanbul",
    },
  },
});
