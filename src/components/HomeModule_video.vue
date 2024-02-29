<template>
  <div class="h-screen w-full">
    <div class="flex h-full relative">
      <!-- Video as a common background -->
      <video class="video-background" autoplay loop muted>
        <source src="/sfm2.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <!-- Sections -->
      <div 
        v-for="(item, index) in items" 
        :key="item.title" 
        :class="{'section': true, 'active': index === activeIndex, 'inactive': index !== activeIndex}" 
        class="flex-1 bg-transparent text-white flex flex-col justify-center items-center group"
        @mouseover="setActiveIndex(index)"
        @mouseleave="activeIndex = -1"
      >
        <h2 class="text-2xl font-bold mb-2">{{ item.title }}</h2>
        <a href="#" class="text-gray-300"></a>
      </div>
    </div>
  </div>
</template>



<script>

export default {
  name: 'HomeModule',
  data() {
    return {
      items: [
        { title: 'Video', src: '/sfm2.mp4', alt: 'Video description' },
        { title: 'Video', src: '/sfm2.mp4', alt: 'Video description' },
        { title: 'Video', src: '/sfm2.mp4', alt: 'Video description' },
        { title: 'Video', src: '/sfm2.mp4', alt: 'Video description' }

      ],
      activeIndex: 0, // Default to the first video being active
    }
  },
  methods: {
    setActiveIndex(index) {
      this.activeIndex = index;
    }
  }
}
</script>



<style scoped>
.section {
  position: relative;
  width: 100%;
  height: 100%;
  transition: flex-grow 0.3s ease;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.video-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1; /* Ensure video is behind content */
}



img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  filter: grayscale(100%);
  transition: filter 0.3s ease;
}

.section:hover img {
  filter: grayscale(0);
}

.inactive {
  background-color: rgba(255, 255, 255, 0.1); /* Slightly greyed out */
}

.active{
  background-color: rgba(0, 0, 0, 0.5); /* Optional: Darken the section slightly to highlight the video */
}

.active .video {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

/* Style text for outline effect */
.section h2, .section a {
  position: absolute;
  -webkit-text-fill-color: transparent; /* Use for Chrome and Safari */
  -webkit-text-stroke-width: 4px; /* Define the width of the stroke */
  -webkit-text-stroke-color: black; /* Define the color of the stroke */
  font-size: 5em; /* Larger text size by default */
  transition: all 0.3s ease; /* Transition for text styling changes */
  white-space: nowrap; /* Prevent text from wrapping */
}

/* Change text style on hover */
.section:hover h2, .section:hover a {
  -webkit-text-fill-color: white; /* Fill text color on hover for Chrome and Safari */
  -webkit-text-stroke-width: 0px; /* Remove stroke on hover */
}

.section:hover {
  flex-grow: 5;
  background-color: transparent; /* Ensure the video is visible on hover */

}


.image-background {
  display: none; /* Hide images by default */
}

.section:hover .image-background {
  display: block; /* Show image on hover for inactive sections */
}

.section.active .video-background {
  display: block; /* Show video for active section */
}

.section.active .image-background {
  display: none; /* Ensure image is not displayed for active section */
}

.section.inactive .video-background {
  display: none; /* Hide video for inactive sections */
}
</style>


