import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/security-portfolio/security-portfolio/src/assets",
  plugins: [react()],
});