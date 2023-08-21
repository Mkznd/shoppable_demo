import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";

export default defineConfig(({ command }) => {
  const config = {
    plugins: [viteReact()],
    base: "/",
  };

  if (command !== "serve") {
    config.base = "/shoppable_demo/";
  }

  return config;
});
