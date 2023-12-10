<template>

<HeroSection 
    :imageSrc="imageSrc" 
    headline="Introducing Structural Armor: Protection Beyond Combat." 
    subheadline="Strong, Resilient, and Designed to Withstand the Toughest Conditions"
    />

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 shadow-inner">
    <div class="text-center">
        <h2 class="text-2xl font-bold text-blue-600 mb-6">Steadfast Protection Against Threats</h2>
        
        <p class="text-lg text-gray-700 mb-6 leading-relaxed">
            In the face of threats and extreme structural loads, <span class="font-semibold">Structural Armor</span> emerges as a beacon of unwavering protection. Ingeniously crafted, these armor solutions stand strong against hostile actions, all while shouldering substantial structural loads. Their dual prowess empowers architects and designers, offering them the liberty to embed these panels as pivotal construction entities across vehicles, shelters, and infrastructures. In doing so, they bolster structural integrity without a hint of compromise on safety.
        </p>
        
        <hr class="border-gray-300 my-6">
        
        <p class="text-lg text-gray-700 leading-relaxed">
            <span class="font-semibold">Composhield</span>, a pioneer in armor technology, stands tall with its innovative flair. Our suite encompasses three distinguished structural armor technologies, each meticulously sculpted for specific application arenas: non-mobile, semi-mobile, and mobile.
        </p>
        
        <div class="mt-6">
            <span class="inline-block bg-blue-600 text-white px-4 py-1 rounded font-semibold text-sm shadow">Innovation in Defense</span>
        </div>
    </div>
</div>

<ParallaxComponent>
  <!-- Non-Mobile: Resilient Structures with HIRC -->
  <FiftyFifty
    title="Non-Mobile: Resilient Structures with HIRC"
    :paragraphs="[
      'Non-Mobile applications involve permanent structures such as embassies, military headquarters, and power plants targeted by hostile actions. The predominant threat is large explosive charges, like hundreds of kilograms of TNT.',
      'Composhield’s solution is the High Impact-Resistant Composite (HIRC), resistant to blast loads. The tech integrates a UHSS rebar pattern with aramid fibers in a specialized cementitious matrix, forming a durable panel that absorbs significant energy without loss of integrity.',
      'Features: Excellent resistance to blasts; Ballistic protection to STANAG 4569 Level 3; Protects against fragmentation.',
      'Although heavier than our mobile CP tech, the SC tech is more cost-effective, suitable for protecting larger structures where mass isn’t the main concern.'
    ]"
    imageSrc="/Hirc_panel.jpg"
    imageAlt="High Impact-Resistant Composite"
  />

  <!-- Semi-Mobile: Advanced SC Technology -->
  <FiftyFifty
    title="Semi-Mobile: Advanced SC Technology"
    :paragraphs="[
      'Semi-Mobile solutions, like container doors with SC packages, benefit from Composhield’s patented Steel-Concrete composite (SC). This unique system combines HHA steel and HH steel with a reinforced cement matrix, producing an armor panel specialized for semi-mobile contexts.',
      'Features: Outstanding blast resistance; Ballistic defense up to STANAG 4569 Level 3; Defense against fragmentation.',
      'The SC tech, while heavier than mobile CP, is cost-efficient, making it apt for guarding sizable structures where weight isn\'t paramount.'
    ]"
    imageSrc="/semi-mobile-door.jpg"
    imageAlt="Advanced SC Technology"
    reverseOrder
  />

  <!-- Mobile: High-Strength Composhield Armor -->
  <FiftyFifty
    title="Mobile: High-Strength Composhield Armor"
    :paragraphs="[
      'Composhield\'s armor for mobile settings uses high-strength composite materials with ballistic properties. The Ceramic Polymer (CP) technology, also used for add-on armor, is optimized for mobile use.',
      'These CP armor panels function as structural elements, like sides or doors, while ensuring ballistic protection.',
      'Features: STANAG 4569 Level 4 ballistic performance; Defense from artillery shell fragments; Exceptional structural strength and stiffness.',
      'The CP armor system is lightweight, eliminating redundant components. This makes it perfect for scenarios with limited mass and space.'
    ]"
    imageSrc="/mobile-panel.png"
    imageAlt="High-Strength Composhield Armor"
  />
</ParallaxComponent>




  </div>
  <ParallaxComponent>

  <ProductFeature 
      :title="'Effective, Lightweight, and Customizable Protection for Vehicles'"
      :description="'Our add-on armor solutions enhance the protection level of both existing and new vehicles, ensuring safety and durability.'"
      :featuresList="features"
      :imagesList="images"
    />
</ParallaxComponent>



</template>

  
<script setup lang="ts">
import { ref } from 'vue'
import ProductCards from '@/components/ProductCards.vue'
import HeroSection from '@/components/HeroSection.vue';
import ProductFeature from '@/components/ProductFeature.vue'
import ParallaxComponent from '@/components/ParallaxComponent.vue';
import FiftyFifty from '@/components/FiftyFifty.vue';

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

const images = ref([
  { src: '/tank.jpg', alt: 'Add-On Armor Image 1', description: 'Detailed view of Add-On Armor' },
  { src: '/struct-1.JPG', alt: 'Add-On Armor Image 2', description: 'Close-up of armor material' },
  { src: '/struct-2.jpg', alt: 'Add-On Armor Image 3', description: 'Armor being tested in a facility' },
  { src: '/tank.jpg', alt: 'Add-On Armor Image 4', description: 'Armor installed on a vehicle' },
]);

  const imageSrc = '/structural-armor-war.jpg';

  </script>
  

<style scoped>

</style>