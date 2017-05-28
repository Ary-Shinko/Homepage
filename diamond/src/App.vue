<template>
  <div id="app" @wheel.prevent="scrollNavigation($event.deltaY)">
    <grid-logo></grid-logo>
    <grid-catalogue></grid-catalogue>
    <grid-news></grid-news>
    <grid-main></grid-main>
    <router-view></router-view>
    <copyright-status></copyright-status>
    <global-background></global-background>
  </div>
</template>

<script>
import GridLogo from './components/GridLogo.vue'
import GridCatalogue from './components/GridCatalogue.vue'
import GridNews from './components/GridNews.vue'
import GridMain from './components/GridMain.vue'
import CopyrightStatus from './components/CopyrightStatus.vue'
import GlobalBackground from './components/GlobalBackground.vue'
import { mapActions } from 'vuex'

export default {
  name: 'app',
  components: {
    GridLogo,
    GridNews,
    GridMain,
    GridCatalogue,
    CopyrightStatus,
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
html,
body {
  overflow: hidden;
}

#app {
  /*zoom: .3;*/
  /*transform: translateX(4000px);*/
  font-size: 2.4vh;
  font-family: 'Roboto Mono', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

@font-face {
  font-family: 'Roboto Mono';
  src: url(../static/RobotoMono.ttf);
}
</style>
