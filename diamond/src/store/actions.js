import axios from 'axios'
import { serverAddress } from './config'

export default {
  // NAVIGATION
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
  },
  // AUTHORIZATION
  requestAuthorization ({ commit, state }, signinData) {
    axios.post(serverAddress, signinData)
    .then(res => {
      if (res.status === 401) {
        commit('CACHE_AUTHORIZATION', {
          id: '',
          token: '',
          name: '',
          icon: ''
        })
      } else {
        commit('CACHE_AUTHORIZATION', {
          id: signinData.id,
          token: res.data.token,
          name: res.data.name,
          icon: res.data.icon
        })
      }
    })
    .catch(error => {
      alert('Wrong Pass')
      void error
    })
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
