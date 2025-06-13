<template>
  <div class="nosotros-page">
    <!-- Hero Section -->
    <section class="hero-section bg-tricolor text-white">
      <v-container class="container-custom">
        <v-row align="center" class="min-height-40vh">
          <v-col cols="12" md="8">
            <h1 class="text-h2 font-weight-bold mb-4">Acerca de Nosotros</h1>
            <p class="text-h6 mb-6">
              Somos un equipo apasionado por mostrar la belleza de Venezuela al
              mundo. Nuestra misión es conectar a viajeros con las maravillas
              naturales, culturales y gastronómicas de nuestro país.
            </p>
            <v-btn
              size="large"
              color="accent"
              class="text-primary font-weight-bold tricolor-hover"
            >
              <v-icon start>mdi-email</v-icon>
              Contáctanos
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Misión y Visión -->
    <section class="py-12">
      <v-container class="container-custom">
        <v-row>
          <v-col cols="12" md="6" class="mb-8 mb-md-0">
            <div class="mission-card pa-6 h-100">
              <v-icon size="60" color="primary" class="mb-4">mdi-target</v-icon>
              <h2 class="text-h4 font-weight-bold text-primary mb-4">
                Nuestra Misión
              </h2>
              <p class="text-body-1 text-grey-darken-1 mb-4">
                Promover el turismo responsable en Venezuela, destacando la
                riqueza natural, cultural y gastronómica del país. Buscamos ser
                el puente entre los viajeros y las experiencias auténticas que
                solo Venezuela puede ofrecer.
              </p>
              <p class="text-body-1 text-grey-darken-1">
                Creemos en el poder del turismo como herramienta de desarrollo
                sostenible y preservación cultural, conectando a las comunidades
                locales con visitantes de todo el mundo.
              </p>
            </div>
          </v-col>

          <v-col cols="12" md="6">
            <div class="vision-card pa-6 h-100">
              <v-icon size="60" color="secondary" class="mb-4">mdi-eye</v-icon>
              <h2 class="text-h4 font-weight-bold text-secondary mb-4">
                Nuestra Visión
              </h2>
              <p class="text-body-1 text-grey-darken-1 mb-4">
                Ser la plataforma líder en promoción turística de Venezuela,
                reconocida por la calidad de nuestro contenido y la autenticidad
                de nuestras recomendaciones.
              </p>
              <p class="text-body-1 text-grey-darken-1">
                Aspiramos a que cada viajero que visite Venezuela a través de
                nuestras recomendaciones se convierta en un embajador de la
                belleza y hospitalidad venezolana.
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Nuestro Equipo -->
    <section class="py-12 bg-grey-lighten-4">
      <v-container class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-h3 font-weight-bold text-primary mb-4">
            Nuestro Equipo
          </h2>
          <p class="text-h6 text-grey-darken-1">
            Conoce a las personas apasionadas detrás de Te Amo Tanto Venezuela
          </p>
        </div>

        <v-row>
          <v-col
            v-for="member in teamMembers"
            :key="member.id"
            cols="12"
            sm="6"
            md="4"
            lg="3"
            class="mb-8"
          >
            <v-card
              class="team-card text-center pa-4 h-100 tricolor-border"
              elevation="4"
            >
              <v-avatar size="120" class="mb-4">
                <NuxtImg
                  :src="member.image"
                  :alt="member.name"
                  width="120"
                  height="120"
                />
              </v-avatar>

              <h3 class="text-h6 font-weight-bold text-primary mb-2">
                {{ member.name }}
              </h3>
              <p class="text-body-2 text-accent font-weight-medium mb-3">
                {{ member.position }}
              </p>
              <p class="text-body-2 text-grey-darken-1 mb-4">
                {{ member.description }}
              </p>

              <div class="d-flex justify-center ga-2">
                <v-btn
                  v-for="social in member.social"
                  :key="social.platform"
                  :icon="social.icon"
                  variant="text"
                  :color="social.color"
                  size="small"
                ></v-btn>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Nuestros Valores -->
    <section class="py-12">
      <v-container class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-h3 font-weight-bold text-primary mb-4">
            Nuestros Valores
          </h2>
          <p class="text-h6 text-grey-darken-1">
            Los principios que guían nuestro trabajo diario
          </p>
        </div>

        <v-row>
          <v-col
            v-for="value in values"
            :key="value.id"
            cols="12"
            md="6"
            lg="4"
            class="mb-6"
          >
            <v-card class="value-card h-100" elevation="3">
              <v-card-text class="pa-6 text-center">
                <v-avatar size="80" :color="value.color" class="mb-4">
                  <v-icon size="40" color="white">{{ value.icon }}</v-icon>
                </v-avatar>
                <h4 class="text-h6 font-weight-bold text-primary mb-3">
                  {{ value.title }}
                </h4>
                <p class="text-body-2 text-grey-darken-1">
                  {{ value.description }}
                </p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Formulario de Contacto -->
    <section class="py-12 bg-secondary text-white">
      <v-container class="container-custom">
        <v-row>
          <v-col cols="12" md="6" class="mb-8 mb-md-0">
            <h2 class="text-h3 font-weight-bold mb-6">
              ¿Tienes alguna pregunta?
            </h2>
            <p class="text-h6 mb-6 opacity-90">
              Estamos aquí para ayudarte a planificar tu próxima aventura en
              Venezuela. No dudes en contactarnos.
            </p>

            <div class="contact-info">
              <div class="d-flex align-center mb-4">
                <v-icon color="accent" class="mr-4">mdi-email</v-icon>
                <div>
                  <div class="font-weight-medium">Email</div>
                  <div class="opacity-90">info@teamotantovenezuela.com</div>
                </div>
              </div>

              <div class="d-flex align-center mb-4">
                <v-icon color="accent" class="mr-4">mdi-phone</v-icon>
                <div>
                  <div class="font-weight-medium">Teléfono</div>
                  <div class="opacity-90">+58 212-555-0123</div>
                </div>
              </div>

              <div class="d-flex align-center mb-4">
                <v-icon color="accent" class="mr-4">mdi-map-marker</v-icon>
                <div>
                  <div class="font-weight-medium">Oficina</div>
                  <div class="opacity-90">Caracas, Venezuela</div>
                </div>
              </div>
            </div>
          </v-col>

          <v-col cols="12" md="6">
            <v-card class="contact-form pa-6" elevation="8">
              <h3 class="text-h5 font-weight-bold text-primary mb-6">
                Envíanos un mensaje
              </h3>

              <v-form>
                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="contactForm.firstName"
                      label="Nombre"
                      variant="outlined"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="contactForm.lastName"
                      label="Apellido"
                      variant="outlined"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="contactForm.email"
                      label="Correo electrónico"
                      type="email"
                      variant="outlined"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-select
                      v-model="contactForm.subject"
                      :items="contactSubjects"
                      label="Asunto"
                      variant="outlined"
                      required
                    ></v-select>
                  </v-col>
                  <v-col cols="12">
                    <v-textarea
                      v-model="contactForm.message"
                      label="Mensaje"
                      variant="outlined"
                      rows="4"
                      required
                    ></v-textarea>
                  </v-col>
                </v-row>

                <div class="text-center mt-4">
                  <v-btn size="large" color="primary" @click="submitForm">
                    <v-icon start>mdi-send</v-icon>
                    Enviar Mensaje
                  </v-btn>
                </div>
              </v-form>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Estadísticas -->
    <section class="py-12">
      <v-container class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-h3 font-weight-bold text-primary mb-4">
            Nuestro Impacto
          </h2>
          <p class="text-h6 text-grey-darken-1">
            Números que reflejan nuestro compromiso con el turismo venezolano
          </p>
        </div>

        <v-row>
          <v-col
            v-for="stat in statistics"
            :key="stat.id"
            cols="6"
            md="3"
            class="mb-6"
          >
            <div class="stat-card text-center">
              <v-icon :color="stat.color" size="48" class="mb-3">{{
                stat.icon
              }}</v-icon>
              <div class="text-h3 font-weight-bold text-primary mb-2">
                {{ stat.number }}
              </div>
              <div class="text-body-1 text-grey-darken-1">
                {{ stat.label }}
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

// SEO Meta tags
useHead({
  title: "Acerca de Nosotros - Te Amo Tanto Venezuela",
  meta: [
    {
      name: "description",
      content:
        "Conoce al equipo detrás de Te Amo Tanto Venezuela, nuestra misión de promover el turismo responsable y nuestros valores.",
    },
  ],
});

const contactForm = ref({
  firstName: "",
  lastName: "",
  email: "",
  subject: "",
  message: "",
});

const contactSubjects = [
  "Consulta general",
  "Planificación de viaje",
  "Información sobre destinos",
  "Colaboración comercial",
  "Sugerencias y comentarios",
  "Reportar un problema",
];

const teamMembers = [
  {
    id: 1,
    name: "María González",
    position: "Directora General",
    description:
      "Experta en turismo sostenible con más de 15 años de experiencia promoviendo destinos latinoamericanos.",
    image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg",
    social: [
      { platform: "LinkedIn", icon: "mdi-linkedin", color: "blue" },
      { platform: "Twitter", icon: "mdi-twitter", color: "light-blue" },
    ],
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    position: "Coordinador de Contenido",
    description:
      "Periodista y fotógrafo especializado en viajes, apasionado por capturar la esencia de cada destino.",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    social: [
      { platform: "Instagram", icon: "mdi-instagram", color: "pink" },
      { platform: "Facebook", icon: "mdi-facebook", color: "blue" },
    ],
  },
  {
    id: 3,
    name: "Ana Martínez",
    position: "Especialista en Cultura",
    description:
      "Antropóloga cultural dedicada a preservar y difundir las tradiciones venezolanas.",
    image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg",
    social: [
      { platform: "LinkedIn", icon: "mdi-linkedin", color: "blue" },
      { platform: "Academia", icon: "mdi-school", color: "green" },
    ],
  },
  {
    id: 4,
    name: "Luis Hernández",
    position: "Guía de Aventura",
    description:
      "Montañista y guía certificado con amplio conocimiento de los ecosistemas venezolanos.",
    image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg",
    social: [
      { platform: "Instagram", icon: "mdi-instagram", color: "pink" },
      { platform: "YouTube", icon: "mdi-youtube", color: "red" },
    ],
  },
];

const values = [
  {
    id: 1,
    title: "Autenticidad",
    description:
      "Promovemos experiencias genuinas que reflejan la verdadera esencia de Venezuela.",
    icon: "mdi-heart",
    color: "primary",
  },
  {
    id: 2,
    title: "Sostenibilidad",
    description:
      "Fomentamos un turismo responsable que preserve nuestros recursos naturales y culturales.",
    icon: "mdi-leaf",
    color: "secondary",
  },
  {
    id: 3,
    title: "Calidad",
    description:
      "Ofrecemos información precisa y recomendaciones de alta calidad para nuestros usuarios.",
    icon: "mdi-star",
    color: "accent",
  },
  {
    id: 4,
    title: "Inclusión",
    description:
      "Creemos que el turismo debe ser accesible para todos, sin importar origen o condición.",
    icon: "mdi-account-group",
    color: "primary",
  },
  {
    id: 5,
    title: "Innovación",
    description:
      "Utilizamos tecnología y métodos innovadores para mejorar la experiencia del viajero.",
    icon: "mdi-lightbulb",
    color: "secondary",
  },
  {
    id: 6,
    title: "Pasión",
    description:
      "Nuestro amor por Venezuela se refleja en cada recomendación y cada historia que compartimos.",
    icon: "mdi-fire",
    color: "accent",
  },
];

const statistics = [
  {
    id: 1,
    number: "50K+",
    label: "Viajeros Inspirados",
    icon: "mdi-account-group",
    color: "primary",
  },
  {
    id: 2,
    number: "200+",
    label: "Destinos Cubiertos",
    icon: "mdi-map-marker",
    color: "secondary",
  },
  {
    id: 3,
    number: "1000+",
    label: "Artículos Publicados",
    icon: "mdi-file-document",
    color: "accent",
  },
  {
    id: 4,
    number: "95%",
    label: "Satisfacción",
    icon: "mdi-thumb-up",
    color: "primary",
  },
];

const submitForm = () => {
  // Simulación de envío de formulario
  if (
    contactForm.value.firstName &&
    contactForm.value.email &&
    contactForm.value.message
  ) {
    alert("¡Gracias por tu mensaje! Te responderemos pronto.");
    // Limpiar formulario
    Object.keys(contactForm.value).forEach((key) => {
      contactForm.value[key] = "";
    });
  } else {
    alert("Por favor, completa todos los campos requeridos.");
  }
};
</script>

<style scoped>
.min-height-40vh {
  min-height: 40vh;
}

.mission-card,
.vision-card {
  background: linear-gradient(
    135deg,
    rgba(var(--v-theme-primary), 0.5),
    rgba(var(--v-theme-primary), 0.9)
  );
  border-radius: 12px;
  border-left: 4px solid rgb(var(--v-theme-primary));
}

.vision-card {
  border-left-color: rgb(var(--v-theme-secondary));
}

.team-card {
  border-top: 4px solid rgb(var(--v-theme-primary));
  transition: transform 0.3s ease;
}

.team-card:hover {
  transform: translateY(-4px);
}

.value-card {
  border-top: 4px solid rgb(var(--v-theme-accent));
}

.contact-form {
  background: white;
}

.stat-card {
  padding: 24px;
  border-radius: 8px;
  background: linear-gradient(
    135deg,
    rgba(var(--v-theme-primary), 0.05),
    rgba(var(--v-theme-secondary), 0.05)
  );
}

.contact-info .v-icon {
  background: rgba(var(--v-theme-accent), 0.1);
  border-radius: 50%;
  padding: 8px;
}
</style>
