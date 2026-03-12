import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: true },

  ssr: true,
  nitro: {
    preset: 'static',
  },

  modules: [
    '@nuxt/content',
  ],

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  runtimeConfig: {
    public: {
      pocketbaseUrl: process.env.POCKETBASE_URL || 'http://localhost:8090',
    },
  },

  routeRules: {
    // Phase 2+: '/blog/**': { swr: 3600 },
    // Phase 2+: '/projects/**': { swr: 3600 },
  },

  content: {
    // Phase 2+: add highlight, markdown config
  },

  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    head: {
      title: 'ML Distribution',
      meta: [
        { name: 'description', content: 'Grossiste et acteur majeur du e-commerce en Europe' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },
})
