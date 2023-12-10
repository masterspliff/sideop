import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue';
import ProductsView from '../views/ProductsView.vue';
import AddOnArmorView from '../views/AddOnArmorView.vue';
import SpalllinerView from '../views/SpalllinerView.vue';
import StructuralArmorView from '../views/StructuralArmorView.vue';
import ServicesView from '../views/ServicesView.vue';
import AboutView from '../views/AboutView.vue';


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
      path: '/products',
      component: ProductsView,
      children: [
        {
          path: 'add-on-armor',
          component: AddOnArmorView,
          meta: { hideOurProductsSection: true },
        },
        {
          path: 'spall-liner',
          component: SpalllinerView,
          meta: { hideOurProductsSection: true },
        },
        {
          path: 'structural-armor',
          component: StructuralArmorView,
          meta: { hideOurProductsSection: true },
        },
      ],
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesView,
    },
  ]
})

export default router;
