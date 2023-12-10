<template>
  <div :class="{'translate-y-0': menuOpen, 'menu-content': true}" class="space-y-4 md:space-y-0 md:space-x-8 fixed top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center bg-black bg-opacity-80 transition-all duration-300 ease-out md:relative md:flex-row md:bg-transparent md:translate-y-0">
    <svg v-if="menuOpen" @click="toggleMenu" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-8 w-8 absolute top-4 right-4 text-white cursor-pointer">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
    </svg>
    <router-link to="/" class="nav-link text-white hover:text-gray-400 font-semibold active:text-black" aria-label="Home" @click="toggleMenuOnMobile">
      Home
    </router-link>
    <div class="relative inline-block">
      <router-link to="/products" class="nav-link flex items-center text-white hover:text-gray-400 focus:text-white font-semibold" aria-label="Products" @click.stop="toggleProductsMenu" @mouseenter="groupHovered = true" @mouseleave="groupHovered = false">
        Products
        <svg v-if="isProductsMenuOpen || groupHovered" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block ml-1 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </router-link>
      <div v-if="isProductsMenuOpen || groupHovered" class="products-dropdown absolute left-0 w-48 py-2 bg-white font-medium rounded shadow-md md:bg-gray-800 md:ring-1 md:ring-black md:ring-opacity-5 transition duration-200 ease-in-out origin-top-right md:rounded-md" @mouseenter="groupHovered = true" @mouseleave="groupHovered = false" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        <router-link to="/products/add-on-armor" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-500 hover:text-white md:text-white md:hover:bg-gray-600 flex items-center" role="menuitem" aria-label="Add-on" @click="toggleMenuOnMobile">
          <img src="/add-on.jpg" alt="Add-on Image" class="product-image">
          Add-on
        </router-link>
        <router-link to="/products/spall-liner" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-500 hover:text-white md:text-white md:hover:bg-gray-600 flex items-center" role="menuitem" aria-label="Spall-liner" @click="toggleMenuOnMobile">
          <img src="/add-on-two.jpg" alt="Spall-liner Image" class="product-image">
          Spall-liner
        </router-link>
        <router-link to="/products/structural-armor" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-500 hover:text-white md:text-white md:hover:bg-gray-600 flex items-center" role="menuitem" aria-label="Structural armor" @click="toggleMenuOnMobile">
          <img src="/add-on-three.jpg" alt="Structural armor Image" class="product-image">
          Structural armor
        </router-link>
      </div>
    </div>
    <router-link to="/services" class="nav-link text-white hover:text-gray-400 focus:text-white font-semibold" aria-label="Services" @click="toggleMenuOnMobile">
      Services
    </router-link>
    <router-link to="/about" class="nav-link text-white hover:text-gray-400 focus:text-white font-semibold" aria-label="About" @click="toggleMenuOnMobile">
      About
    </router-link>
    <router-link to="/contact" class="contact-button cursor-pointer text-white border-2 rounded-full px-8 py-2 hover:text-gray-400 hover:bg-gray-800 focus:text-white text-center text-base leading-6 font-semibold transition duration-150 ease-in-out" aria-label="Contact" @click.prevent="toggleMenuOnMobile">
  Contact
</router-link>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isProductsMenuOpen = ref(false);
const groupHovered = ref(false);
const menuOpen = ref(false);

const toggleProductsMenu = () => {
  isProductsMenuOpen.value = !isProductsMenuOpen.value;
};

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const toggleMenuOnMobile = () => {
  if (isMobile()) {
    toggleMenu();
  }
};

const isMobile = () => {
  return window.innerWidth <= 768;
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});

const handleClickOutside = (event) => {
  if (!event.target.closest('.menu-content')) {
    menuOpen.value = false;
  }
  if (!event.target.closest('.products-dropdown') && !event.target.closest('.nav-link')) {
    isProductsMenuOpen.value = false;
  }
};
</script>

<style scoped>
.product-image {
  width: 50px;
  height: 50px;
  margin-right: 10px;
  object-fit: cover;
  border-radius: 5px;
}

.products-dropdown .product-image {
  opacity: 1;
}

.nav-link {
  position: relative;
  overflow: hidden;
}

.nav-link::before {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #ffffff;
  transition: width 0.3s ease-in-out;
}

.nav-link:hover::before {
  width: 100%;
}
.contact-button {
  margin-right: auto;
}

</style>
