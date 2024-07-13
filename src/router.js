import { createRouter, createWebHistory } from 'vue-router'
import Info from "./components/Info.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Info,
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('./components/Test.vue'),
    },
    {
      path: '/done',
      name: 'done',
      component: () => import('./components/Info.vue'),
    },
    {
      path: '/info',
      name: 'info',
      component: () => import('./components/Info.vue'),
    },
  ],
})