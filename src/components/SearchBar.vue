<template>
  <div class="search-bar row justify-center q-px-md">
    <q-input
      v-model="text"
      outlined
      rounded
      bg-color="white"
      class="search-input"
      placeholder="Busca un personaje... (ej. Goku, Vegeta, Piccolo)"
      clearable
      @update:model-value="onInput"
      @keyup.enter="emitSearch"
      @clear="onClear"
    >
      <template #prepend>
        <q-icon name="search" color="primary" />
      </template>
      <template #append>
        <q-btn
          round
          dense
          unelevated
          color="primary"
          icon="search"
          @click="emitSearch"
        />
      </template>
    </q-input>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Componente 1: barra de busqueda (parte superior)
const emit = defineEmits(['search', 'clear'])
const text = ref('')

let debounceId = null

// Busqueda en vivo con debounce de 400ms
function onInput (val) {
  clearTimeout(debounceId)
  debounceId = setTimeout(() => {
    const q = (val || '').trim()
    if (q.length === 0) emit('clear')
    else emit('search', q)
  }, 400)
}

function emitSearch () {
  const q = (text.value || '').trim()
  if (q.length === 0) emit('clear')
  else emit('search', q)
}

function onClear () {
  text.value = ''
  emit('clear')
}
</script>

<style scoped>
.search-bar {
  width: 100%;
}
.search-input {
  width: 100%;
  max-width: 620px;
  font-size: 1.05rem;
}
</style>
