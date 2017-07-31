<template>
  <div class="signin-background">
    <div class="signin-background-stage" :style="{ transform: transformString }">
      <div class="signin-background-1">
        <div class="signin-background-1a signin-background-center g-grid-unit">
          <div class="signin-background-logo">
            <span>{ }</span>
          </div>
        </div>
        <div class="signin-background-1b signin-background-center g-grid-unit"></div>
        <div class="signin-background-1c signin-background-center g-grid-unit"></div>
      </div>
      <div class="signin-background-2">
        <div class="signin-background-2a signin-background-center g-grid-unit"></div>
        <div class="signin-background-2b signin-background-center g-grid-unit"></div>
        <div class="signin-background-2c signin-background-center g-grid-unit"></div>
      </div>
      <div class="signin-background-3">
        <div class="signin-background-3a signin-background-center g-grid-unit">
          <div class="signin-background-logo">
            <span>{ }</span>
          </div>
        </div>
        <div class="signin-background-3b signin-background-center g-grid-unit"></div>
        <div class="signin-background-3c signin-background-center g-grid-unit"></div>
      </div>
    </div>
    <div class="signin-background-4 signin-background-flow g-grid-unit"></div>
    <div class="signin-background-5 signin-background-flow g-grid-unit"></div>
    <div class="signin-background-6 signin-background-flow g-grid-unit"></div>
    <div class="signin-background-7 signin-background-flow g-grid-unit"></div>
  </div>
</template>

<script>
export default {
  props: ['view'],
  computed: {
    transformString () {
      switch (this.view) {
        case 'SigninMain':
          return 'rotateY(0deg)'
        case 'SigninForget':
          return 'rotateY(240deg)'
        case 'SigninCreate':
          return 'rotateY(120deg)'
      }
    }
  }
}
</script>

<style lang="less">
@import url(../../assets/signin/signinAnimation.less);

.signin-background {
  width: 100vw;
  height: 100vh;
  perspective: 50vw;
}

.signin-background-stage {
  width: 100vw;
  height: 100vh;
  perspective: 50vw;
  transform-origin: 50% 50% 50vw;
  transition: transform 2s cubic-bezier(.75,0,.35,1);
}
</style>
