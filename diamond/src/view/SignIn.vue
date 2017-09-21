<template>
  <div class="signin">
    <transition name="disappear" mode="out-in">
      <component @navigate="view = arguments[0]" :is="view"></component>
    </transition>
    <signin-background :view="view"></signin-background>
    <header-title>SIGN IN</header-title>
    <a class="signin-back" @click="$router.go(-1)">Back</a>
  </div>
</template>

<script>
import SigninMain from '../components/signin/SigninMain.vue'
import SigninForgot from '../components/signin/SigninForgot.vue'
import SigninCreate from '../components/signin/SigninCreate.vue'
import SigninBackground from '../components/signin/SigninBackground.vue'
import HeaderTitle from '../components/HeaderTitle.vue'

export default {
  data () {
    return {
      view: 'SigninMain'
    }
  },
  components: {
    SigninMain,
    SigninForgot,
    SigninCreate,
    SigninBackground,
    HeaderTitle
  }
}
</script>

<style>
.signin-back {
  position: fixed;
  z-index: 15;
  top: 1vh;
  right: 3vh;
}
</style>
