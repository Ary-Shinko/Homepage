<template>
  <transition name="fade">
    <div class="grid-status" v-show="!navigationLocked && navigationTo === 1">
      <span>Arylab © 2017</span>
      <span>Contact Me: ary@arylab.me</span>
      <span>Last Modified: {{ navigationLastModified }}</span>
      <span>Index Version: {{ navigationVersion }}</span>
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
      'navigationVersion'
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
  padding: 0 0.4vh 0.5vh;
  opacity: 0.9;
  background: #5affad;
  span {
    margin-left: 7.9vh;
    margin-right: 1.1vh;
    color: #001f10;
    font-size: 1.5vh;
    &:first-child {
      font-weight: 800;
    }
  }
}
</style>
