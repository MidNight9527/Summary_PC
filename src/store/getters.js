const getters = {
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  id: state => state.user.id,
  userInfo: state => state.user.userInfo,
  activeIndex: state => state.router.activeIndex

}
export default getters
