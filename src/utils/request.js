import axios from 'axios'
// import store from '@/store'
// import { getToken } from '@/utils/localStorage.js'

// 使用create方法创建axios实例
export const Service = axios.create({
  timeout: 10000, // 请求超时时间
  baseURL: 'https://www.woodymidnight.cn/Summary'
})

// 添加一个响应截拦器
Service.interceptors.response.use(response => {
  const res = response.data
  // console.log('response', response)
  // console.log('res', res)
  // 如果不等于true则请求失败res.result !== true
  if (response.status !== 200) {
    this.$message({
      message: res.msg || 'Error',
      forbidClick: true
    })
    return Promise.reject(new Error(res.msg || 'Error'))
  } else {
    return res
  }
}, error => {
  return Promise.reject(error)
})
export default Service
