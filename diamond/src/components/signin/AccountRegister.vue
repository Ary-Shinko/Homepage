<template>
  <div class="account-register">
    <input :class="[accountFilled, accountWrongFormat]" type="text" maxlength="40" v-model="account" :tabindex="index"  @input="validateInput" @blur="validate">
    <div></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      account: '',
      accountWrongFormat: ''
    }
  },
  computed: {
    accountFilled () {
      return this.account === '' ? '' : 'account-filled'
    }
  },
  props: {
    index: {
      default: '1'
    }
  },
  methods: {
    validateInput () {
      if (/^[\w-+](\.?[\w-+])*@[\w-]+(\.[\w-]+)+$/.test(this.account)) {
        this.accountWrongFormat = 'account-right'
      } else if (this.account === '') {
        this.accountWrongFormat = 'account-undefined'
      } else {
        this.accountWrongFormat = 'account-wrong-format'
      }
    },
    validate () {
      if (this.account === '') {
        this.accountWrongFormat = 'account-undefined'
        this.$emit('valid', false)
      } else if (/^[\w-+](\.?[\w-+])*@[\w-]+(\.[\w-]+)+$/.test(this.account)) {
        this.accountWrongFormat = ''
        this.$emit('valid', this.account)
      } else {
        this.accountWrongFormat = 'account-wrong-format'
        this.$emit('valid', false)
      }
    }
  }
}
</script>

<style lang="less">
.account-register {
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
      .account-default;
      content: "Enter your email address";
      margin-top: -4.8vh;
      color: #aaa;
      transition: all .3s ease;
    }
    &:focus+div::after {
      .account-default;
      content: "Enter your email address as account";
      margin-top: -8.4vh;
      color: #333;
      font-size: 2vh;
      font-weight: 800;
    }
  }
  input.account-filled {
    &+div::after {
      .account-default;
      content: "Right";
      margin-top: -4.8vh;
      opacity: 0;
      transition: all .3s ease;
    }
    &:focus+div::after {
      .account-default;
      content: "Right";
      margin-top: -8.4vh;
      font-size: 2vh;
      opacity: 1;
      color: #00d09c;
      font-weight: 800;
    }
  }
  input.account-wrong-format {
    &+div::after, &:focus+div::after {
      .account-default;
      content: "It looks like not a valid email address";
      margin-top: -8.4vh;
      font-size: 2vh;
      opacity: 1;
      color: #f33;
      font-weight: 800;
    }
  }
  input.account-undefined {
    &+div::after, &:focus+div::after {
      .account-default;
      content: "Enter your email address as account";
      margin-top: -8.4vh;
      font-size: 2vh;
      opacity: 1;
      color: #f33;
      font-weight: 800;
    }
  }
}

.account-default {
  display: block;
  position: relative;
  z-index: -1;
}
</style>
