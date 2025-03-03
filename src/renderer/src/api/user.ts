import request from '@renderer/utils/request'

export const getUserInfo = () => {
  return request.get('/user/info')
}

export const hi = () => {
  return request.get('/hi')
}
