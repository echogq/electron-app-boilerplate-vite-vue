import { createRouter, createWebHistory } from 'vue-router'
import { AppRoutes } from './routes'
import { beforeGuides, afterGuides } from './guides'

const router = createRouter({
  history: createWebHistory(),
  routes: AppRoutes
})
// 导航守卫
router.beforeEach(beforeGuides)
router.afterEach(afterGuides)

export default router
