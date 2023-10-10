<template>
  <header :class="{ 'bg-white bg-opacity-80 blur[10px]': scrolled, 'bg-transparent': !scrolled }" class="sticky top-0 h-0 transition-all duration-500 z-50">
    <nav class="bg-gray-900 mx-auto flex w-full items-center justify-between p-4 lg:p-6" aria-label="Global">
      <div class="flex items-center flex-wrap justify-between w-full">
        <div class="flex items-center">
          <router-link to="/" class="m-[-1.5] p-1.5">
            <span class="sr-only">Composhield</span>
            <img class="h-10 w-auto lg:h-14 rounded-sm" src="@/assets/composhield_logo2.png" alt="Composhield Logo" />
          </router-link>
          <div class="hidden md:block lg:block ml-2 text-white text-lg font-semibold">COMPOSHIELD</div>
        </div>

        <!-- Mobile Menu Button -->
        <div class="lg:hidden relative z-100">
          <button @click.stop="toggleMenu" class="focus:outline-none" aria-label="Toggle menu">
            <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white relative lg:h-6 lg:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white relative lg:h-6 lg:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div> 

      <MenuLinks :is-mobile="false" class="hidden lg:flex lg:space-x-12" />
    </nav>

    <transition name="slide-in">
      <MenuLinks v-if="isMenuOpen" :is-mobile="true" class="menu-content flex flex-col justify-center items-start" />
    </transition>
  </header>
</template>



<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import MenuLinks from './MenuLinks.vue' // import the MenuLinks component
import { throttle } from 'lodash' // import lodash throttle function

let scrolled = ref(false)
let isMenuOpen = ref(false)

const updateScroll = throttle(() => {
  scrolled.value = window.scrollY > 50
}, 300) // throttle scroll events to improve performance

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const handleClickOutside = event => {
  const menuContent = document.querySelector('.menu-content')
  if (menuContent && !menuContent.contains(event.target)) {
    isMenuOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', updateScroll)
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScroll)
  document.removeEventListener('click', handleClickOutside)
})
</script>

