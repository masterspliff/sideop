<template>


<div class="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-28 lg:px-8">
    <img src="/bg/bg_3.jpg" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover" />
    <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
      <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
    </div>
    <div class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
      <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
    </div>
    <div v-if="!hideOurProducts" class="mx-auto max-w-2xl text-center">
      <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">Our products</h2>
      <p class="mt-6 text-lg leading-8 text-gray-300">
        </p>
      </div>
      

  </div>
  <div v-if="!hideOurProducts">
    <FiftyFifty
      title="Add-on Armor"
      :paragraphs="[
        'Add-on armor can be used to effectively increase the protection level of existing and new vehicles. With composite technology the weight penalty to the vehicle can be reduced, making implementation of high-level protection solutions possible even for light vehicles without losing mobility.',
        'Add-on armor systems are customized to meet a specific threat requirement by including different types of materials in the armor solution and considering any existing base armor, such as a steel or aluminium vehicle hull. This renders all armor solutions provided by Composhield unique to the specific application and scenario.',
        'Composhield is dedicated to developing light and durable armor solutions to defeat ballistic and IED threats as faced on the battlefield today.'
      ]"
      imageSrc="/raven.jpg"
      imageAlt="Composhield's advanced armor engineering"
    />
    <FiftyFifty
      title="Spall-Liner"
      :paragraphs="[
        'Add-on armor can be used to effectively increase the protection level of existing and new vehicles. With composite technology the weight penalty to the vehicle can be reduced, making implementation of high-level protection solutions possible even for light vehicles without losing mobility.',
        'Add-on armor systems are customized to meet a specific threat requirement by including different types of materials in the armor solution and considering any existing base armor, such as a steel or aluminium vehicle hull. This renders all armor solutions provided by Composhield unique to the specific application and scenario.',
        'Composhield is dedicated to developing light and durable armor solutions to defeat ballistic and IED threats as faced on the battlefield today.'
      ]"
      imageSrc="/raven.jpg"
      imageAlt="Composhield's advanced armor engineering"
      reverseOrder    
      />
      <FiftyFifty
      title="Structural armor"
      :paragraphs="[
        'Add-on armor can be used to effectively increase the protection level of existing and new vehicles. With composite technology the weight penalty to the vehicle can be reduced, making implementation of high-level protection solutions possible even for light vehicles without losing mobility.',
        'Add-on armor systems are customized to meet a specific threat requirement by including different types of materials in the armor solution and considering any existing base armor, such as a steel or aluminium vehicle hull. This renders all armor solutions provided by Composhield unique to the specific application and scenario.',
        'Composhield is dedicated to developing light and durable armor solutions to defeat ballistic and IED threats as faced on the battlefield today.'
      ]"
      imageSrc="/raven.jpg"
      imageAlt="Composhield's advanced armor engineering"
          
      />
  </div>
    <router-view></router-view>


</template>


<script setup lang="ts">
import { computed } from 'vue';
import FiftyFifty from '@/components/FiftyFifty.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const hideOurProducts = computed(() => route.meta.hideOurProductsSection);

</script>
