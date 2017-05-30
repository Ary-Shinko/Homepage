export default {
  modifyNavigation ({ commit, state }, current) {
    if (state.navigationLocked === true) return null
    commit('MODIFY_NAVIGATION_TO', current)
    if (state.navigationTo === state.navigationFrom) return null
    commit('LOCK_NAVIGATION')
    setTimeout(function () {
      commit('MODIFY_NAVIGATION_FROM', current)
      commit('UNLOCK_NAVIGATION')
    }, 2000)
  },
  scrollNavigation ({ commit, state }, delta) {
    if (state.navigationLocked === true) return null
    if (delta > 0 && state.navigationFrom === 4) return null
    if (delta < 0 && state.navigationFrom === 1) return null
    if (delta > 0) {
      commit('MODIFY_NAVIGATION_TO', state.navigationFrom + 1)
      commit('LOCK_NAVIGATION')
      setTimeout(function () {
        commit('MODIFY_NAVIGATION_FROM', state.navigationFrom + 1)
        commit('UNLOCK_NAVIGATION')
      }, 2000)
    } else if (delta < 0) {
      commit('MODIFY_NAVIGATION_TO', state.navigationFrom - 1)
      commit('LOCK_NAVIGATION')
      setTimeout(function () {
        commit('MODIFY_NAVIGATION_FROM', state.navigationFrom - 1)
        commit('UNLOCK_NAVIGATION')
      }, 2000)
    } else {
      return null
    }
  }
}
