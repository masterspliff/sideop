<template>
  <div class="h-screen w-full">
    <div class="flex h-full">
      <div v-for="item in items" :key="item.title" class="section flex-1 bg-black text-white flex flex-col justify-center items-center group">
        <img :src="item.image" :alt="item.alt" class="mb-4">
        <h2 class="text-2xl font-bold mb-2">{{ item.title }}</h2>
        <a href="#" class="text-gray-300"></a>
      </div>
    </div>
  </div>
</template>

<script>
import landSystem from '@/assets/products/land-system_2.jpg';
import airSystem from '@/assets/products/air-system_2.jpg';
import navalSystem from '@/assets/products/naval-system_2.jpg';
import bodyArmor from '@/assets/products/body-armor.webp';

export default {
  name: 'HomeModule',
  data() {
    return {
      items: [
        { title: 'Land', image: landSystem, alt: 'Construction machinery at a building site' },
        { title: 'Air', image: airSystem, alt: 'Safety helmet and tools representing protection measures' },
        { title: 'Naval', image: navalSystem, alt: 'Industrial facilities with lights indicating energy' },
        { title: 'Personal Protection', image: bodyArmor, alt: 'Modern train in motion showcasing transportation' }
      ]
    }
  }
}
</script>

<style scoped>
.section {
  position: relative;
  width: 100%;
  height: 100%;
  transition: flex-grow 0.3s ease;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  filter: grayscale(100%);
  transition: filter 0.3s ease;
}

.section:hover img {
  filter: grayscale(0);
}

/* Style text for outline effect */
.section h2, .section a {
  position: absolute;
  -webkit-text-fill-color: transparent; /* Use for Chrome and Safari */
  text-fill-color: transparent; /* Standard syntax; currently only works in Firefox */
  -webkit-text-stroke-width: 4px; /* Define the width of the stroke */
  -webkit-text-stroke-color: black; /* Define the color of the stroke */
  text-stroke-width: 1px; /* Standard syntax; currently only works in Firefox */
  text-stroke-color: black; /* Standard syntax; currently only works in Firefox */
  font-size: 5em; /* Larger text size by default */
  transition: all 0.3s ease; /* Transition for text styling changes */
  white-space: nowrap; /* Prevent text from wrapping */
}

/* Change text style on hover */
.section:hover h2, .section:hover a {
  -webkit-text-fill-color: white; /* Fill text color on hover for Chrome and Safari */
  text-fill-color: white; /* Standard syntax; currently only works in Firefox */
  -webkit-text-stroke-width: 0px; /* Remove stroke on hover */
  text-stroke-width: 0px; /* Standard syntax; currently only works in Firefox */
}

.section:hover {
  flex-grow: 5;
}
</style>


