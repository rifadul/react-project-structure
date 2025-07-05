import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import jsconfigPaths from "vite-jsconfig-paths";
import eslint from "vite-plugin-eslint";
import svgr from "vite-plugin-svgr";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {},
  },
  plugins: [react(), jsconfigPaths(), svgr(), eslint(), tailwindcss()],
  server: {
    port: 3000,
  },
})
