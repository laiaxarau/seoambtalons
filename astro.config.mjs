// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import partytown from '@astrojs/partytown'; // per GA sense bloquejar render

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://seoambtalent.cat',
  integrations: [mdx(), sitemap(),partytown({ config: { forward: ['dataLayer.push'] } })],

  vite: {
    plugins: [tailwindcss()],
  },
});