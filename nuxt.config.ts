// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [{ name: 'format-detection', content: 'telephone=no' }],
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
  modules: ['@nuxt/image', 'nuxt-viewport', 'nuxt-mail'],
  devtools: { enabled: false },

  // ============ Для отправки почты. Модуль: nuxt-mail
  mail: {
    message: {
      from: 'pranaittech@yandex.ru',
      to: 'info@pranait.ru', // вот так нескольким получателям: 'pranaittech@mail.ru, pranaittech@yandex.ru' либо ['info@pranait.ru, pranaittech@yandex.ru']
    },
    smtp: {
      host: 'smtp.yandex.ru',
      port: 465,
      secure: true,
      auth: {
        user: 'pranaittech',
        pass: 'alngcratnnsxqqva', // пароль для приложений. Создаётся в учётной записи почты
      },
    },
  },
});
