import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const state = {
  articleData: {
    blog1: {
      title: 'Build an authentication system',
      misc: 'Ary 2017/08/20 Authentication / JWT / Vue-router / Backend'
    },
    blog2: {
      title: 'Guide for using SMS(Short Message Service) API',
      misc: 'Ary 2017/08/30 Mobile / SMS / Node.js / Backend'
    },
    blog3: {
      title: 'CSS3: background',
      misc: 'Ary 2017/09/06 CSS3 / Background / Frontend'
    },
    blog4: {
      title: 'Migration to HTTPS',
      misc: 'Ary 2017/09/19 HTTPS /Security / Backend'
    },
    blog5: {
      title: 'Colorize.js: colorful console.log',
      misc: 'Ary 2017/09/24 Lib / Node.js / Console / Backend'
    },
    algorithm1: {
      title: 'Disjoint-set & Ackermann function',
      misc: 'Ary 20XX/XX/XX Disjoint-set / Data Structure / Ackermann Function'
    },
    algorithm2: {
      title: 'From Markov chain to Bayesian network',
      misc: 'Ary 20XX/XX/XX Markov Chain / Bayesian Network / Probability / Math'
    },
    algorithm3: {
      title: 'Algorithm: BFPRT(Blum Floyd Pratt Rivest Tarjan)',
      misc: 'Ary 20XX/XX/XX Algorithm / BFPRT / ACM / Top-K'
    },
    algorithm4: {
      title: 'ACM: Catalan number',
      misc: 'Ary 20XX/XX/XX Catalan Number / ACM'
    },
    algorithm5: {
      title: 'Algorithm: KMP(Knuth Morris Pratt)',
      misc: 'Ary 20XX/XX/XX Algorithm / KMP / String'
    },
    app1: {
      title: 'Werewolves',
      misc: 'Ary 2017/08/13 Werewolves / Multiplayer Game / Social',
      url: '/werewolves'
    },
    app2: {
      title: 'Solitaire "Texas Hold\'em Poker"',
      misc: 'Ary 2017/09/05 Solitaire / Game / Poker',
      url: '/solitaire'
    },
    app3: {
      title: 'Shadowsocks proxy',
      misc: 'Ary 2017/09/27 Shadowsocks / Network / Proxy',
      url: '/shadowsocks'
    },
    app4: {
      title: 'Tarot, divination and fortune telling',
      misc: 'Ary 20XX/XX/XX Tarot / Game / Divination',
      url: '/tarot'
    },
    app5: {
      title: 'Tapcity, to be a mayor as city manager',
      misc: 'Ary 20XX/XX/XX Tapcity / Game / Lowpoly',
      url: '/tapcity'
    }
  },
  articleCurrent: {
    title: '',
    content: '',
    author: '',
    date: '',
    keywords: ['', '', '', ''],
    type: '',
    license: ''
  },
  navigationFrom: 1,
  navigationTo: 1,
  navigationLocked: false,
  navigationLastModified: '2017/9/25',
  navigationVersion: 'v0.3.0 alpha',
  navigationBackground: '',
  authData: {
    account: '',
    name: '',
    phone: '',
    token: '',
    avatar: ''
  },
  messageShow: false,
  messageData: '',
  messageTimer: 0,
  loadingShow: false,
  leaveHintShow: false,
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
