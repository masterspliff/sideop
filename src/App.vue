
'use client'

<template>
  <div id="app" class="relative">
    <NewNavbar/>
    <RouterView/> 
    <Footer />
  </div>


  
</template>
<script setup lang="ts">
import NewNavbar from './components/NewNavbar.vue';
import Footer from './components/Footer.vue';
</script>


