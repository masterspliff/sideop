<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">

<transition-group name="fade" 
                  tag="div" 
                  @click="toggleImage" 
                  class="neon-blue transform transition-transform duration-300 hover:scale-105 bg-white hover:bg-gray-100 overflow-hidden shadow-xl rounded-lg cursor-pointer hover:border-blue-200 hover:border-2"
                  aria-label="Product card that can be clicked to toggle the image">
    <!-- Description View -->
    <div v-if="!showImage" 
         ref="content" 
         class="p-6 flex flex-col items-center" 
         key="description">
         
      <!-- Title -->
      <h2 class="text-xl font-semibold text-blue-900 mb-4 w-4/5 text-center">
        {{ title }}
      </h2>
      
      <!-- Product Description -->
      <p class="text-gray-600 text-sm mb-4 text-center text-justify text-center ">
        {{ description }}
      </p>
      
      <!-- Features List -->
      <ul v-if="features" 
          class="list-disc pl-5 mb-4 text-gray-600 text-center text-justify w-4/5">
        <li v-for="feature in featuresArray" 
            :key="feature" 
            class="text-sm mb-2">
            {{ feature }}
        </li>
      </ul>
      
      <!-- Additional Information -->
      <p v-if="additional" 
         class="text-gray-500 text-sm italic mb-4 text-justify text-center">
        {{ additional }}
      </p>
      
      <!-- Indication Arrow -->
      <div class="absolute bottom-2 right-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
  <path fill-rule="evenodd" d="M10 1a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 1zM5.05 3.05a.75.75 0 011.06 0l1.062 1.06A.75.75 0 116.11 5.173L5.05 4.11a.75.75 0 010-1.06zm9.9 0a.75.75 0 010 1.06l-1.06 1.062a.75.75 0 01-1.062-1.061l1.061-1.06a.75.75 0 011.06 0zM3 8a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 013 8zm11 0a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 0114 8zm-6.828 2.828a.75.75 0 010 1.061L6.11 12.95a.75.75 0 01-1.06-1.06l1.06-1.06a.75.75 0 011.06 0zm3.594-3.317a.75.75 0 00-1.37.364l-.492 6.861a.75.75 0 001.204.65l1.043-.799.985 3.678a.75.75 0 001.45-.388l-.978-3.646 1.292.204a.75.75 0 00.74-1.16l-3.874-5.764z" clip-rule="evenodd" />
</svg>


      </div>
    </div>

    <!-- Image View -->
    <div v-if="showImage" 
         ref="content" 
         class="p-5" 
         key="image">
      <img :src="image" 
           alt="Related product information" 
           class="w-full h-full object-cover"/>
      <!-- Indication Arrow -->

           <div class="absolute bottom-2 right-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
  <path fill-rule="evenodd" d="M10 1a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 1zM5.05 3.05a.75.75 0 011.06 0l1.062 1.06A.75.75 0 116.11 5.173L5.05 4.11a.75.75 0 010-1.06zm9.9 0a.75.75 0 010 1.06l-1.06 1.062a.75.75 0 01-1.062-1.061l1.061-1.06a.75.75 0 011.06 0zM3 8a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 013 8zm11 0a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 0114 8zm-6.828 2.828a.75.75 0 010 1.061L6.11 12.95a.75.75 0 01-1.06-1.06l1.06-1.06a.75.75 0 011.06 0zm3.594-3.317a.75.75 0 00-1.37.364l-.492 6.861a.75.75 0 001.204.65l1.043-.799.985 3.678a.75.75 0 001.45-.388l-.978-3.646 1.292.204a.75.75 0 00.74-1.16l-3.874-5.764z" clip-rule="evenodd" />
</svg>


      </div>
    </div>
</transition-group>


</template>

<script>
export default {
  name: 'ProductCards',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    features: String,
    additional: String,
    image: String,
  },
  data() {
    return {
      showImage: false
    }
  },
  methods: {
    toggleImage() {
      this.showImage = !this.showImage;
    },
    truncateText(text, limit) {
      if (text.length > limit) {
        return text.substring(0, limit) + '...';
      }
      return text;
    }
},

  computed: {
    featuresArray() {
      return this.features ? this.features.split(';') : [];
    }
  }
};
</script>




