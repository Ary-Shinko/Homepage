import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../view/Index.vue'
import Werewolves from '../view/Werewolves.vue'
import Solitaire from '../view/Solitaire.vue'
import NotFound from '../view/NotFound.vue'
import Signin from '../view/Signin.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [{
    path: '/',
    component: Index
  },
  {
    path: '/index',
    component: Index
  },
  {
    path: '/signin',
    component: Signin
  },
  {
    path: '/werewolves',
    component: Werewolves,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/solitaire',
    component: Solitaire,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/*',
    component: NotFound
  }]
})
