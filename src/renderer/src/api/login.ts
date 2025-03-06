import request from '@renderer/utils/request'

export const getCaptcha = () => {
  return request({
    url: '/captchaImage',
    headers: {
      'Content-Type': 'application/json',
      isToken: false
    },
    method: 'get'
  })
}

export const login = (data: any) => {
  return request({
    url: '/login',
    headers: {
      'Content-Type': 'application/json',
      isToken: false,
      repeatSubmit: false
    },
    data: data,
    method: 'post'
  })
}

export const logout = () => {
  return request({
    url: '/logout',
    method: 'post'
  })
}
