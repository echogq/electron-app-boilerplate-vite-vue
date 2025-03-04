// 导航守卫
export const beforeGuides = (to: any, from: any, next: any) => {
  console.log(to, from)
  if (!localStorage.getItem('token') && to.path !== '/login') {
    //next({ path: '/login' })
    next()
  } else {
    next()
  }
}

export const afterGuides = (to: any, from: any) => {
  console.log(to, from)
}
