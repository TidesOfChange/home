// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: "https://tidesofchange.github.io",
  base: "/home",
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
  markdown: {
    remarkPlugins: [],
    rehypePlugins: [],
    shikiConfig: {},
  },
});
