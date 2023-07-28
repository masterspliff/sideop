<template>
    <div>
      <h1>Our Products</h1>
      <nav>
        <ul>
          <li><router-link to="/products/add-on-armor">Add-On Armor</router-link></li>
          <li><router-link to="/products/spall-liner">Spall Liner</router-link></li>
          <li><router-link to="/products/structural-armor">Structural Armor</router-link></li>
        </ul>
      </nav>
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Products',
  };
  </script>
  