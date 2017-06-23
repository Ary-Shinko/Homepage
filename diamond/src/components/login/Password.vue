<template>
  <div class="login-password">
    <input :class="[filled, wrongFormat]" type="password" maxlength="20" v-model="password" tabindex="2" @keyup.enter="enter" @blur="validate">
    <div></div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      password: '',
      wrongFormat: ''
    }
  },
  computed: {
    filled () {
      return this.password === '' ? '' : 'filled'
    }
  },
  methods: {
    validate () {
      if (/^\S{8,20}$/.test(this.password)) {
        this.wrongFormat = ''
        this.cacheAuthorization({
          password: this.password
        })
        this.$emit('valid')
      } else if (this.password !== '') {
        this.wrongFormat = 'wrong-format'
        this.$emit('invalid')
      } else {
        this.wrongFormat = ''
        this.$emit('invalid')
      }
    },
    enter () {
      this.validate()
      this.$emit('enter')
    },
    ...mapActions([
      'cacheAuthorization'
    ])
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
      content: "Enter your password";
      margin-top: -4.8vh;
      color: #aaa;
      transition: all .3s ease;
    }
    &:focus+div::after {
      .password-mix;
      content: "Enter your password";
      margin-top: -8.4vh;
      color: #333;
      font-size: 2vh;
      font-weight: 800;
    }
  }
  input.filled {
    &+div::after {
      .password-mix;
      content: "Enter your password";
      margin-top: -4.8vh;
      opacity: 0;
      transition: all .3s ease;
    }
    &:focus+div::after {
      .password-mix;
      content: "Enter your password";
      margin-top: -8.4vh;
      font-size: 2vh;
      opacity: 1;
      font-weight: 800;
    }
  }
  input.wrong-format {
    &+div::after,
    &:focus+div::after {
      .password-mix;
      content: "Wrong format";
      margin-top: -8.4vh;
      font-size: 2vh;
      opacity: 1;
      color: #f33;
      font-weight: 800;
    }
  }
}

.password-mix {
  display: block;
  position: relative;
  z-index: -1;
}
</style>
