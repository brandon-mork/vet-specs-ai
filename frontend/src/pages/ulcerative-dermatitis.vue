<script setup lang="ts">
import FileUpload from '../components/file-upload.vue';
</script>

<template>
  <div class="flex space-x-6 items-center">
    <div class="grow">
      <h1 class="text-4xl text-sky-500 font-semibold">Automatically</h1>
      <h1 class="text-3xl font-light">Score Ulcerative Dermatitis</h1>
      <p class="mt-2">Using state-of-the-art machine learning.</p>
    </div>
    <div class="bg-gray-100 rounded-lg">
      <div class="m-10 text-sm">
        <h1 class="text-xl font-semibold">Give Us Feedback</h1>
        <p>Ideas for applying artificial intelligence to veterinary medicine?</p>
        <button class="mt-2 w-100 bg-sky-500 hover:bg-sky-600 text-white py-2 px-4 rounded">Contact Us</button>
      </div>
    </div>
  </div>
  <FileUpload class="mt-20" />
</template>
