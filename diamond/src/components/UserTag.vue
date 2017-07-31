<template>
  <div class="user-tag">
    <router-link v-if="!authData.name" class="user-tag-name" :to="{ path: '/signin', query: { redirect: '/index' }}">Sign In</router-link>
    <a v-else class="user-tag-name" @click="infoShow = !infoShow">{{ authData.name }}</a>
    <div v-if="infoShow" class="user-tag-info">
      <a href="">ASD</a>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      infoShow: false
    }
  },
  computed: {
    ...mapState([
      'authData'
    ])
  },
  props: ['color', 'back', 'redirect']
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
  top: 1vh;
  right: 3vh;
  height: 8vh;
  width: 5vh;
  background: red;
}
</style>
