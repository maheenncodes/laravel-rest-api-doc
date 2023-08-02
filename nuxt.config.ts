const path = require('path');

export default defineNuxtConfig({
  // https://github.com/nuxt-themes/docus
  extends: '@nuxt-themes/docus',

  modules: [
    // https://github.com/nuxt-modules/plausible
    '@nuxtjs/plausible',
    // https://github.com/nuxt/devtools
    '@nuxt/devtools',
    // https://nuxt.studio/docs/projects/setup#requirements-to-use-the-studio-editor
    '@nuxthq/studio',
    // https://nuxt.com/modules/gtag
    'nuxt-gtag'
  ],

  gtag: {
    id: process.env.NUXT_PUBLIC_GTAG_ID,
  },

  publicRuntimeConfig: {
    NUXT_PUBLIC_STUDIO_TOKENS: process.env.NUXT_PUBLIC_STUDIO_TOKENS,
    gtag: {
      id: process.env.NUXT_PUBLIC_GTAG_ID
    }
  }
})
