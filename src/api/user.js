import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/user/adminlogin',
    method: 'POST',
    params: data
  })
}

export function getUserInfoByToken(token) {
  return request({
    url: '/user/getuserinfo',
    method: 'POST',
    params: {
      token
    }
  })
}

