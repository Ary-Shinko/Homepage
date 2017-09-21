<template>
  <div class="vcode-register">
    <input :class="[vcodeFilled, vcodeWrongFormat]" type="text" maxlength="4" v-model="vcode" :tabindex="index"  @input="validateInput" @blur="validate">
    <div></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      vcode: '',
      vcodeWrongFormat: ''
    }
  },
  computed: {
    vcodeFilled () {
      return this.vcode === '' ? '' : 'vcode-filled'
    }
  },
  props: ['index'],
  methods: {
    validateInput () {
      if (/^\d{4}$/.test(this.vcode)) {
        this.vcodeWrongFormat = 'vcode-right'
      } else if (this.vcode === '') {
        this.vcodeWrongFormat = 'vcode-undefined'
      } else {
        this.vcodeWrongFormat = 'vcode-wrong-format'
      }
    },
    validate () {
      if (this.vcode === '') {
        this.vcodeWrongFormat = 'vcode-undefined'
        this.$emit('valid', false)
      } else if (/^\d{4}$/.test(this.vcode)) {
        this.vcodeWrongFormat = ''
        this.$emit('valid', this.vcode)
      } else {
        this.vcodeWrongFormat = 'vcode-wrong-format'
        this.$emit('valid', false)
      }
    }
  }
}
</script>

<style lang="less">
.vcode-register {
  position: fixed;
  z-index: 15;
  top: 46.2vh;
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
      .vcode-default;
      content: "Enter the verification code";
      margin-top: -4.8vh;
      color: #aaa;
      transition: all .3s ease;
    }
    &:focus+div::after {
      .vcode-default;
      content: "Enter the verification code you received";
      margin-top: -8.4vh;
      color: #333;
      font-size: 2vh;
      font-weight: 800;
    }
  }
  input.vcode-filled {
    &+div::after {
      .vcode-default;
      content: "Right";
      margin-top: -4.8vh;
      opacity: 0;
      transition: all .3s ease;
    }
    &:focus+div::after {
      .vcode-default;
      content: "Right";
      margin-top: -8.4vh;
      font-size: 2vh;
      opacity: 1;
      color: #00d09c;
      font-weight: 800;
    }
  }
  input.vcode-wrong-format {
    &+div::after, &:focus+div::after {
      .vcode-default;
      content: "Wrong format of verification code";
      margin-top: -8.4vh;
      font-size: 2vh;
      opacity: 1;
      color: #f33;
      font-weight: 800;
    }
  }
  input.vcode-undefined {
    &+div::after, &:focus+div::after {
      .vcode-default;
      content: "Enter the verification code you received";
      margin-top: -8.4vh;
      font-size: 2vh;
      opacity: 1;
      color: #f33;
      font-weight: 800;
    }
  }
}

.vcode-default {
  display: block;
  position: relative;
  z-index: -1;
}
</style>
