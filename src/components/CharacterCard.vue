<template>
  <div class="character-card column" @click="$emit('select', character)">
    <div class="img-wrap col-grow flex flex-center">
      <q-img
        :src="character.image"
        :alt="character.name"
        class="char-img full-width"
        fit="contain"
        no-spinner
      >
        <template #error>
          <div class="absolute-full flex flex-center bg-grey-3 text-grey-7">
            Sin imagen
          </div>
        </template>
      </q-img>
    </div>

    <div class="info q-pa-md text-center">
      <div class="char-name text-h6 ellipsis">{{ character.name }}</div>
      <div class="q-mt-xs">
        <q-badge
          v-if="character.race"
          color="secondary"
          text-color="dark"
          class="q-mr-xs"
        >
          {{ character.race }}
        </q-badge>
        <q-badge v-if="character.ki" color="primary" outline>
          Ki: {{ character.ki }}
        </q-badge>
      </div>
    </div>
  </div>
</template>

<script setup>
// Componente 2: tarjeta individual de personaje
defineProps({
  character: { type: Object, required: true }
})

defineEmits(['select'])
</script>

<style scoped>
.img-wrap {
  padding-top: 12px;
}
</style>
