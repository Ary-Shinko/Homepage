import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const state = {
  articleData: {
    blog1: {
      title: 'CSS: Typography II',
      misc: 'Ary 2017/11/17 CSS / Typography / IFC / Layout'
    },
    blog2: {
      title: 'CSS: Typography I',
      misc: 'Ary 2017/11/09 CSS / Typography / Font / Layout'
    },
    blog3: {
      title: 'CSS: the reason for order "link-visited-hover-active"',
      misc: 'Ary 2017/10/29 CSS / Priority / LVHA'
    },
    blog4: {
      title: 'The way to shuffle an array',
      misc: 'Ary 2017/10/18 Shuffle / Array / Javascript / Fisher-Yates'
    },
    blog5: {
      title: 'CSS: background-position',
      misc: 'Ary 2017/10/12 CSS / Background / Frontend / Sprites'
    },
    algorithm1: {
      title: 'Algorithm: AKS(Agrawal Kayal Saxena)',
      misc: 'Ary 20XX/XX/XX Algorithm / AKS / Primality Test'
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
      title: 'Tapcity, to be a mayor as city manager',
      misc: 'Ary 20XX/XX/XX Tapcity / Game / Lowpoly',
      url: '/tapcity'
    },
    app2: {
      title: 'Tarot, divination and fortune telling',
      misc: 'Ary 2017/10/21 Tarot / Game / Divination',
      url: '/tarot'
    },
    app3: {
      title: 'Shadowsocks proxy',
      misc: 'Ary 2017/10/03 Shadowsocks / Network / Proxy',
      url: '/shadowsocks'
    },
    app4: {
      title: 'Solitaire "Texas Hold\'em Poker"',
      misc: 'Ary 2017/09/05 Solitaire / Game / Poker',
      url: '/solitaire'
    },
    app5: {
      title: 'Werewolves',
      misc: 'Ary 2017/08/13 Werewolves / Multiplayer Game / Social',
      url: '/werewolves'
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
  navigationLastModified: '2017/11/30',
  navigationVersion: 'v0.3.4 alpha',
  navigationNews: {
    news1: {
      title: '10/29 Blog - "link-visited-hover-active"',
      url: '/article/blog/CSS:%20the%20reason%20for%20order%20%22link-visited-hover-active%22'
    },
    news2: {
      title: '11/09 Blog - CSS: Typography I',
      url: '/article/blog/CSS:%20Typography%20I'
    },
    news3: {
      title: '11/17 Blog - CSS: Typography II',
      url: '/article/blog/CSS:%20Typography%20II'
    }
  },
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
  cardVersion: 'v1.0.6'
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  strict: process.env.NODE_ENV !== 'production'
})
