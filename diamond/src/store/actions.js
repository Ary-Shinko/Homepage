import axios from 'axios'
import { serverAddress } from './config'
let globalTimer = 0
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
  authSignin ({ commit, dispatch }, { signinData, callback }) {
    commit('SHOW_LOADING')
    axios.post(serverAddress + '/signin/main', signinData, {
      timeout: 12000
    }).then(res => {
      commit('HIDE_LOADING')
      if (res.data.status === true) {
        // Signin succeeded
        commit('CACHE_AUTHORIZATION', {
          account: signinData.account,
          name: res.data.data.name,
          phone: res.data.data.phone,
          token: res.data.data.token,
          avatar: res.data.data.avatar
        })
        callback()
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
      commit('HIDE_LOADING')
      if (err.request.status === 0) {
        dispatch('postMessage', 'Network error.')
      } else {
        dispatch('postMessage', 'Unknown error.')
      }
    })
  },
  authExit ({ commit, dispatch }, callback) {
    commit('EXIT_AUTHORIZATION')
    window.localStorage.setItem('authAccount', '')
    window.localStorage.setItem('authName', '')
    window.localStorage.setItem('authPhone', '')
    window.localStorage.setItem('authToken', '')
    window.localStorage.setItem('authAvatar', '')
    dispatch('postMessage', 'You have been logged out safely. See you next time.')
  },
  authForgot ({ commit, dispatch }, { account, callback }) {
    commit('SHOW_LOADING')
    axios.post(serverAddress + '/signin/forget', { account }, {
      timeout: 12000
    }).then(res => {
      commit('HIDE_LOADING')
      if (res.data.status === true) {
        callback()
        dispatch('postMessage', res.data.message)
      }
    })
    .catch(err => {
      commit('HIDE_LOADING')
      if (err.request.status === 0) {
        dispatch('postMessage', 'Network error.')
      } else {
        dispatch('postMessage', 'Unknown error.')
      }
    })
  },
  authRequestVcode ({ dispatch }, phonePayloads) {
    axios.post(serverAddress + '/signin/create/requestvcode', phonePayloads.data, {
      timeout: 12000
    }).then(res => {
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
  authCreateAccount ({ commit, dispatch }, { registgerData, callback }) {
    commit('SHOW_LOADING')
    axios.post(serverAddress + '/signin/create', registgerData, {
      timeout: 30000
    }).then(res => {
      commit('HIDE_LOADING')
      if (res.data.status === true) {
        callback(res.data.message)
      } else {
        dispatch('postMessage', res.data.message)
      }
    })
    .catch(err => {
      commit('HIDE_LOADING')
      if (err.request.status === 0) {
        dispatch('postMessage', 'Network error.')
      } else {
        dispatch('postMessage', 'Unknown error.')
      }
    })
  },
  // SHADOWSOCKS
  getSocks ({ state }, messageCallback) {
    axios.get(serverAddress + '/shadowsocks/info', {
      timeout: 12000,
      headers: {
        Authorization: state.authData.token
      }
    }).then(res => {
      messageCallback(res.data.message)
    })
    .catch(err => {
      if (err.request.status === 0) {
        messageCallback('Nekwork error.')
      } else {
        messageCallback('Server error.')
      }
    })
  },
  // ARTICLE
  getArticleContent ({ commit, dispatch }, requestPath) {
    let placeholder = `<p class="article-placeholder1"></p><p class="article-placeholder1"></p><p class="article-placeholder1"></p><p class="article-placeholder2"></p><p class="article-placeholder1"></p><p class="article-placeholder3"></p><p class="article-placeholder1"></p><p class="article-placeholder1"></p><p class="article-placeholder1"></p><p class="article-placeholder2"></p><p class="article-placeholder1"></p><p class="article-placeholder3"></p><p class="article-placeholder1"></p><p class="article-placeholder1"></p><p class="article-placeholder1"></p><p class="article-placeholder3"></p><p class="article-placeholder1"></p><p class="article-placeholder2"></p><p class="article-placeholder1"></p><p class="article-placeholder1"></p><p class="article-placeholder1"></p><p class="article-placeholder2"></p><p class="article-placeholder1"></p><p class="article-placeholder3"></p><p class="article-placeholder1"></p><p class="article-placeholder1"></p><p class="article-placeholder1"></p><p class="article-placeholder2"></p><p class="article-placeholder1"></p><p class="article-placeholder3"></p><p class="article-placeholder1"></p><p class="article-placeholder1"></p><p class="article-placeholder1"></p><p class="article-placeholder2"></p><p class="article-placeholder1"></p><p class="article-placeholder3"></p><p class="article-placeholder1"></p><p class="article-placeholder1"></p><p class="article-placeholder1"></p><p class="article-placeholder2"></p>`
    globalTimer++
    let ajaxTimer = globalTimer
    commit('CACHE_ARTICLE_CONTENT', placeholder)
    axios.get(serverAddress + requestPath, {
      timeout: 12000
    }).then(res => {
      if (globalTimer === ajaxTimer) {
        if (res.data.status === true) {
          commit('CACHE_ARTICLE', res.data.data)
        } else {
          commit('CACHE_ARTICLE', {
            title: '',
            content: res.data.message,
            author: '',
            date: '',
            keywords: ['', '', '', ''],
            license: '',
            type: ''
          })
        }
      }
    })
    .catch(err => {
      if (globalTimer === ajaxTimer) {
        if (err.request.status === 0) {
          commit('CACHE_ARTICLE_CONTENT', 'Nekwork error.')
        } else {
          commit('CACHE_ARTICLE_CONTENT', 'Loading failed.')
        }
      }
    })
  },
  submitArticle ({ commit, state, dispatch }, { articleData, callback }) {
    if (state.authData.token === '') {
      dispatch('postMessage', 'You should sign in before submission.')
    } else {
      commit('SHOW_LOADING')
      axios.post(serverAddress + '/article/submit', articleData, {
        timeout: 12000,
        headers: {
          Authorization: state.authData.token
        }
      }).then(res => {
        commit('HIDE_LOADING')
        if (res.data.status === true) {
          dispatch('postMessage', res.data.message)
          callback()
        } else {
          dispatch('postMessage', res.data.message)
        }
      })
      .catch(err => {
        commit('HIDE_LOADING')
        if (err.request.status === 0) {
          dispatch('postMessage', 'Network error.')
        } else {
          dispatch('postMessage', 'Unknown error.')
        }
      })
    }
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
