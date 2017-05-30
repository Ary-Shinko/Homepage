<template>
  <div class="login-account">
    <input :class="filled" type="text" v-model="account" tabindex="1">
    <div></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      account: ''
    }
  },
  computed: {
    filled () {
      return this.account === '' ? '' : 'filled'
    }
  }
}
</script>

<style lang="less">
.login-account {
  position: fixed;
  z-index: 15;
  top: 30vh;
  height: 10vh;
  input {
    margin-top: 5vh;
    margin-bottom: 2px;
    width: 50vh;
    height: 5vh;
    border: none;
    border-bottom: 1px solid #333;
    background: transparent;
    font-family: 'Roboto Mono', Arial, sans-serif;
    transition: all .2s ease;
    &:focus {
      margin-bottom: 0;
      outline: none;
      border-bottom: 3px solid #333;
      transition: all .2s ease;
    }
    &+div {
      text-align: left;
    }
    &+div::after {
      .account-mix;
      margin-top: -4.8vh;
      color: #aaa;
      transition: all .2s ease;
    }
    &:focus+div::after {
      .account-mix;
      margin-top: -8.4vh;
      color: #333;
      font-size: 2vh;
      font-weight: 800;
    }
  }
  input.filled {
    &+div::after {
      .account-mix;
      margin-top: -4.8vh;
      opacity: 0;
      transition: all .2s ease;
    }
    &:focus+div::after {
      .account-mix;
      margin-top: -8.4vh;
      font-size: 2vh;
      opacity: 1;
      font-weight: 800;
    }
  }
}

.account-mix {
  content: "Enter your account";
  display: block;
  position: relative;
  z-index: -1;
}
</style>
