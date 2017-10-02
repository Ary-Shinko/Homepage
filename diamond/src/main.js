import Vue from 'vue'
import App from './App'
// import axios from 'axios'
import store from './store'
import router from './router'

import '../static/normalize.min.css'
import './assets/grid/global.less'
import './assets/grid/navigationAnimation.less'

Vue.config.productionTip = false

Vue.directive('fade', {
  inserted: function (el) {
    let timer = setTimeout(function () {
      el.style.opacity = 0
    }, 2200)
    el.addEventListener('mouseenter', function (e) {
      clearTimeout(timer)
      el.style.opacity = 1
    }, false)
    el.addEventListener('mouseleave', function (e) {
      timer = setTimeout(function () {
        el.style.opacity = 0
      }, 2200)
    }, false)
  }
})

Vue.filter('uppercase', v => {
  return v.toUpperCase()
})

// axios.interceptors.request.use(config => {
//   config.timeout = 12000
//   return config
// }, error => {
//   return Promise.reject(error)
// })

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {
    if (window.localStorage['authToken']) {
      next()
    } else {
      store.dispatch('postMessage', 'You must sign in to continue.')
      next({
        path: '/signin',
        query: {
          redirect: to.fullPath
        }
      })
    }
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
