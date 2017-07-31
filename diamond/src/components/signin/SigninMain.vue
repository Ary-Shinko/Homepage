<template>
  <div class="signin-main">
    <account :class="signinShake" @valid="account = arguments[0]"></account>
    <password :class="signinShake" @enter="checkInput" @valid="password = arguments[0]"></password>
    <button tabindex="3" @click="checkInput">Sign in</button>
    <a tabindex="4" @click="$emit('navigate', 'SigninForget')">Forgot password?</a><br>
    <a tabindex="5" @click="$emit('navigate', 'SigninCreate')">Create new account</a>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

import Account from './Account.vue'
import Password from './Password.vue'

export default {
  components: {
    Account,
    Password
  },
  data () {
    return {
      account: false,
      password: false,
      signinShake: '',
      shakeTimer: 0
    }
  },
  watch: {
    authToken (newToken) {
      if (newToken !== '') {
        this.$router.replace(this.$route.query.redirect)
        window.localStorage.setItem('authId', this.authData.id)
        window.localStorage.setItem('authToken', this.authData.token)
        window.localStorage.setItem('authName', this.authData.name)
        window.localStorage.setItem('authIcon', this.authData.icon)
      }
    }
  },
  computed: {
    ...mapState([
      'authData'
    ]),
    authToken () {
      return this.authData.token
    }
  },
  methods: {
    checkInput () {
      if (this.account && this.password) {
        this.requestAuthorization({
          id: this.account,
          password: this.password
        })
      } else {
        this.shakeWindow()
      }
    },
    shakeWindow () {
      clearTimeout(this.shakeTimer)
      this.signinShake = 'signin-main-input-shake'
      this.shakeTimer = setTimeout(() => {
        this.signinShake = ''
      }, 500)
    },
    ...mapActions([
      'requestAuthorization'
    ])
  }
}
</script>

<style lang="less">
.signin-main {
  position: fixed;
  z-index: 15;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 50vh;
  height: 60vh;
  text-align: right;
  button {
    margin-top: 35vh;
    margin-bottom: 3.8vh;
    padding-top: 1.2vh;
    padding-bottom: 1.2vh; 
    width: 100%;
    border: 1px solid #333;
    background: transparent;
    box-shadow: 0 1px 10px -4px #000;
    &:hover {
      .signin-main-button-press;
    }
    &:active {
      .signin-main-button-press;
      opacity: 0.5;
    }
    &:focus {
      outline: 2px solid #000;
    }
  }
  a {
    font-size: 2vh;
    text-align: right;
    line-height: 4vh;
  }
}

.signin-main-button-press {
  background: url(../../../static/bg1.jpg);
  color: #fff;
  text-decoration: none;
  text-shadow: 0 0 1px #fff;
  animation: random-blink 2.5s steps(5) infinite;
}

.signin-main-input-shake {
  animation: shake .5s linear forwards;
}
</style>
