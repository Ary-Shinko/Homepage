<template>
  <div class="grid-news-content">
    <p class="grid-news-1">Last Modified: {{ navigationLastModified }}</p>
    <router-link class="grid-news-2" :to="'/shadowsocks'">10/03 App - Try our amazing shadowsocks service!</router-link>
    <router-link class="grid-news-3" :to="'/article/blog/CSS:%20background-position'">10/12 Blog - CSS: background-position</router-link>
    <router-link class="grid-news-4" :to="'/article/blog/The%20way%20to%20shuffle%20an%20array'">10/18 Blog - The way to shuffle an array</router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState([
      'navigationLastModified'
    ])
  }
}
</script>

<style lang="less">
.grid-news-content {
  position: fixed;
  z-index: 6;
  top: 80vh;
  left: 111vh;
  width: 80vh;
  height: 20vh;
  text-align: center;
  p {
    margin: 0;
  }
  a {
    margin-top: 1vh;
    display: block;
  }
  .grid-news-1 {
    color: #777;
    font-size: 2vh;
  }
  .grid-news-2 {
    color: #555;
    font-size: 2.2vh;
  }
  .grid-news-3 {
    color: #333;
    font-size: 2.4vh;
  }
  .grid-news-4 {
    color: #111;
    font-size: 2.6vh;
  }
}

.grid-news-content+div{
  background-color: #e4fff8;
}
</style>
