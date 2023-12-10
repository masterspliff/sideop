<template>
  <header class="sticky top-0 bg-gray-800 bg-opacity-90 backdrop-filter backdrop-blur-lg transition-all duration-500 z-50">
    <nav class="mx-auto flex w-full items-center justify-between p-4 lg:p-6 bg-gradient-to-r from-green-800 via-gray-900 to-green-800" aria-label="Global">
      <div class="flex items-center">
        <!-- Logo and Composhield Text -->
        <router-link to="/" class="m-[-1.5] p-1.5 flex items-center">
          <img class="h-10 w-auto lg:h-14 rounded-sm" src="@/assets/composhield_logo2.png" alt="Composhield Logo" />
          <span class="ml-2 text-white text-lg font-semibold hidden md:block lg:block">COMPOSHIELD</span>
        </router-link>
      </div>

      <div class="hidden lg:flex justify-center items-center flex-grow">
        <!-- Menu Links -->
        <MenuLinks :is-mobile="false" class="lg:space-x-12" />
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import MenuLinks from './MenuLinks.vue'

let isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>


<style scoped>
.bg-gradient-to-r {
  background-image: linear-gradient(to right, #1f2937 0%, #4b5563 30%, #1f2937 60%, #4b5563 100%);
  background-size: 100% 3px, 3px 100%;
  background-position: 0 0, 0 0;
  background-repeat: no-repeat;
}
</style>
