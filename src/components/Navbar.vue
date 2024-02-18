<template>
  <header class="fixed top-0 z-50 w-full">
    <nav class="mx-auto flex w-full items-center justify-between p-4 lg:p-6 bg-gradient-to-t from-transparent to-black" aria-label="Global">
      <div class="flex items-center">
        <router-link to="/" class="flex items-center">
          <img src="@/assets/composhield_logo2.png" alt="Composhield Logo" class="h-10 w-auto lg:h-14 rounded-sm" />
          <span class="ml-2 text-white text-lg font-semibold hidden md:block">COMPOSHIELD</span>
        </router-link>
      </div>
      <div class="hidden lg:flex justify-center items-center">
        <MenuLinks />
      </div>
      <button @click="toggleMenu" class="lg:hidden p-2 text-white">
        <span>Menu</span>
      </button>
    </nav>
    <div v-if="isMenuOpen" class="lg:hidden">
      <MenuLinks :is-mobile="true" @update:menuOpen="isMenuOpen = $event" />
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import MenuLinks from './MenuLinks.vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<style scoped>
</style>
