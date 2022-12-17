import { createRouter, createWebHashHistory } from 'vue-router';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Ulcerative Dermatitis',
      component: () => import('./pages/ulcerative-dermatitis.vue'),
    },
    {
      path: '/features',
      name: 'Features',
      component: () => import('./pages/features.vue'),
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('./pages/about.vue'),
    },
  ],
});
