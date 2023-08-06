<template>
<HeroSection 
    :imageSrc="imageSrc" 
    headline="Introducing the Next-Generation Spall Liner." 
    subheadline="Advanced protection for military vehicles against ballistic threats."
    />
    
<TwoColumns />
</template>


<script setup lang="ts">

import TwoColumns from '@/components/SpallTwoColumns.vue';
import HeroSection from '@/components/HeroSection.vue';

const imageSrc = '/Spall-liner-hero.jpg';  // Directly reference from the root

</script>
  