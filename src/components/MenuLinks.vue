<template>
  <div
    :class="{'translate-y-0': menuOpen, 'menu-content': true}"
    class="space-y-4 md:space-y-0 md:space-x-8 fixed top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center bg-black bg-opacity-80 transition-all duration-300 ease-out md:relative md:flex-row md:bg-transparent md:translate-y-0"
  >
    <svg
      v-if="menuOpen"
      @click="toggleMenu"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      class="h-8 w-8 absolute top-4 right-4 text-white cursor-pointer"
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
    </svg>

    <div class="relative inline-block">
      <div
        v-if="isProductsMenuOpen || groupHovered"
        class="products-dropdown absolute left-0 w-48 py-2 bg-white font-medium rounded shadow-md md:bg-gray-800 md:ring-1 md:ring-black md:ring-opacity-5 transition duration-200 ease-in-out origin-top-right md:rounded-md"
        @mouseenter="groupHovered = true"
        @mouseleave="groupHovered = false"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <!-- Products Links -->
        <router-link
          v-for="product in products"
          :key="product.name"
          :to="product.route"
          class="block px-4 py-2 text-sm hover:bg-gray-500 hover:text-white flex items-center transition duration-150 ease-in-out"
          role="menuitem"
          @click="toggleMenuOnMobile"
        >
          <img :src="product.image" alt="" class="product-image">
          {{ product.name }}
        </router-link>
      </div>
    </div>

    <!-- Navigation Links -->
    <router-link
      v-for="link in navLinks"
      :key="link.name"
      :to="link.route"
      class="nav-link text-white hover:text-gray-400 focus:text-white font-semibold"
      aria-label="Navigation Link"
      @click="toggleMenuOnMobile"
    >
      {{ link.name }}
    </router-link>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isProductsMenuOpen = ref(false);
const groupHovered = ref(false);
const menuOpen = ref(false);

// Example product and navigation links data
const products = ref([
  { name: 'Body Armor', route: '/products/body-armor', image: '/path-to-image.jpg' },
  { name: 'Spall Liner', route: '/products/spall-liner', image: '/path-to-image.jpg' }
]);

const navLinks = ref([
  { name: 'Add-on Armor', route: '/add-on-armor' },
  { name: 'Structural Armor', route: '/structural-armor' },
  { name: 'Spall-liner', route: '/spall-liner' },
  { name: 'Engineering', route: '/engineering' },
  { name: 'Products', route: '/products' },
  { name: 'About', route: '/about' },
  { name: 'Contact', route: '/contact' },

]);

const toggleProductsMenu = () => {
  isProductsMenuOpen.value = !isProductsMenuOpen.value;
};

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
  // Emit an event to signal the parent component about the state change
  emit('update:menuOpen', menuOpen.value);
};

const emit = defineEmits(['update:menuOpen']);

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
