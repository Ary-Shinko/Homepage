<template>
  <div class="phone-register">
    <p v-if="phonePrepared === 'phone-send-activated' && !verificationClicked" class="phone-send-notice">We will send a verification code to the phone number <span>{{ phone }}</span>.<br>
    Please confirm the number and make sure it could receive SMS.<br>
    Click "verify" button to continue.</p>
    <div v-if="!verificationClicked" class="phone-send-button" ref="phoneSendButton" tabindex="5" :class="[phonePrepared]" @click="phoneVerify" @keyup.enter="phoneVerify">[ verify ]</div>
    <input ref="phoneInput" :class="[phoneFilled, phoneWrongFormat]" type="text" v-model="phone" :tabindex="index" @input="validateInput" @blur="validate" @keyup.enter="phoneEnter">
    <div></div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      phone: '',
      phoneWrongFormat: '',
      verificationClicked: false
    }
  },
  computed: {
    phoneFilled () {
      return this.phone === '' ? '' : 'phone-filled'
    },
    phonePrepared () {
      return this.phone.match(/^1\d{10}$/) && !this.phone.match(/(\d)\1{5}/) && !this.phone.match(/123456/) ? 'phone-send-activated' : 'phone-send-disabled'
    }
  },
  props: ['index'],
  methods: {
    ...mapActions([
      'postMessage',
      'authRequestVcode'
    ]),
    validateInput () {
      if (this.phone === '') {
        this.phoneWrongFormat = 'phone-undefined'
      } else if (this.phone.match(/^1\d{10}$/) && !this.phone.match(/(\d)\1{5}/) && !this.phone.match(/123456/)) {
        this.phoneWrongFormat = 'phone-right'
      } else {
        this.phoneWrongFormat = 'phone-wrong-format'
      }
    },
    validate () {
      if (this.phone === '') {
        this.phoneWrongFormat = 'phone-undefined'
        this.$emit('valid', false)
      } else if (this.phoneWrongFormat === 'phone-right') {
        this.phoneWrongFormat = ''
        this.$emit('valid', this.phone)
      } else if (this.phoneWrongFormat === '' && this.phoneFilled) {
        this.$emit('valid', this.phone)
      } else {
        this.$emit('valid', false)
      }
    },
    phoneVerify () {
      if (this.phonePrepared === 'phone-send-activated' && !this.verificationClicked) {
        this.authRequestVcode({
          data: {
            phone: this.phone
          },
          self: this
        })
      }
    },
    phoneEnter () {
      this.$refs.phoneSendButton.focus()
      if (this.phone.match(/^1\d{10}$/) && !this.phone.match(/(\d)\1{5}/) && !this.phone.match(/123456/)) {
        this.phoneVerify()
      }
    }
  }
}
</script>

<style lang="less">
.phone-register {
  position: fixed;
  z-index: 15;
  top: 37.5vh;
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
      .phone-default;
      content: "Enter your phone number";
      margin-top: -4.8vh;
      color: #aaa;
      transition: all .3s ease;
    }
    &:focus+div::after {
      .phone-default;
      content: "Enter your phone number within 11 digits";
      margin-top: -8.4vh;
      color: #333;
      font-size: 2vh;
      font-weight: 800;
    }
  }
  input.phone-filled {
    &+div::after {
      .phone-default;
      content: "Right";
      margin-top: -4.8vh;
      opacity: 0;
      transition: all .3s ease;
    }
    &:focus+div::after {
      .phone-default;
      content: "Right";
      margin-top: -8.4vh;
      font-size: 2vh;
      opacity: 1;
      color: #00d09c;
      font-weight: 800;
    }
  }
  input.phone-wrong-format {
    &+div::after, &:focus+div::after {
      .phone-default;
      content: "It looks like not a valid phone number";
      margin-top: -8.4vh;
      font-size: 2vh;
      opacity: 1;
      color: #f33;
      font-weight: 800;
    }
  }
  input.phone-undefined {
    &+div::after, &:focus+div::after {
      .phone-default;
      content: "Enter your phone number within 11 digits";
      margin-top: -8.4vh;
      font-size: 2vh;
      opacity: 1;
      color: #f33;
      font-weight: 800;
    }
  }
  input.phone-right {
    &+div::after, &:focus+div::after {
      .phone-default;
      content: "Right";
      margin-top: -8.4vh;
      font-size: 2vh;
      opacity: 1;
      color: #00d09c;
      font-weight: 800;
    }
  }
}

.phone-default {
  display: block;
  position: relative;
  z-index: -1;
}

.phone-send-button {
  position: absolute;
  margin-top: 6vh;
  right: 0;
  transition: color .3s ease;
  user-select: none;
  &.phone-send-activated {
    color: #000;
    cursor: pointer;
    &:focus {
      color: #00d09c;
      outline: none;
    }
  }
  &.phone-send-disabled {
    color: #aaa;
    cursor: not-allowed;
    &:focus {
      color: #f33;
      outline: none;
    }
  }
}

.phone-send-notice {
  position: fixed;
  z-index: 15;
  margin-top: 11.5vh;
  width: 50vh;
  color: #aaa;
  font-size: 2vh;
  font-weight: 800;
  text-align: left;
  span {
    color: #00d09c;
  }
}
</style>
