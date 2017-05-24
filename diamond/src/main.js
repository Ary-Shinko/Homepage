import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'

import '../static/normalize.min.css'
import './assets/global.less'
import './assets/animation.less'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
