import axios from 'axios'
import { checkSystemProxy } from './checkProxy'

const request = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000
})

// 检查系统代理设置
const proxySettings = checkSystemProxy()
if (proxySettings.httpProxy || proxySettings.httpsProxy) {
  console.warn('System proxy detected:', proxySettings)
}

request.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default request
