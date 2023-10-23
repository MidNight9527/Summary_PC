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

export function like(historyid, userid) {
  return request({
    url: '/like/selectByAll',
    method: 'post',
    data: {
      historyid: historyid,
      userid: userid
    }
  })
}

export function likedelete(likeid) {
  console.log('wdy', likeid)
  return request({
    url: '/like/delete',
    method: 'post',
    params: {
      id: likeid
    }
  })
}

export function likeinsert(historyid, userid) {
  return request({
    url: '/like/insert',
    method: 'post',
    data: {
      historyid: historyid,
      userid: userid
    }
  })
}

export function collectdelete(collectid) {
  return request({
    url: '/collect/delete',
    method: 'post',
    params: {
      id: collectid
    }
  })
}

export function collectinsert(historyid, userid) {
  return request({
    url: '/collect/insert',
    method: 'post',
    data: {
      historyid: historyid,
      userid: userid
    }
  })
}

export function collect(historyid, userid) {
  return request({
    url: '/collect/selectByAll',
    method: 'post',
    data: {
      historyid: historyid,
      userid: userid
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

export function getDownLoadUrl(historyId, templateId) {
  console.log('我的下载', historyId, templateId)
  return request({
    url: '/history/getDownLoadUrl',
    method: 'post',
    params: {
      historyId: historyId,
      templateId: templateId
    }
  })
}
