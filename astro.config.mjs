// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://comua.fr',
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en', 'de', 'es', 'it'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap({
    i18n: {
      defaultLocale: 'fr',
      locales: {
        fr: 'fr-FR',
        en: 'en-US',
        de: 'de-DE',
        es: 'es-ES',
        it: 'it-IT',
      },
    },
  })]
});