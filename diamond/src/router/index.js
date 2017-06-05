import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../view/Index.vue'
import Werewolves from '../view/Werewolves.vue'
import NotFound from '../view/NotFound.vue'
import SignIn from '../view/SignIn.vue'

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
    component: SignIn
  },
  {
    path: '/werewolves',
    component: Werewolves,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/*',
    component: NotFound
  }]
})
