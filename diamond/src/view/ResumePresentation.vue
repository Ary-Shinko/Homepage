<template>
  <div class="resumepresentation">
    <iframe class="resumepresentation-frame" :src="'/' + $route.params[0]" frameborder="0"></iframe>
    <div class="resumepresentation-note">
      <h1>{{ presentationTitle }}</h1>
      <p v-html="presentationText"></p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    presentationTitle () {
      switch (this.$route.params[0]) {
        case 'index':
          return 'Ⅰ 滑动布局'
        case 'solitaire':
          return 'Ⅱ 德州扑克'
        case 'signin':
          return 'Ⅲ 登录系统'
        case 'article/blog':
          return 'Ⅳ 内容管理'
        case 'shadowsocks':
          return 'Ⅴ 分发器（需登录）'
        case 'resume':
          return 'Ⅵ 简历'
        case 'article/blog/':
          return '技术博客'
        default:
          return '未展示的网页'
      }
    },
    presentationText () {
      switch (this.$route.params[0]) {
        case 'index':
          return '源网址：<br><a href="https://arylab.me/index"></a><br>前端源代码：<br><a href="https://github.com/Winterwrath/Diamond/blob/dev/diamond/src/view/Index.vue"></a>'
        case 'solitaire':
          return '源网址：<br><a href="https://arylab.me/solitaire"></a><br>前端源代码：<br><a href="https://github.com/Winterwrath/Diamond/blob/dev/diamond/src/view/Solitaire.vue"></a>'
        case 'signin':
          return '源网址：<br><a href="https://arylab.me/signin"></a><br>前端源代码：<br><a href="https://github.com/Winterwrath/Diamond/blob/dev/diamond/src/view/Signin.vue"></a><br>后端源代码：<br><a href="https://github.com/Winterwrath/Diamond/blob/dev/server/api/signin.js"></a>'
        case 'article/blog':
          return '源网址：<br><a href="https://arylab.me/article/blog"></a><br>前端源代码：<br><a href="https://github.com/Winterwrath/Diamond/blob/dev/diamond/src/view/Article.vue"></a><br>后端源代码：<br><a href="https://github.com/Winterwrath/Diamond/blob/dev/server/api/article.js"></a>'
        case 'shadowsocks':
          return '源网址：<br><a href="https://arylab.me/shadowsocks"></a><br>前端源代码：<br><a href="https://github.com/Winterwrath/Diamond/blob/dev/diamond/src/view/Shadowsocks.vue"></a><br>后端源代码：<br><a href="https://github.com/Winterwrath/Diamond/blob/dev/server/api/shadowsocks.js"></a>'
        case 'resume':
          return '源网址：<br><a href="https://arylab.me/resume"></a><br>前端源代码：<br><a href="https://github.com/Winterwrath/Diamond/blob/dev/diamond/src/view/Resume.vue"></a>'
        case 'article/blog/':
          return '<br><a href="https://arylab.me/article/blog/CSS: Typography I"></a><br><a href=\'https://arylab.me/article/blog/CSS: the reason for order "link-visited-hover-active"\'></a><br><a href="https://arylab.me/article/blog/The way to shuffle an array"></a><br><a href="https://arylab.me/article/blog/CSS: background-position"></a><br><a href=https://arylab.me/article/blog/Shadowsocks Direction on iOS"></a>'
        default:
          return '请检查链接是否正确。'
      }
    }
  }
}
</script>

<style lang="less">
.resumepresentation-frame {
  height: 100vh;
  width: 100vw;
}
.resumepresentation-note {
  position: fixed;
  top: 3rem;
  width: 42rem;
  padding: 1rem;
  border: 1px solid #333;
  border-right: none;
  background: rgba(255,255,255,.95);
  box-shadow: 0 0 3px 0 #666;
  transition: all .3s ease;
  animation: pre-hide 3s ease forwards;
  &:hover {
    background: rgb(21,240,211);
    animation: pre-show 1s ease forwards;
    h1, p, a {
      color: #fff;
    }
  }
  h1 {
    margin: 0;
    padding: 0;
    font-size: 1.5rem;
    height: 1.5rem;    
    transition: all .3s ease;
    text-align: center;
  }
  p {
    margin: 0;
    padding: 0;
    font-size: .8rem;
    transition: all .3s ease;
    word-wrap: break-word;
  }
  a {
    transition: all .3s ease;
    font-size: .8rem;
  }
  a::after {
    content: attr(href);
  }
}
@keyframes pre-hide {
  0% {
    right: 0rem;
  }
  80% {
    right: 0rem;
  }
  100% {
    right: -43rem;
  }
}
@keyframes pre-show {
  0% {
    right: -43rem;
  }
  100% {
    right: 0rem;
  }
}
</style>
