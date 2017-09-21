<template>
  <div class="message-tip">
    <transition name="fold">
      <div v-if="messageShow" :key="messageTimer" class="message-tip-box" @click="closeMessage">
        <p class="message-tip-data">{{ messageData }}</p>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState([
      'messageShow',
      'messageData',
      'messageTimer'
    ])
  },
  methods: {
    ...mapActions([
      'closeMessage'
    ])
  }
}
</script>

<style lang="less">
.message-tip-box {
  position: fixed;
  z-index: 100;
  top: 3vh;
  left: 0;
  right: 0;
  height: 10vh;
  background: linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.8) 30%, rgba(0, 0, 0, 0.85) 70%);
}

.message-tip-data {
  text-align: center;
  font-size: 3vh;
  font-weight: bolder;
  color: #f66;
}
</style>
