import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      themes: {
        light: {
          colors: {
            primary: "#EDC939", //  Amarillo del mar caribeño
            secondary: "#2F6A4C", // Verde de la vegetación
            bluered: "#005A8B", // Azul de la bandera
            accent: "#DA3822", // Rojo de la bandera
            error: "#FF5252",
            info: "#2196F3",
            success: "#4CAF50",
            warning: "#FFC107",
            background: "#46491D",
            surface: "#FFFFFF",
            "primary-darken-1": "#005A8B",
            "secondary-darken-1": "#1B6B1B",
            earth: "#8B4513", // Tonos tierra
            "earth-lighten-1": "#A0522D",
          },
        },
      },
    },
    defaults: {
      VBtn: {
        style: "text-transform: none;",
      },
    },
  });
  app.vueApp.use(vuetify);
});
