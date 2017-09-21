<template>
  <div class="password-register">
    <div v-show="passwordSwitchShow" class="password-show-switch" @click="passwordSwitch">{{ passwordSwitchText }}</div>
    <input ref="inputPassword" v-if="!passwordShow" :class="[passwordFilled, passwordWrongFormat]" type="password" maxlength="20" v-model="password" :tabindex="index" @input="validateInput" @blur="validate" @focus="passwordSwitchShow = true">
    <input ref="inputText" v-if="passwordShow" :class="[passwordFilled, passwordWrongFormat]" type="text" maxlength="20" v-model="password" :tabindex="index" @input="validateInput" @blur="validate" @focus="passwordSwitchShow = true">
    <div></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      password: '',
      passwordWrongFormat: '',
      passwordShow: false,
      passwordSwitchShow: false
    }
  },
  computed: {
    passwordFilled () {
      return this.password === '' ? '' : 'password-filled'
    },
    passwordSwitchText () {
      return this.passwordShow ? '[ hide ]' : '[ show ]'
    }
  },
  props: ['index'],
  methods: {
    validateInput () {
      if (this.password) {
        if (this.password.match(/[^A-Za-z0-9\x21-\x2f\x3a-\x40\x5b-\x60\x7B-\x7F]/)) {
          this.passwordWrongFormat = 'password-invalid-character'
        } else {
          if (this.password.length < 8 || this.password.length > 20) {
            this.passwordWrongFormat = 'password-out-of-range'
          } else {
            let passwordLevel = 0
            if (this.password.match(/[A-Z]/)) {
              passwordLevel++
            }
            if (this.password.match(/[a-z]/)) {
              passwordLevel++
            }
            if (this.password.match(/[0-9]/)) {
              passwordLevel++
            }
            if (this.password.match(/[\x21-\x2f\x3a-\x40\x5b-\x60\x7B-\x7F]/)) {
              passwordLevel++
            }
            if (this.password.length > 12) {
              passwordLevel++
            }
            this.passwordWrongFormat = 'password-right-' + passwordLevel
          }
        }
      } else {
        this.passwordWrongFormat = 'password-undefined'
      }
    },
    validate () {
      if (this.password === '') {
        this.passwordWrongFormat = 'password-undefined'
        this.$emit('valid', false)
      } else if (this.passwordWrongFormat.includes('password-right')) {
        this.passwordWrongFormat = ''
        this.$emit('valid', this.password)
      } else if (this.passwordWrongFormat === '' && this.passwordFilled) {
        this.$emit('valid', this.password)
      } else {
        this.$emit('valid', false)
      }
      setTimeout(() => {
        this.passwordSwitchShow = false
      }, 300)
    },
    passwordSwitch () {
      this.passwordShow = !this.passwordShow
      setTimeout(() => {
        if (this.passwordShow) {
          this.$refs.inputText.focus()
        } else {
          this.$refs.inputPassword.focus()
        }
      }, 300)
    }
  }
}
</script>

<style lang="less">
.password-register {
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
      content: "Enter your password in 8~20 characters";
      margin-top: -8.4vh;
      color: #333;
      font-size: 2vh;
      font-weight: 800;
    }
  }
  input.password-filled {
    &+div::after {
      .password-default;
      content: "Right";
      margin-top: -4.8vh;
      opacity: 0;
      transition: all .3s ease;
    }
    &:focus+div::after {
      .password-default;
      content: "Right";
      margin-top: -8.4vh;
      font-size: 2vh;
      opacity: 1;
      color: #00d09c;
      font-weight: 800;
    }
  }
  input.password-invalid-character {
    &+div::after, &:focus+div::after {
      .password-default;
      content: "Password contains invalid character";
      margin-top: -8.4vh;
      font-size: 2vh;
      opacity: 1;
      color: #f33;
      font-weight: 800;
    }
  }
  input.password-out-of-range {
    &+div::after, &:focus+div::after {
      .password-default;
      content: "Password length is out of range";
      margin-top: -8.4vh;
      font-size: 2vh;
      opacity: 1;
      color: #f33;
      font-weight: 800;
    }
  }
  input.password-undefined {
    &+div::after, &:focus+div::after {
      .password-default;
      content: "Enter your password in 8~20 characters";
      margin-top: -8.4vh;
      font-size: 2vh;
      opacity: 1;
      color: #f33;
      font-weight: 800;
    }
  }
  input.password-right-1 {
    &+div::after, &:focus+div::after {
      .password-default;
      content: "Password strength level: 1";
      margin-top: -8.4vh;
      font-size: 2vh;
      opacity: 1;
      color: #00d09c;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAMSURBVBhXY/hvbAwAA5oBZms3WEIAAAAASUVORK5CYII=) no-repeat scroll 100% 0%/contain;
      font-weight: 800;
    }
  }
  input.password-right-2 {
    &+div::after, &:focus+div::after {
      .password-default;
      content: "Password strength level: 2";
      margin-top: -8.4vh;
      font-size: 2vh;
      opacity: 1;
      color: #00d09c;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAMSURBVBhXY/j/iQEABOUB8pypNlQAAAAASUVORK5CYII=) no-repeat scroll 100% 0%/contain;
      font-weight: 800;
    }
  }
  input.password-right-3 {
    &+div::after, &:focus+div::after {
      .password-default;
      content: "Password strength level: 3";
      margin-top: -8.4vh;
      font-size: 2vh;
      opacity: 1;
      color: #00d09c;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAMSURBVBhXY9j1Pw0ABJYCIK64JOwAAAAASUVORK5CYII=) no-repeat scroll 100% 0%/contain;
      font-weight: 800;
    }
  }
  input.password-right-4 {
    &+div::after, &:focus+div::after {
      .password-default;
      content: "Password strength level: 4";
      margin-top: -8.4vh;
      font-size: 2vh;
      opacity: 1;
      color: #00d09c;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAMSURBVBhXYwh7kQYAAzwBpX6abq4AAAAASUVORK5CYII=) no-repeat scroll 100% 0%/contain;
      font-weight: 800;
    }
  }
  input.password-right-5 {
    &+div::after, &:focus+div::after {
      .password-default;
      content: "Password strength level: MAX";
      margin-top: -8.4vh;
      font-size: 2vh;
      opacity: 1;
      color: #00d09c;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAMSURBVBhXYxBfnAwAAfIBHrl5uQgAAAAASUVORK5CYII=) no-repeat scroll 100% 0%/contain;
      font-weight: 800;
    }
  }
}

.password-default {
  display: block;
  position: relative;
  z-index: -1;
}

.password-show-switch {
  position: absolute;
  margin-top: 6vh;
  right: 0;
  user-select: none;
  cursor: pointer;
}
</style>
