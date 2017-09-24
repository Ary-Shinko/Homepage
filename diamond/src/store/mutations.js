// NAVIGATION
const MODIFY_NAVIGATION_FROM = 'MODIFY_NAVIGATION_FROM'
const MODIFY_NAVIGATION_TO = 'MODIFY_NAVIGATION_TO'
const LOCK_NAVIGATION = 'LOCK_NAVIGATION'
const UNLOCK_NAVIGATION = 'UNLOCK_NAVIGATION'
const MODIFY_NAVIGATION_BACKGROUND = 'MODIFY_NAVIGATION_BACKGROUND'
// AUTHRIZATION
const CACHE_AUTHORIZATION = 'CACHE_AUTHORIZATION'
const EXIT_AUTHORIZATION = 'EXIT_AUTHORIZATION'
// MESSAGE
const CLOSE_MESSAGE = 'CLOSE_MESSAGE'
const POST_MESSAGE = 'POST_MESSAGE'
const SET_MESSAGE_TIMER = 'SET_MESSAGE_TIMER'
// LOADING
const SHOW_LOADING = 'SHOW_LOADING'
const HIDE_LOADING = 'HIDE_LOADING'
// LEAVE-HINT
const SHOW_LEAVE_HINT = 'SHOW_LEAVE_HINT'
const HIDE_LEAVE_HINT = 'HIDE_LEAVE_HINT'
// SOLITAIRE
const CREATE_CARD_DECK = 'CREATE_CARD_DECK'
const SHUFFLE_CARD = 'SHUFFLE_CARD'
const SORT_CARD_BY_SUIT = 'SORT_CARD_BY_SUIT'
const SORT_CARD_BY_POINT = 'SORT_CARD_BY_POINT'
const SET_CARD_TIMER = 'SET_CARD_TIMER'
const DEAL_CARD = 'DEAL_CARD'
const FLIP_CARD = 'FLIP_CARD'
const MODIFY_CARD_SCORE_MARGIN = 'MODIFY_CARD_SCORE_MARGIN'
const OBSOLETE_CARD = 'OBSOLETE_CARD'
const SCORE_CARD = 'SCORE_CARD'
const HIDE_CARD_BALANCE = 'HIDE_CARD_BALANCE'
const SHOW_CARD_FINAL_BALANCE = 'SHOW_CARD_FINAL_BALANCE'
const HIDE_CARD_FINAL_BALANCE = 'HIDE_CARD_FINAL_BALANCE'
const SET_CARD_HIGHSCORE = 'SET_CARD_HIGHSCORE'
const DISABLE_CARD_HINT = 'DISABLE_CARD_HINT'

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
  [MODIFY_NAVIGATION_BACKGROUND] (state, className) {
    if (className) {
      state.navigationBackground = className
    } else {
      state.navigationBackground = ''
    }
  },
  // AUTHRIZATION
  [CACHE_AUTHORIZATION] (state, authData) {
    state.authData = authData
  },
  [EXIT_AUTHORIZATION] (state) {
    state.authData.account = ''
    state.authData.name = ''
    state.authData.phone = ''
    state.authData.token = ''
    state.authData.avatar = ''
  },
  // MESSAGE
  [CLOSE_MESSAGE] (state) {
    state.messageShow = false
    state.messageData = ''
    state.messageTimer = 0
  },
  [POST_MESSAGE] (state, message) {
    state.messageData = message
    state.messageShow = true
  },
  [SET_MESSAGE_TIMER] (state, timer) {
    state.messageTimer = timer
  },
  // LOADING
  [SHOW_LOADING] (state) {
    state.loadingShow = true
  },
  [HIDE_LOADING] (state) {
    state.loadingShow = false
  },
  // LEAVE-HINT
  [SHOW_LEAVE_HINT] (state) {
    state.leaveHintShow = true
  },
  [HIDE_LEAVE_HINT] (state) {
    state.leaveHintShow = false
  },
  // SOLITAIRE
  [CREATE_CARD_DECK] (state) {
    state.cardDeck = []
    state.cardPlayer = []
    state.cardObsolete = []
    state.cardScore = 0
    state.cardCountableCount = 0
    state.cardBalanceShow = false
    state.cardFinalBalanceString = {
      'Straight Flush': 0,
      'Four of a Kind': 0,
      'Full House': 0,
      'Flush': 0,
      'Straight': 0,
      'Three of a Kind': 0,
      'Two Pair': 0,
      'One Pair': 0,
      'High Card': 0
    }
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
    state.cardObsolete.sort((a, b) => {
      return a.suit + a.point - b.suit - b.point
    })
  },
  [SORT_CARD_BY_POINT] (state) {
    state.cardPlayer.sort((a, b) => {
      return a.suit / 100 + a.point - b.suit / 100 - b.point
    })
    state.cardObsolete.sort((a, b) => {
      return a.suit / 100 + a.point - b.suit / 100 - b.point
    })
  },
  [SET_CARD_TIMER] (state, timer) {
    state.cardTimer = timer
  },
  [DEAL_CARD] (state) {
    if (state.cardCountableCount < 5) {
      let card = state.cardDeck.pop()
      card.upwards = true
      card.flipable = true
      card.countable = true
      state.cardPlayer.push(card)
      state.cardCountableCount++
    }
  },
  [FLIP_CARD] (state, index) {
    let card = state.cardPlayer[index]
    if (card.available) {
      if (card.upwards) {
        card.upwards = false
      } else {
        if (state.cardCountableCount < 5) {
          card.upwards = true
        }
      }
      if (card.countable) {
        card.countable = false
        state.cardCountableCount--
      } else {
        if (state.cardCountableCount < 5) {
          card.countable = true
          state.cardCountableCount++
        }
      }
    }
  },
  [MODIFY_CARD_SCORE_MARGIN] (state, margin) {
    state.cardScoreMargin = margin
  },
  [OBSOLETE_CARD] (state) {
    for (let card of state.cardPlayer) {
      card.upwards = true
      card.available = false
      card.countable = false
      card.flipable = false
      state.cardObsolete.push(card)
    }
    state.cardPlayer = []
    state.cardCountableCount = 0
  },
  [SCORE_CARD] (state) {
    let build = state.cardPlayer.filter(card => {
      return card.countable
    }).map(card => {
      return [card.suit, card.point]
    }).sort((a, b) => {
      return a[0] / 100 + a[1] - b[0] / 100 - b[1]
    })
    if (build.length === 5) {
      let score = 0
      let type = ''
      let base = build[0][1]
      let flush = true
      let straight = true
      // straight/flush/straight flush
      for (let i = 1; i < 5; i++) {
        if (build[i - 1][0] !== build[i][0]) flush = false
        if (build[i - 1][1] + 1 !== build[i][1]) straight = false
        if (!flush && !straight) break
      }
      type = straight ? 'Straight' : type
      type = flush ? 'Flush' : type
      type = flush && straight ? 'Straight Flush' : type
      // others
      if (type === '') {
        let points = []
        let quantity = []
        let index = 0
        build.forEach(v => {
          index = points.indexOf(v[1])
          if (index === -1) {
            points.push(v[1])
            quantity.push(1)
          } else {
            quantity[index]++
          }
        })
        index = Math.max(...quantity)
        switch (quantity.length) {
          case 2:
            type = index === 4 ? 'Four of a Kind' : 'Full House'
            base = points[quantity.indexOf(index)]
            break
          case 3:
            type = index === 3 ? 'Three of a Kind' : 'Two Pair'
            base = Math.min(points[quantity.indexOf(index)], points[quantity.lastIndexOf(index)])
            break
          case 4:
            type = 'One Pair'
            base = points[quantity.indexOf(index)]
            break
          case 5:
            type = 'High Card'
            break
        }
      }
      // scoring
      base = 100 - base
      switch (type) {
        case 'Straight Flush':
          score = 6269 * base
          break
        case 'Four of a Kind':
          score = 1823 * base
          break
        case 'Full House':
          score = 593 * base
          break
        case 'Flush':
          score = 425 * base
          break
        case 'Straight':
          score = 280 * base
          break
        case 'Three of a Kind':
          score = 72 * base
          break
        case 'Two Pair':
          score = 39 * base
          break
        case 'One Pair':
          score = 9 * base
          break
        case 'High Card':
          score = 6 * base
          break
      }
      if (type !== 'High Card' && type !== 'One Pair') {
        score = parseInt(score * Math.pow(0.6, state.cardPlayer.length - 5))
      }
      state.cardFinalBalanceString[type]++
      state.cardBalanceString = type
      state.cardBalanceScore = score
      state.cardBalanceShow = true
      state.cardScore += score
    }
  },
  [HIDE_CARD_BALANCE] (state) {
    state.cardBalanceShow = false
  },
  [SHOW_CARD_FINAL_BALANCE] (state) {
    state.cardFinalBalanceShow = true
  },
  [HIDE_CARD_FINAL_BALANCE] (state) {
    state.cardFinalBalanceShow = false
  },
  [SET_CARD_HIGHSCORE] (state, score) {
    state.cardHighscore = score
    if (window.localStorage) {
      window.localStorage.setItem('cardHighscore', score)
    } else {
      document.cookie = `cardHighscore=${score}`
    }
  },
  [DISABLE_CARD_HINT] (state) {
    state.cardHint = false
  }
}
