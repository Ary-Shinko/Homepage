<template>
  <div class="user-tag">
    <router-link v-if="!authData.name" class="user-tag-name" :to="{ path: '/signin', query: { redirect: $route.path }}">Sign In</router-link>
    <a v-else class="user-tag-name" @click="toggleInfoShow">{{ authData.name }}</a>
    <transition name="slide-down">
      <div v-if="infoShow" class="user-tag-info">
        <br>
        <a href="#"><del>Configurations</del></a><br>
        <a href="#"><del>Messages</del></a><br>
        <a @click="exit">Exit</a><br>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      infoShow: false
    }
  },
  props: ['color', 'back', 'redirect', 'nameOnly'],
  computed: {
    ...mapState([
      'authData'
    ])
  },
  methods: {
    exit () {
      this.authExit()
      if (this.$route.path !== '/solitaire') {
        this.$router.push('/logout')
      }
    },
    ...mapActions([
      'authExit'
    ]),
    toggleInfoShow () {
      if (!this.nameOnly) {
        this.infoShow = !this.infoShow
      }
    }
  },
  watch: {
    infoShow (showed) {
      if (showed) {
        setTimeout(() => {
          document.addEventListener('click', this.toggleInfoShow, false)
        }, 0)
      } else {
        document.removeEventListener('click', this.toggleInfoShow, false)
      }
    }
  }
}
</script>

<style lang="less">
.user-tag-name {
  position: fixed;
  z-index: 15;
  top: 1vh;
  right: 3vh;
}

.user-tag-info {
  position: fixed;
  z-index: 14;
  top: 0;
  right: 0;
  padding: 2vh 3vh;
  text-align: right;
  font-size: 0.5vh;
}
</style>
