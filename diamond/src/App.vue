<template>
  <div id="app">
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

export default {
  name: 'app',
  components: {
    GridLogo,
    GridNews,
    GridMain,
    GridCatalogue,
    CopyrightStatus,
    GlobalBackground
  }
}
</script>

<style>
html,
body {
  overflow: hidden;
}

#app {
  /*zoom: 0.3;*/
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
