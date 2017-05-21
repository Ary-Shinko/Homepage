<template>
  <div>
    <div class="core grid-unit"></div>
    <div class="core-content">
      <h1>Code Parenthesis_</h1>
      <img src="../assets/proto1.png" alt="">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis a, pariatur atque eaque incidunt deserunt id!</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, ad animi corporis suscipit ratione quidem vero temporibus consequatur aspernatur commodi quam tempora eaque necessitatibus dignissimos eveniet fugit ipsum. Inventore nobis, veritatis dolores cumque consectetur! Cum maxime, animi aspernatur ad nesciunt atque perspiciatis maiores nostrum accusantium, adipisci veritatis impedit iste! Recusandae.</p>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less">
div.core {
  position: absolute;
  z-index: 2;
  background: #f33;
}

.core-content {
  position: absolute;
  z-index: 4;
  width: 130vh;
  margin: 35vh 0 0 5vh;
  h1 {
    font-size: 6vh;
  }
  img:first-of-type {
    float: left;
    margin: 2vh 0 0 0;
    width: 70vh;
  }
  p:first-of-type {
    float: left;
    margin: 2vh 0 0 5vh;
    width: 50vh;
  }
  p:nth-of-type(2) {
    clear: both;
    font-size: 2vh;
    margin: 25vh 0 0 0;
    width: 110vh;
  }
}
</style>
