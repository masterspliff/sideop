<template>
    <header class="fixed top-0 z-50 w-full">
      <nav class="w-full items-center justify-between p-4 lg:p-6 bg-gradient-to-t from-transparent to-black" aria-label="Global">
        <Disclosure as="nav" v-slot="{ open }">
          <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="relative flex h-16 items-center justify-between">
              <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <!-- Mobile menu button-->
                <DisclosureButton class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 nav-link focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span class="sr-only">Open main menu</span>
                  <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
                  <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
                </DisclosureButton>
              </div>
              <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div class="flex flex-shrink-0 items-center">
                  <router-link to="/">
                    <img class="h-10 w-auto lg:h-14 rounded-sm" src="@/assets/composhield_logo2.png" alt="Composhield Logo" />
                  </router-link>
                </div>
                <!-- Modified container to align links to the right -->
                <div class="hidden sm:ml-6 sm:block sm:flex-1 sm:flex sm:items-center sm:justify-end">
                  <div class="flex space-x-4">
                    <router-link v-for="item in navigation" :key="item.name" :to="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 nav-link', 'rounded-md px-3 py-2 text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <DisclosurePanel class="sm:hidden">
            <div class="space-y-1 px-2 pb-3 pt-2">
              <router-link v-for="item in navigation" :key="item.name" :to="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 nav-link', 'block rounded-md px-3 py-2 text-base font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</router-link>
            </div>
          </DisclosurePanel>
        </Disclosure>
      </nav>
    </header>
  </template>
  
  

  
<script setup>
  import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
  import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
  
  const navigation = [
    { name: 'Add-on Armor', href: '/add-on-armor', current: false },
    { name: 'Structural Armor', href: '/structural-armor', current: false },
    { name: 'Spall-liner', href: '/spall-liner', current: false },
    { name: 'Engineering', href: '/engineering', current: false },
    { name: 'Products', href: '/products', current: false },
    { name: 'About', href: '/about', current: false },
    { name: 'Contact', href: '/contact', current: false },
  ]
  </script>

<style scoped>
.nav-link {
  position: relative;
  overflow: hidden;
}

.nav-link::before {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #ffffff;
  transition: width 0.3s ease-in-out;
}

.nav-link:hover::before {
  width: 100%;
}
</style>