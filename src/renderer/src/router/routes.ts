// 路由配置
export const AppRoutes = [
  {
    path: '/',
    component: () => import('@renderer/layout/index.vue')
  },
  {
    path: '/login',
    component: () => import('@views/Login.vue')
  },
  {
    path: '/register',
    component: () => import('@views/Register.vue')
  },
  {
    path: '/test',
    component: () => import('@views/Test.vue')
  },
  {
    path: '/home',
    component: () => import('@views/Home.vue')
  }
]
