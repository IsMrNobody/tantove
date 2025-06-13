import { defineNuxtConfig } from "nuxt/config";
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },

  build: {
    transpile: ["vuetify"],
  },

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    "@nuxt/image",
  ],

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  css: ["@mdi/font/css/materialdesignicons.css", "~/assets/scss/main.scss"],

  app: {
    head: {
      title: "Te Amo Tanto Venezuela - Descubre la Belleza de Venezuela",
      meta: [
        {
          name: "description",
          content:
            "Explora la riqueza turística, gastronómica y cultural de Venezuela. Descubre destinos únicos, sabores auténticos y tradiciones milenarias.",
        },
        {
          name: "keywords",
          content:
            "Venezuela, turismo, gastronomía, cultura, destinos, viajes, tradiciones",
        },
        { property: "og:title", content: "Te Amo Tanto Venezuela" },
        {
          property: "og:description",
          content: "Descubre la belleza y diversidad de Venezuela",
        },
        { property: "og:type", content: "website" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
});
