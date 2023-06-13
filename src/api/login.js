import request from '../utils/request'

export function login(data){
    return request({
        url: '/user/adminlogin',
        method: 'post',
        params: data
    })
}

export function getInfo(token){
    return request({
        url: '/user/getuserinfo',
        method: 'post',
        params: {token}
    })
}