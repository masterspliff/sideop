<template>

  <HeroSection 
    :imageSrc="imageSrc" 
    headline="Introducing Add-on: Dual Protection for Modern Warfare." 
    subheadline="Effectively increasing the protection level of existingand new vehicles."
    />

    <ParallaxComponent>

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
</ParallaxComponent>

<ParallaxComponent>

<FiftyFifty
title="
IED Protection
"
:paragraphs="[
'Ballistic threats from hand guns, rifles, machine guns etc. is an ever present risk to military vehicles. Protection against different types of weapons and ammunitions is essential to maintainoperational freedom in a hostile environment.',
'Composhield armor solutions can be tailored to meet any ballistic requirement and have been tested and certified independently for a wide range of threats:',
'*Protectionin accordance with NATO STANAG 4569 Level 1 to 5',
'*Blast and fragment resistant',
'Composhield ballistic armor is covered by patents and has been developed specifically to ensure:',
'*High structural integrity and stiffness',
'*Superior multi hit capability',
]"
imageSrc="/IED_example.jpeg"
imageAlt="Composhield's advanced armor engineering"
reverseOrder
/>
</ParallaxComponent>

<ParallaxComponent>
<FiftyFifty
title="
Ballistic Protection

"
:paragraphs="[
'The threat of improvised explosive devices (IEDs) presents the most severe threat to many forces in todays operational areas. IEDs come in many different forms and can subject targets to both heavy blast and severe fragmentation.',
'In many cases old artillery shells are fitted with new detonators, activated by a cellular phone, and placed next to the road. This constitutes a very high threat to particularly light and medium vehicles that were not designed to meet such requirements.',
'Composhield armor solutions have been applied specifically to counter IED threatsby providing very high structural durability to withstand the blast and superior stopping capabilities to counter fragmentation.',
'Current scenarios also call for protection against explosively formed projectiles (EFPs), which present an even more severe threat today. Composhield armor solutions are tested against such threats and can be tailored to meet any requirement needed.',
]"
imageSrc="/Actros_armor.jpeg"
imageAlt="Composhield's advanced armor engineering"

/>
</ParallaxComponent>

<ParallaxComponent>
<ProductFeature 
      :title="'Customizable Protection for Vehicles'"
      :description="'Our add-on armor solutions enhance the protection level of both existing and new vehicles, ensuring safety and durability.'"
      :featuresList="features"
      :imagesList="images"
    />
</ParallaxComponent>
  </template>
  
<script setup lang="ts">
import { ref } from 'vue'
import ProductFeature from '@/components/ProductFeature.vue'
import HeroSection from '@/components/HeroSection.vue'
import FiftyFifty from '@/components/FiftyFifty.vue'; // Adjust the path based on your directory structure
import ParallaxComponent from '@/components/ParallaxComponent.vue';

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


const imageSrc = ref('/structural-armor-war.jpg') // or whatever default or prop value you have

const images = ref([
  { src: '/add-on-four.jpg', alt: 'Add-On Armor Image 1', description: 'Detailed view of Add-On Armor' },
  { src: '/aramid-gun.jpg', alt: 'Add-On Armor Image 2', description: 'Close-up of armor material' },
  { src: '/aramid.jpg', alt: 'Add-On Armor Image 3', description: 'Armor being tested in a facility' },
  { src: '/kevlar.jpg', alt: 'Add-On Armor Image 4', description: 'Armor installed on a vehicle' },
]);





</script>
