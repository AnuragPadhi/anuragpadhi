// @ts-check
import { defineConfig } from 'astro/config';


import tailwindcss from '@tailwindcss/vite';


// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ["raccoon-healthy-falcon.ngrok-free.app"],
    },
  },
  site: 'https://anuragpadhi.github.io',
  base: '/github-pages',
});
