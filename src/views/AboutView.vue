<template>
   <div class="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
    <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover" />
    <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
      <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
    </div>
    <div class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
      <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
    </div>
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">About us</h2>
      <p class="mt-6 text-lg leading-8 text-gray-300">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
    </div>
  </div>

  <!-- History & Timeline Section -->

  <Timeline 
    :milestones="timelineMilestones" 
    :startingPoint="timelineStartingPoint"
/>



  <!-- AMTANK Armor Section -->
  <FiftyFifty
     title="AMTANK Armor"
     :paragraphs="[
        'AMTANK Armor, located in Strongsville, Ohio, designs and manufactures survivability components for OEMs, Tier I and Tier II partners. The company was founded as a joint venture between US-based American Tank & Fabricating Company and Composhield A/S.',
        'AMTANK Armor offers a unique combination of leading-edge manufacturing capabilities and composite armor technologies with an ongoing commitment to research and development. Our focus is design and manufacturing of armor materials for vehicle platforms to protect against blast, ballistic and other hostile actions.'
     ]"
     imageSrc="add-on.jpg"
     imageAlt="AMTANK Armor logo"
     reverseOrder
  />

  <!-- Vision and Mission Section -->
  <FiftyFifty
     title="Vision and Mission"
     :paragraphs="[
        'Vision: Composhield\'s vision is to become the preferred supplier of protective solutions for civilian and military applications through innovative and progressive new technologies.',
        'Mission: We want to enable our customers to implement secure applications for protection of humans and other valuables against blast, ballistic impact and other hostile actions.'
     ]"
     imageSrc="vision-mission-placeholder.jpg"
     imageAlt="Vision and Mission of Composhield"
  />


</template>

<script setup lang="ts">
import FiftyFifty from '@/components/FiftyFifty.vue';
import Timeline from '@/components/Timeline.vue';

const timelineMilestones = [
    {
        year: '1996',
        description: 'Composhield A/S started in 1996 as an internal research project in the company Giantcode A/S. From 1996 and until the forming of the company Composhield A/S, several project teams were developing new protection technologies for the future.'
    },
    {
        year: '2000',
        description: 'All efforts were purely put into research as the strategy was to develop unique patented technologies before any commercialization. All research was done in close cooperation with international universities, armed forces, and some of the largest global defense companies. Composhield A/S was then formed in year 2000 and has today seven patents and patent pending technologies and products.'
    },
    {
        year: '2007',
        description: 'Composhield A/S formed a joint-venture, AMTANK Armor LLC., together with American Tank & Fabricating Company, to serve the North American market. Our strategic intent is to develop tomorrows technologies for todays global market, with the main focus on strategic partnership and superior quality.'
    }
];

const timelineStartingPoint = {
    year: 'Start',
    description: 'Beginning of the timeline'
};
</script>


