<script setup lang="ts">
const props = defineProps<{
  routePath: string;
}>();
</script>

<template>
  <nav aria-label="Main menu">
    <div class="flex h-16 items-center justify-between">
      <div class="flex-shrink-0">
        <img class="h-8 w-8 inline-block" src="https://tailwindui.com/img/logos/mark.svg?color=green&shade=500" alt="Vet Lens" />
        <h1 class="font-bold inline-block pl-2">Vet Lens</h1>
      </div>
      <div class="hidden md:block">
        <div class="ml-10 flex items-baseline space-x-4">
          <router-link to="/" :class="{ active: routePath === '/' }" class="text-slate-900 hover:bg-green-200 px-3 py-2 rounded-md text-sm font-medium">
            Ulcerative Dermatitis
          </router-link>
          <router-link
            to="/features"
            :class="{ active: routePath === '/features' }"
            class="text-slate-900 hover:bg-green-200 px-3 py-2 rounded-md text-sm font-medium"
          >
            Features
          </router-link>
          <router-link
            to="/about"
            :class="{ active: routePath === '/about' }"
            class="text-slate-900 hover:bg-green-200 px-3 py-2 rounded-md text-sm font-medium"
          >
            About
          </router-link>
        </div>
      </div>
    </div>
    <div class="h-px bg-slate-900/5"></div>
  </nav>
</template>
