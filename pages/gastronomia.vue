<template>
  <div class="gastronomia-page">
    <!-- Hero Section -->
    <section class="hero-section bg-secondary text-white">
      <v-container class="container-custom">
        <v-row align="center" class="min-height-40vh">
          <v-col cols="12" md="8">
            <h1 class="text-h2 font-weight-bold mb-4">
              Gastronomía Venezolana
            </h1>
            <p class="text-h6 mb-6">
              Descubre los sabores auténticos de Venezuela, desde la emblemática arepa
              hasta los platos más tradicionales de cada región.
            </p>
            <v-btn size="large" color="accent" class="text-primary font-weight-bold">
              <v-icon start>mdi-silverware-fork-knife</v-icon>
              Explorar Recetas
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Platos Típicos -->
    <section class="py-12">
      <v-container class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-h3 font-weight-bold text-primary mb-4">
            Platos Típicos
          </h2>
          <p class="text-h6 text-grey-darken-1">
            Los sabores que definen nuestra identidad culinaria
          </p>
        </div>

        <v-row>
          <v-col
            v-for="dish in typicalDishes"
            :key="dish.id"
            cols="12"
            md="6"
            lg="4"
            class="mb-8"
          >
            <v-card class="dish-card h-100 hover-lift" elevation="4">
              <div class="position-relative">
                <NuxtImg
                  :src="dish.image"
                  :alt="dish.name"
                  class="dish-image"
                  width="400"
                  height="250"
                />
                <v-chip
                  class="position-absolute top-0 right-0 ma-2"
                  :color="dish.regionColor"
                  text-color="white"
                  size="small"
                >
                  {{ dish.region }}
                </v-chip>
              </div>

              <v-card-text class="pa-4">
                <h3 class="text-h6 font-weight-bold mb-2">{{ dish.name }}</h3>
                <p class="text-body-2 text-grey-darken-1 mb-3">
                  {{ dish.description }}
                </p>
                
                <div class="d-flex align-center justify-space-between mb-3">
                  <div class="d-flex align-center">
                    <v-icon color="secondary" size="small" class="mr-1">mdi-clock</v-icon>
                    <span class="text-body-2">{{ dish.prepTime }}</span>
                  </div>
                  <div class="d-flex align-center">
                    <v-icon color="accent" size="small" class="mr-1">mdi-account-group</v-icon>
                    <span class="text-body-2">{{ dish.serves }}</span>
                  </div>
                </div>

                <div class="d-flex flex-wrap ga-1 mb-3">
                  <v-chip
                    v-for="ingredient in dish.mainIngredients"
                    :key="ingredient"
                    size="x-small"
                    color="primary"
                    variant="outlined"
                  >
                    {{ ingredient }}
                  </v-chip>
                </div>
              </v-card-text>

              <v-card-actions class="pa-4 pt-0">
                <v-btn
                  color="secondary"
                  variant="text"
                  @click="openRecipeModal(dish)"
                >
                  Ver Receta
                  <v-icon end>mdi-book-open</v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                  icon="mdi-heart-outline"
                  variant="text"
                  color="secondary"
                ></v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Ingredientes Clave -->
    <section class="py-12 bg-grey-lighten-4">
      <v-container class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-h3 font-weight-bold text-primary mb-4">
            Ingredientes Autóctonos
          </h2>
          <p class="text-h6 text-grey-darken-1">
            Los productos que dan vida a nuestra cocina
          </p>
        </div>

        <v-row>
          <v-col
            v-for="ingredient in keyIngredients"
            :key="ingredient.name"
            cols="12"
            sm="6"
            md="4"
            lg="3"
            class="mb-6"
          >
            <v-card class="ingredient-card text-center pa-4 h-100" elevation="2">
              <v-avatar size="80" color="secondary" class="mb-4">
                <v-icon size="40" color="white">{{ ingredient.icon }}</v-icon>
              </v-avatar>
              <h4 class="text-h6 font-weight-bold text-primary mb-2">
                {{ ingredient.name }}
              </h4>
              <p class="text-body-2 text-grey-darken-1 mb-3">
                {{ ingredient.description }}
              </p>
              <v-chip size="small" color="accent" variant="outlined">
                {{ ingredient.origin }}
              </v-chip>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Rutas Gastronómicas -->
    <section class="py-12">
      <v-container class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-h3 font-weight-bold text-primary mb-4">
            Rutas Gastronómicas
          </h2>
          <p class="text-h6 text-grey-darken-1">
            Recorridos culinarios por las regiones de Venezuela
          </p>
        </div>

        <v-row>
          <v-col
            v-for="route in gastronomicRoutes"
            :key="route.id"
            cols="12"
            md="6"
            class="mb-8"
          >
            <v-card class="route-card hover-lift" elevation="4">
              <v-row no-gutters>
                <v-col cols="5">
                  <NuxtImg
                    :src="route.image"
                    :alt="route.name"
                    class="route-image"
                    width="300"
                    height="200"
                  />
                </v-col>
                <v-col cols="7">
                  <v-card-text class="pa-4 h-100 d-flex flex-column">
                    <h3 class="text-h6 font-weight-bold text-primary mb-2">
                      {{ route.name }}
                    </h3>
                    <p class="text-body-2 text-grey-darken-1 mb-3 flex-grow-1">
                      {{ route.description }}
                    </p>
                    
                    <div class="mb-3">
                      <div class="d-flex align-center mb-2">
                        <v-icon color="secondary" size="small" class="mr-2">mdi-map-marker</v-icon>
                        <span class="text-body-2">{{ route.stops }} paradas</span>
                      </div>
                      <div class="d-flex align-center">
                        <v-icon color="accent" size="small" class="mr-2">mdi-clock</v-icon>
                        <span class="text-body-2">{{ route.duration }}</span>
                      </div>
                    </div>

                    <v-btn
                      color="secondary"
                      size="small"
                      variant="outlined"
                    >
                      Explorar Ruta
                      <v-icon end size="small">mdi-arrow-right</v-icon>
                    </v-btn>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Modal de Receta -->
    <v-dialog v-model="recipeModal" max-width="800" scrollable>
      <v-card v-if="selectedDish">
        <v-img
          :src="selectedDish.image"
          height="250"
          cover
        >
          <v-btn
            icon="mdi-close"
            variant="text"
            color="white"
            class="position-absolute top-0 right-0 ma-2"
            @click="recipeModal = false"
          ></v-btn>
        </v-img>

        <v-card-text class="pa-6">
          <h2 class="text-h4 font-weight-bold text-primary mb-4">
            {{ selectedDish.name }}
          </h2>
          
          <div class="d-flex align-center flex-wrap ga-4 mb-6">
            <div class="d-flex align-center">
              <v-icon color="secondary" class="mr-2">mdi-clock</v-icon>
              <span>{{ selectedDish.prepTime }}</span>
            </div>
            <div class="d-flex align-center">
              <v-icon color="accent" class="mr-2">mdi-account-group</v-icon>
              <span>{{ selectedDish.serves }}</span>
            </div>
            <div class="d-flex align-center">
              <v-icon color="primary" class="mr-2">mdi-chef-hat</v-icon>
              <span>{{ selectedDish.difficulty }}</span>
            </div>
          </div>

          <p class="text-body-1 mb-6">{{ selectedDish.fullDescription }}</p>

          <h3 class="text-h6 font-weight-bold mb-3">Ingredientes</h3>
          <v-list density="compact" class="mb-6">
            <v-list-item
              v-for="ingredient in selectedDish.ingredients"
              :key="ingredient"
              class="px-0"
            >
              <template v-slot:prepend>
                <v-icon color="secondary" size="small">mdi-circle-small</v-icon>
              </template>
              <v-list-item-title>{{ ingredient }}</v-list-item-title>
            </v-list-item>
          </v-list>

          <h3 class="text-h6 font-weight-bold mb-3">Preparación</h3>
          <ol class="recipe-steps">
            <li
              v-for="(step, index) in selectedDish.steps"
              :key="index"
              class="mb-3"
            >
              {{ step }}
            </li>
          </ol>

          <v-alert
            type="info"
            variant="tonal"
            class="mt-6"
          >
            <strong>Consejo:</strong> {{ selectedDish.tip }}
          </v-alert>
        </v-card-text>

        <v-card-actions class="pa-6 pt-0">
          <v-btn color="secondary">
            <v-icon start>mdi-printer</v-icon>
            Imprimir Receta
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn variant="outlined" @click="recipeModal = false">
            Cerrar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// SEO Meta tags
useHead({
  title: 'Gastronomía Venezolana - Te Amo Tanto Venezuela',
  meta: [
    { name: 'description', content: 'Descubre la rica gastronomía venezolana: recetas tradicionales, ingredientes autóctonos y rutas culinarias.' }
  ]
})

const recipeModal = ref(false)
const selectedDish = ref(null)

const typicalDishes = [
  {
    id: 1,
    name: 'Arepa',
    description: 'Pan tradicional hecho de masa de maíz, versátil y delicioso.',
    region: 'Nacional',
    regionColor: 'primary',
    prepTime: '30 min',
    serves: '4 porciones',
    difficulty: 'Fácil',
    image: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg',
    mainIngredients: ['Harina de maíz', 'Agua', 'Sal'],
    fullDescription: 'La arepa es el pan tradicional de Venezuela, hecha con harina de maíz precocida. Se puede rellenar con una gran variedad de ingredientes.',
    ingredients: [
      '2 tazas de harina de maíz precocida',
      '2½ tazas de agua tibia',
      '1 cucharadita de sal',
      'Aceite para engrasar'
    ],
    steps: [
      'Mezcla el agua tibia con la sal hasta que se disuelva completamente.',
      'Agrega gradualmente la harina de maíz mientras mezclas con las manos.',
      'Amasa hasta obtener una masa suave y sin grumos.',
      'Deja reposar la masa por 5 minutos.',
      'Forma las arepas con las manos húmedas.',
      'Cocina en plancha caliente por 7-8 minutos de cada lado.',
      'Hornea a 350°F por 15-20 minutos hasta que suenen huecas.'
    ],
    tip: 'La masa debe quedar suave pero firme. Si está muy seca, agrega agua poco a poco.'
  },
  {
    id: 2,
    name: 'Pabellón Criollo',
    description: 'Plato nacional que combina arroz, caraotas, carne y plátano.',
    region: 'Nacional',
    regionColor: 'secondary',
    prepTime: '2 horas',
    serves: '6 porciones',
    difficulty: 'Intermedio',
    image: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg',
    mainIngredients: ['Carne mechada', 'Caraotas negras', 'Arroz', 'Plátano'],
    fullDescription: 'El Pabellón Criollo es considerado el plato nacional de Venezuela. Representa los colores de la bandera nacional.',
    ingredients: [
      '1 kg de falda de res',
      '2 tazas de caraotas negras',
      '2 tazas de arroz',
      '3 plátanos maduros',
      'Cebolla, ajo, pimentón',
      'Aceite, sal, especias'
    ],
    steps: [
      'Cocina la carne en agua con sal y especias hasta que esté tierna.',
      'Desmecha la carne y sofríe con cebolla, ajo y pimentón.',
      'Cocina las caraotas con sofrito y especias.',
      'Prepara el arroz blanco.',
      'Fríe los plátanos en tajadas.',
      'Sirve todos los componentes juntos en el plato.'
    ],
    tip: 'La carne debe quedar bien mechada y jugosa. Cocínala a fuego lento.'
  },
  {
    id: 3,
    name: 'Hallaca',
    description: 'Delicia navideña envuelta en hojas de plátano.',
    region: 'Nacional',
    regionColor: 'accent',
    prepTime: '4 horas',
    serves: '12 porciones',
    difficulty: 'Difícil',
    image: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg',
    mainIngredients: ['Masa de maíz', 'Guiso', 'Hojas de plátano'],
    fullDescription: 'La hallaca es el plato tradicional de Navidad en Venezuela. Su preparación es todo un ritual familiar.',
    ingredients: [
      '1 kg de harina de maíz',
      '500g de carne de res',
      '500g de cerdo',
      '250g de pollo',
      'Hojas de plátano',
      'Aceitunas, alcaparras, pasas',
      'Caldo de pollo, especias'
    ],
    steps: [
      'Prepara el guiso con todas las carnes y vegetales.',
      'Haz la masa con harina de maíz y caldo.',
      'Limpia y corta las hojas de plátano.',
      'Extiende la masa sobre la hoja.',
      'Agrega el guiso y los adornos.',
      'Envuelve y amarra con pabilo.',
      'Hierve por 45 minutos.'
    ],
    tip: 'La preparación de hallacas es mejor en familia. Organiza una "hallacada" con tus seres queridos.'
  }
]

const keyIngredients = [
  {
    name: 'Maíz',
    description: 'Base de la arepa y muchos platos tradicionales.',
    icon: 'mdi-corn',
    origin: 'Autóctono'
  },
  {
    name: 'Plátano',
    description: 'Versátil fruta que se consume verde o maduro.',
    icon: 'mdi-fruit-watermelon',
    origin: 'Tropical'
  },
  {
    name: 'Yuca',
    description: 'Tubérculo rico en carbohidratos y fibra.',
    icon: 'mdi-leaf',
    origin: 'Amazónico'
  },
  {
    name: 'Carne',
    description: 'Res, cerdo y pollo en diversas preparaciones.',
    icon: 'mdi-cow',
    origin: 'Ganadero'
  },
  {
    name: 'Caraotas',
    description: 'Frijoles negros, proteína esencial.',
    icon: 'mdi-circle',
    origin: 'Andino'
  },
  {
    name: 'Queso',
    description: 'Queso blanco fresco, acompañante ideal.',
    icon: 'mdi-cheese',
    origin: 'Llanero'
  },
  {
    name: 'Aguacate',
    description: 'Fruto cremoso rico en grasas saludables.',
    icon: 'mdi-fruit-pineapple',
    origin: 'Tropical'
  },
  {
    name: 'Cilantro',
    description: 'Hierba aromática presente en muchos platos.',
    icon: 'mdi-leaf',
    origin: 'Mediterráneo'
  }
]

const gastronomicRoutes = [
  {
    id: 1,
    name: 'Ruta Caribeña',
    description: 'Descubre los sabores del mar en las costas venezolanas.',
    image: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg',
    stops: 8,
    duration: '3 días'
  },
  {
    id: 2,
    name: 'Sabores Andinos',
    description: 'Explora la cocina de montaña en los Andes venezolanos.',
    image: 'https://images.pexels.com/photos/356830/pexels-photo-356830.jpeg',
    stops: 6,
    duration: '2 días'
  },
  {
    id: 3,
    name: 'Tradición Llanera',
    description: 'Vive la experiencia gastronómica de los llanos.',
    image: 'https://images.pexels.com/photos/325807/pexels-photo-325807.jpeg',
    stops: 5,
    duration: '2 días'
  },
  {
    id: 4,
    name: 'Cocina Caraqueña',
    description: 'La evolución culinaria en la capital venezolana.',
    image: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg',
    stops: 10,
    duration: '1 día'
  }
]

const openRecipeModal = (dish) => {
  selectedDish.value = dish
  recipeModal.value = true
}
</script>

<style scoped>
.min-height-40vh {
  min-height: 40vh;
}

.dish-image,
.route-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.route-image {
  height: 200px;
}

.dish-card:hover,
.route-card:hover {
  transform: translateY(-4px);
  transition: transform 0.3s ease;
}

.ingredient-card {
  border-top: 4px solid rgb(var(--v-theme-secondary));
}

.recipe-steps {
  padding-left: 1.2rem;
}

.recipe-steps li {
  margin-bottom: 0.75rem;
  line-height: 1.5;
}
</style>