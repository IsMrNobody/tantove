<template>
  <div class="destinos-page">
    <!-- Hero Section -->
    <section class="hero-section bg-tricolor text-white">
      <v-container class="container-custom">
        <v-row align="center" class="min-height-40vh">
          <v-col cols="12" md="8">
            <h1 class="text-h2 font-weight-bold mb-4">Destinos de Venezuela</h1>
            <p class="text-h6 mb-6">
              Explora la diversidad geográfica de Venezuela, desde playas
              paradisíacas hasta montañas andinas y selvas amazónicas.
            </p>
            <v-btn
              size="large"
              color="accent"
              class="text-primary font-weight-bold tricolor-hover"
            >
              <v-icon start>mdi-filter</v-icon>
              Filtrar Destinos
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Filtros -->
    <section class="py-8 bg-grey-lighten-5">
      <v-container class="container-custom">
        <v-row>
          <v-col cols="12" md="3">
            <v-select
              v-model="selectedRegion"
              :items="regions"
              label="Región"
              variant="outlined"
              clearable
            ></v-select>
          </v-col>
          <v-col cols="12" md="3">
            <v-select
              v-model="selectedType"
              :items="destinationTypes"
              label="Tipo de destino"
              variant="outlined"
              clearable
            ></v-select>
          </v-col>
          <v-col cols="12" md="3">
            <v-select
              v-model="selectedActivity"
              :items="activities"
              label="Actividades"
              variant="outlined"
              clearable
            ></v-select>
          </v-col>
          <v-col cols="12" md="3">
            <v-text-field
              v-model="searchQuery"
              label="Buscar destino"
              variant="outlined"
              prepend-inner-icon="mdi-magnify"
              clearable
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Lista de Destinos -->
    <section class="py-12">
      <v-container class="container-custom">
        <v-row>
          <v-col
            v-for="destination in filteredDestinations"
            :key="destination.id"
            cols="12"
            md="6"
            lg="4"
            class="mb-8"
          >
            <v-card
              class="destination-card h-100 hover-lift tricolor-border"
              elevation="4"
            >
              <div class="position-relative">
                <img
                  :src="destination.image"
                  :alt="destination.name"
                  class="destination-image"
                  width="400"
                  height="250"
                />
                <v-chip
                  class="position-absolute top-0 right-0 ma-2"
                  :color="destination.typeColor"
                  text-color="white"
                  size="small"
                >
                  {{ destination.type }}
                </v-chip>
              </div>

              <v-card-text class="pa-4">
                <h3 class="text-h6 font-weight-bold mb-2">
                  {{ destination.name }}
                </h3>
                <p class="text-body-2 text-grey-darken-1 mb-3">
                  {{ destination.description }}
                </p>

                <div class="d-flex align-center justify-space-between mb-3">
                  <div class="d-flex align-center">
                    <v-icon color="primary" size="small" class="mr-1"
                      >mdi-map-marker</v-icon
                    >
                    <span class="text-body-2">{{ destination.region }}</span>
                  </div>
                  <v-rating
                    :model-value="destination.rating"
                    color="accent"
                    density="compact"
                    readonly
                    size="small"
                  ></v-rating>
                </div>

                <div class="d-flex flex-wrap ga-1 mb-3">
                  <v-chip
                    v-for="activity in destination.activities"
                    :key="activity"
                    size="x-small"
                    color="secondary"
                    variant="outlined"
                  >
                    {{ activity }}
                  </v-chip>
                </div>
              </v-card-text>

              <v-card-actions class="pa-4 pt-0">
                <v-btn
                  color="primary"
                  variant="text"
                  @click="openDestinationModal(destination)"
                >
                  Ver Detalles
                  <v-icon end>mdi-arrow-right</v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                  icon="mdi-heart-outline"
                  variant="text"
                  color="primary"
                ></v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>

        <div v-if="filteredDestinations.length === 0" class="text-center py-12">
          <v-icon size="64" color="grey-lighten-1">mdi-map-search</v-icon>
          <h3 class="text-h5 text-grey-darken-1 mt-4">
            No se encontraron destinos
          </h3>
          <p class="text-body-1 text-grey-darken-1">
            Intenta con otros filtros de búsqueda
          </p>
        </div>
      </v-container>
    </section>

    <!-- Modal de Detalle -->
    <v-dialog v-model="destinationModal" max-width="800">
      <v-card v-if="selectedDestination">
        <v-img :src="selectedDestination.image" height="300" cover>
          <v-btn
            icon="mdi-close"
            variant="text"
            color="white"
            class="position-absolute top-0 right-0 ma-2"
            @click="destinationModal = false"
          ></v-btn>
        </v-img>

        <v-card-text class="pa-6">
          <h2 class="text-h4 font-weight-bold text-primary mb-4">
            {{ selectedDestination.name }}
          </h2>

          <div class="d-flex align-center mb-4">
            <v-icon color="primary" class="mr-2">mdi-map-marker</v-icon>
            <span class="text-h6">{{ selectedDestination.region }}</span>
            <v-spacer></v-spacer>
            <v-rating
              :model-value="selectedDestination.rating"
              color="accent"
              readonly
            ></v-rating>
          </div>

          <p class="text-body-1 mb-6">
            {{ selectedDestination.fullDescription }}
          </p>

          <h3 class="text-h6 font-weight-bold mb-3">Actividades Destacadas</h3>
          <div class="d-flex flex-wrap ga-2 mb-6">
            <v-chip
              v-for="activity in selectedDestination.activities"
              :key="activity"
              color="secondary"
              variant="outlined"
            >
              {{ activity }}
            </v-chip>
          </div>

          <h3 class="text-h6 font-weight-bold mb-3">Información Práctica</h3>
          <v-list density="compact">
            <v-list-item>
              <template v-slot:prepend>
                <v-icon color="primary">mdi-clock</v-icon>
              </template>
              <v-list-item-title
                >Mejor época:
                {{ selectedDestination.bestTime }}</v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <template v-slot:prepend>
                <v-icon color="primary">mdi-car</v-icon>
              </template>
              <v-list-item-title
                >Cómo llegar:
                {{ selectedDestination.howToGet }}</v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <template v-slot:prepend>
                <v-icon color="primary">mdi-home</v-icon>
              </template>
              <v-list-item-title
                >Alojamiento:
                {{ selectedDestination.accommodation }}</v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-card-text>

        <v-card-actions class="pa-6 pt-0">
          <v-btn color="secondary" to="/planifica">
            <v-icon start>mdi-map</v-icon>
            Planificar Viaje
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn variant="outlined" @click="destinationModal = false">
            Cerrar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

// SEO Meta tags
useHead({
  title: "Destinos de Venezuela - Te Amo Tanto Venezuela",
  meta: [
    {
      name: "description",
      content:
        "Descubre los mejores destinos turísticos de Venezuela. Desde playas paradisíacas hasta montañas andinas.",
    },
  ],
});

const selectedRegion = ref(null);
const selectedType = ref(null);
const selectedActivity = ref(null);
const searchQuery = ref("");
const destinationModal = ref(false);
const selectedDestination = ref(null);

const regions = [
  "Caribe",
  "Andes",
  "Canaima",
  "Llanos",
  "Guayana",
  "Centro",
  "Oriente",
];

const destinationTypes = [
  "Playa",
  "Montaña",
  "Ciudad",
  "Selva",
  "Histórico",
  "Natural",
];

const activities = [
  "Senderismo",
  "Buceo",
  "Fotografía",
  "Cultura",
  "Aventura",
  "Relajación",
];

const destinations = [
  {
    id: 1,
    name: "Los Roques",
    region: "Caribe",
    type: "Playa",
    typeColor: "blue",
    description:
      "Archipiélago paradisíaco con aguas cristalinas y arenas blancas.",
    fullDescription:
      "Los Roques es un parque nacional marino ubicado en el Mar Caribe, a 176 km al norte de Caracas. Está formado por más de 350 islas, cayos e islotes que forman una laguna de aguas cristalinas de incomparable belleza.",
    rating: 5,
    image: "https://images.pexels.com/photos/356830/pexels-photo-356830.jpeg",
    activities: ["Buceo", "Fotografía", "Relajación"],
    bestTime: "Noviembre a Abril",
    howToGet: "Vuelos charter desde Caracas o Maracaibo",
    accommodation: "Posadas familiares en Gran Roque",
  },
  {
    id: 2,
    name: "Salto Ángel",
    region: "Canaima",
    type: "Natural",
    typeColor: "green",
    description: "La cascada más alta del mundo con 979 metros de altura.",
    fullDescription:
      "El Salto Ángel es la cascada más alta del mundo, ubicada en el Parque Nacional Canaima. Sus aguas caen desde la cima del tepuy Auyantepuy, creando un espectáculo natural único en el planeta.",
    rating: 5,
    image: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg",
    activities: ["Senderismo", "Fotografía", "Aventura"],
    bestTime: "Junio a Noviembre",
    howToGet: "Vuelo a Canaima y excursión en curiara",
    accommodation: "Campamentos y posadas en Canaima",
  },
  {
    id: 3,
    name: "Mérida",
    region: "Andes",
    type: "Ciudad",
    typeColor: "brown",
    description: "Ciudad universitaria con el teleférico más alto del mundo.",
    fullDescription:
      'Mérida, conocida como la "Ciudad de los Caballeros", es una ciudad universitaria ubicada en los Andes venezolanos. Es famosa por su teleférico, el más alto y largo del mundo, que lleva a los visitantes hasta el Pico Espejo.',
    rating: 4.8,
    image: "https://images.pexels.com/photos/356830/pexels-photo-356830.jpeg",
    activities: ["Senderismo", "Cultura", "Aventura"],
    bestTime: "Todo el año",
    howToGet: "Vuelo a Mérida o vía terrestre",
    accommodation: "Hoteles y posadas de montaña",
  },
  {
    id: 4,
    name: "Isla Margarita",
    region: "Oriente",
    type: "Playa",
    typeColor: "blue",
    description: "Perla del Caribe con playas doradas y vida nocturna.",
    fullDescription:
      'Isla Margarita es conocida como la "Perla del Caribe" por sus hermosas playas, clima tropical y rica historia. Ofrece una combinación perfecta de relajación, aventura y entretenimiento.',
    rating: 4.7,
    image: "https://images.pexels.com/photos/356830/pexels-photo-356830.jpeg",
    activities: ["Buceo", "Relajación", "Cultura"],
    bestTime: "Diciembre a Abril",
    howToGet: "Vuelo directo o ferry desde La Guaira",
    accommodation: "Resorts todo incluido y hoteles boutique",
  },
  {
    id: 5,
    name: "Delta del Orinoco",
    region: "Guayana",
    type: "Selva",
    typeColor: "green",
    description: "Laberinto de ríos y canales en la selva tropical.",
    fullDescription:
      "El Delta del Orinoco es una vasta región de humedales donde el río Orinoco se divide en cientos de canales antes de desembocar en el Atlántico. Es hogar de la etnia Warao y una biodiversidad única.",
    rating: 4.6,
    image: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg",
    activities: ["Fotografía", "Cultura", "Aventura"],
    bestTime: "Enero a Abril",
    howToGet: "Vía terrestre hasta Tucupita y navegación",
    accommodation: "Lodges ecológicos y campamentos",
  },
  {
    id: 6,
    name: "Caracas",
    region: "Centro",
    type: "Ciudad",
    typeColor: "purple",
    description: "Capital cosmopolita con museos, parques y vida urbana.",
    fullDescription:
      "Caracas es la capital de Venezuela, una metrópolis moderna ubicada en un valle de la Cordillera de la Costa. Ofrece una rica vida cultural, excelente gastronomía y importantes sitios históricos.",
    rating: 4.2,
    image: "https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg",
    activities: ["Cultura", "Fotografía", "Gastronomía"],
    bestTime: "Todo el año",
    howToGet: "Aeropuerto Internacional Simón Bolívar",
    accommodation: "Hoteles de lujo y boutique",
  },
];

const filteredDestinations = computed(() => {
  let filtered = destinations;

  if (selectedRegion.value) {
    filtered = filtered.filter((d) => d.region === selectedRegion.value);
  }

  if (selectedType.value) {
    filtered = filtered.filter((d) => d.type === selectedType.value);
  }

  if (selectedActivity.value) {
    filtered = filtered.filter((d) =>
      d.activities.includes(selectedActivity.value)
    );
  }

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    filtered = filtered.filter(
      (d) =>
        d.name.toLowerCase().includes(query) ||
        d.description.toLowerCase().includes(query)
    );
  }

  return filtered;
});

const openDestinationModal = (destination) => {
  selectedDestination.value = destination;
  destinationModal.value = true;
};
</script>

<style scoped>
.min-height-40vh {
  min-height: 40vh;
}

.destination-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.destination-card:hover {
  transform: translateY(-4px);
  transition: transform 0.3s ease;
}
</style>
