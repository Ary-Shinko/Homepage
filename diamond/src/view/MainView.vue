<template>
  <div id="main">
    <div class="grid-unit margin-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla minima, quo possimus, dolor illum officia blanditiis eius dignissimos accusantium similique sint consequatur autem vitae excepturi. Nisi at nulla totam eligendi.</div>
    <div class="grid-unit">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla minima, quo possimus, dolor illum officia blanditiis eius dignissimos accusantium similique sint consequatur autem vitae excepturi. Nisi at nulla totam eligendi.</div>
    <div class="grid-unit">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla minima, quo possimus, dolor illum officia blanditiis eius dignissimos accusantium similique sint consequatur autem vitae excepturi. Nisi at nulla totam eligendi.</div>
    <div class="grid-unit clear-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla minima, quo possimus, dolor illum officia blanditiis eius dignissimos accusantium similique sint consequatur autem vitae excepturi. Nisi at nulla totam eligendi.</div>
    <div class="grid-unit main-window">
      <img class="main-illu" src="../assets/proto1.png" alt="">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod possimus accusantium neque, necessitatibus modi sed.</p>
      <img class="main-illu" src="../assets/proto2.png" alt="">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, debitis?</p>
    </div>
    <div class="grid-unit">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla minima, quo possimus, dolor illum officia blanditiis eius dignissimos accusantium similique sint consequatur autem vitae excepturi. Nisi at nulla totam eligendi.</div>
    <div class="grid-unit clear-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla minima, quo possimus, dolor illum officia blanditiis eius dignissimos accusantium similique sint consequatur autem vitae excepturi. Nisi at nulla totam eligendi.</div>
    <div class="grid-unit">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla minima, quo possimus, dolor illum officia blanditiis eius dignissimos accusantium similique sint consequatur autem vitae excepturi. Nisi at nulla totam eligendi.</div>
    <div class="grid-unit">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla minima, quo possimus, dolor illum officia blanditiis eius dignissimos accusantium similique sint consequatur autem vitae excepturi. Nisi at nulla totam eligendi.</div>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="less">
#main {
  margin-top: -80vh;
  margin-left: 10vh;
  width: 380vh;
  transform: rotate(45deg);
  background: radial-gradient(500px at top left, #efe, #eef);
  .main-window {
    background: red;
  }
  .main-illu {
    transform: rotate(-45deg);
    margin-top: 50vh;
    margin-left: -2vh;
    width: 60%;
  }
  .margin-left {
    margin-left: -20vh;
  }
  .clear-left {
    clear: left;
  }
}


</style>
