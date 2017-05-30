<template>
  <div id="app">
    <transition name="fold">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
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

.fold-enter-active,
.fold-leave-active {
  transition: all .2s linear;
}

.fold-enter,
.fold-leave-to {  
  transform: rotateX(90deg);
  transform-origin: 50% 50%;
}

@font-face {
  font-family: 'Roboto Mono';
  src: url(../static/RobotoMono.ttf);
}
</style>
