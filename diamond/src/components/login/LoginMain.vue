<template>
  <div class="login-main">
    <account :class="shake" @valid="accountValid = true" @invalid="accountValid = false"></account>
    <password :class="shake" @enter="checkInput" @valid="passwordValid = true" @invalid="passwordValid = false"></password>
    <button tabindex="3" @click="checkInput">Sign in</button>
    <a>Forgot password?</a><br>
    <a>Create new account</a>
  </div>
</template>

<script>
import Account from './Account.vue'
import Password from './Password.vue'
import { mapActions } from 'vuex'

export default {
  components: {
    Account,
    Password
  },
  data () {
    return {
      accountValid: false,
      passwordValid: false,
      shake: ''
    }
  },
  methods: {
    checkInput () {
      let that = this
      if (this.accountValid && this.passwordValid) {
        this.requestAuthorization()
      } else {
        this.shake = 'shake'
        setTimeout(function () {
          that.shake = ''
        }, 500)
      }
    },
    ...mapActions([
      'requestAuthorization'
    ])
  }
}
</script>

<style lang="less">
.login-main {
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
    // border-radius: 5px;
    background: transparent;
    box-shadow: 0 1px 10px -4px #000;
    &:hover {
      .button-mix;
    }
    &:active {
      .button-mix;
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

.button-mix {
  background: url(../../assets/bg1.jpg);
  color: #fff;
  text-decoration: none;
  text-shadow: 0 0 1px #fff;
  animation: background-hover 2.5s steps(5) infinite;
}

.shake {
  animation: shake .5s linear forwards;
}

@keyframes shake {
  0%{
    transform: translateX(0vh);
  }
  20%{
    transform: translateX(-5vh);
  }
  40%{
    transform: translateX(5vh);
  }
  60%{
    transform: translateX(-3vh);
  }
  80%{
    transform: translateX(3vh);
  }
  100% {
    transform: translateX(0vh);
  }
}
</style>
