<template>
  <div class="grid-news-content">
    <a href="#" @click="showNews">Mirrorquest</a>
    <div class="mq" v-if="newsShow" @click="newsShow = false">
      {{detail}}
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      newsShow: false,
      detail: ','
    }
  },
  methods: {
    showNews () {
      this.newsShow = true
      axios.get('https://huanlijing.mm.iduoku.cn/xianjian/notice20170824.json')
      .then(res => {
        console.log(res.data)
      })
    }
  }
}
</script>

<style lang="less">
.grid-news-content {
  position: fixed;
  z-index: 6;
  top: 55vh;
  left: 145vh;
  width: 10vh;
  height: 10vh;
  background: blue;
}
.mq {
  position: fixed;
  overflow: auto;
  z-index: 100;
  top: 0;
  left: 0;
  height: 90vh;
  width: 90vw;
  padding: 5vh 5vw;
  background-color: #fff;
}

.grid-news-content+div{
  background: ~'#f33 url(../../assets/grid/core4.png) no-repeat scroll 0 0/80%';
  // background-size: cover;
}
</style>
