<template>
    <div class="parallax" :class="{ 'is-visible': isVisible }">
      <slot></slot> <!-- Content goes here -->
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isVisible: false,
      };
    },
    mounted() {
      window.addEventListener('scroll', this.checkVisibility);
      this.checkVisibility(); // Initial check
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.checkVisibility);
    },
    methods: {
      checkVisibility() {
        if (!this.isVisible) { // Only check if not already visible
          const rect = this.$el.getBoundingClientRect();
          const windowHeight = window.innerHeight || document.documentElement.clientHeight;
          const isVisible = rect.top <= windowHeight && rect.bottom >= 0;
          if (isVisible) {
            this.isVisible = true;
          }
        }
      },
    },
  };
  </script>
  
  

  <style>
.parallax {
  opacity: 0;
  transition: opacity 1s ease-out;
  will-change: opacity; /* Optimizes the animation */
}

.is-visible {
  opacity: 1;
}
</style>
