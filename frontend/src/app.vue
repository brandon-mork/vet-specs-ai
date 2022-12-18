<script setup lang="ts">
import HeaderNav from './components/header-nav.vue';
import FooterNav from './components/footer-nav.vue';
import { useRoute } from 'vue-router';
const route = useRoute();
</script>

<template>
  <div class="min-h-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <HeaderNav :route-path="route.path" />
    <div class="my-20 min-h-[40vh]"><RouterView /></div>
    <FooterNav />
  </div>
</template>
