<template>
  <v-app>
    <!-- Barra de navegación -->
    <v-app-bar
      :elevation="scrolled ? 4 : 0"
      :color="scrolled ? 'bluered' : 'accent'"
      :theme="scrolled ? 'light' : 'dark'"
      app
      fixed
      class="transition-all duration-300"
    >
      <v-container class="container-custom d-flex align-center py-0">
        <!-- Logo -->
        <NuxtLink to="/" class="text-decoration-none">
          <v-toolbar-title class="text-h5 font-weight-bold">
            <span :class="scrolled ? 'text-primary' : 'text-white'">
              Te Amo Tanto Venezuela
            </span>
          </v-toolbar-title>
        </NuxtLink>

        <v-spacer></v-spacer>

        <!-- Navegación desktop -->
        <v-toolbar-items class="d-none d-md-flex">
          <v-btn
            v-for="item in navItems"
            :key="item.title"
            :to="item.to"
            variant="text"
            :color="scrolled ? 'primary' : 'white'"
            class="mx-1"
          >
            {{ item.title }}
          </v-btn>
        </v-toolbar-items>

        <!-- Menú hamburguesa móvil -->
        <v-app-bar-nav-icon
          @click="drawer = !drawer"
          class="d-md-none"
          :color="scrolled ? 'primary' : 'white'"
        ></v-app-bar-nav-icon>
      </v-container>
    </v-app-bar>

    <!-- Drawer móvil -->
    <v-navigation-drawer
      v-model="drawer"
      temporary
      location="right"
      width="280"
    >
      <v-list>
        <v-list-item
          v-for="item in navItems"
          :key="item.title"
          :to="item.to"
          @click="drawer = false"
          class="mb-2"
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon" color="primary"></v-icon>
          </template>
          <v-list-item-title class="font-weight-medium">
            {{ item.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Contenido principal -->
    <v-main>
      <slot />
    </v-main>

    <!-- Footer -->
    <v-footer class="bg-secondary text-white">
      <v-container class="container-custom">
        <v-row>
          <v-col cols="12" md="4">
            <h3 class="text-h6 mb-3">Te Amo Tanto Venezuela</h3>
            <p class="text-body-2">
              Descubre la belleza, cultura y tradiciones de Venezuela. Tu guía
              completa para explorar nuestro hermoso país.
            </p>
          </v-col>
          <v-col cols="12" md="4">
            <h4 class="text-subtitle-1 mb-3">Enlaces Rápidos</h4>
            <v-list density="compact" class="bg-transparent">
              <v-list-item
                v-for="item in navItems.slice(0, 4)"
                :key="item.title"
                :to="item.to"
                class="px-0"
              >
                <v-list-item-title class="text-body-2">
                  {{ item.title }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-col>
          <v-col cols="12" md="4">
            <h4 class="text-subtitle-1 mb-3">Síguenos</h4>
            <v-btn
              v-for="social in socialLinks"
              :key="social.name"
              :icon="social.icon"
              variant="text"
              color="white"
              size="small"
              class="mr-2"
            ></v-btn>
          </v-col>
        </v-row>
        <v-divider class="my-4" color="white" opacity="0.3"></v-divider>
        <v-row>
          <v-col cols="12" class="text-center">
            <p class="text-body-2 mb-0">
              © 2024 Te Amo Tanto Venezuela. Todos los derechos reservados.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const drawer = ref(false);
const scrolled = ref(false);

const navItems = [
  // { title: "Inicio", to: "/", icon: "mdi-home" },
  { title: "Destinos", to: "/destinos", icon: "mdi-map-marker" },
  { title: "Gastronomía", to: "/gastronomia", icon: "mdi-food" },
  { title: "Cultura", to: "/cultura", icon: "mdi-music" },
  { title: "Eventos", to: "/eventos", icon: "mdi-calendar" },
  { title: "Planifica", to: "/planifica", icon: "mdi-map" },
  // { title: "Nosotros", to: "/nosotros", icon: "mdi-information" },
];

const socialLinks = [
  { name: "Facebook", icon: "mdi-facebook" },
  { name: "Instagram", icon: "mdi-instagram" },
  { name: "Twitter", icon: "mdi-twitter" },
  { name: "YouTube", icon: "mdi-youtube" },
];

const handleScroll = () => {
  scrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.transition-all {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
