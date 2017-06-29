<template>
  <div id="sign-in">
    <login-main></login-main>
    <login-background></login-background>
    <header-title>SIGN IN</header-title>
    <a class="login-button" @click="$router.go(-1)">Back</a>
  </div>
</template>

<script>
import LoginMain from '../components/login/LoginMain.vue'
import LoginBackground from '../components/login/LoginBackground.vue'
import HeaderTitle from '../components/HeaderTitle.vue'

export default {
  components: {
    LoginMain,
    LoginBackground,
    HeaderTitle
  }
}
</script>

<style>
</style>
