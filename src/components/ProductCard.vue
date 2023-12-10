<template>
    <div class="product-card">
      <img :src="product.image" alt="Product Image" class="product-image"/>
      <h3 class="product-name">{{ product.name }}</h3>
      <p class="product-description">{{ product.description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductCard',
    props: {
      product: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .product-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    text-align: center;
  }
  
  .product-image {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
  }
  
  .product-name {
    margin-top: 10px;
    font-size: 1.2em;
    font-weight: bold;
  }
  
  .product-description {
    margin-top: 5px;
    color: #666;
  }
  </style>
  