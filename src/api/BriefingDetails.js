import request from '../utils/request'

export function comment(historyid) {
  return request({
    url: '/comment/selectByAll',
    method: 'post',
    data: {
      id: historyid
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
    data: {
      userid: userid
    }
  })
}

export function likehistory(likeid) {
  return request({
    url: '/history/selectByAll',
    method: 'post',
    data: {
      likeid: likeid
    }
  })
}

export function collect(userid) {
  return request({
    url: '/collect/selectByAll',
    method: 'post',
    data: {
      userid: userid
    }
  })
}

export function collecthistory(collectid) {
  return request({
    url: '/history/selectByAll',
    method: 'post',
    data: {
      collectid: collectid
    }
  })
}
export function userhistory(userId) {
  return request({
    url: '/history/selectAllByUserId',
    method: 'post',
    params: {
      userId: userId
    }
  })
}

export function historyall(userid) {
  return request({
    url: '/history/selectAll',
    method: 'post',
    userid: userid
  })
}

export function historyselect(historyid) {
  return request({
    url: '/history/select',
    method: 'post',
    params: {
      id: historyid
    }
  })
}

export function insert(insertcommenttext, inserthistoryid, insertuserid) {
  return request({
    url: '/comment/insert',
    method: 'post',
    data: {
      commentid: +1,
      commenttext: insertcommenttext,
      historyid: inserthistoryid,
      userid: insertuserid
    }
  })
}
