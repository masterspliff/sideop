<template>
  <div id="app">
    <!-- add the navbar component here -->
    <Navbar/>
    <RouterView/> 

  </div>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue';
</script>


