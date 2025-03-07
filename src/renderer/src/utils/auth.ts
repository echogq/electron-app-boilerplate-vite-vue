//import Cookies from 'js-cookie'
//js-cookie 是用于在浏览器中存储和获取cookie的库在Electron中使用时，需要使用Electron的Cookie API

const TokenKey = 'Admin-Token'
export const setToken = (token: string) => {
  // Cookies.set(TokenKey, token)
  localStorage.setItem(TokenKey, token)
}

export const getToken = () => {
  return localStorage.getItem(TokenKey)
}

export const removeToken = () => {
  localStorage.removeItem(TokenKey)
}
