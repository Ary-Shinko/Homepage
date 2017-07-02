// NAVIGATION
const MODIFY_NAVIGATION_FROM = 'MODIFY_NAVIGATION_FROM'
const MODIFY_NAVIGATION_TO = 'MODIFY_NAVIGATION_TO'
const LOCK_NAVIGATION = 'LOCK_NAVIGATION'
const UNLOCK_NAVIGATION = 'UNLOCK_NAVIGATION'
// AUTHRIZATION
const CACHE_AUTHORIZATION = 'CACHE_AUTHORIZATION'
// SOLITAIRE
const CREATE_CARD_DECK = 'CREATE_CARD_DECK'
const SHUFFLE_CARD = 'SHUFFLE_CARD'
const SORT_CARD_BY_SUIT = 'SORT_CARD_BY_SUIT'
const SORT_CARD_BY_POINT = 'SORT_CARD_BY_POINT'
const SET_CARD_TIMER = 'SET_CARD_TIMER'
const DEAL_CARD = 'DEAL_CARD'
const FLIP_CARD = 'FLIP_CARD'
const MODIFY_CARD_SCORE_MARGIN = 'MODIFY_CARD_SCORE_MARGIN'

export default {
  // NAVIGATION
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
  // AUTHRIZATION
  [CACHE_AUTHORIZATION] (state, { account, password }) {
    state.authAccount = account || state.authAccount
    state.authPassword = password || state.authPassword
  },
  // SOLITAIRE
  [CREATE_CARD_DECK] (state) {
    state.cardDeck = []
    state.cardPlayer = []
    state.cardScore = 0
    state.cardAvailableCount = 0
    clearTimeout(state.cardTimer)
    for (let suit of state.cardSuitEnum) {
      for (let point of state.cardPointEnum) {
        state.cardDeck.push({
          suit,
          point,
          upwards: false,
          available: true,
          countable: false,
          flipable: false
        })
      }
    }
  },
  [SHUFFLE_CARD] (state, array) {
    for (let i = 0; i < array.length; i++) {
      array.push(...array.splice(Math.floor((array.length - i) * Math.random()), 1))
    }
  },
  [SORT_CARD_BY_SUIT] (state) {
    state.cardPlayer.sort((a, b) => {
      return a.suit + a.point - b.suit - b.point
    })
  },
  [SORT_CARD_BY_POINT] (state) {
    state.cardPlayer.sort((a, b) => {
      return a.suit / 100 + a.point - b.suit / 100 - b.point
    })
  },
  [SET_CARD_TIMER] (state, timer) {
    state.cardTimer = timer
  },
  [DEAL_CARD] (state) {
    if (state.cardAvailableCount < 5) {
      let card = state.cardDeck.pop()
      card.upwards = true
      card.flipable = true
      card.available = true
      state.cardPlayer.push(card)
      state.cardAvailableCount++
    }
  },
  [FLIP_CARD] (state, index) {
    let card = state.cardPlayer[index]
    if (!card.obsoleted) {
      if (card.upwards) {
        card.upwards = false
      } else {
        if (state.cardAvailableCount < 5) {
          card.upwards = true
        }
      }
      if (card.available) {
        card.available = false
        state.cardAvailableCount--
      } else {
        if (state.cardAvailableCount < 5) {
          card.available = true
          state.cardAvailableCount++
        }
      }
    }
  },
  [MODIFY_CARD_SCORE_MARGIN] (state, margin) {
    state.cardScoreMargin = margin
  }
}
