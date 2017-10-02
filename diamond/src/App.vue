<template>
  <div id="app">
    <transition name="fold">
      <router-view></router-view>
    </transition>
    <message-tip></message-tip>
    <loading></loading>
  </div>
</template>

<script>
import MessageTip from './components/MessageTip.vue'
import Loading from './components/Loading.vue'

export default {
  name: 'app',
  components: {
    MessageTip,
    Loading
  },
  mounted () {
    if (window.localStorage.authToken) {
      this.$store.commit('CACHE_AUTHORIZATION', {
        account: window.localStorage.authAccount,
        name: window.localStorage.authName,
        phone: window.localStorage.authPhone,
        token: window.localStorage.authToken,
        avatar: window.localStorage.authAvatar
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
  font-family: "Roboto Mono", "SourceHanSansCNNormal", sans-serif, Arial, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

@font-face {
  font-family: "Roboto Mono";
  src: url(../static/RobotoMono.ttf);
}

@font-face {
  font-family: "SourceHanSansCNNormal";
  src: url("./assets/grid/SourceHanSansCNNormal.eot");
  src: url("./assets/grid/SourceHanSansCNNormal.eot?#iefix") format("embedded-opentype"),
  url("./assets/grid/SourceHanSansCNNormal.woff") format("woff"),
  url("./assets/grid/SourceHanSansCNNormal.ttf") format("truetype"),
  url("./assets/grid/SourceHanSansCNNormal.svg#SourceHanSansCNNormal") format("svg");
}
</style>
