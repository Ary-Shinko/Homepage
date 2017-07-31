<template>
  <div id="app">
    <transition name="fold">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted () {
    if (window.localStorage.authToken) {
      this.$store.commit('CACHE_AUTHORIZATION', {
        id: window.localStorage.authId,
        token: window.localStorage.authToken,
        name: window.localStorage.authName,
        icon: window.localStorage.authIcon
      })
    }
  }
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
