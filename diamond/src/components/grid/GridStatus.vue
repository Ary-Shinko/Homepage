<template>
  <transition name="fade">
    <div class="grid-status" v-show="!navigationLocked && navigationTo === 1">
      <span>Ethan Zhang © 2017</span>
      <span>Last Modified: {{ navigationLastModified }}</span>
      <span>Completion: {{ navigationCompletion }}</span>
    </div>
  </transition>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState([
      'navigationTo',
      'navigationLocked',
      'navigationLastModified',
      'navigationCompletion'
    ])
  }
}
</script>

<style lang="less">
.grid-status {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  padding: 0.2vh 0.3vh 0.5vh;
  opacity: 0.9;
  background: #f33;
  span {
    margin-left: 7.9vh;
    color: #eee;
    font-size: 1.5vh;
  }
}
</style>
