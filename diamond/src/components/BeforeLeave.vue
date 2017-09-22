<template>
  <div class="leave-hint">
    <transition name="fade">
      <div v-if="leaveHintShow" class="leave-hint-background">
        <div class="leave-hint-center"></div>
        <p class="leave-hint-info">Leaving now without save your data?<br>
        All your unsaved changes will be lost.</p>
        <p class="leave-hint-yes" @click="confirmExit">Continue leaving</p>
        <p class="leave-hint-no" @click="hideLeaveHint">Cancel</p>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState([
      'leaveHintShow'
    ])
  },
  props: [
    'nextHandle'
  ],
  methods: {
    ...mapMutations({
      hideLeaveHint: 'HIDE_LEAVE_HINT'
    }),
    confirmExit () {
      this.hideLeaveHint()
      this.nextHandle()
    }
  }
}
</script>

<style lang="less">
.leave-hint {
  position: fixed;
  z-index: 1000;
  .leave-hint-background {
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(149, 255, 220, 0.9);
  }
  .leave-hint-center {
    position: fixed;
    z-index: 2;
    top: 30vh;
    left: ~'calc((100vw - 40vh) / 2)';
    width: 40vh;
    height: 40vh;
    box-shadow: 0 0 3vh -.5vh #000;
    animation: spin-square 4s ease infinite;
    background-image: url(../assets/grid/leave.png);
    background-size: contain;
  }
  .leave-hint-info {
    position: fixed;
    z-index: 2;
    color: #333;
    top: 40vh;
    left: ~'calc((100vw - 12vh) / 2)';
    font-size: 3vh;
    user-select: none;
    cursor: default;
  }
  .leave-hint-yes {
    position: fixed;
    z-index: 2;
    color: #333;
    top: 50vh;
    left: ~'calc((100vw - 12vh) / 2)';
    font-size: 3vh;
    font-weight: 800;
    user-select: none;
    cursor: pointer;
    &:hover {
      color: #f33;
    }
  }
  .leave-hint-no {
    position: fixed;
    z-index: 2;
    color: #333;
    top: 53.8vh;
    left: ~'calc((100vw - 12vh) / 2)';
    font-size: 3vh;
    font-weight: 800;
    user-select: none;
    cursor: pointer;
    &:hover {
      color: #00d09c;
    }
  }
}
</style>
