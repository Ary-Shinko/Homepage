<template>
  <div class="login-password">
    <input :class="filled" type="password" v-model="password" tabindex="2" @keyup.enter="$emit('enter')">
    <div></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      password: ''
    }
  },
  computed: {
    filled () {
      return this.password === '' ? '' : 'filled'
    }
  }
}
</script>

<style lang="less">
.login-password {
  position: fixed;
  z-index: 15;
  top: 39vh;
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
    transition: all .3s ease;
    &:focus {
      margin-bottom: 0;
      outline: none;
      border-bottom: 3px solid #333;
      transition: all .3s ease;
    }
    &+div {
      text-align: left;
    }
    &+div::after {
      .password-mix;
      margin-top: -4.8vh;
      color: #aaa;
      transition: all .3s ease;
    }
    &:focus+div::after {
      .password-mix;
      margin-top: -8.4vh;
      color: #333;
      font-size: 2vh;
      font-weight: 800;
    }
  }
  input.filled {
    &+div::after {
      .password-mix;
      margin-top: -4.8vh;
      opacity: 0;
      transition: all .3s ease;
    }
    &:focus+div::after {
      .password-mix;
      margin-top: -8.4vh;
      font-size: 2vh;
      opacity: 1;
      font-weight: 800;
    }
  }
}

.password-mix {
  content: "Enter your password";
  display: block;
  position: relative;
  z-index: -1;
}
</style>
