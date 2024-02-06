<script setup lang="ts">
import BookCard from '@/components/BookCard.vue' // Update the path as needed

// Sample book data
const books = [
{
    link: '',
    coverImage: '/team/book/michael_white.JPG',
    titleImage: '/team/book/kontineltal_title.png', 
    characterImage: '/team/book/composhield_logo.png'
  },  
  {
    link: '',
    coverImage: '/team/book/ib_white.JPG',
    titleImage: 'elevation_title.png',
    characterImage: '/team/book/composhield_logo.png'
  },
  {
    link: '',
    coverImage: '/team/book/morten_white.JPG',
    titleImage: 'boxmadras_title.png',
    characterImage: '/team/book/composhield_logo.png'
  },
  {
    link: '',
    coverImage: '/team/book/lisette_white.JPG',
    titleImage: 'sengerammer_title.png',
    characterImage: '/team/book/composhield_logo.png'
  },
  {
    link: '',
    coverImage: '/team/book/phillip_white.JPG',
    titleImage: '/team/book/kontineltal_title.png', 
    characterImage: '/team/book/composhield_logo.png'
  },  
  {
    link: '',
    coverImage: '/team/book/marius_white.JPG',
    titleImage: 'elevation_title.png',
    characterImage: '/team/book/composhield_logo.png'
  },
  {
    link: '',
    coverImage: '/team/book/patricia_white.JPG',
    titleImage: 'boxmadras_title.png',
    characterImage: '/team/book/composhield_logo.png'
  },
  {
    link: '',
    coverImage: '/team/book/daniel_white.JPG',
    titleImage: 'sengerammer_title.png',
    characterImage: '/team/book/composhield_logo.png'
  },
];

</script>

<template>
  <header>
  </header>

  <main class="flex items-center justify-center min-h-screen ">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
      <BookCard v-for="(book, index) in books" :key="index" :book="book" />
    </div>
  </main>
</template>



<style scoped>



</style>


