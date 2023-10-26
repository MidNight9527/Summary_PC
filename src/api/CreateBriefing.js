import request from '../utils/request'

export function list(algorithmId, docContent, inPercent, userid) {
  return request({
    url: '/summary/getabsfromstranduserid',
    method: 'post',
    params: {
      algorithmId: algorithmId,
      docContent: docContent,
      inPercent: inPercent,
      userid: userid

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
