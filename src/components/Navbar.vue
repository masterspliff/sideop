<template>
<header :class="scrolled ? 'scrolled' : ''" class="z-20">
  <nav class="bg-green mx-auto flex w-full items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <router-link to="/" class="-m-1.5 p-1.5">
          <span class="sr-only">Composhield</span>
          <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=green&shade=500" alt="" />
        </router-link>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <router-link to="/" class="router-link text-sm font-semibold">Home</router-link>
        <router-link to="/about" class="router-link text-sm font-semibold">About</router-link>
        <router-link to="/contact" class="router-link text-sm font-semibold">Contact</router-link>
        <router-link to="/products" class="router-link text-sm font-semibold">Products</router-link>
        <router-link to="/services" class="router-link text-sm font-semibold">Services</router-link>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false);

const updateScroll = () => {
  scrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', updateScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', updateScroll);
});
</script>

<style scoped>
header {
  position: sticky;
  top: 0;
  transition: background-color 0.5s, height 0.5s;
  z-index: 100;
}

header {
  background-color: transparent;
  opacity: 1;
}

header.scrolled {
  background-color: transparent ;
}

header nav {
  background: rgba(119, 119, 119, 0.411); /* military grey gradient */
  height: 100px;
  transition: height 0.8s;
}

header.scrolled nav {
  height: 70px;
}

.router-link {
  color: #ffffff; /* non-active link color */
  font-size: 18px;
  text-decoration: none;
  padding: 8px 10px; /* Decrease horizontal padding */
  position: relative;
  transition: color 0.5s ease;
}

.router-link:before {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #ffffff; /* Make underline darker for contrast against light background */
  visibility: hidden;
  transition: all 0.5s ease-in-out;
}

.router-link:hover {
  color: #838383;
}

.router-link:hover:before {
  visibility: visible;
  width: 100%;
}

.router-link-exact-active,
.router-link-active {
  color: #ffffff; /* active link color */
  
}

.router-link-exact-active:before,
.router-link-active:before {
  visibility: visible;
  width: 100%;
}




</style>
