<script setup lang="ts">
import GlassesSVG from '../assets/glasses-grayscale.svg';
</script>

<template>
  <footer aria-label="Main menu" class="text-slate-900">
    <div class="h-px bg-slate-900/5"></div>
    <div class="mt-10 text-center">
      <img class="h-12 w-12 inline-block pb-1" :src="GlassesSVG" alt="Vet Specs" />
      <h1 class="font-bold inline-block">Vet Specs</h1>
    </div>
    <p class="mt-3 text-center text-sm leading-6 text-slate-500">© 2023 Vet Specs Inc. All rights reserved.</p>
    <div class="my-10 flex items-center justify-center space-x-4 text-sm font-semibold leading-6 text-slate-700">
      <router-link to="/privacy-policy">Privacy Policy</router-link>
      <div class="h-4 w-px bg-slate-500/20"></div>
      <router-link to="/changelog">Changelog</router-link>
    </div>
  </footer>
</template>
