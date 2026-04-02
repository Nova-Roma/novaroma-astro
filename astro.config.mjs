import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
// https://astro.build/config
export default defineConfig({
  redirects: {
    "/sponsors": "/entities",
    "/sponsors/details/[...slug]": "/entities/details/[...slug]",
  },
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    drafts: true,
    shikiConfig: {
      theme: "github-light"
    }
  },
  shikiConfig: {
    wrap: true,
    skipInline: false,
    drafts: true
  },
  site: 'https://novaromahorizon.org',
  integrations: [ sitemap(), mdx()]
});