<template>
  <div class="flex items-center p-6 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg shadow-lg mx-auto max-w-7xl" :class="{ 'md:flex-row-reverse': reverseOrder }" >
    <div class="text-center mb-8">
      <h1 class="text-3xl font-bold underline text-gray-800">{{ title }}</h1>
      <p class="text-justify text-lg mb-4 leading-relaxed text-gray-700 mt-4 w-11/12 h-full">{{ description }}</p>
    </div>
    <div class="gap-">
      <img v-for="(image, index) in images" :key="index" :src="image.src" :alt="image.alt" class="rounded-lg shadow-md" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FiftyFifty_big',
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
    reverseOrder: {
      type: Boolean,
      default: false
    },
  },
}
</script>

<style scoped>
.text-wrap {
  word-wrap: break-word;
  /* or */
}
</style>
