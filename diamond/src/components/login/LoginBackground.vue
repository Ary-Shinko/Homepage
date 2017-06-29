<template>
  <div class="signin-bg">
    <div class="signin-1">
      <div class="signin-logo">
        <span>{ }</span>
      </div>
    </div>
    <div class="signin-2"></div>
    <div class="signin-3"></div>
    <div class="signin-4"></div>
    <div class="signin-5"></div>
    <div class="signin-6"></div>
    <div class="signin-7"></div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less">
@import url(../../assets/global.less);

.signin-bg {
  width: 100vw;
  height: 100vh;
  background: #fff;
}

.signin-logo {
  position: absolute;
  top: -15vh;
  right: 0;
  bottom: 0;
  left: -5vh;
  margin: auto;
  font-size: 32vh;
  font-weight: 800;
  letter-spacing: -9.3vh;
  text-align: center;
  transform: rotate(-45deg);
  color: #eee;
  cursor: default;
}

.signin-1 {
  .grid-unit;
  position: absolute;
  z-index: 3;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 80vh;
  height: 80vh;
  background: #fff;
  overflow: hidden;
}

.signin-2 {
  .grid-unit;
  position: absolute;
  z-index: 2;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 90vh;
  height: 90vh;
  background: #fff;
  opacity: 0.2;
}

.signin-3 {
  .grid-unit;
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 100vh;
  height: 100vh;
  background: #fff;
  opacity: 0.07;
}

.signin-4 {
  .grid-unit;
  position: absolute;
  z-index: 0;
  margin: auto;
  width: 50vh;
  height: 50vh;
  background: #fff;
  opacity: 0.05;
  transform: rotate(45deg);
  animation: flow1 10s linear infinite;
}

.signin-5 {
  .grid-unit;
  position: absolute;
  z-index: 0;
  right: 10vh;
  margin: auto;
  width: 40vh;
  height: 40vh;
  background: #fff;
  opacity: 0.05;
  transform: rotate(45deg);
  animation: flow2 7s linear infinite;
}

.signin-6 {
  .grid-unit;
  position: absolute;
  z-index: 0;
  margin: auto;
  width: 30vh;
  height: 30vh;
  background: #fff;
  opacity: 0.05;
  transform: rotate(45deg);
  animation: flow3 11s linear infinite;
}

.signin-7 {
  .grid-unit;
  position: absolute;
  z-index: 0;
  top: 70vh;
  margin: auto;
  width: 60vh;
  height: 60vh;
  background: #fff;
  opacity: 0.05;
  transform: rotate(45deg);
  animation: flow4 13s linear infinite;
}

@keyframes flow1 {
  0% {
    top: -80vh;
  }
  20% {
    top: -20vh;
  }
  40% {
    top: 50vh;
  }
  60% {
    top: 140vh;
  }
  80% {
    top: 60vh;
  }
  100% {
    top: -80vh;
  }
}

@keyframes flow2 {
  0% {
    top: 160vh;
  }
  20% {
    top: 120vh;
  }
  40% {
    top: 50vh;
  }
  60% {
    top: -60vh;
  }
  100% {
    top: -60vh;
  }
}

@keyframes flow3 {
  0% {
    left: -120vh;
  }
  20% {
    left: -60vh;
  }
  40% {
    left: 120vh;
  }
  60% {
    left: 180vh;
  }
  80%{
    left: 240vh;
  }
  100% {
    left: 300vh;
  }
}

@keyframes flow4 {
  0% {
    left: -120vh;
  }
  20% {
    left: -60vh;
  }
  40% {
    left: 40vh;
  }
  60% {
    left: 160vh;
  }
  80%{
    left: 280vh;
  }
  100% {
    left: 500vh;
  }
}
</style>
