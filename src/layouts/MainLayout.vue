<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-secondary text-dark">
      <q-toolbar class="q-py-sm">
        <q-icon name="public" size="32px" color="primary" class="q-mr-sm" />
        <q-toolbar-title class="text-weight-bolder">
          Dragon Ball API
        </q-toolbar-title>
        <q-btn
          flat
          dense
          no-caps
          icon="menu_book"
          label="Documentation"
          type="a"
          href="https://web.dragonball-api.com/documentation"
          target="_blank"
        />
      </q-toolbar>
    </q-header>

    <q-page-container class="db-bg">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
// Layout principal: cabecera + fondo tematico
</script>
