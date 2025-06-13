<template>
  <div class="planifica-page">
    <!-- Hero Section -->
    <section class="hero-section bg-tricolor text-white">
      <v-container class="container-custom">
        <v-row align="center" class="min-height-40vh">
          <v-col cols="12" md="8">
            <h1 class="text-h2 font-weight-bold mb-4">Planifica tu Viaje</h1>
            <p class="text-h6 mb-6">
              Organiza tu aventura perfecta por Venezuela con nuestras
              herramientas de planificación, consejos expertos y itinerarios
              sugeridos.
            </p>
            <v-btn
              size="large"
              color="accent"
              class="text-primary font-weight-bold tricolor-hover"
            >
              <v-icon start>mdi-map-search</v-icon>
              Comenzar Planificación
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Planificador de Viaje -->
    <section class="py-12">
      <v-container class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-h3 font-weight-bold text-primary mb-4">
            Planificador de Viaje
          </h2>
          <p class="text-h6 text-grey-darken-1">
            Personaliza tu experiencia según tus preferencias
          </p>
        </div>

        <v-card
          class="bg-white trip-planner pa-6 tricolor-border"
          elevation="4"
        >
          <v-form>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="tripForm.destination"
                  label="¿A dónde quieres ir?"
                  variant="outlined"
                  prepend-inner-icon="mdi-map-marker"
                  placeholder="Ej: Los Roques, Mérida, Caracas..."
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-select
                  v-model="tripForm.duration"
                  :items="durations"
                  label="Duración del viaje"
                  variant="outlined"
                  prepend-inner-icon="mdi-calendar"
                ></v-select>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="tripForm.startDate"
                  label="Fecha de inicio"
                  type="date"
                  variant="outlined"
                  prepend-inner-icon="mdi-calendar-start"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-select
                  v-model="tripForm.travelers"
                  :items="travelerOptions"
                  label="Número de viajeros"
                  variant="outlined"
                  prepend-inner-icon="mdi-account-group"
                ></v-select>
              </v-col>
              <v-col cols="12" md="6">
                <v-select
                  v-model="tripForm.budget"
                  :items="budgetOptions"
                  label="Presupuesto aproximado"
                  variant="outlined"
                  prepend-inner-icon="mdi-currency-usd"
                ></v-select>
              </v-col>
              <v-col cols="12" md="6">
                <v-select
                  v-model="tripForm.interests"
                  :items="interestOptions"
                  label="Intereses principales"
                  variant="outlined"
                  multiple
                  prepend-inner-icon="mdi-heart"
                ></v-select>
              </v-col>
            </v-row>

            <div class="text-center mt-6">
              <v-btn size="large" color="primary" @click="generateItinerary">
                <v-icon start>mdi-magic-staff</v-icon>
                Generar Itinerario
              </v-btn>
            </div>
          </v-form>
        </v-card>
      </v-container>
    </section>

    <!-- Itinerarios Sugeridos -->
    <section class="py-12 bg-grey-lighten-4">
      <v-container class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-h3 font-weight-bold text-primary mb-4">
            Itinerarios Sugeridos
          </h2>
          <p class="text-h6 text-grey-darken-1">
            Rutas diseñadas por expertos para diferentes tipos de viajeros
          </p>
        </div>

        <v-row>
          <v-col
            v-for="itinerary in suggestedItineraries"
            :key="itinerary.id"
            cols="12"
            md="6"
            lg="4"
            class="mb-8"
          >
            <v-card class="itinerary-card h-100 hover-lift" elevation="4">
              <div class="position-relative">
                <NuxtImg
                  :src="itinerary.image"
                  :alt="itinerary.name"
                  class="itinerary-image"
                  width="400"
                  height="200"
                />
                <v-chip
                  class="position-absolute top-0 right-0 ma-2"
                  :color="itinerary.typeColor"
                  text-color="white"
                  size="small"
                >
                  {{ itinerary.type }}
                </v-chip>
              </div>

              <v-card-text class="pa-4">
                <h3 class="text-h6 font-weight-bold text-primary mb-2">
                  {{ itinerary.name }}
                </h3>
                <p class="text-body-2 text-grey-darken-1 mb-3">
                  {{ itinerary.description }}
                </p>

                <div class="itinerary-details mb-3">
                  <div class="d-flex align-center mb-2">
                    <v-icon color="secondary" size="small" class="mr-2"
                      >mdi-calendar</v-icon
                    >
                    <span class="text-body-2">{{ itinerary.duration }}</span>
                  </div>
                  <div class="d-flex align-center mb-2">
                    <v-icon color="accent" size="small" class="mr-2"
                      >mdi-map-marker</v-icon
                    >
                    <span class="text-body-2"
                      >{{ itinerary.destinations }} destinos</span
                    >
                  </div>
                  <div class="d-flex align-center">
                    <v-icon color="primary" size="small" class="mr-2"
                      >mdi-currency-usd</v-icon
                    >
                    <span class="text-body-2">{{ itinerary.budget }}</span>
                  </div>
                </div>

                <div class="d-flex flex-wrap ga-1">
                  <v-chip
                    v-for="highlight in itinerary.highlights.slice(0, 2)"
                    :key="highlight"
                    size="x-small"
                    color="secondary"
                    variant="outlined"
                  >
                    {{ highlight }}
                  </v-chip>
                </div>
              </v-card-text>

              <v-card-actions class="pa-4 pt-0">
                <v-btn
                  color="primary"
                  variant="text"
                  @click="openItineraryModal(itinerary)"
                >
                  Ver Itinerario
                  <v-icon end>mdi-arrow-right</v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                  icon="mdi-download"
                  variant="text"
                  color="secondary"
                ></v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Consejos para Viajeros -->
    <section class="py-12">
      <v-container class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-h3 font-weight-bold text-primary mb-4">
            Consejos para Viajeros
          </h2>
          <p class="text-h6 text-grey-darken-1">
            Información esencial para que tu viaje sea perfecto
          </p>
        </div>

        <v-row>
          <v-col
            v-for="tip in travelTips"
            :key="tip.id"
            cols="12"
            md="6"
            lg="4"
            class="mb-6"
          >
            <v-card class="tip-card h-100" elevation="3">
              <v-card-text class="pa-4 text-center">
                <v-avatar size="60" :color="tip.color" class="mb-4">
                  <v-icon size="30" color="white">{{ tip.icon }}</v-icon>
                </v-avatar>
                <h4 class="text-h6 font-weight-bold text-primary mb-3">
                  {{ tip.title }}
                </h4>
                <p class="text-body-2 text-grey-darken-1">
                  {{ tip.description }}
                </p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- FAQ -->
    <section class="py-12 bg-grey-lighten-4">
      <v-container class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-h3 font-weight-bold text-primary mb-4">
            Preguntas Frecuentes
          </h2>
          <p class="text-h6 text-grey-darken-1">
            Respuestas a las dudas más comunes de los viajeros
          </p>
        </div>

        <v-row justify="center">
          <v-col cols="12" md="8">
            <v-expansion-panels variant="accordion">
              <v-expansion-panel
                v-for="faq in faqs"
                :key="faq.id"
                :title="faq.question"
                :text="faq.answer"
              ></v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Modal de Itinerario -->
    <v-dialog v-model="itineraryModal" max-width="900" scrollable>
      <v-card v-if="selectedItinerary">
        <v-img :src="selectedItinerary.image" height="250" cover>
          <v-btn
            icon="mdi-close"
            variant="text"
            color="white"
            class="position-absolute top-0 right-0 ma-2"
            @click="itineraryModal = false"
          ></v-btn>
        </v-img>

        <v-card-text class="pa-6">
          <h2 class="text-h4 font-weight-bold text-primary mb-4">
            {{ selectedItinerary.name }}
          </h2>

          <div class="itinerary-summary mb-6">
            <v-row>
              <v-col cols="6" md="3">
                <div class="text-center">
                  <v-icon color="secondary" size="24" class="mb-2"
                    >mdi-calendar</v-icon
                  >
                  <div class="text-body-2 font-weight-medium">
                    {{ selectedItinerary.duration }}
                  </div>
                </div>
              </v-col>
              <v-col cols="6" md="3">
                <div class="text-center">
                  <v-icon color="accent" size="24" class="mb-2"
                    >mdi-map-marker</v-icon
                  >
                  <div class="text-body-2 font-weight-medium">
                    {{ selectedItinerary.destinations }} destinos
                  </div>
                </div>
              </v-col>
              <v-col cols="6" md="3">
                <div class="text-center">
                  <v-icon color="primary" size="24" class="mb-2"
                    >mdi-currency-usd</v-icon
                  >
                  <div class="text-body-2 font-weight-medium">
                    {{ selectedItinerary.budget }}
                  </div>
                </div>
              </v-col>
              <v-col cols="6" md="3">
                <div class="text-center">
                  <v-icon color="secondary" size="24" class="mb-2"
                    >mdi-account-group</v-icon
                  >
                  <div class="text-body-2 font-weight-medium">
                    {{ selectedItinerary.difficulty }}
                  </div>
                </div>
              </v-col>
            </v-row>
          </div>

          <p class="text-body-1 mb-6">
            {{ selectedItinerary.fullDescription }}
          </p>

          <h3 class="text-h6 font-weight-bold mb-4">Itinerario Detallado</h3>
          <v-timeline density="compact" align="start">
            <v-timeline-item
              v-for="(day, index) in selectedItinerary.dailyPlan"
              :key="index"
              :dot-color="index % 2 === 0 ? 'primary' : 'secondary'"
              size="small"
            >
              <div class="mb-4">
                <h4 class="text-subtitle-1 font-weight-bold text-primary mb-2">
                  Día {{ index + 1 }}: {{ day.title }}
                </h4>
                <p class="text-body-2 text-grey-darken-1 mb-2">
                  {{ day.description }}
                </p>
                <div class="d-flex flex-wrap ga-1">
                  <v-chip
                    v-for="activity in day.activities"
                    :key="activity"
                    size="x-small"
                    color="accent"
                    variant="outlined"
                  >
                    {{ activity }}
                  </v-chip>
                </div>
              </div>
            </v-timeline-item>
          </v-timeline>

          <h3 class="text-h6 font-weight-bold mb-3">Lo que incluye</h3>
          <v-list density="compact" class="mb-4">
            <v-list-item
              v-for="include in selectedItinerary.includes"
              :key="include"
              class="px-0"
            >
              <template v-slot:prepend>
                <v-icon color="success" size="small">mdi-check</v-icon>
              </template>
              <v-list-item-title>{{ include }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card-text>

        <v-card-actions class="pa-6 pt-0">
          <v-btn color="secondary">
            <v-icon start>mdi-download</v-icon>
            Descargar PDF
          </v-btn>
          <v-btn color="accent" class="text-primary">
            <v-icon start>mdi-email</v-icon>
            Enviar por Email
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn variant="outlined" @click="itineraryModal = false">
            Cerrar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";

// SEO Meta tags
useHead({
  title: "Planifica tu Viaje - Te Amo Tanto Venezuela",
  meta: [
    {
      name: "description",
      content:
        "Planifica tu viaje perfecto por Venezuela con nuestros itinerarios sugeridos, consejos de viaje y herramientas de planificación.",
    },
  ],
});

const itineraryModal = ref(false);
const selectedItinerary = ref(null);

const tripForm = ref({
  destination: "",
  duration: "",
  startDate: "",
  travelers: "",
  budget: "",
  interests: [],
});

const durations = [
  "1-3 días",
  "4-7 días",
  "1-2 semanas",
  "2-3 semanas",
  "Más de 3 semanas",
];

const travelerOptions = [
  "1 persona",
  "2 personas",
  "3-4 personas",
  "5-8 personas",
  "Más de 8 personas",
];

const budgetOptions = [
  "Económico (menos de $500)",
  "Moderado ($500-$1500)",
  "Confortable ($1500-$3000)",
  "Lujo (más de $3000)",
];

const interestOptions = [
  "Playas",
  "Montañas",
  "Cultura",
  "Gastronomía",
  "Aventura",
  "Relajación",
  "Fotografía",
  "Historia",
];

const suggestedItineraries = [
  {
    id: 1,
    name: "Caribe Venezolano",
    description: "Explora las mejores playas y islas del Caribe venezolano.",
    type: "Playa",
    typeColor: "blue",
    duration: "7 días",
    destinations: 4,
    budget: "$800-1200",
    difficulty: "Fácil",
    image: "https://images.pexels.com/photos/356830/pexels-photo-356830.jpeg",
    highlights: ["Los Roques", "Isla Margarita", "Buceo", "Relajación"],
    fullDescription:
      "Un viaje perfecto para los amantes del mar y las playas paradisíacas. Descubre las aguas cristalinas de Los Roques y disfruta de la cultura caribeña en Isla Margarita.",
    dailyPlan: [
      {
        title: "Llegada a Caracas",
        description:
          "Llegada al aeropuerto y traslado al hotel. Tarde libre para explorar el centro histórico.",
        activities: ["Check-in", "City tour", "Cena bienvenida"],
      },
      {
        title: "Vuelo a Los Roques",
        description:
          "Vuelo charter a Los Roques. Día completo en Gran Roque y excursión a Francisquí.",
        activities: ["Vuelo charter", "Snorkeling", "Playa"],
      },
      {
        title: "Los Roques - Cayo de Agua",
        description:
          "Excursión a Cayo de Agua, una de las playas más hermosas del archipiélago.",
        activities: ["Navegación", "Playa virgen", "Almuerzo playero"],
      },
    ],
    includes: [
      "Vuelos domésticos",
      "Alojamiento 4 estrellas",
      "Desayunos incluidos",
      "Excursiones mencionadas",
      "Guía especializado",
    ],
  },
  {
    id: 2,
    name: "Aventura Andina",
    description:
      "Descubre las montañas, páramos y cultura de los Andes venezolanos.",
    type: "Montaña",
    typeColor: "green",
    duration: "10 días",
    destinations: 5,
    budget: "$600-900",
    difficulty: "Moderado",
    image: "https://images.pexels.com/photos/356830/pexels-photo-356830.jpeg",
    highlights: ["Mérida", "Teleférico", "Páramos", "Senderismo"],
    fullDescription:
      "Una aventura completa por los Andes venezolanos, desde el teleférico más alto del mundo hasta caminatas por páramos únicos.",
    dailyPlan: [
      {
        title: "Llegada a Mérida",
        description:
          "Llegada a la ciudad de los caballeros. Aclimatación y tour por el centro histórico.",
        activities: ["City tour", "Mercado Principal", "Heladería Coromoto"],
      },
      {
        title: "Teleférico de Mérida",
        description:
          "Ascenso en el teleférico más alto del mundo hasta Pico Espejo.",
        activities: ["Teleférico", "Pico Espejo", "Fotografía"],
      },
    ],
    includes: [
      "Transporte terrestre",
      "Alojamiento posadas",
      "Todas las comidas",
      "Entradas a parques",
      "Equipo de montaña",
    ],
  },
  {
    id: 3,
    name: "Ruta Cultural",
    description: "Sumérgete en la historia, arte y tradiciones de Venezuela.",
    type: "Cultural",
    typeColor: "purple",
    duration: "8 días",
    destinations: 6,
    budget: "$500-800",
    difficulty: "Fácil",
    image: "https://images.pexels.com/photos/325807/pexels-photo-325807.jpeg",
    highlights: ["Caracas", "Coro", "Valencia", "Museos"],
    fullDescription:
      "Un recorrido por los principales centros culturales e históricos de Venezuela, incluyendo sitios Patrimonio de la Humanidad.",
    dailyPlan: [
      {
        title: "Caracas Colonial",
        description:
          "Tour por el centro histórico de Caracas y sus principales museos.",
        activities: ["Casa Natal Bolívar", "Panteón Nacional", "Museos"],
      },
    ],
    includes: [
      "Transporte privado",
      "Hoteles céntricos",
      "Entradas a museos",
      "Guías especializados",
      "Algunas comidas",
    ],
  },
];

const travelTips = [
  {
    id: 1,
    title: "Documentación",
    description:
      "Asegúrate de tener tu pasaporte vigente y verifica si necesitas visa según tu nacionalidad.",
    icon: "mdi-passport",
    color: "primary",
  },
  {
    id: 2,
    title: "Moneda",
    description:
      "La moneda oficial es el Bolívar. Se recomienda llevar dólares americanos para cambio.",
    icon: "mdi-currency-usd",
    color: "secondary",
  },
  {
    id: 3,
    title: "Clima",
    description:
      "Venezuela tiene clima tropical. La época seca va de diciembre a abril.",
    icon: "mdi-weather-sunny",
    color: "accent",
  },
  {
    id: 4,
    title: "Transporte",
    description:
      "Para destinos remotos como Los Roques, se requieren vuelos charter o navegación.",
    icon: "mdi-airplane",
    color: "primary",
  },
  {
    id: 5,
    title: "Salud",
    description:
      "Se recomienda vacuna contra fiebre amarilla para ciertas regiones. Consulta a tu médico.",
    icon: "mdi-medical-bag",
    color: "secondary",
  },
  {
    id: 6,
    title: "Seguridad",
    description:
      "Mantén tus pertenencias seguras y evita mostrar objetos de valor en público.",
    icon: "mdi-shield-check",
    color: "accent",
  },
];

const faqs = [
  {
    id: 1,
    question: "¿Cuál es la mejor época para visitar Venezuela?",
    answer:
      "La época seca, de diciembre a abril, es ideal para la mayoría de destinos. Para Los Roques y las playas, cualquier época es buena. Para el Salto Ángel, la época de lluvias (mayo-noviembre) ofrece mayor caudal.",
  },
  {
    id: 2,
    question: "¿Necesito vacunas especiales?",
    answer:
      "Se recomienda la vacuna contra la fiebre amarilla, especialmente si planeas visitar zonas selváticas como Canaima. También se sugieren vacunas contra hepatitis A y B, y tétanos.",
  },
  {
    id: 3,
    question: "¿Cómo llego a Los Roques?",
    answer:
      "Los Roques solo es accesible por vuelos charter desde Caracas o Maracaibo. El vuelo dura aproximadamente 40 minutos y debe reservarse con anticipación.",
  },
  {
    id: 4,
    question: "¿Qué moneda debo llevar?",
    answer:
      "Aunque la moneda oficial es el Bolívar, se recomienda llevar dólares americanos en efectivo. Muchos servicios turísticos aceptan dólares directamente.",
  },
  {
    id: 5,
    question: "¿Es seguro viajar por Venezuela?",
    answer:
      "Como en cualquier destino, es importante tomar precauciones básicas. Se recomienda viajar con agencias especializadas y seguir las recomendaciones de seguridad locales.",
  },
];

const generateItinerary = () => {
  // Simulación de generación de itinerario
  alert(
    "¡Itinerario personalizado generado! Revisa tu email para los detalles."
  );
};

const openItineraryModal = (itinerary) => {
  selectedItinerary.value = itinerary;
  itineraryModal.value = true;
};
</script>

<style scoped>
.min-height-40vh {
  min-height: 40vh;
}

.trip-planner {
  background: linear-gradient(
    135deg,
    rgba(var(--v-theme-primary), 0.05),
    rgba(var(--v-theme-secondary), 0.05)
  );
}

.itinerary-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.itinerary-card:hover {
  transform: translateY(-4px);
  transition: transform 0.3s ease;
}

.tip-card {
  border-top: 4px solid rgb(var(--v-theme-primary));
}

.itinerary-summary {
  background-color: rgba(var(--v-theme-surface), 0.5);
  border-radius: 8px;
  padding: 16px;
}

.itinerary-details {
  background-color: rgba(var(--v-theme-primary), 0.05);
  border-radius: 8px;
  padding: 12px;
}
</style>
