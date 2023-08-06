<template>
  <section class="bg-gray-800 text-white" aria-label="Information Section">
    <div class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
      <article>
        <h1 class="text-3xl font-bold tracking-tight sm:text-4xl">
          {{ title }}
        </h1>
        <p class="mt-4 text-gray-300">
          {{ description }}
        </p>

        <dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
          <div v-for="feature in featuresList" :key="feature.name" class="border-t border-gray-600 pt-4">
            <dt class="font-medium text-white hover:text-gray-300 transition-colors duration-300">{{ feature.name }}</dt>
            <dd class="mt-2 text-sm text-gray-400 ">{{ feature.description }}</dd>
          </div>
        </dl>
      </article>
      <div class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
        <figure v-for="(image, index) in imagesList" :key="index" class="rounded-lg bg-gray-700 w-full h-auto md:mt-0 rounded-lg shadow-inner transform transition-transform duration-300 hover:scale-105">
          <img :src="image.src" :alt="image.alt" class="rounded-lg w-full h-full object-cover" />
          <figcaption class="sr-only">{{ image.description }}</figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  title: String,
  description: String,
  featuresList: Array,
  imagesList: Array
});
</script>
