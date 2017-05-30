 <template>
  <transition name="fold">
    <div class="login-main">
      <h2>Code Parenthesis</h2>
      <account></account>
      <password @enter=""></password>
      <button tabindex="3" @click="">Sign in</button>
      <a>Forgot password?</a><br>
      <a>Create new account</a>
    </div>
  </transition>
</template>

<script>
import Account from './Account.vue'
import Password from './Password.vue'

export default {
  components: {
    Account,
    Password
  }
}
</script>

<style lang="less">
.login-main {
  position: fixed;
  z-index: 15;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  padding: 10vh 15vh;
  width: 50vh;
  height: 60vh;
  background: #fff;
  box-shadow: 0 0 20px -8px #fff;
  text-align: right;
  h2 {
    text-align: center;
  }
  button {
    margin-top: 25vh;
    margin-bottom: 8vh;
    padding-top: 1.2vh;
    padding-bottom: 1.2vh; 
    width: 100%;
    border: 1px solid #333;
    border-radius: 5px;
    background: transparent;
    box-shadow: 0 1px 10px -4px #000;
    &:hover {
      .button-mix;
    }
    &:active {
      .button-mix;
      opacity: 0.5;
    }
    &:focus {
      outline: none;
    }
  }
  a {
    font-size: 2vh;
    text-align: right;
    line-height: 4vh;
  }
}

.button-mix {
  background: url(../../assets/bg1.jpg);
  color: #fff;
  text-decoration: none;
  text-shadow: 0 0 1px #fff;
  animation: background-hover 2.5s steps(5) infinite;
}
</style>
