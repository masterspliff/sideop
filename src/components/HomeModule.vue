<template>
  <div class="h-screen w-full">
    <div class="flex h-full">
      <div v-for="item in items" :key="item.title" class="section flex-1 bg-black text-white flex flex-col justify-center items-center group">
        <img :src="item.image" :alt="item.alt" class="mb-4">
        <h2 class="text-2xl font-bold mb-2">{{ item.title }}</h2>
        <a href="#" class="text-gray-300">Placeholder Link</a>
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
        { title: 'LAND', image: landSystem, alt: 'Construction machinery at a building site' },
        { title: 'Air', image: airSystem, alt: 'Safety helmet and tools representing protection measures' },
        { title: 'Naval', image: navalSystem, alt: 'Industrial facilities with lights indicating energy' },
        { title: 'Personal Protection', image: bodyArmor, alt: 'Modern train in motion showcasing transportation' }
      ]
    }
  }
}
</script>

<style scoped>
img {
  object-fit: cover;
  width: 100%;
  height: auto;
}

.section {
  transition: flex-grow 0.3s ease;
  cursor: pointer;
}

.section:hover {
  flex-grow: 5;
}
</style>