import { getToken } from '@renderer/utils/auth'

const whiteList = ['/login', '/register', '/home']
// 导航守卫
export const beforeGuides = (to: any, from: any, next: any) => {
  console.log(to, from)
  console.log('token:', getToken())
  if (!getToken() && !whiteList.includes(to.path)) {
    next({ path: '/home' })
    //next()
  } else {
    next()
  }
}

export const afterGuides = (to: any, from: any) => {
  console.log(to, from)
}
