<script setup lang="ts">
import HeaderNav from './components/header-nav.vue';
import { useRoute } from 'vue-router';
const route = useRoute();
</script>

<template>
  <div class="min-h-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <HeaderNav :route-path="route.path" />
    <div class="mt-20"><RouterView /></div>
  </div>
</template>
