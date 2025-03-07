import { getToken } from '@renderer/utils/auth'

const whiteList = ['/login', '/register', '/test', '/home']
// 导航守卫
export const beforeGuides = (to: any, from: any, next: any) => {
  console.log(to, from)
  if (!getToken() && !whiteList.includes(to.path)) {
    next({ path: '/login' })
    //next()
  } else {
    next()
  }
}

export const afterGuides = (to: any, from: any) => {
  console.log(to, from)
}
