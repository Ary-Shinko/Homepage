<template>
  <div id="login">
    <login-button @click="toggleLogin"></login-button>
    <login-main v-if="loginActivated"></login-main>
    <login-background v-if="loginActivated" @click="toggleLogin"></login-background>
  </div>
</template>

<script>
import LoginButton from './login/LoginButton.vue'
import LoginMain from './login/LoginMain.vue'
import LoginBackground from './login/LoginBackground.vue'

export default {
  components: {
    LoginButton,
    LoginMain,
    LoginBackground
  },
  data () {
    return {
      loginActivated: false
    }
  },
  methods: {
    toggleLogin () {
      this.loginActivated = !this.loginActivated
    }
  }
}
</script>

<style>
#login {
  position: fixed;
  z-index: 10;
}
</style>
