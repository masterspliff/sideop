<template>
    <div :class="{'translate-y-0': menuOpen, 'menu-content': true}" class="space-y-4 md:space-y-0 md:space-x-8 fixed top-0 left-0 right-0 bottom-0 flex-col justify-center items-center bg-black bg-opacity-80 transition-all duration-300 ease-out md:relative md:flex-row md:bg-transparent md:translate-y-0">
      <svg 
        @click="toggleMenu" 
        v-if="menuOpen" 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor" 
        class="h-8 w-8 absolute top-4 right-4 text-white cursor-pointer"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
      <router-link 
        to="/" 
        class="nav-link text-white hover:text-gray-400 font-semibold active:text-black" 
        aria-label="Home"
        @click.native="isMobile && toggleMenu()"
      >
        Home
      </router-link>
      <div class="relative inline-block">
        <router-link 
          to="/products" 
          class="nav-link flex items-center text-white hover:text-gray-400 focus:text-white font-semibold"
          aria-label="Products"
          @click.native.stop="toggleProductsMenu()"
        >
          Products
          <svg xmlns="http://www.w3.org/2000/svg" v-if="isProductsMenuOpen || groupHovered" class="h-4 w-4 inline-block ml-1 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" v-else class="h-4 w-4 inline-block ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </router-link>
        <div v-if="isProductsMenuOpen || groupHovered" class="products-dropdown absolute left-0 w-48 mt-2 py-2 bg-white font-medium rounded shadow-md md:bg-blue-800 md:ring-1 md:ring-black md:ring-opacity-5 transition duration-200 ease-in-out origin-top-right md:rounded-md" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          <router-link 
            to="/products/add-on-armor" 
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white md:text-white md:hover:bg-blue-600" 
            role="menuitem"
            aria-label="Add-on"
            @click.native="isMobile && toggleMenu()"
          >
            Add-on
          </router-link>
          <router-link 
            to="/products/spall-liner" 
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white md:text-white md:hover:bg-blue-600" 
            role="menuitem"
            aria-label="Spall-liner"
            @click.native="isMobile && toggleMenu()"
          >
            Spall-liner
          </router-link>
          <router-link 
            to="/products/structural-armor" 
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white md:text-white md:hover:bg-blue-600" 
            role="menuitem"
            aria-label="Structural armor"
            @click.native="isMobile && toggleMenu()"
          >
            Structural armor
          </router-link>
        </div>
      </div>
      <router-link 
        to="/services" 
        class="nav-link text-white hover:text-gray-400 focus:text-white font-semibold" 
        aria-label="Services"
        @click.native="isMobile && toggleMenu()"
      >
        Services
      </router-link>
      <router-link 
        to="/about" 
        class="nav-link text-white hover:text-gray-400 focus:text-white font-semibold" 
        aria-label="Projects"
        @click.native="isMobile && toggleMenu()"
      >
        About
      </router-link>
      <router-link 
        to="/contact" 
        class="nav-link text-white hover:text-gray-400 focus:text-white font-semibold" 
        aria-label="Contact"
        @click.native.prevent="isMobile && toggleMenu()"
      >
        Contact
      </router-link>
    </div>
  </template>
  

  <script setup>
  import { ref, onMounted, onUnmounted, watch } from 'vue'
  
  let isProductsMenuOpen = ref(false)
  let groupHovered = ref(false)
  let menuOpen = ref(false)
  
  const toggleProductsMenu = () => {
    isProductsMenuOpen.value = !isProductsMenuOpen.value
  }
  
  const toggleMenu = () => {
    menuOpen.value = !menuOpen.value
  }
  
  watch(groupHovered, (val) => {
    if (val) isProductsMenuOpen.value = false
  })
  
  const handleDropdownOutsideClick = event => {
    const dropdownContent = document.querySelector('.products-dropdown')
    if (dropdownContent && !dropdownContent.contains(event.target)) {
      isProductsMenuOpen.value = false
    }
  }
  
  const handleMenuOutsideClick = event => {
    const mobileMenuContent = document.querySelector('.menu-content')
    if (mobileMenuContent && !mobileMenuContent.contains(event.target)) {
      menuOpen.value = false
    }
  }
  
  const handleClickOutside = event => {
    handleDropdownOutsideClick(event)
    handleMenuOutsideClick(event)
  }
  
  onMounted(() => {
    document.addEventListener('click', handleClickOutside)
  })
  
  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
  })
  </script>
  