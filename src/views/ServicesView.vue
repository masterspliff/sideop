<template>


   <div class="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-20 lg:px-8">
    <img src="/bg/bg_2.jpg" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover" />
    <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
      <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
    </div>
    <div class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
      <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
    </div>
    <div class="mx-auto max-w-2xl text-center">
  <h2 class="text-5xl font-bold tracking-tight text-white sm:text-7xl">Services</h2>
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
<div>
  <Validation/>
</div>

</template>

<script setup lang="ts">
import FiftyFifty from '@/components/FiftyFifty.vue';
import Validation from '@/components/Validation.vue';
import ParallaxComponent from '@/components/ParallaxComponent.vue';


</script>
