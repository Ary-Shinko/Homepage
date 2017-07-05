import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const state = {
  navigationFrom: 1,
  navigationTo: 1,
  navigationLocked: false,
  authToken: '',
  authAccount: '',
  authPassword: '',
  cardDeck: [],
  cardPlayer: [],
  cardObsolete: [],
  cardSuitEnum: [0, 13, 26, 39], // suit order: spades, hearts, clubs, diamonds
  cardPointEnum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
  cardSuitChar: {'0': '♠', '13': '♥', '26': '♣', '39': '♦'},
  cardPointChar: ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2'],
  cardScore: 0,
  cardHighscore: 0,
  cardTimer: 0,
  cardCountableCount: 0,
  cardScoreMargin: 0,
  cardBalanceString: '',
  cardBalanceScore: 0,
  cardBalanceShow: false,
  cardFinalBalanceShow: false,
  cardFinalBalanceString: null,
  cardHint: true,
  cardVersion: 'v1.0.5'
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  strict: process.env.NODE_ENV !== 'production'
})
