<template>
  <div class="hero relative text-center">
    <img :src="imageSrc" alt="Product Image" class="w-full block object-cover"/>
    <div class="overlay absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center p-5">
      <h1 class="title text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight text-white drop-shadow-md">{{ headline }}</h1>
      <p class="subheadline text-xl md:text-2xl font-bold tracking-tight text-white drop-shadow-md">{{ subheadline }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
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

<style scoped>
.hero {
  margin-top: -120px;
}

.overlay {
  padding: 20px; /* Adjust padding for better spacing on smaller screens */
}

.title, .subheadline {
  text-shadow: 0 2px 4px rgba(0,0,0,0.7); /* Enhance text readability */
}

@media (max-width: 768px) {
  .hero {
    margin-top:0px; /* Reduce negative margin for smaller screens */
  }

  .title {
    font-size: 2.25rem; /* Adjust headline font size for smaller screens */
  }

  .subheadline {
    font-size: 1.25rem; /* Adjust subheadline font size for smaller screens */
  }
}
</style>
