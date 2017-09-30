<template>
  <div class="article-main-bottom">
    <p>{{ 'https://arylab.me' + articleUrl }}<br>
    <span>{{ articleCurrent.author }} {{ articleCurrent.date }} {{ articleKeywords }}</span><br>
    <a href="https://creativecommons.org/licenses/by-nc-sa/3.0">{{ articleCurrent.license }}</a></p>
    <p @click.prevent="backToTop">Back to top</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState([
      'articleCurrent'
    ]),
    articleUrl () {
      return decodeURIComponent(this.$route.fullPath)
    },
    articleKeywords () {
      let joined = ''
      if (this.articleCurrent.keywords[0] === '') {
        joined = 'After authentication you can submit articles on the top of this page.'
      } else {
        for (let keyword of this.articleCurrent.keywords) {
          if (keyword) {
            joined = joined + keyword + ' / '
          } else {
            break
          }
        }
        joined = joined.replace(/ \/ $/, '')
      }
      return joined
    }
  },
  methods: {
    backToTop () {
      let articleWrapper = document.getElementById('articleWrapper')
      let scrollBottom = articleWrapper.scrollTop
      let easeCurve = [1, 0.99, 0.98, 0.96, 0.94, 0.91, 0.88, 0.84, 0.80, 0.75, 0.70, 0.64, 0.58, 0.51, 0.45, 0.39, 0.34, 0.29, 0.25, 0.21, 0.17, 0.14, 0.11, 0.08, 0.06, 0.04, 0.03, 0.02, 0.01, 0]
      easeCurve.forEach((value, index) => {
        setTimeout(() => {
          articleWrapper.scrollTop = parseInt(value * scrollBottom)
        }, index * 10)
      })
    }
  }
}
</script>

<style lang="less">
.article-main-bottom { 
  margin-top: 1rem;
  padding: 3rem;
  background: linear-gradient(90deg, #deffe0, #81ffe0); 
  color: #333;
  box-shadow: 0 4px 4px -5px #666;
  p {
    font-weight: 800;
    span {
      font-weight: normal;
      font-size: .8rem;
    }
    &:last-of-type {
      font-weight: normal;
      cursor: pointer;
      &:hover {
        color: #00d09c;
      }
    }
  }
}
</style>
