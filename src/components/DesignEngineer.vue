<template>
    <div class="bg-gray-200 p-8">
      <div class="text-center mb-8 mx-auto">
        <h1 class="text-3xl font-bold underline text-gray-800">{{ title }}</h1>
        <p class="text-gray-800 text-lg mt-4">{{ description }}</p>
      </div>
      <div class="flex justify-center gap-6 w-1/2 mx-auto">
        <img v-for="(image, index) in images" :key="index" :src="image.src" :alt="image.alt" class="rounded-lg shadow-md w-1/3" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DesignEngineer',
    props: {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      images: {
        type: Array,
        required: true,
        validator: function (value) {
          return value.every(image => 'src' in image && 'alt' in image);
        },
      },
    },
  }
  </script>
  
  <style scoped>
  /* You can add component-specific styles here */
  </style>
  