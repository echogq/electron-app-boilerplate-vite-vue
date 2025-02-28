import { createRouter, createWebHistory } from 'vue-router'
import { url } from './url'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: url.home,
      component: () => import('@views/Home.vue')
    }
  ]
})

export default router
