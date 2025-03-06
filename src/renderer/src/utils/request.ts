import axios from 'axios'
//import { checkSystemProxy } from './checkProxy'
import { config } from '@renderer/config'
import { ElMessage } from 'element-plus'

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
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  (response) => {
    const code = response.data.code
    const msg = response.data.msg
    if (code === 500) {
      ElMessage({ message: msg, type: 'error' })
      return Promise.reject(new Error(msg))
    }
    return response.data
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default request
