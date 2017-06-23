<template>
  <div class="login-account">
    <input :class="[filled, wrongFormat]" type="text" maxlength="40" v-model="account" tabindex="1" @blur="validate">
    <div></div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      account: '',
      wrongFormat: ''
    }
  },
  computed: {
    filled () {
      return this.account === '' ? '' : 'filled'
    }
  },
  methods: {
    validate () {
      if (/^[\w-+](\.?[\w-+])*@[\w-]+(\.[\w-]+)+$/.test(this.account)) {
        this.wrongFormat = ''
        this.cacheAuthorization({
          account: this.account
        })
        this.$emit('valid')
      } else if (this.account !== '') {
        this.wrongFormat = 'wrong-format'
        this.$emit('invalid')
      } else {
        this.wrongFormat = ''
        this.$emit('invalid')
      }
    },
    ...mapActions([
      'cacheAuthorization'
    ])
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
      .account-mix;
      content: "Enter your account";
      margin-top: -4.8vh;
      color: #aaa;
      transition: all .3s ease;
    }
    &:focus+div::after {
      .account-mix;
      content: "Enter your account";
      margin-top: -8.4vh;
      color: #333;
      font-size: 2vh;
      font-weight: 800;
    }
  }
  input.filled {
    &+div::after {
      .account-mix;
      content: "Enter your account";
      margin-top: -4.8vh;
      opacity: 0;
      transition: all .3s ease;
    }
    &:focus+div::after {
      .account-mix;
      content: "Enter your account";
      margin-top: -8.4vh;
      font-size: 2vh;
      opacity: 1;
      font-weight: 800;
    }
  }
  input.wrong-format {
    &+div::after,
    &:focus+div::after {
      .account-mix;
      content: "Wrong format";
      margin-top: -8.4vh;
      font-size: 2vh;
      opacity: 1;
      color: #f33;
      font-weight: 800;
    }
  }
}

.account-mix {
  display: block;
  position: relative;
  z-index: -1;
}
</style>
