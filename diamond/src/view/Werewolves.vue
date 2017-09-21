<template>
  <div id="werewolves">
    <div class="werewolves">
      <player-list></player-list>
    </div>
    <!--<global-background class="weather2"></global-background>-->
    <user-tag></user-tag>
    <header-title v-fade main-color="#111" sub-color="#111">WEREWOLVES</header-title>
  </div>
</template>

<script>
// import GlobalBackground from '../components/GlobalBackground.vue'
import PlayerList from '../components/werewolves/PlayerList.vue'
import HeaderTitle from '../components/HeaderTitle.vue'
import UserTag from '../components/UserTag.vue'

export default {
  components: {
    // GlobalBackground,
    PlayerList,
    HeaderTitle,
    UserTag
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
