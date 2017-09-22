<template>
  <div class="signin-main signin-create">
    <div v-show="!registerCongs">
      <account-register class="signin-create-account" index="1" :class="signinShake" @valid="account = arguments[0]"></account-register>
      <password-register class="signin-create-password" index="2" :class="signinShake" @valid="password = arguments[0]"></password-register>
      <name-register class="signin-create-name" index="3" :class="signinShake" @valid="name = arguments[0]"></name-register>
      <phone-register class="signin-create-phone" index="4" :class="signinShake" @valid="phone = arguments[0]" @sent="vcodeSent = true"></phone-register>
      <vcode-register v-show="vcodeSent" class="signin-create-vcode" index="6" :class="signinShake" @valid="vcode = arguments[0]"></vcode-register>
      <div v-show="vcodeSent" class="signin-create-checkbox" :class="signinShake">
        <input type="checkbox" id="agreementAccepted" v-model="accepted">
        <label :class="[checkboxRed]" for="agreementAccepted" tabindex="7" @focus="checkboxRed = ''">I have read and accepted<br>the "<a href="#" tabindex="8"><del>Arylab user agreement</del></a>"</label>
        <div :class="[checkboxRed]"></div>
        <span v-show="accepted">√</span>
      </div>
      <button class="signin-create-button" tabindex="9" @click="checkInput">Create account</button>
      <a class="signin-create-back" tabindex="10" @click="$emit('navigate', 'SigninMain')">Cancel</a>
    </div>
    <div v-show="registerCongs" class="signin-create-success">
      <div class="signin-background-1a signin-background-center g-grid-unit signin-create-success-center"></div>  
      <div class="signin-create-success-info">
        <p><span>Congratulations {{ name }}!</span></p><br>
        <p>Your registration has been successfully submitted.</p>
        <p>To fill additional infomation please check the user menu.</p>
        <p>{{ registerCongs }}</p>
      </div>
      <button class="signin-create-button" tabindex="10" @click="getStart">Start exploring</button>
      <div class="signin-create-success-bg"></div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import AccountRegister from './AccountRegister.vue'
import PasswordRegister from './PasswordRegister.vue'
import NameRegister from './NameRegister.vue'
import PhoneRegister from './PhoneRegister.vue'
import VcodeRegister from './VcodeRegister.vue'

export default {
  components: {
    AccountRegister,
    PasswordRegister,
    NameRegister,
    PhoneRegister,
    VcodeRegister
  },
  data () {
    return {
      account: false,
      password: false,
      name: false,
      phone: false,
      vcode: false,
      accepted: false,
      vcodeSent: false,
      signinShake: '',
      checkboxRed: '',
      registerCongs: ''
    }
  },
  methods: {
    checkInput () {
      if (!this.accepted && this.vcodeSent) {
        this.checkboxRed = 'signin-create-checkbox-red'
      }
      if (this.account && this.password && this.name && this.phone && this.vcode && this.accepted) {
        this.authCreateAccount({
          registgerData: {
            account: this.account,
            password: this.password,
            name: this.name,
            phone: this.phone,
            vcode: this.vcode
          },
          callback: message => {
            this.registerCongs = message
          }
        })
      } else {
        this.signinShake = 'signin-main-input-shake'
        setTimeout(() => {
          this.signinShake = ''
        }, 500)
      }
    },
    getStart () {
      this.authSignin({
        account: this.account,
        password: this.password
      })
    },
    ...mapActions([
      'authCreateAccount',
      'authSignin'
    ])
  },
  computed: {
    ...mapState([
      'authData'
    ]),
    authToken () {
      return this.authData.token
    }
  },
  watch: {
    authToken (newToken) {
      if (newToken !== '') {
        this.$router.replace(this.$route.query.redirect)
        window.localStorage.setItem('authAccount', this.authData.account)
        window.localStorage.setItem('authName', this.authData.name)
        window.localStorage.setItem('authPhone', this.authData.phone)
        window.localStorage.setItem('authToken', this.authData.token)
        window.localStorage.setItem('authAvatar', this.authData.avatar)
      }
    }
  }
}
</script>

<style lang="less">
.signin-create {
  height: 100vh;
  .signin-create-account {
    top: 10vh;
  }
  .signin-create-password {
    top: 19vh;
  }
  .signin-create-name {
    top: 28vh;
  }
  .signin-create-phone {
    top: 37vh;
  }
  .signin-create-button {
    position: absolute;
    z-index: 15;
    left: 0;
    top: 40vh;
  }
  .signin-create-agreement {
    position: absolute;
    z-index: 15;
    right: 0;
    top: 81vh;
  }
  .signin-create-back {
    position: absolute;
    z-index: 15;
    right: 0;
    top: 84vh;
  }
  .signin-create-checkbox {
    position: absolute;
    z-index: 15;
    width: 50vh;
    top: 60vh;
    height: 6vh;
    text-align: left;
    user-select: none;
    input {
      visibility: hidden;
    }
    label {
      display: block;
      padding-left: 7vh;
      color: #333;
      font-size: 2vh;
      line-height: 2.5vh;
      transition: all .3s ease;
      &:focus {
        outline: none;
      }
      a {
        font-weight: 800;
        line-height: 2.5vh;
        color: #000;
        transition: all .3s ease;
      }
      &.signin-create-checkbox-red {
        color: #f33;
        a {
          color: #e33;
        }
      }
    }
    div {
      position: relative;
      z-index: -2;
      margin-top: -4.6vh;
      width: 4.2vh;
      height: 4.2vh;
      border: 1px solid #333;
      box-shadow: 0 1px 10px -4px #000;
      transition: all .3s ease;
    }
    &:hover div {
      background: #3fa;
    }
    &:hover div.signin-create-checkbox-red {
      background: #f66;
    }
    span {
      display: inline-block;
      position: absolute;
      z-index: -1;
      margin-top: -5.8vh;
      margin-left: 0.8vh;
      font-size: 5vh;
    }
  }
}

input::-ms-clear {
  display: none;
}

input::-ms-reveal {
  display: none;
}

.signin-create-success {
  position: fixed;
  width: 100vw;
  height: 100vh;
  font-size: 2.4vh;
  font-weight: 800;
  .signin-create-success-center {
    position: fixed;
    width: 80vh;
    height: 80vh;
    background: url(../../assets/grid/leave.png);
    background-size: contain;
    animation: rotate-spin 20s ease infinite;
  }
  button {
    margin-top: 26vh;
    width: 50vh;
  }
  p {
    margin: 1vh 0;
  }
  .signin-create-success-info {
    position: fixed;
    z-index: 5;
    left: 0;
    margin-top: 35vh;
    width: 100vw;
    text-align: center;
  }
  span {
    font-size: 3.6vh;
    color: #f33;
  }
}

.signin-create-success-bg {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  animation: level9 3s ease infinite;
}
</style>
