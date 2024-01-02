<template>
  <!-- European Management Team Header -->
  <div class="text-center my-8">
    <h2 class="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">European Management Team</h2>
    <p class="mt-2 text-lg leading-6 text-gray-500">Meet our dedicated team based in Europe.</p>
  </div>

  <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto max-w-6xl">
    <li v-for="person in europeanTeam" :key="person.email" class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div class="flex flex-1 flex-col p-8">
        <img class="mx-auto h-32 w-32 flex-shrink-0 rounded-full" :src="person.imageUrl" :alt="person.name" />
        <h3 class="mt-6 text-sm font-medium text-gray-900">{{ person.name }}</h3>
        <dl class="mt-1 flex flex-grow flex-col justify-between">
          <dt class="sr-only">Title</dt>
          <dd class="text-sm text-gray-500">{{ person.title }}</dd>
          <dt class="sr-only">Role</dt>
          <dd class="mt-3">
            <span class="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">{{ person.role }}</span>
          </dd>
        </dl>
      </div>
      <div>
        <div class="-mt-px flex divide-x divide-gray-200">
    <div class="flex w-0 flex-1 justify-center">
        <a :href="'mailto:' + person.email" class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900 hover:bg-gray-100 transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
</svg>

            Email
        </a>
    </div>
    <div class="flex w-0 flex-1 justify-center">
        <a :href="'tel:' + person.telephone" class="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900 hover:bg-gray-100 transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
</svg>

            Call
        </a>
    </div>
</div>
      </div>
    </li>
  </ul>

  <!-- Placeholder for USA Management Team Header -->
  <div class="text-center my-8">
    <h2 class="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">USA Management Team</h2>
    <p class="mt-2 text-lg leading-6 text-gray-500">Meet our dedicated team based in the USA.</p>
  </div>

  <!-- Placeholder for the USA team members -->
  <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto max-w-6xl">
    <li v-for="person in usaTeam" :key="person.email" class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div class="flex flex-1 flex-col p-8">
        <img class="mx-auto h-32 w-32 flex-shrink-0 rounded-full" :src="person.imageUrl" :alt="person.name" />
        <h3 class="mt-6 text-sm font-medium text-gray-900">{{ person.name }}</h3>
        <dl class="mt-1 flex flex-grow flex-col justify-between">
          <dt class="sr-only">Title</dt>
          <dd class="text-sm text-gray-500">{{ person.title }}</dd>
          <dt class="sr-only">Role</dt>
          <dd class="mt-3">
            <span class="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">{{ person.role }}</span>
          </dd>
        </dl>
      </div>
      <div>
        <div class="-mt-px flex divide-x divide-gray-200">
    <div class="flex w-0 flex-1 justify-center">
        <a :href="'mailto:' + person.email" class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900 hover:bg-gray-100 transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
</svg>

            Email
        </a>
    </div>
    <div class="flex w-0 flex-1 justify-center">
        <a :href="'tel:' + person.telephone" class="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900 hover:bg-gray-100 transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
</svg>

            Call
        </a>
    </div>
</div>
      </div>
    </li>
  </ul>
</template>

<script>
import { MailIcon, PhoneIcon } from '@heroicons/vue/solid'

export default {
  data() {
    return {
      europeanTeam: [
        {
          name: 'Michael Nørup',
          title: 'Chief Executive Officer',
          role: 'CEO',
          email: 'michael.nørup@example.com',
          telephone: '+1-202-555-0101',
          imageUrl: '/team/Michael_web.jpg',
        },
        {
         name: 'Ib Meldgaard Møller',
        title: 'VP Manufacturing',
        role: 'Vice President',
        email: 'ib.møller@example.com',
        telephone: '+1-202-555-0102',
        imageUrl: '/team/Ib_web.jpg',
      },
      {
        name: 'Morten Fogh Møller',
        title: 'VP Engineering',
        role: 'Vice President',
        email: 'morten.møller@example.com',
        telephone: '+1-202-555-0103',
        imageUrl: '/team/Morten_web.jpg',
      },
      {
        name: 'Patricia Rodriguez',
        title: 'Administration',
        role: 'Admin',
        email: 'julie.pilegaard@example.com',
        telephone: '+1-202-555-0104',
        imageUrl: '/team/Patricia.jpg',
      },
      {
        name: 'Lisette Nørup',
        title: 'Legal & General Counsel',
        role: 'Legal',
        email: 'lisette.nørup@example.com',
        telephone: '+1-202-555-0105',
        imageUrl: '/team/Lisette_web.jpg',
      },
      {
        name: 'Philip Olrik',
        title: 'Sales Manager',
        role: 'Sales',
        email: 'philip.olrik@example.com',
        telephone: '+1-202-555-0106',
        imageUrl: '/team/PhilipOlrik.jpg',
      }
      ],
      usaTeam: [
      {
          name: 'Ken Ripich',
          title: 'Chief Executive Officer',
          role: 'CEO',
          email: 'michael.nørup@example.com',
          telephone: '+1-202-555-0101',
          imageUrl: '/team/KenRipich.jpg',
        },
      ]
    }
  }
}
</script>
