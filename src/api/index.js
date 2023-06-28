import request from '../utils/request'

// 获取所以的历史记录
export function getSummery(docContent, inPercent) {
  return request({
    url: '/summary/getabsfromstr',
    method: 'post',
    params: {
      docContent: docContent,
      inPercent: inPercent
    }
  })
}
