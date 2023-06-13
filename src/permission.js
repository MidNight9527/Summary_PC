/**
 * @Author: znq
 * @EditTime: 2022/8/2 20:15
 */
import router from './router/router'
import { getToken } from './utils/localStorage'
import store from './store/store'
import { ElNotification } from 'element-plus'

const whiteList = ['/login']

router.beforeEach(async(to, from, next) => {
  const hasToken = getToken()
  if (hasToken) {
    // token 存在
    if (to.path === '/login') {
      // 进入登录，注册页面直接跳转到首页
      next({ path: '/index' })
    } else {
      if (store.getters.userInfo.length > 0) {
        // 有用户信息
        next()
      } else {
        // 没有用户信息, 获取用户信息
        try {
          await store.dispatch('getInfo')
          next()
        } catch (error) {
          // 移除token
          await store.dispatch('resetToken')
          // 请重新登录获取用户信息
          // console.log(error)
          ElNotification.error({
            message: error,
            showClose: false
          })
          next(`login?redirect=${to.path}`)
        }
      }
    }
  } else {
    // token不存在
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
    }
  }
})