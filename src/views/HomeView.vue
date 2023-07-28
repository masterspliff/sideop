<template>
  <div class="relative h-screen overflow-hidden">
    <!-- Background Video -->
    <video autoplay loop muted playsinline class="absolute top-0 left-0 w-full h-full object-cover">
  <source src="sfm.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>


    <!-- Overlay Content -->
    <div class="absolute top-0 left-0 w-full h-full grid place-items-center z-10 text-center text-white min-h-screen">
      <div>
        <h1 class="text-4xl font-bold tracking-tight sm:text-6xl">Composite Shielding Technology</h1>
        <p class="mt-6 text-lg leading-8">
          We want to enable our customers to implement secure applications for protection<p>
          of humans and other valuables against blast, ballistic impact and other hostile actions.</p>
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <a href="#" class="
            rounded-md bg-green-700 px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-green-800
            focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:text-black
          ">See products</a>
          <a href="#" class="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-grey
            focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:text-black"
            >Contact us <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </div>
  </div>

  <FutureCards />
</template>



<script setup lang="ts">
import FutureCards from '@/components/FutureCards.vue';

</script>
