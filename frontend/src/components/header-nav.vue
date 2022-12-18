<script setup lang="ts">
import GlassesSVG from '../assets/glasses.svg';

const props = defineProps<{
  routePath: string;
}>();
</script>

<template>
  <nav aria-label="Main menu">
    <div class="flex h-24 items-center justify-between">
      <div class="flex-shrink-0">
        <img class="h-14 w-14 inline-block pb-1.5" :src="GlassesSVG" alt="Vet Specs" />
        <h1 class="font-bold inline-block pl-3 font-mono text-2xl font-medium">vet specs</h1>
      </div>
      <div class="ml-10 flex items-baseline space-x-6">
        <router-link
          to="/"
          :class="{ 'active font-extrabold': routePath === '/' }"
          class="text-slate-900 hover:bg-sky-200 px-3 py-2 rounded-md text-sm font-medium"
        >
          Ulcerative Dermatitis
        </router-link>
        <router-link
          to="/features"
          :class="{ 'active font-extrabold': routePath === '/features' }"
          class="text-slate-900 hover:bg-sky-200 px-3 py-2 rounded-md text-sm font-medium"
        >
          Features
        </router-link>
        <router-link
          to="/about"
          :class="{ 'active font-extrabold': routePath === '/about' }"
          class="text-slate-900 hover:bg-sky-200 px-3 py-2 rounded-md text-sm font-medium"
        >
          About
        </router-link>
      </div>
    </div>
    <div class="h-px bg-slate-900/5"></div>
  </nav>
</template>
