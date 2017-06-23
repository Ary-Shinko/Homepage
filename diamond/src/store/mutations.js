// 切换主页GridMain组件的滚动结构
const MODIFY_NAVIGATION_FROM = 'MODIFY_NAVIGATION_FROM'
const MODIFY_NAVIGATION_TO = 'MODIFY_NAVIGATION_TO'
const LOCK_NAVIGATION = 'LOCK_NAVIGATION'
const UNLOCK_NAVIGATION = 'UNLOCK_NAVIGATION'
// 登录相关
const CACHE_AUTHORIZATION = 'CACHE_AUTHORIZATION'

export default {
  [MODIFY_NAVIGATION_FROM] (state, from) {
    state.navigationFrom = from
  },
  [MODIFY_NAVIGATION_TO] (state, to) {
    state.navigationTo = to
  },
  [LOCK_NAVIGATION] (state) {
    state.navigationLocked = true
  },
  [UNLOCK_NAVIGATION] (state) {
    state.navigationLocked = false
  },
  [CACHE_AUTHORIZATION] (state, { account, password }) {
    state.authAccount = account || state.authAccount
    state.authPassword = password || state.authPassword
  }
}
