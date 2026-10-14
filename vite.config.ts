import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Сайт лежит в корне lexozbedra.github.io, поэтому base = "/".
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/",
});
