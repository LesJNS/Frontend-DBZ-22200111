<template>
  <div>
    <!-- Estado: cargando -->
    <div v-if="loading" class="row q-col-gutter-lg q-pa-md">
      <div
        v-for="n in 8"
        :key="n"
        class="col-12 col-sm-6 col-md-4 col-lg-3"
      >
        <q-card class="skeleton-card">
          <q-skeleton height="260px" square />
          <q-card-section>
            <q-skeleton type="text" class="text-h6" />
            <q-skeleton type="text" width="50%" />
          </q-card-section>
        </q-card>
      </div>
    </div>

    <!-- Estado: sin resultados -->
    <div v-else-if="characters.length === 0" class="column flex-center q-pa-xl text-center">
      <q-icon name="sentiment_dissatisfied" size="80px" color="primary" />
      <div class="text-h6 text-white q-mt-md">No se encontraron personajes</div>
      <div class="text-subtitle2 text-white">Prueba con otro nombre</div>
    </div>

    <!-- Grid de personajes -->
    <div v-else class="row q-col-gutter-lg q-pa-md">
      <div
        v-for="character in characters"
        :key="character.id"
        class="col-12 col-sm-6 col-md-4 col-lg-3"
      >
        <CharacterCard :character="character" @select="$emit('select', $event)" />
      </div>
    </div>
  </div>
</template>

<script setup>
import CharacterCard from './CharacterCard.vue'

// Componente 3: grilla que organiza las tarjetas
defineProps({
  characters: { type: Array, default: () => [] },
  loading: { type: Boolean, default: false }
})

defineEmits(['select'])
</script>

<style scoped>
.skeleton-card {
  border-radius: 18px;
  overflow: hidden;
}
</style>
