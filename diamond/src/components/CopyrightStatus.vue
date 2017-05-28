<template>
  <transition name="fade">
    <div id="copyright" v-show="!navigationLocked && navigationTo === 1">
      <span>Ethan Zhang © 2017</span>
      <span>Last Modified: 2017/5/21</span>
      <span>Completion: ------------------</span>
    </div>
  </transition>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState([
      'navigationTo',
      'navigationLocked'
    ])
  }
}
</script>

<style lang="less">
#copyright {
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

#copyright.fade-enter-active, #copyright.fade-leave-active {
  transition: opacity 1s ease;
}

#copyright.fade-enter, #copyright.fade-leave-to {
  opacity: 0;
}
</style>
