<template>
  <div class="signin-forgot">
    <account :class="signinShake" class="signin-forgot-account" @valid="account = arguments[0]"></account>
    <button tabindex="2" @click="checkInput"><del>Reset account</del></button>
    <a tabindex="3" @click="$emit('navigate', 'SigninMain')">Cancel</a>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import Account from './Account.vue'

export default {
  components: {
    Account
  },
  data () {
    return {
      account: false,
      signinShake: '',
      shakeTimer: 0
    }
  },
  methods: {
    checkInput () {
      if (this.account) {
        this.authForgot({
          account: this.account,
          callback: () => {
            this.$emit('navigate', 'SigninMain')
          }
        })
      } else {
        this.signinShake = 'signin-main-input-shake'
        setTimeout(() => {
          this.signinShake = ''
        }, 500)
      }
    },
    ...mapActions([
      'authForgot'
    ])
  }
}
</script>

<style lang="less">
.signin-forgot {
  position: fixed;
  z-index: 15;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 50vh;
  height: 65vh;
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

.signin-forgot-account.account {
  top: 36.5vh;
}
</style>
