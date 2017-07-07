<template>
  <div class="signin-bg">
    <div class="g-grid-unit signin-1">
      <div class="signin-logo">
        <span>{ }</span>
      </div>
    </div>
    <div class="g-grid-unit signin-2"></div>
    <div class="g-grid-unit signin-3"></div>
    <div class="g-grid-unit signin-4"></div>
    <div class="g-grid-unit signin-5"></div>
    <div class="g-grid-unit signin-6"></div>
    <div class="g-grid-unit signin-7"></div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less">
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
  .m-login-1;
  z-index: 3;
  width: 80vh !important;
  height: 80vh !important;
  overflow: hidden;
}

.signin-2 {
  .m-login-1;
  z-index: 2;
  width: 90vh !important;
  height: 90vh !important;
  opacity: 0.2;
}

.signin-3 {
  .m-login-1;
  z-index: 1;
  width: 100vh !important;
  height: 100vh !important;
  opacity: 0.07;
}

.m-login-1 {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}
.m-login-2 {
  position: absolute;
  opacity: 0.05;
  transform: rotate(45deg);
}
.signin-4 {
  .m-login-2;
  width: 50vh !important;
  height: 50vh !important;
  animation: flow1 10s linear infinite !important;
}

.signin-5 {
  .m-login-2;
  right: 10vh;
  width: 40vh !important;
  height: 40vh !important;
  animation: flow2 7s linear infinite !important;
}

.signin-6 {
  .m-login-2;
  width: 30vh !important;
  height: 30vh !important;
  animation: flow3 11s linear infinite !important;
}

.signin-7 {
  .m-login-2;
  top: 70vh;
  width: 60vh !important;
  height: 60vh !important;
  animation: flow4 13s linear infinite !important;
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
