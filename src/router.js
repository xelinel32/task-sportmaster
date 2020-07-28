import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('./views/MainPage.vue'),
    },
    {
      path: '/test-count',
      component: () => import('./views/Count.vue'),
    },
    {
      path: '/test-array',
      component: () => import('./views/Array.vue'),
    },
  ],
})
