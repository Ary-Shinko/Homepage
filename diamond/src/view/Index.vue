<template>
  <div class="grid" @wheel.prevent="scrollNavigation($event.deltaY)">
    <grid-logo></grid-logo>
    <grid-catalogue></grid-catalogue>
    <grid-news></grid-news>
    <grid-core></grid-core>
    <grid-status></grid-status>
    <grid-background></grid-background>
    <div class="grid-background-shelter"></div>
    <router-link class="g-login-button" :to="{ path: '/signin', query: { redirect: '/index' }}">Sign In</router-link>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import GridLogo from '../components/grid/GridLogo.vue'
import GridCatalogue from '../components/grid/GridCatalogue.vue'
import GridNews from '../components/grid/GridNews.vue'
import GridCore from '../components/grid/GridCore.vue'
import GridStatus from '../components/grid/GridStatus.vue'
import GridBackground from '../components/grid/GridBackground.vue'

export default {
  components: {
    GridLogo,
    GridCatalogue,
    GridNews,
    GridCore,
    GridStatus,
    GridBackground
  },
  methods: {
    ...mapActions([
      'scrollNavigation'
    ]),
    scrollListener (e) {
      if (e.keyCode === 38) {
        this.scrollNavigation(-1)
      } else if (e.keyCode === 40) {
        this.scrollNavigation(1)
      }
      e.stopPropagation()
    }
  },
  mounted () {
    window.addEventListener('keyup', this.scrollListener, true)
  },
  beforeDestroy () {
    window.removeEventListener('keyup', this.scrollListener, true)
  }
}
</script>

<style lang="less">
.grid {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.grid-background-shelter {
  width: 100%;
  height: 100%;
  background: #000;
  margin-left: 250vh;
}
</style>
