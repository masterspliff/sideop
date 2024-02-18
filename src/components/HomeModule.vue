<template>
    <div class="h-screen w-full">
      <div class="flex h-full">
        <!-- Land  -->
        <div class="section flex-1 bg-black text-white flex flex-col justify-center items-center group">
          <img src="/products/land-system.jpg" alt="Construction machinery at a building site" class="mb-4">
          <h2 class="text-2xl font-bold mb-2">LAND</h2>
          <a href="#" class="text-gray-300">Placeholder Link</a>
        </div>
        
        <!-- Air -->
        <div class="section flex-1 bg-black text-white flex flex-col justify-center items-center group">
          <img src="/products/air-system.jpg" alt="Safety helmet and tools representing protection measures" class="mb-4">
          <h2 class="text-2xl font-bold mb-2">Air</h2>
          <a href="#" class="text-gray-300">Placeholder Link</a>
        </div>
        
        <!-- Naval  -->
        <div class="section flex-1 bg-black text-white flex flex-col justify-center items-center group">
          <img src="/products/naval-system.jpg" alt="Industrial facilities with lights indicating energy" class="mb-4">
          <h2 class="text-2xl font-bold mb-2">Naval</h2>
          <a href="#" class="text-gray-300">Placeholder Link</a>
        </div>
        
        <!-- Personal Protection -->
        <div class="section flex-1 bg-black text-white flex flex-col justify-center items-center group">
          <img src="" alt="Modern train in motion showcasing transportation" class="mb-4">
          <h2 class="text-2xl font-bold mb-2">Personal Protection</h2>
          <a href="#" class="text-gray-300">Placeholder Link</a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomeModule'
  }
  </script>
  
  <style scoped>
  /* Ensure that the images cover their sections and do not get stretched */
  img {
    object-fit: cover;
    width: 100%;
    height: auto;
  }
  
  /* Responsive hover effect */
  .section {
    transition: flex-grow 0.3s ease;
    cursor: pointer;
  }
  
  .section:hover {
    flex-grow: 5;
  }
  </style>
  