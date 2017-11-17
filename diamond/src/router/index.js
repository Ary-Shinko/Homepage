import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../view/Index.vue'
import NotFound from '../view/NotFound.vue'
import Signin from '../view/Signin.vue'
import Article from '../view/Article.vue'
import Werewolves from '../view/Werewolves.vue'
import Solitaire from '../view/Solitaire.vue'
import Shadowsocks from '../view/Shadowsocks.vue'
import Tarot from '../view/Tarot.vue'
import Resume from '../view/Resume.vue'
// import Tapcity from '../view/Tapcity.vue'

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
    path: '/article',
    component: Article
  },
  {
    path: '/article/*',
    component: Article
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
      requireAuth: true
    }
  },
  {
    path: '/tarot',
    component: Tarot
  },
  // {
  //   path: '/tapcity',
  //   component: Tapcity,
  //   meta: {
  //     requireAuth: true
  //   }
  // },
  {
    path: '/resume',
    component: Resume
  },
  {
    path: '/*',
    component: NotFound
  }]
})
