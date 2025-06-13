<template>
  <div class="cultura-page">
    <!-- Hero Section -->
    <section class="hero-section cultura-bg-primary cultura-primary">
      <v-container class="container-custom">
        <v-row align="center" class="min-height-40vh">
          <v-col cols="12" md="8">
            <h1 class="text-h2 font-weight-bold mb-4">Cultura y Tradiciones</h1>
            <p class="text-h6 mb-6">
              Sumérgete en la riqueza cultural de Venezuela: música, danzas,
              artesanías y tradiciones que han pasado de generación en
              generación.
            </p>
            <v-btn
              size="large"
              color="secondary"
              class="text-white font-weight-bold tricolor-hover"
            >
              <v-icon start>mdi-music</v-icon>
              Explorar Cultura
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Música y Bailes -->
    <section class="py-12">
      <v-container class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-h3 font-weight-bold cultura-primary mb-4">
            Música y Bailes Tradicionales
          </h2>
          <p class="text-h6 text-grey-darken-1">
            Los ritmos que definen nuestra identidad cultural
          </p>
        </div>

        <v-row>
          <v-col
            v-for="music in musicalGenres"
            :key="music.id"
            cols="12"
            md="6"
            lg="4"
            class="mb-8"
          >
            <v-card
              class="music-card h-100 hover-lift cultura-border-primary"
              elevation="4"
            >
              <div class="position-relative">
                <NuxtImg
                  :src="music.image"
                  :alt="music.name"
                  class="music-image"
                  width="400"
                  height="200"
                />
                <div
                  class="music-overlay position-absolute bottom-0 left-0 w-100 pa-4"
                >
                  <v-btn
                    icon="mdi-play"
                    color="#9CD44C"
                    size="large"
                    class="play-button"
                  ></v-btn>
                </div>
              </div>

              <v-card-text class="pa-4">
                <h3 class="text-h6 font-weight-bold cultura-primary mb-2">
                  {{ music.name }}
                </h3>
                <p class="text-body-2 text-grey-darken-1 mb-3">
                  {{ music.description }}
                </p>

                <div class="d-flex align-center mb-3">
                  <v-icon color="#ECD730" size="small" class="mr-2"
                    >mdi-map-marker</v-icon
                  >
                  <span class="text-body-2">{{ music.region }}</span>
                </div>

                <div class="d-flex flex-wrap ga-1 mb-3">
                  <v-chip
                    v-for="instrument in music.instruments"
                    :key="instrument"
                    size="x-small"
                    color="#9CD44C"
                    variant="outlined"
                  >
                    {{ instrument }}
                  </v-chip>
                </div>
              </v-card-text>

              <v-card-actions class="pa-4 pt-0">
                <v-btn
                  color="#46491D"
                  variant="text"
                  @click="openMusicModal(music)"
                >
                  Aprender Más
                  <v-icon end>mdi-arrow-right</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Artesanías -->
    <section class="py-12 bg-grey-lighten-4">
      <v-container class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-h3 font-weight-bold cultura-primary mb-4">
            Artesanías Tradicionales
          </h2>
          <p class="text-h6 text-grey-darken-1">
            El arte hecho a mano que preserva nuestras tradiciones
          </p>
        </div>

        <v-row>
          <v-col
            v-for="craft in crafts"
            :key="craft.id"
            cols="12"
            sm="6"
            md="4"
            class="mb-8"
          >
            <v-card class="craft-card h-100" elevation="3">
              <NuxtImg
                :src="craft.image"
                :alt="craft.name"
                class="craft-image"
                width="300"
                height="200"
              />

              <v-card-text class="pa-4">
                <h4 class="text-h6 font-weight-bold cultura-primary mb-2">
                  {{ craft.name }}
                </h4>
                <p class="text-body-2 text-grey-darken-1 mb-3">
                  {{ craft.description }}
                </p>

                <div class="d-flex align-center justify-space-between">
                  <div class="d-flex align-center">
                    <v-icon color="#ECD730" size="small" class="mr-1"
                      >mdi-map-marker</v-icon
                    >
                    <span class="text-body-2">{{ craft.region }}</span>
                  </div>
                  <v-chip
                    size="small"
                    :color="craft.materialColor"
                    variant="outlined"
                  >
                    {{ craft.material }}
                  </v-chip>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Festividades -->
    <section class="py-12">
      <v-container class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-h3 font-weight-bold cultura-primary mb-4">
            Festividades y Celebraciones
          </h2>
          <p class="text-h6 text-grey-darken-1">
            Las celebraciones que unen a todos los venezolanos
          </p>
        </div>

        <v-timeline align="start" class="festival-timeline">
          <v-timeline-item
            v-for="festival in festivals"
            :key="festival.id"
            :dot-color="festival.color"
            size="large"
          >
            <template v-slot:icon>
              <v-icon color="white">{{ festival.icon }}</v-icon>
            </template>

            <v-card class="festival-card ml-4" elevation="4">
              <v-row no-gutters>
                <v-col cols="12" md="4">
                  <NuxtImg
                    :src="festival.image"
                    :alt="festival.name"
                    class="festival-image"
                    width="300"
                    height="200"
                  />
                </v-col>
                <v-col cols="12" md="8">
                  <v-card-text class="pa-4">
                    <div class="d-flex align-center mb-2">
                      <h3 class="text-h6 font-weight-bold cultura-primary mr-3">
                        {{ festival.name }}
                      </h3>
                      <v-chip
                        size="small"
                        :color="festival.color"
                        variant="outlined"
                      >
                        {{ festival.date }}
                      </v-chip>
                    </div>

                    <p class="text-body-2 text-grey-darken-1 mb-3">
                      {{ festival.description }}
                    </p>

                    <div class="d-flex align-center mb-3">
                      <v-icon color="#ECD730" size="small" class="mr-2"
                        >mdi-map-marker</v-icon
                      >
                      <span class="text-body-2">{{ festival.location }}</span>
                    </div>

                    <div class="d-flex flex-wrap ga-1">
                      <v-chip
                        v-for="activity in festival.activities"
                        :key="activity"
                        size="x-small"
                        color="#46491D"
                        variant="outlined"
                      >
                        {{ activity }}
                      </v-chip>
                    </div>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-container>
    </section>

    <!-- Personajes Ilustres -->
    <section class="py-12 cultura-bg-primary text-white">
      <v-container class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-h3 font-weight-bold mb-4">Personajes Ilustres</h2>
          <p class="text-h6 opacity-90">
            Venezolanos que han dejado huella en el mundo
          </p>
        </div>

        <v-row>
          <v-col
            v-for="person in famousPeople"
            :key="person.id"
            cols="12"
            md="6"
            lg="3"
            class="mb-6"
          >
            <v-card class="person-card text-center pa-4 h-100" elevation="8">
              <v-avatar size="100" class="mb-4">
                <NuxtImg
                  :src="person.image"
                  :alt="person.name"
                  width="100"
                  height="100"
                />
              </v-avatar>

              <h4 class="text-h6 font-weight-bold cultura-primary mb-2">
                {{ person.name }}
              </h4>
              <p class="text-body-2 cultura-accent font-weight-medium mb-3">
                {{ person.profession }}
              </p>
              <p class="text-body-2 text-grey-darken-1 mb-4">
                {{ person.achievement }}
              </p>

              <v-chip size="small" color="#ECD730" variant="outlined">
                {{ person.period }}
              </v-chip>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Modal de Música -->
    <v-dialog v-model="musicModal" max-width="700">
      <v-card v-if="selectedMusic">
        <v-img :src="selectedMusic.image" height="200" cover>
          <v-btn
            icon="mdi-close"
            variant="text"
            color="white"
            class="position-absolute top-0 right-0 ma-2"
            @click="musicModal = false"
          ></v-btn>
        </v-img>

        <v-card-text class="pa-6">
          <h2 class="text-h4 font-weight-bold cultura-primary mb-4">
            {{ selectedMusic.name }}
          </h2>

          <div class="d-flex align-center mb-4">
            <v-icon color="#ECD730" class="mr-2">mdi-map-marker</v-icon>
            <span class="text-h6">{{ selectedMusic.region }}</span>
          </div>

          <p class="text-body-1 mb-6">{{ selectedMusic.fullDescription }}</p>

          <h3 class="text-h6 font-weight-bold mb-3">Instrumentos Típicos</h3>
          <div class="d-flex flex-wrap ga-2 mb-6">
            <v-chip
              v-for="instrument in selectedMusic.instruments"
              :key="instrument"
              color="#9CD44C"
              variant="outlined"
            >
              {{ instrument }}
            </v-chip>
          </div>

          <h3 class="text-h6 font-weight-bold mb-3">Características</h3>
          <v-list density="compact">
            <v-list-item
              v-for="characteristic in selectedMusic.characteristics"
              :key="characteristic"
              class="px-0"
            >
              <template v-slot:prepend>
                <v-icon color="#46491D" size="small">mdi-music-note</v-icon>
              </template>
              <v-list-item-title>{{ characteristic }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card-text>

        <v-card-actions class="pa-6 pt-0">
          <v-btn color="#9CD44C">
            <v-icon start>mdi-play</v-icon>
            Escuchar Ejemplo
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn variant="outlined" @click="musicModal = false"> Cerrar </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";

// SEO Meta tags
useHead({
  title: "Cultura y Tradiciones - Te Amo Tanto Venezuela",
  meta: [
    {
      name: "description",
      content:
        "Descubre la rica cultura venezolana: música tradicional, artesanías, festividades y personajes ilustres.",
    },
  ],
});

const musicModal = ref(false);
const selectedMusic = ref(null);

const musicalGenres = [
  {
    id: 1,
    name: "Joropo",
    description: "Música y baile tradicional de los llanos venezolanos.",
    region: "Llanos",
    image: "https://res.cloudinary.com/dku13l2ep/image/upload/v1749826775/tantove/beautiful-woman-with-dress-yellow-blue-and-red-colors-sunset-natural-light-cinematic-lighting-pe_hd9cr2.png",
    instruments: ["Arpa", "Cuatro", "Maracas"],
    fullDescription:
      "El joropo es el género musical más representativo de Venezuela, especialmente de la región llanera. Se caracteriza por su ritmo alegre y sus letras que exaltan la vida del llano.",
    characteristics: [
      "Ritmo binario en compás de 3/4 o 6/8",
      "Baile de pareja con zapateo",
      "Letras que describen la vida llanera",
      "Improvisación en el canto",
    ],
  },
  {
    id: 2,
    name: "Gaita Zuliana",
    description: "Género musical navideño del estado Zulia.",
    region: "Zulia",
    image: "https://res.cloudinary.com/dku13l2ep/image/upload/v1749826775/tantove/beautiful-woman-with-dress-yellow-blue-and-red-colors-sunset-natural-light-cinematic-lighting-pe_hd9cr2.png",
    instruments: ["Furro", "Tambora", "Charrasca", "Cuatro"],
    fullDescription:
      "La gaita zuliana es un género musical venezolano originario del estado Zulia, tradicionalmente interpretado en época navideña.",
    characteristics: [
      "Ritmo característico del tambor furro",
      "Letras con contenido social y festivo",
      "Tradición navideña por excelencia",
      "Coros participativos",
    ],
  },
  {
    id: 3,
    name: "Calipso",
    description: "Música caribeña con influencias de Trinidad y Tobago.",
    region: "Oriente",
    image: "https://res.cloudinary.com/dku13l2ep/image/upload/v1749826775/tantove/beautiful-woman-with-dress-yellow-blue-and-red-colors-sunset-natural-light-cinematic-lighting-pe_hd9cr2.png",
    instruments: ["Steel drums", "Guitarra", "Bajo", "Percusión"],
    fullDescription:
      "El calipso venezolano tiene sus raíces en las islas caribeñas, especialmente influenciado por la música de Trinidad y Tobago.",
    characteristics: [
      "Ritmo tropical y bailable",
      "Uso de steel drums",
      "Letras en español e inglés",
      "Influencia caribeña",
    ],
  },
];

const crafts = [
  {
    id: 1,
    name: "Cerámica de Quíbor",
    description: "Alfarería tradicional con técnicas precolombinas.",
    region: "Lara",
    material: "Arcilla",
    materialColor: "brown",
    image: "https://res.cloudinary.com/dku13l2ep/image/upload/v1749826775/tantove/beautiful-woman-with-dress-yellow-blue-and-red-colors-sunset-natural-light-cinematic-lighting-pe_hd9cr2.png",
  },
  {
    id: 2,
    name: "Sombreros de Cogollo",
    description: "Sombreros tejidos con fibra de palma.",
    region: "Falcón",
    material: "Palma",
    materialColor: "green",
    image: "https://res.cloudinary.com/dku13l2ep/image/upload/v1749826775/tantove/beautiful-woman-with-dress-yellow-blue-and-red-colors-sunset-natural-light-cinematic-lighting-pe_hd9cr2.png",
  },
  {
    id: 3,
    name: "Hamacas de Aguasay",
    description: "Hamacas tejidas con algodón y moriche.",
    region: "Monagas",
    material: "Algodón",
    materialColor: "blue",
    image: "https://res.cloudinary.com/dku13l2ep/image/upload/v1749826775/tantove/beautiful-woman-with-dress-yellow-blue-and-red-colors-sunset-natural-light-cinematic-lighting-pe_hd9cr2.png",
  },
  {
    id: 4,
    name: "Máscaras del Callao",
    description: "Máscaras para el carnaval del Callao.",
    region: "Bolívar",
    material: "Papel maché",
    materialColor: "purple",
    image: "https://res.cloudinary.com/dku13l2ep/image/upload/v1749826775/tantove/beautiful-woman-with-dress-yellow-blue-and-red-colors-sunset-natural-light-cinematic-lighting-pe_hd9cr2.png",
  },
  {
    id: 5,
    name: "Tallas en Madera",
    description: "Esculturas en madera de diversos temas.",
    region: "Mérida",
    material: "Madera",
    materialColor: "brown",
    image: "https://res.cloudinary.com/dku13l2ep/image/upload/v1749826775/tantove/beautiful-woman-with-dress-yellow-blue-and-red-colors-sunset-natural-light-cinematic-lighting-pe_hd9cr2.png",
  },
  {
    id: 6,
    name: "Tejidos Wayuu",
    description: "Mochilas y chinchorros tejidos por los Wayuu.",
    region: "Zulia",
    material: "Algodón",
    materialColor: "primary",
    image: "https://res.cloudinary.com/dku13l2ep/image/upload/v1749826775/tantove/beautiful-woman-with-dress-yellow-blue-and-red-colors-sunset-natural-light-cinematic-lighting-pe_hd9cr2.png",
  },
];

const festivals = [
  {
    id: 1,
    name: "Carnaval de El Callao",
    date: "Febrero-Marzo",
    location: "El Callao, Bolívar",
    description:
      "Carnaval declarado Patrimonio Cultural Inmaterial de la Humanidad por la UNESCO.",
    image: "https://res.cloudinary.com/dku13l2ep/image/upload/v1749826775/tantove/beautiful-woman-with-dress-yellow-blue-and-red-colors-sunset-natural-light-cinematic-lighting-pe_hd9cr2.png",
    color: "cultura-primary",
    icon: "mdi-mask",
    activities: ["Comparsas", "Calipso", "Disfraces", "Bailes"],
  },
  {
    id: 2,
    name: "Diablos Danzantes de Yare",
    date: "Corpus Christi",
    location: "San Francisco de Yare, Miranda",
    description:
      "Tradición religiosa que combina elementos católicos y africanos.",
    image: "https://res.cloudinary.com/dku13l2ep/image/upload/v1749826775/tantove/beautiful-woman-with-dress-yellow-blue-and-red-colors-sunset-natural-light-cinematic-lighting-pe_hd9cr2.png",
    color: "cultura-secondary",
    icon: "mdi-drama-masks",
    activities: ["Danzas", "Máscaras", "Rituales", "Procesión"],
  },
  {
    id: 3,
    name: "Feria de San Sebastián",
    date: "Enero",
    location: "San Cristóbal, Táchira",
    description:
      "Una de las ferias más importantes de Venezuela con actividades culturales y comerciales.",
    image: "https://res.cloudinary.com/dku13l2ep/image/upload/v1749826775/tantove/beautiful-woman-with-dress-yellow-blue-and-red-colors-sunset-natural-light-cinematic-lighting-pe_hd9cr2.png",
    color: "cultura-accent",
    icon: "mdi-festival",
    activities: ["Conciertos", "Exposiciones", "Corridas", "Gastronomía"],
  },
  {
    id: 4,
    name: "Tamunangue",
    date: "Junio",
    location: "Lara",
    description: "Manifestación cultural que honra a San Antonio de Padua.",
    image: "https://res.cloudinary.com/dku13l2ep/image/upload/v1749826775/tantove/beautiful-woman-with-dress-yellow-blue-and-red-colors-sunset-natural-light-cinematic-lighting-pe_hd9cr2.png",
    color: "cultura-secondary",
    icon: "mdi-music",
    activities: ["Danzas", "Música", "Cantos", "Rituales"],
  },
];

const famousPeople = [
  {
    id: 1,
    name: "Simón Bolívar",
    profession: "Libertador",
    achievement: "Líder de la independencia de América Latina",
    period: "1783-1830",
    image: "https://res.cloudinary.com/dku13l2ep/image/upload/v1749826775/tantove/beautiful-woman-with-dress-yellow-blue-and-red-colors-sunset-natural-light-cinematic-lighting-pe_hd9cr2.png",
  },
  {
    id: 2,
    name: "Teresa Carreño",
    profession: "Pianista",
    achievement: "Virtuosa del piano reconocida mundialmente",
    period: "1853-1917",
    image: "https://res.cloudinary.com/dku13l2ep/image/upload/v1749826775/tantove/beautiful-woman-with-dress-yellow-blue-and-red-colors-sunset-natural-light-cinematic-lighting-pe_hd9cr2.png",
  },
  {
    id: 3,
    name: "Rómulo Gallegos",
    profession: "Escritor",
    achievement: 'Autor de "Doña Bárbara", presidente de Venezuela',
    period: "1884-1969",
    image: "https://res.cloudinary.com/dku13l2ep/image/upload/v1749826775/tantove/beautiful-woman-with-dress-yellow-blue-and-red-colors-sunset-natural-light-cinematic-lighting-pe_hd9cr2.png",
  },
  {
    id: 4,
    name: "Armando Reverón",
    profession: "Pintor",
    achievement: "Maestro del arte moderno venezolano",
    period: "1889-1954",
    image: "https://res.cloudinary.com/dku13l2ep/image/upload/v1749826775/tantove/beautiful-woman-with-dress-yellow-blue-and-red-colors-sunset-natural-light-cinematic-lighting-pe_hd9cr2.png",
  },
];

const openMusicModal = (music) => {
  selectedMusic.value = music;
  musicModal.value = true;
};
</script>

<style scoped>
.min-height-40vh {
  min-height: 40vh;
}

.music-image,
.craft-image,
.festival-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.music-overlay {
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
}

.play-button {
  opacity: 0;
  transition: opacity 0.3s ease;
}

.music-card:hover .play-button {
  opacity: 1;
}

.music-card:hover,
.craft-card:hover {
  transform: translateY(-4px);
  transition: transform 0.3s ease;
}

.festival-timeline {
  max-width: 800px;
  margin: 0 auto;
}

.festival-card {
  min-height: 200px;
}

.person-card {
  border-top: 4px solid #46491d;
}

@media (max-width: 960px) {
  .festival-image {
    height: 150px;
  }
}
</style>
