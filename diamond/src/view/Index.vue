<template>
  <div id="index" @wheel.prevent="scrollNavigation($event.deltaY)">
    <grid-logo></grid-logo>
    <grid-catalogue></grid-catalogue>
    <grid-news></grid-news>
    <grid-main></grid-main>
    <copyright-status></copyright-status>
    <login></login>
    <global-background></global-background>
  </div>
</template>

<script>
import GridLogo from '../components/GridLogo.vue'
import GridCatalogue from '../components/GridCatalogue.vue'
import GridNews from '../components/GridNews.vue'
import GridMain from '../components/GridMain.vue'
import CopyrightStatus from '../components/CopyrightStatus.vue'
import Login from '../components/Login.vue'
import GlobalBackground from '../components/GlobalBackground.vue'
import { mapActions } from 'vuex'

export default {
  name: 'app',
  components: {
    GridLogo,
    GridNews,
    GridMain,
    GridCatalogue,
    CopyrightStatus,
    Login,
    GlobalBackground
  },
  methods: {
    ...mapActions([
      'scrollNavigation'
    ])
  },
  mounted () {
    let that = this
    window.addEventListener('keyup', function (e) {
      if (e.keyCode === 38) {
        that.scrollNavigation(-1)
      } else if (e.keyCode === 40) {
        that.scrollNavigation(1)
      }
      e.stopPropagation()
    }, true)
  }
}
</script>

<style>
#index {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
