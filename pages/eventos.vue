<template>
  <div class="eventos-page">
    <!-- Hero Section -->
    <section class="hero-section bg-primary text-white">
      <v-container class="container-custom">
        <v-row align="center" class="min-height-40vh">
          <v-col cols="12" md="8">
            <h1 class="text-h2 font-weight-bold mb-4">
              Eventos en Venezuela
            </h1>
            <p class="text-h6 mb-6">
              Descubre las festividades, conciertos, exposiciones y eventos
              culturales que celebran la diversidad venezolana durante todo el año.
            </p>
            <v-btn size="large" color="accent" class="text-primary font-weight-bold">
              <v-icon start>mdi-calendar-plus</v-icon>
              Ver Calendario
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Filtros de Eventos -->
    <section class="py-8 bg-grey-lighten-5">
      <v-container class="container-custom">
        <v-row>
          <v-col cols="12" md="3">
            <v-select
              v-model="selectedMonth"
              :items="months"
              label="Mes"
              variant="outlined"
              clearable
            ></v-select>
          </v-col>
          <v-col cols="12" md="3">
            <v-select
              v-model="selectedCategory"
              :items="categories"
              label="Categoría"
              variant="outlined"
              clearable
            ></v-select>
          </v-col>
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
            <v-text-field
              v-model="searchQuery"
              label="Buscar evento"
              variant="outlined"
              prepend-inner-icon="mdi-magnify"
              clearable
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Eventos Destacados -->
    <section class="py-12">
      <v-container class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-h3 font-weight-bold text-primary mb-4">
            Eventos Próximos
          </h2>
          <p class="text-h6 text-grey-darken-1">
            No te pierdas las celebraciones más importantes
          </p>
        </div>

        <v-row>
          <v-col
            v-for="event in filteredEvents"
            :key="event.id"
            cols="12"
            md="6"
            lg="4"
            class="mb-8"
          >
            <v-card class="event-card h-100 hover-lift" elevation="4">
              <div class="position-relative">
                <NuxtImg
                  :src="event.image"
                  :alt="event.name"
                  class="event-image"
                  width="400"
                  height="200"
                />
                <v-chip
                  class="position-absolute top-0 right-0 ma-2"
                  :color="event.categoryColor"
                  text-color="white"
                  size="small"
                >
                  {{ event.category }}
                </v-chip>
                <div class="date-badge position-absolute top-0 left-0 ma-2">
                  <v-card class="pa-2 text-center" color="white" elevation="2">
                    <div class="text-caption text-primary font-weight-bold">
                      {{ event.month }}
                    </div>
                    <div class="text-h6 font-weight-bold text-primary">
                      {{ event.day }}
                    </div>
                  </v-card>
                </div>
              </div>

              <v-card-text class="pa-4">
                <h3 class="text-h6 font-weight-bold text-primary mb-2">
                  {{ event.name }}
                </h3>
                <p class="text-body-2 text-grey-darken-1 mb-3">
                  {{ event.description }}
                </p>
                
                <div class="d-flex align-center mb-2">
                  <v-icon color="secondary" size="small" class="mr-2">mdi-map-marker</v-icon>
                  <span class="text-body-2">{{ event.location }}</span>
                </div>
                
                <div class="d-flex align-center mb-3">
                  <v-icon color="accent" size="small" class="mr-2">mdi-clock</v-icon>
                  <span class="text-body-2">{{ event.time }}</span>
                </div>

                <div class="d-flex flex-wrap ga-1">
                  <v-chip
                    v-for="activity in event.activities.slice(0, 2)"
                    :key="activity"
                    size="x-small"
                    color="primary"
                    variant="outlined"
                  >
                    {{ activity }}
                  </v-chip>
                  <v-chip
                    v-if="event.activities.length > 2"
                    size="x-small"
                    color="grey"
                    variant="outlined"
                  >
                    +{{ event.activities.length - 2 }}
                  </v-chip>
                </div>
              </v-card-text>

              <v-card-actions class="pa-4 pt-0">
                <v-btn
                  color="primary"
                  variant="text"
                  @click="openEventModal(event)"
                >
                  Ver Detalles
                  <v-icon end>mdi-arrow-right</v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                  icon="mdi-calendar-plus"
                  variant="text"
                  color="secondary"
                  @click="addToCalendar(event)"
                ></v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>

        <div v-if="filteredEvents.length === 0" class="text-center py-12">
          <v-icon size="64" color="grey-lighten-1">mdi-calendar-search</v-icon>
          <h3 class="text-h5 text-grey-darken-1 mt-4">
            No se encontraron eventos
          </h3>
          <p class="text-body-1 text-grey-darken-1">
            Intenta con otros filtros de búsqueda
          </p>
        </div>
      </v-container>
    </section>

    <!-- Calendario de Eventos -->
    <section class="py-12 bg-grey-lighten-4">
      <v-container class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-h3 font-weight-bold text-primary mb-4">
            Calendario de Eventos 2024
          </h2>
          <p class="text-h6 text-grey-darken-1">
            Planifica tu año con los eventos más importantes
          </p>
        </div>

        <v-row>
          <v-col
            v-for="month in eventCalendar"
            :key="month.name"
            cols="12"
            sm="6"
            md="4"
            lg="3"
            class="mb-6"
          >
            <v-card class="month-card h-100" elevation="3">
              <v-card-title class="text-center bg-primary text-white">
                <h4 class="text-h6">{{ month.name }}</h4>
              </v-card-title>
              
              <v-card-text class="pa-3">
                <v-list density="compact">
                  <v-list-item
                    v-for="event in month.events"
                    :key="event.name"
                    class="px-0 mb-2"
                  >
                    <div class="d-flex align-center">
                      <v-avatar size="24" :color="event.color" class="mr-2">
                        <span class="text-caption text-white font-weight-bold">
                          {{ event.day }}
                        </span>
                      </v-avatar>
                      <div class="flex-grow-1">
                        <div class="text-body-2 font-weight-medium">
                          {{ event.name }}
                        </div>
                        <div class="text-caption text-grey-darken-1">
                          {{ event.location }}
                        </div>
                      </div>
                    </div>
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Modal de Detalle del Evento -->
    <v-dialog v-model="eventModal" max-width="800" scrollable>
      <v-card v-if="selectedEvent">
        <v-img
          :src="selectedEvent.image"
          height="300"
          cover
        >
          <v-btn
            icon="mdi-close"
            variant="text"
            color="white"
            class="position-absolute top-0 right-0 ma-2"
            @click="eventModal = false"
          ></v-btn>
          <div class="position-absolute bottom-0 left-0 ma-4">
            <v-chip :color="selectedEvent.categoryColor" text-color="white">
              {{ selectedEvent.category }}
            </v-chip>
          </div>
        </v-img>

        <v-card-text class="pa-6">
          <h2 class="text-h4 font-weight-bold text-primary mb-4">
            {{ selectedEvent.name }}
          </h2>
          
          <div class="event-info mb-6">
            <v-row>
              <v-col cols="12" md="6">
                <div class="d-flex align-center mb-3">
                  <v-icon color="primary" class="mr-3">mdi-calendar</v-icon>
                  <div>
                    <div class="font-weight-medium">{{ selectedEvent.fullDate }}</div>
                    <div class="text-body-2 text-grey-darken-1">{{ selectedEvent.time }}</div>
                  </div>
                </div>
              </v-col>
              <v-col cols="12" md="6">
                <div class="d-flex align-center mb-3">
                  <v-icon color="secondary" class="mr-3">mdi-map-marker</v-icon>
                  <div>
                    <div class="font-weight-medium">{{ selectedEvent.location }}</div>
                    <div class="text-body-2 text-grey-darken-1">{{ selectedEvent.address }}</div>
                  </div>
                </div>
              </v-col>
            </v-row>
          </div>

          <p class="text-body-1 mb-6">{{ selectedEvent.fullDescription }}</p>

          <h3 class="text-h6 font-weight-bold mb-3">Actividades Programadas</h3>
          <div class="d-flex flex-wrap ga-2 mb-6">
            <v-chip
              v-for="activity in selectedEvent.activities"
              :key="activity"
              color="accent"
              variant="outlined"
            >
              {{ activity }}
            </v-chip>
          </div>

          <h3 class="text-h6 font-weight-bold mb-3">Información Práctica</h3>
          <v-list density="compact">
            <v-list-item>
              <template v-slot:prepend>
                <v-icon color="primary">mdi-currency-usd</v-icon>
              </template>
              <v-list-item-title>Entrada: {{ selectedEvent.price }}</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <template v-slot:prepend>
                <v-icon color="primary">mdi-phone</v-icon>
              </template>
              <v-list-item-title>Contacto: {{ selectedEvent.contact }}</v-list-item-title>
            </v-list-item>
            <v-list-item v-if="selectedEvent.website">
              <template v-slot:prepend>
                <v-icon color="primary">mdi-web</v-icon>
              </template>
              <v-list-item-title>{{ selectedEvent.website }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card-text>

        <v-card-actions class="pa-6 pt-0">
          <v-btn color="secondary" @click="addToCalendar(selectedEvent)">
            <v-icon start>mdi-calendar-plus</v-icon>
            Agregar al Calendario
          </v-btn>
          <v-btn color="accent" class="text-primary">
            <v-icon start>mdi-share</v-icon>
            Compartir
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn variant="outlined" @click="eventModal = false">
            Cerrar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// SEO Meta tags
useHead({
  title: 'Eventos en Venezuela - Te Amo Tanto Venezuela',
  meta: [
    { name: 'description', content: 'Descubre los eventos, festividades y celebraciones culturales de Venezuela durante todo el año.' }
  ]
})

const selectedMonth = ref(null)
const selectedCategory = ref(null)
const selectedRegion = ref(null)
const searchQuery = ref('')
const eventModal = ref(false)
const selectedEvent = ref(null)

const months = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
]

const categories = [
  'Cultural', 'Musical', 'Gastronómico', 'Deportivo', 'Religioso', 'Artístico'
]

const regions = [
  'Caribe', 'Andes', 'Centro', 'Oriente', 'Guayana', 'Llanos', 'Zulia'
]

const events = [
  {
    id: 1,
    name: 'Carnaval de El Callao',
    description: 'El carnaval más colorido de Venezuela, Patrimonio de la Humanidad.',
    category: 'Cultural',
    categoryColor: 'purple',
    month: 'FEB',
    day: '12',
    fullDate: '12-15 de Febrero, 2024',
    time: '10:00 AM - 10:00 PM',
    location: 'El Callao, Bolívar',
    address: 'Centro histórico de El Callao',
    image: 'https://images.pexels.com/photos/325807/pexels-photo-325807.jpeg',
    activities: ['Comparsas', 'Calipso', 'Disfraces', 'Concursos'],
    fullDescription: 'El Carnaval de El Callao es una celebración única que combina la cultura afrocaribeña con las tradiciones venezolanas. Durante cuatro días, las calles se llenan de música, color y alegría.',
    price: 'Gratuito',
    contact: '+58 285-962-0123',
    website: 'www.carnavaldecallao.ve'
  },
  {
    id: 2,
    name: 'Festival de Jazz de Caracas',
    description: 'El encuentro de jazz más importante de Venezuela.',
    category: 'Musical',
    categoryColor: 'blue',
    month: 'MAR',
    day: '15',
    fullDate: '15-20 de Marzo, 2024',
    time: '7:00 PM - 11:00 PM',
    location: 'Teatro Teresa Carreño, Caracas',
    address: 'Av. Paseo Colón, Los Caobos',
    image: 'https://images.pexels.com/photos/325807/pexels-photo-325807.jpeg',
    activities: ['Conciertos', 'Masterclass', 'Jam sessions', 'Exposiciones'],
    fullDescription: 'El Festival de Jazz de Caracas reúne a los mejores músicos nacionales e internacionales en una celebración del jazz en todas sus formas.',
    price: 'Bs. 50.000 - 150.000',
    contact: '+58 212-571-3800'
  },
  {
    id: 3,
    name: 'Feria Internacional del Libro',
    description: 'La cita literaria más importante del país.',
    category: 'Cultural',
    categoryColor: 'green',
    month: 'ABR',
    day: '22',
    fullDate: '22-30 de Abril, 2024',
    time: '9:00 AM - 8:00 PM',
    location: 'Centro de Arte La Estancia, Caracas',
    address: 'Av. Francisco de Miranda, Altamira',
    image: 'https://placehold.co/400x200/228B22/FFFFFF?text=Feria+Libro',
    activities: ['Presentaciones', 'Talleres', 'Conferencias', 'Firma de libros'],
    fullDescription: 'La Feria Internacional del Libro de Venezuela es el evento editorial más importante del país, donde se reúnen escritores, editores y lectores.',
    price: 'Gratuito',
    contact: '+58 212-283-5818'
  },
  {
    id: 4,
    name: 'Festival Gastronómico de Margarita',
    description: 'Celebración de la gastronomía caribeña y venezolana.',
    category: 'Gastronómico',
    categoryColor: 'orange',
    month: 'MAY',
    day: '10',
    fullDate: '10-15 de Mayo, 2024',
    time: '6:00 PM - 12:00 AM',
    location: 'Playa El Agua, Isla Margarita',
    address: 'Sector El Agua, Antolín del Campo',
    image: 'https://placehold.co/400x200/FF9800/FFFFFF?text=Festival+Gastronomico',
    activities: ['Degustaciones', 'Showcooking', 'Concursos', 'Música en vivo'],
    fullDescription: 'Un festival que celebra la rica tradición culinaria de Venezuela con énfasis en los sabores del Caribe.',
    price: 'Bs. 80.000 - 200.000',
    contact: '+58 295-242-1850'
  }
]

const eventCalendar = [
  {
    name: 'Enero',
    events: [
      { name: 'Feria de San Sebastián', location: 'Táchira', day: '20', color: 'primary' },
      { name: 'Parranda de San Pedro', location: 'Miranda', day: '28', color: 'secondary' }
    ]
  },
  {
    name: 'Febrero',
    events: [
      { name: 'Carnaval de El Callao', location: 'Bolívar', day: '12', color: 'purple' },
      { name: 'Festival de Orquídeas', location: 'Mérida', day: '25', color: 'pink' }
    ]
  },
  {
    name: 'Marzo',
    events: [
      { name: 'Festival de Jazz', location: 'Caracas', day: '15', color: 'blue' },
      { name: 'Semana Santa', location: 'Nacional', day: '28', color: 'brown' }
    ]
  },
  {
    name: 'Abril',
    events: [
      { name: 'Feria del Libro', location: 'Caracas', day: '22', color: 'green' },
      { name: 'Festival de Artes', location: 'Valencia', day: '30', color: 'teal' }
    ]
  },
  {
    name: 'Mayo',
    events: [
      { name: 'Festival Gastronómico', location: 'Margarita', day: '10', color: 'orange' },
      { name: 'Cruz de Mayo', location: 'Nacional', day: '31', color: 'red' }
    ]
  },
  {
    name: 'Junio',
    events: [
      { name: 'Corpus Christi', location: 'Miranda', day: '15', color: 'amber' },
      { name: 'San Juan Bautista', location: 'Nacional', day: '24', color: 'indigo' }
    ]
  },
  {
    name: 'Julio',
    events: [
      { name: 'Festival de Música', location: 'Maracaibo', day: '16', color: 'cyan' },
      { name: 'Fiesta del Tambor', location: 'Vargas', day: '25', color: 'deep-orange' }
    ]
  },
  {
    name: 'Agosto',
    events: [
      { name: 'Festival de Teatro', location: 'Caracas', day: '12', color: 'lime' },
      { name: 'Feria de Artesanías', location: 'Lara', day: '28', color: 'light-blue' }
    ]
  },
  {
    name: 'Septiembre',
    events: [
      { name: 'Festival del Joropo', location: 'Apure', day: '15', color: 'yellow' },
      { name: 'Día del Patrimonio', location: 'Nacional', day: '26', color: 'purple' }
    ]
  },
  {
    name: 'Octubre',
    events: [
      { name: 'Festival de Cine', location: 'Mérida', day: '18', color: 'pink' },
      { name: 'Día de la Resistencia', location: 'Nacional', day: '12', color: 'blue-grey' }
    ]
  },
  {
    name: 'Noviembre',
    events: [
      { name: 'Feria de la Chinita', location: 'Zulia', day: '18', color: 'deep-purple' },
      { name: 'Festival de Danza', location: 'Caracas', day: '30', color: 'green' }
    ]
  },
  {
    name: 'Diciembre',
    events: [
      { name: 'Navidad Venezolana', location: 'Nacional', day: '16', color: 'red' },
      { name: 'Año Nuevo', location: 'Nacional', day: '31', color: 'blue' }
    ]
  }
]

const filteredEvents = computed(() => {
  let filtered = events

  if (selectedMonth.value) {
    const monthMap = {
      'Enero': 'ENE', 'Febrero': 'FEB', 'Marzo': 'MAR', 'Abril': 'ABR',
      'Mayo': 'MAY', 'Junio': 'JUN', 'Julio': 'JUL', 'Agosto': 'AGO',
      'Septiembre': 'SEP', 'Octubre': 'OCT', 'Noviembre': 'NOV', 'Diciembre': 'DIC'
    }
    const monthCode = monthMap[selectedMonth.value]
    filtered = filtered.filter(e => e.month === monthCode)
  }

  if (selectedCategory.value) {
    filtered = filtered.filter(e => e.category === selectedCategory.value)
  }

  if (selectedRegion.value) {
    filtered = filtered.filter(e => e.location.includes(selectedRegion.value))
  }

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(e => 
      e.name.toLowerCase().includes(query) ||
      e.description.toLowerCase().includes(query)
    )
  }

  return filtered
})

const openEventModal = (event) => {
  selectedEvent.value = event
  eventModal.value = true
}

const addToCalendar = (event) => {
  // Simulación de agregar al calendario
  alert(`Evento "${event.name}" agregado al calendario`)
}
</script>

<style scoped>
.min-height-40vh {
  min-height: 40vh;
}

.event-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.event-card:hover {
  transform: translateY(-4px);
  transition: transform 0.3s ease;
}

.date-badge {
  min-width: 60px;
}

.month-card {
  border-top: 4px solid rgb(var(--v-theme-primary));
}

.event-info {
  background-color: rgba(var(--v-theme-surface), 0.5);
  border-radius: 8px;
  padding: 16px;
}
</style>