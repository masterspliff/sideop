<template>
    <div class="product-links">
      <h2>Explore Our Other Products</h2>
      <ul>
        <li><router-link to="/products/add-on-armor">Add-on Armor</router-link></li>
        <li><router-link to="/products/structural-armor">Structural Armor</router-link></li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductLinks',
  };
  </script>
  
  <style scoped>
  .product-links {
    /* Your styles here */
  }
  </style>
  