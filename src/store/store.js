import {createStore} from 'vuex'
import { login, getInfo } from '../api/login'
import { getToken, removeToken, setToken } from '../utils/localStorage'

const getDefaultState = () => {
    return {
        userInfo: {},
        token: getToken()
    }
}

const state = getDefaultState()

const mutations = {
    SET_USERINFO: (state, _userInfo) => {
        state.userInfo = _userInfo
    },
    CLEAR_INFO: state => {
        state.userInfo = {}
    },
    RESET_STATE: (state) => {
        Object.assign(state, getDefaultState())
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    }
}

const getters = {
    userInfo: state => state.userInfo,
    token: state => state.token,
}

const actions = {
    login({ commit }, info) {
        console.log('store info username&password', info)
        return new Promise((resolve, reject) => {
          login(info).then(res => {
            console.log('store login', res)
            const {
              data: token,
              httpCode,
            } = res
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

    getInfo({ commit, state }) {
        return new Promise((resolve, reject) => {
            getInfo(state.token).then(res => {
                console.log('store user', res)
                const { data: userInfo, httpCode } = res
                if (httpCode === 200) {
                    commit('SET_USERINFO', userInfo)
                    resolve(userInfo)
                } else {
                    reject('用户信息获取失败，请重新登录')
                }
            }).catch(error => {
                console.log(error);
                reject(error)
            })
        })
    },

    setInfo({commit},info){
        commit('SET_USERINFO',info)
    },

    // 删除token
    resetToken({ commit }) {
        return new Promise(resolve => {
            removeToken()
            commit('RESET_STATE')
        })
    }
}

export default new createStore({
    state,
    mutations,
    getters,
    actions,
})