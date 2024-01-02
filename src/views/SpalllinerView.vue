<template>
<HeroSection 
    :imageSrc="imageSrc" 
    headline="Introducing the Next-Generation Spall Liner." 
    subheadline="Advanced protection for military vehicles against ballistic threats."
    />
    

<ParallaxComponent>
    <FiftyFifty
      title="Spall Liner"
      :paragraphs="[
        'Spall liner is a common name for a soft material, often aramid or glass fiber, that is mounted in the crew compartment of a vehicle. The spall liner serves to prevent fragments (spall), generated during an impact, from being accelerated towards the occupants of the vehicle.',
        'Spall liner can either be used as an added safety in case the armor system is overmatched or be factored in as an integral part of the protection system, where the excellent energy absorbing properties of the fiber is exploited.',
        'Depending on the complexity of the vehicle, two options are available for implementing spall liner: hard, pressed panels or flexible blankets.'
      ]"
      imageSrc="/spall-liner.jpg"
      imageAlt="Spall Liner in a vehicle"
    />
  </ParallaxComponent>

  <!-- Additional Sections for Panels and Blankets -->
  <ParallaxComponent>
    <FiftyFifty
      title="Panels"
      :paragraphs="[
        'When delivered as panels the spall liner is a solid composite plate, consolidated using a resin system customized to meet the operational and environmental requirements. This renders the plates stiff and very durable.',
        'When delivered, hard spall liner panels are rubber coated to achieve environmental protection and excellent surface finish. The panels incorporate cut-outs for mounting and packaging interfaces and can also be preformed with bends etc. to best fit the vehicle. This makes spall liner panels very suitable for mounting in visible areas and places where no or little support is available.',
        'Hard spall liners can be based on various fiber types including aramid, glass, and polyethylene (HDPE).'
      ]"
      imageSrc="/spall-liner-panels.jpg"
      imageAlt="Spall Liner Panels"
      reverseOrder
    />
  </ParallaxComponent>

  <ParallaxComponent>
    <FiftyFifty
      title="Blankets"
      :paragraphs="[
        'Spall liner blankets consist of layers of unconsolidated fiber, encapsulated by a polymeric bag to provide environmental protection against wear, moisture, dust, and UV-light.',
        'Spall liner blankets can be customized in protection level and are used either as stand-alone for protection against smaller threats such as hand grenades (e.g. DM-51 or M67) or as an integrated part of a protection system to protect against high-level IEDs and KE threats.',
        'Spall liner blankets can be made in very large pieces and are delivered to shape and size including cut-outs for mounting, packaging interfaces etc. This makes them ideally suited for fitment in complex areas such as the floor of a vehicle.'
      ]"
      imageSrc="/spall-liner-blankets.jpg"
      imageAlt="Spall Liner Blankets"
    />
  </ParallaxComponent>

  <TwoColumns />

</template>


<script setup lang="ts">
import ParallaxComponent from '@/components/ParallaxComponent.vue'
import TwoColumns from '@/components/SpallTwoColumns.vue';
import HeroSection from '@/components/HeroSection.vue';
import FiftyFifty from '@/components/FiftyFifty.vue';

const imageSrc = '/Spall-liner-hero.jpg';  // Directly reference from the root

</script>
  