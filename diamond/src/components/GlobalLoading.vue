<template>
  <div v-if="globalLoadingShow" class="global-loading">
    <div id="globalLoadingFocus" class="global-loading-focus"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      globalLoadingShow: false
    }
  },
  mounted () {
    if (window.location.href.match(/^https:\/\/arylab.me\/$/)) {
      this.globalLoadingShow = true
      window.addEventListener('load', () => {
        document.getElementById('globalLoadingFocus').classList.add('global-loading-loaded')
        setTimeout(() => {
          this.globalLoadingShow = false
        }, 4000)
      }, false)
    }
  }
}
</script>

<style lang="less">
.global-loading {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.global-loading-focus {
  position: fixed;
  z-index: 100;
  top: -264vh;
  left: -162vh;
  width: 36vh;
  height: 8vh;
  border-radius: 310vh;
  border: 300vh solid rgba(0, 0, 0, 0.9);
  transform: rotate(45deg);
  pointer-events: auto;
}

.global-loading-loaded {
  animation: spread-loading 4s ease forwards;
  pointer-events: none;
}

@keyframes spread-loading {
  0% {
    top: -264vh;
    left: -162vh;
    width: 36vh;
    height: 8vh;
    border: 300vh solid rgba(0, 0, 0, 0.9);
  }
  35% {
    top: -264vh;
    left: -162vh;
    width: 36vh;
    height: 8vh;
    border: 300vh solid rgba(0, 0, 0, 1);
  }
  40% {
    top: -264vh;
    left: -162vh;
    width: 36vh;
    height: 8vh;
    border: 300vh solid rgba(0, 0, 0, .8);
  }
  100% {
    top: -420vh;
    left: -480vh;
    width: 800vh;
    height: 520vh;
  }
}
</style>
