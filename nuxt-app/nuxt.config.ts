// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: true,
  components: true,

  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL, // Maakt de API-URL beschikbaar aan de clientside
    },
  },
});