<template>
  <div id="app">
    <grid-logo></grid-logo>
    <!--<grid-catalogue></grid-catalogue>
    <grid-news></grid-news>
    <router-view></router-view>
    <grid-background></grid-background>-->
    <div class="grid-unit grid-unit-thin"></div>
    <div class="grid-unit"></div>
    <div class="grid-unit grid-unit-fat"></div>
    <div class="grid-unit"></div>
    <div class="grid-unit"></div>
    <div class="grid-unit"></div>
    <div class="grid-unit grid-unit-thin"></div>
    <div class="grid-unit"></div>
    <div class="grid-unit grid-unit-fat"></div>
    <div class="grid-unit"></div>
    <div class="grid-unit"></div>
    <div class="grid-unit"></div>
    <div class="grid-unit grid-unit-thin"></div>
    <div class="grid-unit"></div>
    <div class="grid-unit grid-unit-fat"></div>
    <div class="screen"></div>
  </div>
</template>

<script>
import GridLogo from './components/GridLogo.vue'
import GridBackground from './components/GridBackground.vue'
import GridNews from './components/GridNews.vue'
import GridCatalogue from './components/GridCatalogue.vue'
export default {
  name: 'app',
  components: {
    GridLogo,
    GridBackground,
    GridNews,
    GridCatalogue
  }
}
</script>

<style>
html, body {
  overflow: hidden;
}
.screen {
  border: 5px solid #f2f;
  width: 100vw;
  height: 100vh;
  /*transform: rotate(-45deg);*/
}
#app {
  position: absolute;
  width: 360vh;
  height: 1080vh;
  transform: scale(0.5) rotate(45deg) translate(240vh, -240vh);
  transform: rotate(45deg);
  transform-origin: 0 0;
  border-top: 5px solid yellow;
  border-left: 5px solid red;
  border-right: 5px solid green;
  border-bottom: 5px solid blue;
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
