<template>

  <HeroSection 
    :imageSrc="imageSrc" 
    headline="Introducing Add-on: Dual Protection for Modern Warfare." 
    subheadline="Effectively increasing the protection level of existingand new vehicles."
    />
    
    <FiftyFifty
  title="
  Add-on Armor
  "
  :paragraphs="[
    'Add-on armor can be used to effectively increase the protection level of existingand new vehicles. With composite technology the weight penalty to the vehicle can be reduced, making implementation of high-level protection solutions possibleeven for light vehicles without loosing mobility.',
    'Add-on armor systems arecustomized to meet a specific threat requirement by including different types of materials in the armor solutionand considering any existing base armor, such as a steel or aluminium vehicle hull. This renders all armor solutions provided by Composhield unique to the specific application and scenario.',
    'Composhield is dedicated to developing light and durable armor solutions to defeat ballistic and IED threats as faced on the battlefield today.'
  ]"
  imageSrc="/raven.jpg"
  imageAlt="Composhield's advanced armor engineering"
/>

<ProductFeature 
      :title="'Effective, Lightweight, and Customizable Protection for Vehicles'"
      :description="'Our add-on armor solutions enhance the protection level of both existing and new vehicles, ensuring safety and durability.'"
      :featuresList="features"
      :imagesList="images"
    />

  </template>
  
<script setup lang="ts">
import { ref } from 'vue'
import ProductFeature from '@/components/ProductFeature.vue'
import HeroSection from '@/components/HeroSection.vue'
import FiftyFifty from '@/components/FiftyFifty.vue'; // Adjust the path based on your directory structure

const features = ref([
    { 
      name: 'Customized Solutions', 
      description: 'Add-on armor provides customized solutions for a wide range of vehicles, ensuring maximum protection with minimum weight addition.' 
    },
    { 
      name: 'Multiple Protection Capabilities', 
      description: 'In addition to projectile protection, add-on armor withstands impacts, including vibration and shock, and is resistant to UV light, chemicals, and decontaminating agents.' 
    },
    { 
      name: 'High Multi-Hit Capability', 
      description: 'Our armor features a high multi-hit capability, providing outstanding protection against multiple projectiles or fragments.' 
    },
    { 
      name: 'Advanced Armor Technology', 
      description: 'Our advanced armor technology offers a wide range of options for customized protection systems, tailored to individual needs and specific types of vehicles.' 
    },
    { 
      name: 'Lightweight and Durable', 
      description: 'Composhield is dedicated to developing light and durable armor solutions to defeat ballistic and IED threats as faced on the battlefield today.' 
    },
    { 
      name: 'Enhanced Vehicle Flexibility', 
      description: 'Add-on armor systems increase the flexibility of any vehicle by matching ballistic threats beyond what the vehicle itself can withstand.' 
    },
]);


const imageSrc = ref('/add-on.jpg') // or whatever default or prop value you have

const images = ref([
  { src: '/add-on-four.jpg', alt: 'Add-On Armor Image 1', description: 'Detailed view of Add-On Armor' },
  { src: '/aramid-gun.jpg', alt: 'Add-On Armor Image 2', description: 'Close-up of armor material' },
  { src: '/aramid.jpg', alt: 'Add-On Armor Image 3', description: 'Armor being tested in a facility' },
  { src: '/kevlar.jpg', alt: 'Add-On Armor Image 4', description: 'Armor installed on a vehicle' },
]);





</script>
