// 专门用来配置 axios 的模块
import axios from 'axios'
import store from '@/store'
import router from '@/router'

const instance = axios.create({
  baseURL: 'http://www.liulongbin.top:3008',
  timeout: 10000
})

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 设置请求头
  if (config.url.startsWith('/my')) {
    config.headers.Authorization = store.state.token
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  return response
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数
  if (error.response.status === 401) {
    // 无效的 token
    // 把 Vuex 中的 token 重置为空，并跳转到登录页面
    store.commit('setToken', '')
    router.push('/login')
  }

  // 对响应错误做点什么
  return Promise.reject(error)
})

export default instance
