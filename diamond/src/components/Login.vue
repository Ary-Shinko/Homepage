<template>
  <div class="login" :class="navigationObject">
    <div class="login-grid grid-unit"></div>
    <div class="login-content">
      <img class="deco" src="../assets/proto3.png" alt="">
      <div class="aaa"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'navigationStep'
    ]),
    navigationObject () {
      return {
        'navigation-login-up1': this.navigationStep === 1,
        'navigation-login-up2': this.navigationStep === 2,
        'navigation-login-up3': this.navigationStep === 3,
        'navigation-login-down1': this.navigationStep === -1,
        'navigation-login-down2': this.navigationStep === -2,
        'navigation-login-down3': this.navigationStep === -3
      }
    }
  }
}
</script>

<style lang="less">
.login {
  .login-grid {
    position: absolute;
    z-index: 2;
  }
  .login-content {
    position: absolute;
    z-index: 2;
    margin: -25vh 0 0 -25vh;
    width: 172vh;
    height: 172vh;
    opacity: .8;
    img.deco {
      position: absolute;
      z-index: 2;
      margin: 50vh 0 0 43vh;
      width: 80vh;
    }
  }
}
</style>
