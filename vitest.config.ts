import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom", // จำลองสภาพแวดล้อมเหมือนเปิดบนบราวเซอร์
    globals: true,
    setupFiles: [],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // หลบทางให้ Import path @/* ใช้งานได้
    },
  },
});
