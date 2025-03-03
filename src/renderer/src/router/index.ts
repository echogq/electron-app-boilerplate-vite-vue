import { createRouter, createWebHistory } from 'vue-router'
import { url } from './url'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: url.test,
      component: () => import('@views/Test.vue')
    },
    {
      path: url.home,
      component: () => import('@views/Home.vue')
    },
    {
      path: url.login,
      component: () => import('@views/Login.vue')
    }
  ]
})

export default router
