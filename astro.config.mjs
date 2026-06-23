// @ts-check
import { defineConfig } from "astro/config";
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare(),
  vite: {
    server: {
      host: "0.0.0.0",
      allowedHosts: ["cachyos.local", "192.168.0.90"],
    },
  },
});
