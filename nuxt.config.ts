// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'ru',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      ],
    },
  },
  css: ['assets/css/index.css'],
  modules: ['@nuxt/image', 'nuxt-viewport'],
  devtools: { enabled: true },
});
