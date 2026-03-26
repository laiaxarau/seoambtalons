// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import partytown from "@astrojs/partytown"; // per GA sense bloquejar render
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://seoambtalons.cat",
  output: "static",
  adapter: vercel(),
  integrations: [
    mdx(),
    sitemap(),
    partytown({ config: { forward: ["dataLayer.push"], debug: false } }),
    react(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
