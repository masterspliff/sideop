<template>
  <header class="sticky top-0 bg-transparent bg-opacity-90 backdrop-filter transition-all z-50">
    <nav class="mx-auto flex w-full items-center justify-between p-4 lg:p-6 bg-gradient-to-t from-transparent via-gray-800 to-gray-900" aria-label="Global">
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
</style>
