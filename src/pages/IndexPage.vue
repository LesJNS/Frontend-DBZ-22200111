<template>
  <q-page class="q-pb-xl">
    <!-- Hero / titulo -->
    <section class="hero text-center q-pt-xl q-pb-md q-px-md">
      <h1 class="db-title q-my-none">Dragon Ball API</h1>
      <p class="text-subtitle1 text-grey-9 q-mt-sm">
        Explora a todos los personajes del universo Dragon Ball
      </p>
    </section>

    <!-- Buscador (parte superior) -->
    <SearchBar @search="onSearch" @clear="onClear" class="q-mb-lg" />

    <!-- Indicador de modo busqueda -->
    <div v-if="isSearching" class="text-center q-mb-sm">
      <q-chip color="primary" text-color="white" icon="search" removable @remove="onClear">
        Resultados para: "{{ currentQuery }}"
      </q-chip>
    </div>

    <!-- Grilla de personajes -->
    <CharacterGrid
      :characters="characters"
      :loading="loading"
      @select="openDetail"
    />

    <!-- Paginacion (solo en modo lista, no en busqueda) -->
    <div v-if="!isSearching && totalPages > 1" class="row justify-center q-mt-lg">
      <q-pagination
        v-model="page"
        :max="totalPages"
        :max-pages="6"
        direction-links
        boundary-links
        color="primary"
        active-color="primary"
        @update:model-value="loadPage"
      />
    </div>

    <!-- Dialogo de detalle -->
    <CharacterDialog
      v-model="showDetail"
      :character="selected"
      @close="showDetail = false"
    />
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useQuasar } from 'quasar'
import SearchBar from 'components/SearchBar.vue'
import CharacterGrid from 'components/CharacterGrid.vue'
import CharacterDialog from 'components/CharacterDialog.vue'
import { getCharacters, searchCharacters, getCharacterById } from 'src/services/dragonball.js'

const $q = useQuasar()

const characters = ref([])
const loading = ref(false)
const page = ref(1)
const totalPages = ref(1)
const isSearching = ref(false)
const currentQuery = ref('')

const showDetail = ref(false)
const selected = ref(null)

// Carga la lista paginada
async function loadPage (p = 1) {
  loading.value = true
  try {
    const data = await getCharacters(p, 12)
    characters.value = data.items || []
    totalPages.value = data.meta?.totalPages || 1
    page.value = data.meta?.currentPage || p
  } catch (err) {
    notifyError(err)
  } finally {
    loading.value = false
  }
}

// Busqueda por nombre
async function onSearch (query) {
  isSearching.value = true
  currentQuery.value = query
  loading.value = true
  try {
    characters.value = await searchCharacters(query)
  } catch (err) {
    // La API responde 404 cuando no hay coincidencias -> lista vacia
    if (err.response && err.response.status === 404) {
      characters.value = []
    } else {
      notifyError(err)
    }
  } finally {
    loading.value = false
  }
}

// Volver a la lista normal
function onClear () {
  isSearching.value = false
  currentQuery.value = ''
  loadPage(1)
}

// Abrir detalle (pide info completa por id)
async function openDetail (character) {
  selected.value = character
  showDetail.value = true
  try {
    const full = await getCharacterById(character.id)
    selected.value = full
  } catch (err) {
    // si falla, se queda con la info basica que ya tenemos
  }
}

function notifyError (err) {
  $q.notify({
    type: 'negative',
    message: 'Error al conectar con la API: ' + (err.message || 'desconocido'),
    position: 'top'
  })
}

onMounted(() => loadPage(1))
</script>

<style scoped>
.db-title {
  font-size: clamp(2.4rem, 7vw, 4.5rem);
  line-height: 1.05;
}
</style>
