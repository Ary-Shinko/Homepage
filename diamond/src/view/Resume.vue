<template>
  <div class="resume">
    <header>
      <ul class="clearfix">
        <li></li>
        <li title="点击进入我的个人主页 https://arylab.me"></li>
        <li></li>
        <li>技术能力</li>
        <li></li>
        <li>个人资料</li>
        <li></li>
        <li>联系我</li>
        <li></li>
        <li>需要打印？</li>
        <li></li>
      </ul>
    </header>
    <article>
      <section class="resume-page-1">
        <ul>
          <li>熟悉前端</li>
          <li>X</li>
          <li>涉猎后端</li>
          <li>X</li>
          <li>兼通设计</li>
          <li>X</li>
          <li>紧抓基础</li>
          <li>热爱编程，通过艺术性的角度思考代码</li>
        </ul>
      </section>
      <section class="resume-page-2">
        <ul>
          <li>Javascript<span>ES5 / ES6+</span></li>
          <li><div style="width:25%"></div></li>
          <li>HTML<span>HTML5</span></li>
          <li><div style="width:28%"></div></li>
          <li>CSS<span>CSS3 / Less</span></li>
          <li><div style="width:12%"></div></li>
          <li>正则表达式</li>
          <li><div style="width:7%"></div></li>
          <li>Vue<span>Vue / Vuex / Vue-router</span></li>
          <li><div style="width:25%"></div></li>
          <li>业务能力<span>响应式设计 / 前端性能优化 / 代码书写规范</span></li>
          <li><div style="width:45%"></div></li>
        </ul>
      </section>
      <section class="resume-page-3">
        <ul>
          <li>前端自动化<span>Git / Gulp / Webpack</span></li>
          <li><div style="width:42%"></div></li>
          <li>HTTP协议</li>
          <li><div style="width:25%"></div></li>
          <li>Node.js<span>Express / fs / path...</span></li>
          <li><div style="width:49%"></div></li>
          <li>Linux</li>
          <li><div style="width:54%"></div></li>
          <li>数据库<span>MongoDB / MySQL</span></li>
          <li><div style="width:60%"></div></li>
        </ul>
      </section>
      <section class="resume-page-4">
        <ul>
          <li>平面设计<span>Photoshop / Tess / 图标绘制 / 色彩 / 排版</span></li>
          <li><div style="width:23%"></div></li>
          <li>动画与特效设计</li>
          <li><div style="width:16%"></div></li>
          <li>三维建模<span>Sketch Up / Vray</span></li>
          <li><div style="width:25%"></div></li>
          <li>地理信息与制图<span>AutoCAD / ArcGIS</span></li>
          <li><div style="width:30%"></div></li>
          <li>文档编写</li>
          <li><div style="width:33%"></div></li>
          <li>用户体验分析</li>
          <li><div style="width:18%"></div></li>
        </ul>
      </section>
      <section class="resume-page-5">
        <ul>
          <li>英语</li>
          <li><div style="width:34%"></div></li>
          <li>数据结构与算法</li>
          <li><div style="width:58%"></div></li>
          <li>计算机网络</li>
          <li><div style="width:29%"></div></li>
          <li>计算机组成</li>
          <li><div style="width:63%"></div></li>
          <li>计算机操作系统</li>
          <li><div style="width:69%"></div></li>
        </ul>
      </section>
      <section class="resume-page-6">
        <ul>
          <li>xxxx</li>
          <li></li>
          <li>数据结构与算法</li>
          <li></li>
          <li>计算机网络</li>
          <li></li>
          <li>计算机组成</li>
          <li></li>
          <li>计算机操作系统</li>
          <li></li>
        </ul>
      </section>
      <div class="resume-scroll-shelter"></div>
    </article>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
.resume {
  height: 100vh;
  font-size: 1.2rem;
}

header {
  position: fixed;
  z-index: 1;
  top: 0;
  width: 100%;
  min-width: 40em;
  background: linear-gradient(rgba(248, 248, 248, 1), transparent);
  ul {
    display: flex;
    align-items: center;
    li {
      // 文字部分
      &:nth-child(2n) {
        flex: 0 0 auto;
        padding: .25em;
        font-weight: 700;
        transition: color .3s ease;        
        &:hover {
          cursor: pointer;
        }        
      }
      // 文字部分 - Logo
      &:nth-child(2) {
        padding: 0;
        height: 3em;
        width: 3em;
        background-image: url(../assets/article/logo.png);
        background-size: contain;
      }
      // 文字部分 - 需要打印？
      &:nth-child(10) {
        font-weight: 400;
      }
      // 文字部分 - hover 效果
      &:nth-child(2n+4):hover {
        animation: text-flicker 1s ease infinite;
      }
      // 分隔线部分
      &:nth-child(2n+1) {
        flex: 0 0 2em;
        height: 3px;
        background: #f33;
      }
      // 分隔线部分 - 自适应分隔线
      &:nth-child(9) {
        flex: 1 1 auto;
      }
    }
  }
}

article {
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
  padding-top: 4rem;
  width: 100%;
  height: 100vh;
  background: #f8f8f8;
  section {
    overflow: hidden;
    width: 100vw;
    height: 100%;
  }
}

.resume-page-1 {
  ul {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin-top: -1em;
    height: 100%;
    li {
      flex: 0 0 auto;
      font-size: 2em;
      font-weight: 700;
      &:nth-child(2n) {
        margin: .5em;
        transform: scaleY(0.66);
        color: #f33;
      }
      &:nth-child(8) {
        flex: 0 0 100%;
        margin: 0;
        font-size: 1.6em;
        font-weight: 400;
        text-align: center;
        transform: none;
      }
    }
  }
}

.resume-page-2, .resume-page-3, .resume-page-4, .resume-page-5 {
  ul {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin-top: -1em;
    padding: 0 3em;
    height: 100%;
    li {
      flex: 0 0 100%;
      font-size: 1.5em;
      font-weight: 400;
      span {
        margin-left: 1em;
        font-size: 0.6em;
      }
      &:nth-child(2n) {
        border: 1px solid #f33;
        border-radius: 5px;
        width: 100px;
        height: 1em;
        background: linear-gradient(45deg, #faa, #f33);
      }
      div {
        float: right;
        border-radius: 0 5px 5px 0;
        height: 100%;
        background: #fff;
      }
    }
  }
}

.resume-scroll-shelter {
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 2em;
  background: #f8f8f8;
  pointer-events: none;
}

ul {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

.clearfix::after {
  content: "";
  display: block;
  clear: both;
  visibility: hidden;
  height: 0;
  font-size: 0;
}
</style>
