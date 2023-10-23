import request from '../utils/request'

export function comment(userid) {
  return request({
    url: '/comment/selectByAll',
    method: 'post',
    data: {
      userid: userid
    }
  })
}

export function userinfo(userid) {
  return request({
    url: '/user/select',
    method: 'post',
    params: {
      id: userid
    }
  })
}

export function like(userid) {
  return request({
    url: '/like/selectByAll',
    method: 'post',
    params: {
      userid: userid
    }
  })
}

// export function likehistory(likeid) {
//   return request({
//     url: '/history/selectByAll',
//     method: 'post',
//     data: {
//       likeid: likeid
//     }
//   })
// }

export function collect(userid) {
  return request({
    url: '/collect/selectByAll',
    method: 'post',
    params: {
      userid: userid
    }
  })
}

export function listlikehistory() {
  return request({
    url: '/history/selectAll',
    method: 'post'
  })
}

export function listuserhistory(userid) {
  console.log('踩踩我是谁', userid)
  return request({
    url: '/history/selectByAll',
    method: 'post',
    data: {
      historyuserid: userid
    }
  })
}
// 点赞前n
export function hotspotN() {
  console.log('踩踩我是谁')
  return request({
    url: '/like/selectTop',
    method: 'post',
    params: {
      n: 3
    }
  })
}

// 评论前n
export function hotspotNN() {
  console.log('踩踩我是谁')
  return request({
    url: '/comment/selectTop',
    method: 'post',
    params: {
      n: 3
    }
  })
}
// 收藏前n
export function hotspotNNN() {
  console.log('踩踩我是谁')
  return request({
    url: '/collect/selectTop',
    method: 'post',
    params: {
      n: 3
    }
  })
}
// export function collecthistory(collectid) {
//   return request({
//     url: '/history/selectByAll',
//     method: 'post',
//     data: {
//       collectid: collectid
//     }
//   })
// }

// export function historyall(userid) {
//   return request({
//     url: '/history/selectAll',
//     method: 'post',
//     userid: userid
//   })
// }

export function update(updatepassword, updateuseravatar, updateuserid, updateusername, updateusersign, updateuserphone, updateusertype) {
  return request({
    url: '/user/update',
    method: 'post',
    data: {
      password: updatepassword,
      useravatar: updateuseravatar,
      userid: updateuserid,
      username: updateusername,
      usersign: updateusersign,
      userphone: updateuserphone,
      usertype: updateusertype
    }
  })
}
