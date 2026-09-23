import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"
import path from "path"

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./vitest.setup.ts"],
    // next-intl imports `next/navigation` without an extension, which Node's ESM
    // resolver rejects; letting Vite process it resolves the import.
    server: { deps: { inline: ["next-intl"] } },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
