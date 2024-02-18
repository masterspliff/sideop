<template>
    <!-- Background Video -->
    <div class="relative h-screen overflow-hidden video">
  <!-- Background Image -->
  <HomeModule />



     <!-- Overlay -->

    <!-- Overlay Content -->
    
  </div>
  <NewJob />
</template>



<script setup lang="ts">
import NewJob from '@/components/NewJob.vue';
import Validation from '@/components/Validation.vue';
import HomeModule from '@/components/HomeModule.vue';

</script>

<style scoped>
.video {
  margin-top: -120px;
}
</style>
