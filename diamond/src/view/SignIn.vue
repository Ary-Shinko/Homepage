<template>
  <div id="sign-in">
    <login-main></login-main>
    <login-background></login-background>
    <logo></logo>
  </div>
</template>

<script>
import LoginMain from '../components/login/LoginMain.vue'
import LoginBackground from '../components/login/LoginBackground.vue'
import Logo from '../components/Logo.vue'

export default {
  components: {
    LoginMain,
    LoginBackground,
    Logo
  }
}
</script>

<style>
</style>
