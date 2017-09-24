import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../view/Index.vue'
import NotFound from '../view/NotFound.vue'
import Signin from '../view/Signin.vue'
import Laboratory from '../view/Laboratory.vue'
import Blog from '../view/Blog.vue'
import Algorithm from '../view/Algorithm.vue'
import Werewolves from '../view/Werewolves.vue'
import Solitaire from '../view/Solitaire.vue'
import Shadowsocks from '../view/Shadowsocks.vue'

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
    path: '/logout',
    redirect: '/index'
  },
  {
    path: '/blog',
    component: Blog
  },
  {
    path: '/algorithm',
    component: Algorithm
  },
  {
    path: '/app',
    component: Laboratory
  },
  {
    path: '/solitaire',
    component: Solitaire
  },
  {
    path: '/werewolves',
    component: Werewolves,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/shadowsocks',
    component: Shadowsocks,
    meta: {
      requireAuth: false
    }
  },
  // {
  //   path: '/tarot',
  //   component: Tarot
  // },
  // {
  //   path: '/tapcity',
  //   component: Tapcity
  // },
  {
    path: '/*',
    component: NotFound
  }]
})
