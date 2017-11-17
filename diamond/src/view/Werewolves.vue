<template>
  <div id="werewolves">
    <div class="werewolves">
      <player-list></player-list>
    </div>
    <!--<global-background class="weather2"></global-background>-->
    <before-leave :nextHandle="nextHandle"></before-leave>
    <user-tag></user-tag>
    <header-title v-fade main-color="#111" sub-color="#111">WEREWOLVES</header-title>
    TESTING
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

// import GlobalBackground from '../components/GlobalBackground.vue'
import PlayerList from '../components/werewolves/PlayerList.vue'
import HeaderTitle from '../components/HeaderTitle.vue'
import BeforeLeave from '../components/BeforeLeave.vue'
import UserTag from '../components/UserTag.vue'

export default {
  components: {
    // GlobalBackground,
    PlayerList,
    HeaderTitle,
    BeforeLeave,
    UserTag
  },
  data () {
    return {
      nextHandle: null
    }
  },
  methods: {
    ...mapMutations({
      showLeaveHint: 'SHOW_LEAVE_HINT'
    })
  },
  beforeRouteLeave (to, from, next) {
    if (to.path === '/index') {
      next()
    } else {
      this.nextHandle = () => {
        next()
      }
      this.showLeaveHint()
    }
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
