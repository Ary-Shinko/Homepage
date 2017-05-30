import Vue from 'vue'
import Router from 'vue-router'
import Index from '../view/Index.vue'
import Werewolves from '../view/Werewolves.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/index',
      component: Index
    },
    {
      path: '/werewolves',
      component: Werewolves
    }
  ]
})
