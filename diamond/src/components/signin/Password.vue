<template>
  <div class="password">
    <input :class="[passwordFilled, passwordWrongFormat]" type="password" maxlength="20" v-model="password" tabindex="2" @keyup.enter="enter" @blur="validate">
    <div></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      password: '',
      passwordWrongFormat: ''
    }
  },
  computed: {
    passwordFilled () {
      return this.password === '' ? '' : 'password-filled'
    }
  },
  methods: {
    validate () {
      if (/^\S{8,20}$/.test(this.password)) {
        this.passwordWrongFormat = ''
        this.$emit('valid', this.password)
      } else if (this.password !== '') {
        this.passwordWrongFormat = 'password-wrong-format'
        this.$emit('valid', false)
      } else {
        this.passwordWrongFormat = ''
        this.$emit('valid', false)
      }
    },
    enter () {
      this.validate()
      this.$emit('enter')
    }
  }
}
</script>

<style lang="less">
.password {
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
      .password-default;
      content: "Enter your password";
      margin-top: -4.8vh;
      color: #aaa;
      transition: all .3s ease;
    }
    &:focus+div::after {
      .password-default;
      content: "Enter your password";
      margin-top: -8.4vh;
      color: #333;
      font-size: 2vh;
      font-weight: 800;
    }
  }
  input.password-filled {
    &+div::after {
      .password-default;
      content: "Enter your password";
      margin-top: -4.8vh;
      opacity: 0;
      transition: all .3s ease;
    }
    &:focus+div::after {
      .password-default;
      content: "Enter your password";
      margin-top: -8.4vh;
      font-size: 2vh;
      opacity: 1;
      font-weight: 800;
    }
  }
  input.password-wrong-format {
    &+div::after,
    &:focus+div::after {
      .password-default;
      content: "Wrong format";
      margin-top: -8.4vh;
      font-size: 2vh;
      opacity: 1;
      color: #f33;
      font-weight: 800;
    }
  }
}

.password-default {
  display: block;
  position: relative;
  z-index: -1;
}
</style>
