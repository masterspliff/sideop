<template>
    <div class="relative text-center">
      <img :src="imageSrc" alt="Product Image" class="w-full block"/>
      <div class="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center p-5">
        <h1 class="text-4xl font-bold tracking-tight sm:text-6xl text-white drop-shadow-2xl">{{ headline }}</h1>
        <p class="text-2xl font-bold tracking-tight sm:text-2xl text-white drop-shadow-2xl">{{ subheadline }}</p>
        <button @click="scrollToDetails" class="mt-5 px-5 py-2 tracking-tight border-none bg-gray-900 text-white font-bold rounded-md hover:bg-gray-700 transition-colors duration-300">Learn More</button>
      </div>
    </div>
</template>



  
  <script setup lang="ts">
  import { ref, defineProps } from 'vue';
  
  const props = defineProps({
    imageSrc: {
      type: String,
      required: true
    },
    headline: {
      type: String,
      required: true
    },
    subheadline: {
      type: String,
      required: true
    }
  });
  
  const scrollToDetails = () => {
    const detailsElement = document.getElementById('product-details');
    if (detailsElement) {
      detailsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  </script>
  