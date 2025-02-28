import request from '@renderer/utils/request'

export const getUserInfo = () => {
  return request.get('/user/info')
}
