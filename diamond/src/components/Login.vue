<template>
  <div id="login">
    <a @click="loginActivated = !loginActivated">Sign in</a>
    <transition name="fold">
      <div class="login-bg" v-if="loginActivated"></div>
    </transition>
    <transition name="fold">
      <div class="login-wrapper" v-if="loginActivated">
        <div class="login">
          <h2>Code Parenthesis</h2>
          <input class="login-account" type="text" v-model="accountInput">
          <div :placeholder="accountPlaceholder"></div>
          <input class="login-password" type="password" v-model="passwordInput">
          <div :placeholder="passwordPlaceholder"></div>
          <a>Sign in</a>
          <a>Forgot password?</a>
          <a>Create new account</a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      accountInput: '',
      passwordInput: '',
      loginActivated: true
    }
  },
  computed: {
    accountPlaceholder () {
      return this.accountInput === '' ? 'Enter your account' : ''
    },
    passwordPlaceholder () {
      return this.passwordInput === '' ? 'Enter your password' : ''
    }
  }
}
</script>

<style lang="less">
#login {
  position: fixed;
  z-index: 12;
  &>a {
    position: fixed;
    top: 1vh;
    right: 3vh;
    z-index: 10;
  }
  .login-bg {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.8);
  }
  .login-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 80vh;
    height: 80vh;
    margin: auto;
    box-shadow: 0 1px 1px -1px #333, 0 0 20px -6px #333;
    background: #fff;
  }
}

.login {
  width: 50vh;
  margin: auto;
  text-align: center;
  h2 {
    margin-top: 12vh;
  }
  input {
    width: 50vh;
    height: 5vh;
    margin-top: 5vh;
    margin-bottom: 2px;
    border: none;
    border-bottom: 1px solid #333;
    transition: all .3s ease;
    background: transparent;
    font-size: 2.4vh;
    font-family: 'Roboto Mono', Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    &:focus {
      margin-bottom: 0;
      outline: none;
      border-bottom: 3px solid #333;
    }
  }
  a {
    float: right;
    clear: both;
    font-size: 2vh;
    text-align: right;
    line-height: 4vh;
    &:first-of-type {
      display: block;
      padding: 1vh 3vh;
      margin: 7vh 0 8vh auto;
      width: 44vh;
      border: 1px solid #333;
      border-radius: 5px;
      box-shadow: 0 1px 10px -4px #000;
      font-size: 2.4vh;
      text-align: center;
      line-height: 3vh;
      &:hover {
        color: #fff;
        text-decoration: none;
        text-shadow: 0 0 5px #fff;
        background: url(../assets/bg1.jpg);
        animation: background-hover 2.5s steps(5) infinite;
      }
    }
  }
}

.login-account+div::after {
  content: attr(placeholder);
  position: fixed;
  z-index: -1;
  margin:-4.6vh auto auto -25vh;
  color: #aaa;
  transition: all .3s ease;
}

.login-account:focus+div::after {
  content: "Enter your account";
  position: fixed;
  z-index: -1;
  margin:-8vh auto auto -25vh;
  color: #333;
  font-size: 2vh;
  font-weight: 800;
}

.login-password+div::after {
  content: attr(placeholder);
  position: fixed;
  z-index: -1;
  margin:-4.6vh auto auto -25vh;
  color: #aaa;
  transition: all .3s ease;
}

.login-password:focus+div::after {
  content: "Enter your password";
  position: fixed;
  z-index: -1;
  margin:-8vh auto auto -25vh;
  color: #333;
  font-size: 2vh;
  font-weight: 800;
}


</style>
