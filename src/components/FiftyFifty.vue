<template>
  <section class="flex flex-col md:flex-row items-center my-16 bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg shadow-lg mx-auto max-w-7xl" :class="{ 'md:flex-row-reverse': reverseOrder }">
    <div class="w-full md:w-1/2 p-4">
      <h2 class="text-3xl font-semibold text-gray-800 mb-6 border-b pb-2">{{ title }}</h2>
      <div v-for="(paragraph, index) in paragraphs" :key="index" class="text-justify text-lg mb-4 leading-relaxed text-gray-700">
        {{ paragraph }}
      </div>
    </div>
    <div class="w-full md:w-1/2 p-4">
      <img :src="imageSrc" :alt="imageAlt" class="w-full h-auto md:mt-0 rounded-lg shadow-inner transform transition-transform duration-300 hover:scale-105">
    </div>
  </section>
</template>

  
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      paragraphs: {
        type: Array,
        required: true
      },
      imageSrc: {
        type: String,
        required: true
      },
      imageAlt: {
        type: String,
        default: 'Image'
      },
      reverseOrder: {
        type: Boolean,
        default: false
      }
    }
  }
  </script>
  