import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue';
import ProductsView from '../views/ProductsView.vue';
import AddOnArmorView from '../views/AddOnArmorView.vue';
import SpalllinerView from '../views/SpalllinerView.vue';
import StructuralArmorView from '../views/StructuralArmorView.vue';
import EngineeringView from '../views/EngineeringView.vue';
import AboutView from '../views/AboutView.vue';
import BookView from '../views/BookView.vue';
import BodyArmorView from '../views/BodyArmorView.vue';
import GPKView from '../views/GPKView.vue';



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/book',
      name: 'book',
      component: BookView
    },
    {
      path: '/products',
      component: ProductsView,
      children: [
        {
          path: 'body-armor',
          component: BodyArmorView,
          meta: { hideOurProductsSection: true },
        },
        {
          path: 'gunners-protection-kit',
          component: GPKView,
          meta: { hideOurProductsSection: true },
        },
      ],
    },
    {
      path: '/add-on-armor',
      name: 'add-on-armor',
      component: AddOnArmorView,
    },
    {
      path: '/spall-liner',
      name: 'spall-liner',
      component: SpalllinerView,
    },
    {
      path: '/structural-armor',
      name: 'structural-armor',
      component: StructuralArmorView,
    },
    {
      path: '/engineering',
      name: 'engineering',
      component: EngineeringView,
    },
  ]
})

export default router;
