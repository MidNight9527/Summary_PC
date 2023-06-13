function localStorage() {
  return window.localStorage
}

/**
 * 获取本地存储中key所对应的value
 * @param {*} key 键
 * @returns value
 */
function get(key) {
  return JSON.parse(localStorage().getItem(key))
}

/**
 * 添加本地存储内容
 * @param {*} key 键
 * @param {*} value 值
 */
function set(key, value) {
  localStorage().setItem(key, JSON.stringify(value))
}

/**
 * 获取本地存储的所有数据
 * @returns 本地存储所有数据Object
 */
function all() {
  const data = {}
  for (let i = 0; i < localStorage().length; i++) {
    const key = localStorage()[i]
    data[key] = get(key)
  }
  return data
}

/**
 * 删除相应的value值
 * @param {*} key 键
 * @returns boolean
 */
function remove(key) {
  return localStorage().removeItem(key)
}

/**
 * 清除所有的本地存储
 * @returns boolean
 */
function clearAll() {
  return localStorage().clear()
}

/**
 * 判断本地存储中是否有相应值的存在
 * @param {*} key 键
 * @returns boolean
 */
function exist(key) {
  return localStorage().getItem(key) != null
}

const TOKEN = 'token'

/**
 * 获取token
 * @returns token
 */
function getToken() {
  const token = localStorage().getItem(TOKEN)
  if (token) {
    return token.replace(/"/g, '')
  } else {
    return token
  }
}

/**
 * 存储token
 * @param {*} value token的数据
 */
function setToken(value) {
  set(TOKEN, value)
}

/**
 * 删除token
 */
function removeToken() {
  remove(TOKEN)
}

export {
  get,
  set,
  all,
  remove,
  clearAll,
  exist,
  getToken,
  setToken,
  removeToken
}
