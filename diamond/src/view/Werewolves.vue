<template>
  <div id="werewolves">
    <div class="werewolves">
      <player-list></player-list>
    </div>
    <global-background class="weather2"></global-background>
    <router-link class="login-button" :to="{ path: '/signin', query: { redirect: '/werewolves' }}">Sign In</router-link>
    <logo></logo>
  </div>
</template>

<script>
import Logo from '../components/Logo.vue'
import GlobalBackground from '../components/GlobalBackground.vue'
import PlayerList from '../components/werewolves/PlayerList.vue'

export default {
  components: {
    Logo,
    GlobalBackground,
    PlayerList
  }
}
</script>

<style lang="less">
@import url(../assets/werewolves/weather.less);

#werewolves {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: red;
}

.werewolves {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
