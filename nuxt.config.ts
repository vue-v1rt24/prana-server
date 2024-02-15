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
  devtools: { enabled: true },

  // ============ Для отправки почты. Модуль: nuxt-mail
  mail: {
    message: {
      from: 'pranaittech@yandex.ru',
      to: 'info@pranait.ru', // вот так нескольким получателям: 'rublevrus@mail.ru, rrublyov@yandex.ru' либо ['rublevrus@mail.ru, rrublyov@yandex.ru']
    },
    smtp: {
      host: 'smtp.mail.ru',
      port: 465,
      secure: true,
      auth: {
        user: 'rublevrus@mail.ru',
        pass: 'gYgcaRrdyxwVsqK4b1Wh', // пароль для приложений. Создаётся в учётной записи почты
      },
    },
  },
});
