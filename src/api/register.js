import request from '../utils/request'

export function register(registerpassword, registeruseravatar, registerusername, registeruserphone, registerusersign) {
  return request({
    url: '/user/insert',
    method: 'post',
    data: {
      password: registerpassword,
      useravatar: registeruseravatar,
      userid: -1,
      username: registerusername,
      userphone: registeruserphone,
      usersign: registerusersign,
      usertype: 1
    }
  })
}

export function forgotpassword(phone, userName) {
  console.log('找回密码的', phone, userName)
  return request({
    url: '/user/findPassword',
    method: 'post',
    params: {
      phone: phone,
      userName: userName
    }
  })
}

