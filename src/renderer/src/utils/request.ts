import axios from 'axios'
//import { checkSystemProxy } from './checkProxy'
import { config } from '@renderer/config'
import { getToken } from './auth'
const request = axios.create({
  baseURL: config.apiUrl,
  timeout: 5000
})

// 检查系统代理设置
//const proxySettings = checkSystemProxy()
//if (proxySettings.httpProxy || proxySettings.httpsProxy) {
//  console.warn('System proxy detected:', proxySettings)
//}

request.interceptors.request.use(
  (config) => {
    const token = getToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
const openMessage = (msg: string, type: string) => {
  ElMessage({
    message: msg,
    type: type
  } as any) // Type assertion to bypass the type check temporarily
}

request.interceptors.response.use(
  (response) => {
    const code = response.data.code
    const msg = response.data.msg
    if (code === 401) {
      openMessage(msg, 'error')
      return Promise.reject('登录已过期，请重新登录')
    } else if (code === 500) {
      openMessage(msg, 'error')
      return Promise.reject(new Error(msg))
    } else if (code !== 200) {
      return Promise.reject(msg)
    } else {
      return response.data
    }
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default request
