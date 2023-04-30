import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/basics',
      props: true,
      name: 'Basics',
      component: () => import('../views/Basics.vue')
    },
    {
      path: '/medium',
      props: true,
      name: 'Medium',
      component: () => import('../views/Medium.vue')
    }]
});

export default router;
