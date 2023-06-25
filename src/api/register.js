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

// /* 分页查询 */
// export function selectallPage(pageNum, size, isdelete) {
//     return request({
//       url: '/Rotograph/selectallandpage',
//       method: 'post',
//       data: {
//         isdelete: isdelete
//       },
//       params: {
//         pageNum,
//         size
//       }
//     })
//   }

//   /* 删除 逻辑删除 */
//   export function deleteByid(id) {
//     return request({
//       url: '/Rotograph/deleteByid',
//       method: 'post',
//       params: {
//         id
//       }
//     })
//   }

//   /* 添加  */
//   export function addRotograph(rotographName, rotographPath) {
//     return request({
//       url: '/Rotograph/addRotograph',
//       method: 'post',
//       data: {
//         rotographName, rotographPath
//       }
//     })
//   }

//   /* 修改 */
//   export function update(rotographId, rotographName, rotographPath) {
//     return request({
//       url: '/Rotograph/updateByid',
//       method: 'post',
//       data: {
//         rotographId: rotographId,
//         rotographName: rotographName,
//         rotographPath: rotographPath
//       }
//     })
//   }
