// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  vite: {
    server: {
      host: "0.0.0.0",
      allowedHosts: ["cachyos.local", "192.168.0.90"],
    },
  },
});
