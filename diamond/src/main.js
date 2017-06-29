import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'

import '../static/normalize.min.css'
import './assets/global.less'
import './assets/animation.less'

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

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {
    if (store.state.authToken) {
      next()
    } else {
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
