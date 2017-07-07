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
  font-size: 2.4vh;
  font-family: 'Roboto Mono', sans-serif, Arial, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

@font-face {
  font-family: 'Roboto Mono';
  src: url(../static/RobotoMono.ttf);
}
</style>
