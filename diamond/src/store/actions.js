import axios from 'axios'
import { serverAddress } from './config'

export default {
  // NAVIGATION
  modifyNavigation ({ commit, state }, current) {
    if (state.navigationLocked === true) {
      return null
    }
    commit('MODIFY_NAVIGATION_TO', current)
    if (state.navigationTo === state.navigationFrom) {
      return null
    }
    commit('LOCK_NAVIGATION')
    setTimeout(function () {
      commit('MODIFY_NAVIGATION_FROM', current)
      commit('UNLOCK_NAVIGATION')
    }, 2000)
  },
  scrollNavigation ({ commit, state }, delta) {
    if (state.navigationLocked === true) {
      return null
    }
    if (delta > 0 && state.navigationFrom === 4) {
      return null
    }
    if (delta < 0 && state.navigationFrom === 1) {
      return null
    }
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
  },
  // AUTHORIZATION
  authSignin ({ commit, dispatch }, signinData) {
    axios.post(serverAddress + '/signin/main', signinData)
    .then(res => {
      if (res.data.status === true) { // 登陆成功，然后？
        // Signin succeeded
        commit('CACHE_AUTHORIZATION', {
          account: signinData.account,
          name: res.data.name,
          phone: res.data.phone,
          token: res.data.token,
          avatar: res.data.avatar
        })
      } else {
        // Signin failed
        commit('CACHE_AUTHORIZATION', {
          account: '',
          name: '',
          phone: '',
          token: '',
          avatar: ''
        })
      }
      dispatch('postMessage', res.data.message)
    })
    .catch(err => {
      if (err.request.status === 0) {
        dispatch('postMessage', 'Network error.')
      } else {
        dispatch('postMessage', 'Unknown error.')
      }
    })
  },
  authExit ({ commit, dispatch }, callback) {
    // 检查一下是否正确
    commit('EXIT_AUTHORIZATION')
    window.localStorage.clear()
    dispatch('postMessage', 'You have been logged out safely. See you next time.')
  },
  authForgot ({ dispatch }, account) {
    axios.post(serverAddress + '/signin/forget', { account })
    .then(res => {
      if (res.data.status === true) { // 发送成功，返回？
        dispatch('postMessage', res.data.message)
      }
    })
    .catch(err => {
      if (err.request.status === 0) {
        dispatch('postMessage', 'Network error.')
      } else {
        dispatch('postMessage', 'Unknown error.')
      }
    })
  },
  authRequestVcode ({ dispatch }, phonePayloads) {
    axios.post(serverAddress + '/signin/create/requestvcode', phonePayloads.data)
    .then(res => {
      if (res.data.status === true) {
        let self = phonePayloads.self
        self.verificationClicked = true
        self.$refs.phoneInput.disabled = 'disabled'
        self.$refs.phoneInput.style.cursor = 'not-allowed'
        self.$refs.phoneInput.style.color = '#aaa'
        self.$emit('sent')
      }
      dispatch('postMessage', res.data.message)
    })
    .catch(err => {
      if (err.request.status === 0) {
        dispatch('postMessage', 'Network error.')
      } else {
        dispatch('postMessage', 'Unknown error.')
      }
    })
  },
  authCreateAccount ({ commit, dispatch }, registgerData) {
    axios.post(serverAddress + '/signin/create', registgerData)
    .then(res => {
      if (res.data.status === true) { // 跳转页面
      }
      dispatch('postMessage', res.data.message)
    })
    .catch(err => {
      if (err.request.status === 0) {
        dispatch('postMessage', 'Network error.')
      } else {
        dispatch('postMessage', 'Unknown error.')
      }
    })
  },
  // MEESSAGE
  postMessage ({ commit, state }, message) {
    clearTimeout(state.messageTimer)
    commit('POST_MESSAGE', message)
    let timer = setTimeout(() => {
      commit('CLOSE_MESSAGE')
    }, 5000)
    commit('SET_MESSAGE_TIMER', timer)
  },
  closeMessage ({ commit, state }) {
    clearTimeout(state.messageTimer)
    commit('CLOSE_MESSAGE')
  },
  // SOLITAIRE
  initSolitaire ({ commit, dispatch, state }) {
    commit('CREATE_CARD_DECK')
    commit('SHUFFLE_CARD', state.cardDeck)
    dispatch('dealCard', 5)
  },
  shuffleDeck ({ commit, state }) {
    commit('SHUFFLE_CARD', state.cardDeck)
  },
  dealCard ({ commit, dispatch, state }, n) {
    if (n > 0) {
      commit('DEAL_CARD')
      if (state.cardDeck.length !== 0) {
        commit('SET_CARD_TIMER', setTimeout(function () {
          dispatch('dealCard', n - 1)
        }, 200))
      }
    }
  },
  showdownBalance ({ commit, dispatch }) {
    commit('SCORE_CARD')
    commit('OBSOLETE_CARD')
    dispatch('dealCard', 5)
  },
  finalBalance ({ commit, state }) {
    if (state.cardCountableCount === 5) {
      commit('SCORE_CARD')
    }
    if (state.cardPlayer.length > 0) {
      commit('OBSOLETE_CARD')
    }
    if (state.cardScore > state.cardHighscore) {
      commit('SET_CARD_HIGHSCORE', state.cardScore)
    }
    commit('SHOW_CARD_FINAL_BALANCE')
  }
}
