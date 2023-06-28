import request from '../utils/request'

export function selectAll(pageNum, size) {
  console.log('分页', pageNum, size)
  return request({
    url: '/history/pageSelectAll',
    method: 'post',
    params: {
      pageNum: pageNum,
      size: size
    }
  })
}
