import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://danaranchward.org',
  // If using GitHub Pages with a custom domain, remove the base property
  // If using default GitHub Pages URL (username.github.io/ward-website), uncomment:
  // base: '/ward-website',
});
