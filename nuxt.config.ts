// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'ru',
      },
    },
  },
  css: ['assets/css/index.css'],
  modules: ['@nuxt/image', 'nuxt-viewport'],
  devtools: { enabled: true },
});
