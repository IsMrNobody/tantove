<template>
  <div>
    <!-- Hero Section -->
    <section class="hero-section position-relative">
      <div class="hero-background">
        <NuxtImg
          src="https://res.cloudinary.com/dku13l2ep/image/upload/v1749826775/tantove/beautiful-woman-with-dress-yellow-blue-and-red-colors-sunset-natural-light-cinematic-lighting-pe_hd9cr2.pngphotos/417173/pexels-photo-417173.jpeg"
          alt="Paisaje venezolano"
          class="hero-image"
          loading="eager"
          width="1920"
          height="1080"
        />
        <div
          class="hero-overlay position-absolute top-0 left-0 w-100 h-100"
        ></div>
      </div>

      <v-container class="container-custom hero-content position-relative">
        <v-row align="center" justify="center" class="min-height-screen">
          <v-col cols="12" md="8" class="text-center text-white">
            <h1 class="text-h2 text-md-h1 font-weight-bold mb-6 fade-in-up">
              Descubre la Magia de
              <span class="text-accent d-block">Venezuela</span>
            </h1>
            <p
              class="text-h6 text-md-h5 mb-8 fade-in-up"
              style="animation-delay: 0.2s"
            >
              Explora destinos únicos, sabores auténticos y tradiciones
              milenarias en el corazón de Sudamérica
            </p>
            <div class="fade-in-up" style="animation-delay: 0.4s">
              <v-btn
                size="x-large"
                color="accent"
                class="mr-4 mb-4 text-primary font-weight-bold"
                to="/destinos"
              >
                <v-icon start>mdi-compass</v-icon>
                Explorar Destinos
              </v-btn>
              <v-btn
                size="x-large"
                variant="outlined"
                color="white"
                class="mb-4"
                @click="scrollToSection('features')"
              >
                <v-icon start>mdi-chevron-down</v-icon>
                Descubrir Más
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Secciones Destacadas -->
    <section id="features" class="py-16">
      <v-container class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-h3 font-weight-bold text-primary mb-4">
            ¿Qué te espera en Venezuela?
          </h2>
          <p
            class="text-h6 text-grey-darken-1 mx-auto"
            style="max-width: 600px"
          >
            Desde playas paradisíacas hasta montañas andinas, cada rincón de
            Venezuela tiene una historia que contar
          </p>
        </div>

        <v-row>
          <v-col
            v-for="(feature, index) in features"
            :key="feature.title"
            cols="12"
            md="4"
            class="mb-8"
          >
            <v-card
              class="h-100 hover-lift"
              elevation="4"
              :style="`animation-delay: ${index * 0.2}s`"
            >
              <div class="position-relative">
                <NuxtImg
                  :src="feature.image"
                  :alt="feature.title"
                  class="card-image"
                  width="400"
                  height="250"
                />
                <div
                  class="card-overlay position-absolute bottom-0 left-0 w-100 pa-4"
                >
                  <v-icon
                    :icon="feature.icon"
                    size="40"
                    color="white"
                    class="mb-2"
                  ></v-icon>
                </div>
              </div>

              <v-card-text class="pa-6">
                <h3 class="text-h5 font-weight-bold text-primary mb-3">
                  {{ feature.title }}
                </h3>
                <p class="text-body-1 mb-4">{{ feature.description }}</p>
                <v-btn
                  :to="feature.link"
                  color="primary"
                  variant="text"
                  class="px-0"
                >
                  Explorar {{ feature.title }}
                  <v-icon end>mdi-arrow-right</v-icon>
                </v-btn>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Destinos Populares -->
    <section class="py-16 bg-grey-lighten-4">
      <v-container class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-h3 font-weight-bold text-primary mb-4">
            Destinos Populares
          </h2>
          <p class="text-h6 text-grey-darken-1">
            Los lugares más visitados y queridos de Venezuela
          </p>
        </div>

        <v-row>
          <v-col
            v-for="destination in popularDestinations"
            :key="destination.name"
            cols="12"
            sm="6"
            md="3"
            class="mb-6"
          >
            <v-card class="destination-card hover-lift" elevation="6">
              <div class="position-relative">
                <NuxtImg
                  :src="destination.image"
                  :alt="destination.name"
                  class="destination-image"
                  width="300"
                  height="200"
                />
                <v-chip
                  class="position-absolute top-0 right-0 ma-2"
                  color="accent"
                  text-color="primary"
                  size="small"
                >
                  {{ destination.region }}
                </v-chip>
              </div>

              <v-card-text class="pa-4">
                <h4 class="text-h6 font-weight-bold mb-2">
                  {{ destination.name }}
                </h4>
                <p class="text-body-2 text-grey-darken-1 mb-3">
                  {{ destination.description }}
                </p>
                <div class="d-flex align-center">
                  <v-rating
                    :model-value="destination.rating"
                    color="accent"
                    density="compact"
                    readonly
                    size="small"
                  ></v-rating>
                  <span class="text-body-2 ml-2"
                    >({{ destination.reviews }})</span
                  >
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <div class="text-center mt-8">
          <v-btn size="large" color="primary" to="/destinos">
            Ver Todos los Destinos
            <v-icon end>mdi-arrow-right</v-icon>
          </v-btn>
        </div>
      </v-container>
    </section>

    <!-- Sabores de Venezuela -->
    <section class="py-16">
      <v-container class="container-custom">
        <v-row align="center">
          <v-col cols="12" md="6" class="mb-8 mb-md-0">
            <h2 class="text-h3 font-weight-bold text-primary mb-6">
              Sabores de Venezuela
            </h2>
            <p class="text-h6 text-grey-darken-1 mb-6">
              Descubre la riqueza culinaria venezolana, desde la emblemática
              arepa hasta el exquisito pabellón criollo.
            </p>

            <v-row class="mb-6">
              <v-col
                v-for="dish in featuredDishes"
                :key="dish.name"
                cols="6"
                class="mb-4"
              >
                <div class="d-flex align-center">
                  <v-avatar color="secondary" class="mr-3">
                    <v-icon color="white">{{ dish.icon }}</v-icon>
                  </v-avatar>
                  <div>
                    <h4 class="text-subtitle-1 font-weight-bold">
                      {{ dish.name }}
                    </h4>
                    <p class="text-body-2 text-grey-darken-1 mb-0">
                      {{ dish.description }}
                    </p>
                  </div>
                </div>
              </v-col>
            </v-row>

            <v-btn size="large" color="secondary" to="/gastronomia">
              Explorar Gastronomía
              <v-icon end>mdi-silverware-fork-knife</v-icon>
            </v-btn>
          </v-col>

          <v-col cols="12" md="6">
            <div class="position-relative">
              <NuxtImg
                src="https://res.cloudinary.com/dku13l2ep/image/upload/v1749826775/tantove/beautiful-woman-with-dress-yellow-blue-and-red-colors-sunset-natural-light-cinematic-lighting-pe_hd9cr2.pngphotos/461382/pexels-photo-461382.jpeg"
                alt="Gastronomía venezolana"
                class="rounded-lg w-100"
                width="600"
                height="400"
              />
              <div
                class="food-overlay position-absolute bottom-0 left-0 w-100 pa-4 rounded-b-lg"
              >
                <p class="text-white text-body-1 mb-0">
                  "La cocina venezolana es un abrazo al alma"
                </p>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Testimonios -->
    <section class="py-16 bg-primary">
      <v-container class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-h3 font-weight-bold text-white mb-4">
            Lo que dicen nuestros viajeros
          </h2>
          <p class="text-h6 text-white opacity-80">
            Experiencias reales de quienes han descubierto Venezuela
          </p>
        </div>

        <v-row>
          <v-col
            v-for="testimonial in testimonials"
            :key="testimonial.name"
            cols="12"
            md="4"
            class="mb-6"
          >
            <v-card class="pa-6 h-100" elevation="8">
              <div class="text-center mb-4">
                <v-avatar size="60" color="accent">
                  <span class="text-h5 text-primary font-weight-bold">
                    {{ testimonial.name.charAt(0) }}
                  </span>
                </v-avatar>
              </div>

              <blockquote
                class="text-body-1 text-grey-darken-1 mb-4 text-center"
              >
                "{{ testimonial.comment }}"
              </blockquote>

              <div class="text-center">
                <h4 class="text-subtitle-1 font-weight-bold text-primary">
                  {{ testimonial.name }}
                </h4>
                <p class="text-body-2 text-grey-darken-1 mb-2">
                  {{ testimonial.origin }}
                </p>
                <v-rating
                  :model-value="testimonial.rating"
                  color="accent"
                  density="compact"
                  readonly
                  size="small"
                ></v-rating>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Call to Action -->
    <section class="py-16 bg-secondary">
      <v-container class="container-custom">
        <v-row align="center" justify="center">
          <v-col cols="12" md="8" class="text-center">
            <h2 class="text-h3 font-weight-bold text-white mb-6">
              ¿Listo para tu próxima aventura?
            </h2>
            <p class="text-h6 text-white opacity-90 mb-8">
              Suscríbete a nuestro newsletter y recibe las mejores ofertas,
              consejos de viaje y novedades sobre Venezuela.
            </p>

            <v-form class="newsletter-form mb-6">
              <v-row justify="center">
                <v-col cols="12" sm="8" md="6">
                  <v-text-field
                    v-model="email"
                    label="Tu correo electrónico"
                    variant="filled"
                    color="white"
                    bg-color="white"
                    append-inner-icon="mdi-email"
                    class="mb-4"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="3">
                  <v-btn
                    size="large"
                    color="accent"
                    class="text-primary font-weight-bold w-100"
                    @click="subscribeNewsletter"
                  >
                    Suscribirse
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>

            <div class="d-flex justify-center flex-wrap ga-4">
              <v-btn variant="outlined" color="white" to="/planifica">
                <v-icon start>mdi-map</v-icon>
                Planifica tu Viaje
              </v-btn>
              <v-btn variant="outlined" color="white" to="/nosotros">
                <v-icon start>mdi-information</v-icon>
                Conoce Más
              </v-btn>
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
  title: "Te Amo Tanto Venezuela - Descubre la Belleza de Venezuela",
  meta: [
    {
      name: "description",
      content:
        "Explora la riqueza turística, gastronómica y cultural de Venezuela. Descubre destinos únicos, sabores auténticos y tradiciones milenarias.",
    },
  ],
});

const email = ref("");

const features = [
  {
    title: "Destinos Únicos",
    description:
      "Desde el Salto Ángel hasta Los Roques, descubre paisajes que te quitarán el aliento.",
    icon: "mdi-mountain",
    image: "https://res.cloudinary.com/dku13l2ep/image/upload/v1749826775/tantove/beautiful-woman-with-dress-yellow-blue-and-red-colors-sunset-natural-light-cinematic-lighting-pe_hd9cr2.png",
    link: "/destinos",
  },
  {
    title: "Gastronomía Auténtica",
    description:
      "Saborea los platos tradicionales que han conquistado paladares por generaciones.",
    icon: "mdi-food",
    image: "https://res.cloudinary.com/dku13l2ep/image/upload/v1749826775/tantove/beautiful-woman-with-dress-yellow-blue-and-red-colors-sunset-natural-light-cinematic-lighting-pe_hd9cr2.png",
    link: "/gastronomia",
  },
  {
    title: "Cultura Viva",
    description:
      "Sumérgete en las tradiciones, música y arte que definen la identidad venezolana.",
    icon: "mdi-music",
    image: "https://res.cloudinary.com/dku13l2ep/image/upload/v1749826775/tantove/beautiful-woman-with-dress-yellow-blue-and-red-colors-sunset-natural-light-cinematic-lighting-pe_hd9cr2.png",
    link: "/cultura",
  },
];

const popularDestinations = [
  {
    name: "Los Roques",
    description: "Archipiélago paradisíaco con aguas cristalinas",
    region: "Caribe",
    rating: 5,
    reviews: "2,847",
    image: "https://res.cloudinary.com/dku13l2ep/image/upload/v1749826775/tantove/beautiful-woman-with-dress-yellow-blue-and-red-colors-sunset-natural-light-cinematic-lighting-pe_hd9cr2.png",
  },
  {
    name: "Salto Ángel",
    description: "La cascada más alta del mundo",
    region: "Canaima",
    rating: 5,
    reviews: "1,923",
    image: "https://res.cloudinary.com/dku13l2ep/image/upload/v1749826775/tantove/beautiful-woman-with-dress-yellow-blue-and-red-colors-sunset-natural-light-cinematic-lighting-pe_hd9cr2.png",
  },
  {
    name: "Mérida",
    description: "Ciudad de los caballeros y teleférico",
    region: "Andes",
    rating: 4.8,
    reviews: "3,156",
    image: "https://res.cloudinary.com/dku13l2ep/image/upload/v1749826775/tantove/beautiful-woman-with-dress-yellow-blue-and-red-colors-sunset-natural-light-cinematic-lighting-pe_hd9cr2.png",
  },
  {
    name: "Isla Margarita",
    description: "Perla del Caribe venezolano",
    region: "Nueva Esparta",
    rating: 4.7,
    reviews: "4,292",
    image: "https://res.cloudinary.com/dku13l2ep/image/upload/v1749826775/tantove/beautiful-woman-with-dress-yellow-blue-and-red-colors-sunset-natural-light-cinematic-lighting-pe_hd9cr2.png",
  },
];

const featuredDishes = [
  {
    name: "Arepa",
    description: "Pan tradicional versátil",
    icon: "mdi-food",
  },
  {
    name: "Pabellón",
    description: "Plato nacional emblemático",
    icon: "mdi-silverware-fork-knife",
  },
  {
    name: "Hallaca",
    description: "Delicia navideña tradicional",
    icon: "mdi-gift",
  },
  {
    name: "Cachapa",
    description: "Tortilla dulce de maíz",
    icon: "mdi-corn",
  },
];

const testimonials = [
  {
    name: "María González",
    origin: "España",
    comment:
      "Venezuela me sorprendió con su diversidad natural y la calidez de su gente. Una experiencia inolvidable.",
    rating: 5,
  },
  {
    name: "John Smith",
    origin: "Estados Unidos",
    comment:
      "Los paisajes de Venezuela son impresionantes. El Salto Ángel es una de las maravillas más increíbles que he visto.",
    rating: 5,
  },
  {
    name: "Pierre Dubois",
    origin: "Francia",
    comment:
      "La gastronomía venezolana es exquisita. Cada plato cuenta una historia de tradición y sabor.",
    rating: 4.8,
  },
];

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const subscribeNewsletter = () => {
  if (email.value) {
    // Simulación de suscripción
    alert("¡Gracias por suscribirte! Pronto recibirás nuestras novedades.");
    email.value = "";
  }
};
</script>

<style scoped>
.hero-section {
  height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-content {
  z-index: 2;
}

.min-height-screen {
  min-height: 100vh;
}

.card-image,
.destination-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.destination-image {
  height: 200px;
}

.card-overlay {
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
}

.food-overlay {
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
}

.destination-card:hover {
  transform: translateY(-8px);
  transition: transform 0.3s ease;
}

@media (max-width: 960px) {
  .hero-section {
    height: 80vh;
  }

  .text-h2 {
    font-size: 2.5rem !important;
  }

  .text-h6 {
    font-size: 1.2rem !important;
  }
}

@media (max-width: 600px) {
  .hero-section {
    height: 70vh;
  }

  .card-image,
  .destination-image {
    height: 200px;
  }
}
</style>
