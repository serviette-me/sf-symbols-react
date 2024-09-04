/// <reference types="vitest" />
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"
import { peerDependencies } from "./package.json"

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setupTests.ts",
  },
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "sf-symbols-react",
      fileName: (format) => `index.${format}.js`,
      formats: ["cjs", "es"],
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies), "react/jsx-runtime"],
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
})
