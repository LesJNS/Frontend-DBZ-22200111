<template>
  <q-dialog v-model="show" @hide="$emit('close')">
    <q-card v-if="character" class="detail-card">
      <q-card-section class="row items-center bg-primary text-white">
        <div class="text-h5 text-weight-bold">{{ character.name }}</div>
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup />
      </q-card-section>

      <q-card-section class="row q-col-gutter-md">
        <div class="col-12 col-sm-5 flex flex-center">
          <q-img
            :src="character.image"
            :alt="character.name"
            fit="contain"
            style="max-height: 320px"
            no-spinner
          />
        </div>

        <div class="col-12 col-sm-7">
          <q-list separator>
            <q-item v-if="character.race">
              <q-item-section avatar><q-icon name="pets" color="primary" /></q-item-section>
              <q-item-section><q-item-label caption>Raza</q-item-label>{{ character.race }}</q-item-section>
            </q-item>
            <q-item v-if="character.gender">
              <q-item-section avatar><q-icon name="wc" color="primary" /></q-item-section>
              <q-item-section><q-item-label caption>Genero</q-item-label>{{ character.gender }}</q-item-section>
            </q-item>
            <q-item v-if="character.ki">
              <q-item-section avatar><q-icon name="bolt" color="primary" /></q-item-section>
              <q-item-section><q-item-label caption>Ki base</q-item-label>{{ character.ki }}</q-item-section>
            </q-item>
            <q-item v-if="character.maxKi">
              <q-item-section avatar><q-icon name="local_fire_department" color="primary" /></q-item-section>
              <q-item-section><q-item-label caption>Ki maximo</q-item-label>{{ character.maxKi }}</q-item-section>
            </q-item>
            <q-item v-if="character.affiliation">
              <q-item-section avatar><q-icon name="groups" color="primary" /></q-item-section>
              <q-item-section><q-item-label caption>Afiliacion</q-item-label>{{ character.affiliation }}</q-item-section>
            </q-item>
          </q-list>
        </div>
      </q-card-section>

      <q-card-section v-if="character.description" class="q-pt-none">
        <div class="text-subtitle1 text-weight-bold q-mb-xs">Descripcion</div>
        <div class="text-body2 description-text">{{ character.description }}</div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { computed } from 'vue'

// Componente 4: dialogo con el detalle del personaje
const props = defineProps({
  modelValue: { type: Boolean, default: false },
  character: { type: Object, default: null }
})

const emit = defineEmits(['update:modelValue', 'close'])

const show = computed({
  get: () => props.modelValue,
  set: (v) => emit('update:modelValue', v)
})
</script>

<style scoped>
.detail-card {
  width: 720px;
  max-width: 95vw;
  border-radius: 18px;
}
.description-text {
  white-space: pre-line;
  line-height: 1.6;
}
</style>
