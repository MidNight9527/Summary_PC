import { login, getUserInfoByToken } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'

const getDefaultState = () => {
  return {
    userInfo: {},
    token: getToken(),
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: ''
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_USERINFO: (state, _userInfo) => {
    state.userInfo = _userInfo
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_NAME: (state, name) => {
    state.name = name
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      login(userInfo).then(response => {
        console.log('登录===》', response)
        const {
          data: token,
          httpCode
        } = response
        if (httpCode === 200) {
          setToken(token)
          commit('SET_TOKEN', token)
          resolve()
        } else if (httpCode === 500) {
          reject('账号或密码错误')
        }
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getUserInfoByToken(state.token).then(response => {
        console.log('根据token获取用户信息 ===》', response)
        const { data: userInfo, httpCode } = response
        const { userAvatar, username } = userInfo
        if (httpCode === 200) {
          commit('SET_USERINFO', userInfo)
          commit('SET_AVATAR', userAvatar)
          commit('SET_NAME', username)
          resolve(userInfo)
        } else {
          reject('用户信息获取失败，请重新登录')
        }
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      removeToken() // must remove  token  first
      resetRouter()
      commit('RESET_STATE')
      resolve()
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

