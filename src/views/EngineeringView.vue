<template>


   <div class="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-28 lg:px-8">
    
    <img src="/bg/bg_2.jpg" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover" />
    <div class="mx-auto max-w-2xl text-center">
  <h2 class="text-5xl font-bold tracking-tight text-white sm:text-7xl">Engineering</h2>
    </div>

  </div>

  <!-- Engineering Section -->
  <ParallaxComponent>
  <FiftyFifty
  title="Innovative Armor Engineering"
  :paragraphs="[
    'At Composhield, we prioritize research and design, offering a comprehensive suite of engineering services that leverage the latest advancements in armor technology.',
    'Our seasoned team of mechanical engineers specializes in material science, simulation, CAD, and design. Their expertise, combined with our track record in major national and international projects, ensures we deliver top-tier solutions, from technical assistance for ongoing armor projects to end-to-end project management for new vehicle platforms.',
    'With Composhield, you get holistic system solutions, from initial design concepts or reverse engineering to the final product, all validated by rigorous certification processes.'
  ]"
  imageSrc="hero3.jpg"
  imageAlt="Composhield's advanced armor engineering"
/>
</ParallaxComponent>


<ParallaxComponent>

  <!-- Armor Integration Section -->
  <FiftyFifty
  title="Seamless Armor Integration"
  :paragraphs="[
    'Armor integration is pivotal in achieving a protection solution that balances robust protection with operational functionality, enabling users to execute their missions effectively.',
    'The key to cost-effective protection often lies in the nuances of armor design and integration. At Composhield, we offer both consultancy services and full-fledged integration solutions, ensuring your vehicles are equipped with the best in class protection.'
  ]"
  imageSrc="Forsidebilleder3.jpg"
  imageAlt="Composhield's seamless armor integration process"
  reverseOrder
/>
</ParallaxComponent>

<ParallaxComponent>

  <!-- Production Section -->
  <FiftyFifty
  title="Precision Armor Production"
  :paragraphs="[
    'Since 1996, Composhield has been at the forefront of composite armor production. Our legacy is built on relentless innovation, refining processing techniques to deliver armor solutions that set industry benchmarks in quality and performance.',
    'Our commitment to excellence is evident in our in-house manufacturing processes, where seasoned professionals employ top-grade raw materials and state-of-the-art equipment. Our adherence to the ISO 9000 certification and partnerships with high-caliber suppliers underscore our unwavering commitment to quality.'
  ]"
  imageSrc="Forsidebilleder5.jpg"
  imageAlt="Composhield's precision armor production facility"
  />
</ParallaxComponent>





<FiftyFifty_big
      title="Design"
      description="This is a sample description
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      :images="[
        { src: '/design/1.png', alt: 'Description for Image 1' },
        { src: '/design/1.1.JPG', alt: 'Description for Image 2' },
        { src: '/design/1.2.jpg', alt: 'Description for Image 3' }
      ]"
    />

    <FiftyFifty_big
      title="Sample Title"
      description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
      :images="[
        { src: '/design/4.jpg', alt: 'Description for Image 1' },
        { src: '/design/4.2.jpg', alt: 'Description for Image 2' },
        { src: '/design/4.3.jpg', alt: 'Description for Image 3' }
      ]"
      reverseOrder
    />

<DesignEngineer
title="Sample Title"
      description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
      :images="[
        { src: '/design/4.jpg', alt: 'Description for Image 1' },
        { src: '/design/4.2.jpg', alt: 'Description for Image 2' },
        { src: '/design/4.3.jpg', alt: 'Description for Image 3' }
      ]"
      />
<div>
  <Validation/>
</div>

</template>

<script setup lang="ts">
import DesignEngineer from '@/components/DesignEngineer.vue';
import FiftyFifty_big from '@/components/FiftyFifty_big.vue';
import FiftyFifty from '@/components/FiftyFifty.vue';
import Validation from '@/components/Validation.vue';
import ParallaxComponent from '@/components/ParallaxComponent.vue';


</script>
