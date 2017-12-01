<template>
  <div class="resume">
    <!-- resume-background: 背景层 - 0 -->
    <div class="resume-background" ref="resumeBackground" :style="{ marginTop: (scrollCurrent - 1) * -25 + 'vh' }"></div>
    <!-- resume-misc: 漂浮物层 - 1 -->
    <div class="resume-misc" ref="resumeMisc" :style="{ marginTop: (scrollCurrent - 1) * -75 + 'vh' }"></div>
    <!-- resume-mask: 近景层 - 2 -->
    <div class="resume-mask" ref="resumeMask" :style="{ marginTop: (scrollCurrent - 1) * -150 + 'vh' }"></div>
    <!-- resume-content: 正文层 - 3 -->
    <div class="resume-content" ref="resumeContent" :style="{ top: (scrollCurrent - 1) * -200 + 'vh' }">
      <article class="resume-content-1">
        <ul>
          <li>熟悉前端</li>
          <li>×</li>
          <li>涉猎后端</li>
          <li>×</li>
          <li>兼通设计</li>
          <li>×</li>
          <li>紧抓基础</li>
          <li>创新型前端工程师，可兼任部分产品、设计、后端业务</li>
        </ul>
        <div class="resume-content-1-hint" :class="startScreenHint">通过滚轮 / 键盘 / 拖动 / 触摸向下翻页...</div>
      </article>
      <article class="resume-content-intersection"></article>
      <article class="resume-content-2">
        <ul>
          <li>
            <h3>Javascript<span>ES5 / ES6+</span></h3>
            <div><div style="width:25%"></div></div>
            <p>熟悉 ECMAScript 5/6 的语言特性，对闭包、作用域、异步调用、Promise、原型式继承等特性均有大量实践和理解；</p>
            <p>熟悉 BOM，对 事件处理、Ajax、节点与元素的控制、客户端存储均有大量实践和理解；</p>
          </li>
          <li>
            <h3>HTML<span>HTML5</span></h3>
            <div><div style="width:28%"></div></div>
            <p>熟悉 HTML5 规范中的大部分元素的属性、特性；</p>
            <p>掌握 Manifest、文件加载与缓存优化、语义化标签的使用。</p>
          </li>
          <li>
            <h3>CSS<span>CSS3 / Less</span></h3>
            <div><div style="width:12%"></div></div>
            <p>熟悉 CSS3，对相关规范、格式化上下文、排版、动画、交互均有大量的应用与研究；</p>
            <p>熟悉各种动画、特效、效果、交互、展示的实现，进行了大量的实践并有三年以上的使用经验。</p>
          </li>
          <li>
            <h3>正则表达式</h3>
            <div><div style="width:7%"></div></div>
            <p>熟悉正则表达式的编写，可在业务需求范围内编写出任何需要的正则表达式并有两年以上的使用经验；</p>
          </li>
          <li>
            <h3>Vue<span>Vue / Vuex / Vue-router</span></h3>
            <div><div style="width:25%"></div></div>
            <p>熟悉 Vue 系列的使用，可配合后端开发出完整的网页、单页应用；</p>
            <p>对常用钩子函数、框架特性、路由控制、组件化、状态控制均有深刻的理解与实践。</p>
          </li>
          <li>
            <h3>业务经验<span>移动端兼容 / 性能优化 / 代码规范 / 熬夜</span></h3>
            <div><div style="width:45%"></div></div>
            <p>掌握移动端兼容、响应式设计、前端性能优化等技术能力，在各大相关论坛、各大企业前端部门的网站上经常学习前沿的前端思想与技术；</p>
            <p>代码书写规范要求严格，始终如一；</p>
            <p>精通熬夜（因为曾经是建筑设计师的缘故）。</p>
          </li>
        </ul>
      </article>
      <article class="resume-content-intersection"></article>
      <article class="resume-content-3">
        <ul>
          <li>
            <h3>前端自动化<span>Git / Gulp / Webpack</span></h3>
            <div><div style="width:42%"></div></div>
            <p>熟悉 Git、Gulp 的使用并以此提升工作效率；</p>
            <p>了解 Webpack，可以修改相应的配置文件来适应项目。</p>
          </li>
          <li>
            <h3>HTTP协议与安全</h3>
            <div><div style="width:25%"></div></div>
            <p>熟悉 HTTP 协议的组成、常用首部、状态码、上下游协议；</p>
            <p>对 CSRF、XSS 有简单的认识。</p>
          </li>
          <li>
            <h3>Node.js<span>Express / 常用模块</span></h3>
            <div><div style="width:49%"></div></div>
            <p>熟悉 Express，可完成小型规模网站的后端编写任务并有相关的业务实践；</p>
            <p>了解 Node.js 及其简单的常用模块的使用。</p>
          </li>
          <li>
            <h3>Linux</h3>
            <div><div style="width:54%"></div></div>
            <p>了解 Linux 常用的命令、文件系统、防火墙设置、进程处理，可完成网站的发布、更新等任务。</p>
          </li>
          <li>
            <h3>数据库<span>MongoDB / MySQL</span></h3>
            <div><div style="width:60%"></div></div>
            <p>了解 MongoDB 的使用，并可根据相关接口进行控制；</p>
            <p>入门 MySQL 等关系型数据库。</p>
          </li>
        </ul>
      </article>
      <article class="resume-content-intersection"></article>
      <article class="resume-content-4">
        <ul>
          <li>
            <h3>平面设计<span>Photoshop / Tess / 图标绘制 / 色彩 / 排版</span></h3>
            <div><div style="width:23%"></div></div>
            <p>熟悉网页的平面排布、色彩搭配、字体搭配、UI设计，并能绘制简单的图标与背景。</p>
          </li>
          <li>
            <h3>动画与特效设计</h3>
            <div><div style="width:16%"></div></div>
            <p>熟悉基于多重工具的动画与特效设计，并能结合在网页中使用。</p>
          </li>
          <li>
            <h3>三维建模<span>Sketch Up / Vray</span></h3>
            <div><div style="width:25%"></div></div>
            <p>熟悉 Sketch Up三维建模，并通过 Vray 进行渲染；</p>
            <p>对材质、布光、视角的配置均有相关经验。</p>
          </li>
          <li>
            <h3>地理信息与制图<span>AutoCAD / ArcGIS</span></h3>
            <div><div style="width:30%"></div></div>
            <p>熟悉 AutoCAD 的使用，可绘制精准的图纸；</p>
            <p>了解 ArcGIS，可进行简单的地理信息绑定与展示。</p>
          </li>
          <li>
            <h3>文档编写</h3>
            <div><div style="width:33%"></div></div>
            <p>可根据项目要求编写相关的文档。</p>
          </li>
          <li>
            <h3>项目分析</h3>
            <div><div style="width:18%"></div></div>
            <p>可进行可行性分析、用户体验分析、进度控制与安排。</p>
          </li>
        </ul>
      </article>
      <article class="resume-content-intersection"></article>
      <article class="resume-content-5">
        <ul>
          <li>
            <h3>英语<span>日常交流 / 专业英语</span></h3>
            <div><div style="width:44%"></div></div>
            <p>四级英语水平，了解大部分专业相关的词汇，可阅读英文原版文档与博客。</p>
          </li>
          <li>
            <h3>数据结构与算法</h3>
            <div><div style="width:56%"></div></div>
            <p>了解常见的数据结构类型，编写简单的算法，并可对算法的时间与空间复杂度进行讨论分析，更深层的内容目前仍在进一步学习中。</p>
          </li>
          <li>
            <h3>专业基础<span>计算机网络 / 计算机组成 / 计算机操作系统</span></h3>
            <div><div style="width:65%"></div></div>
            <p>了解七层网络模型，并对常用的协议有大概的了解；</p>
            <p>了解计算机的发展、组成，目前仍在进一步学习中。</p>
          </li>
        </ul>
      </article>
      <article class="resume-content-intersection"></article>
      <article class="resume-content-6" @wheel="presentationWheelListener" @touchstart="presentationTouchstartListener" @touchend="presentationTouchendListener" @mousedown="presentationMousedownListener" @mouseup="presentationMouseupListener" @click="presentationClickListener">
        <div class="resume-content-6-presentation" ref="resumePresentation" :class="presentationAnimationStart" :style="{ 'margin-left': presentationCurrent * -60 + 80 + '%' }">
          <div class="resume-content-6-detail">
            <div class="resume-content-6-background" data-serial="1"></div>
          </div>
          <div class="resume-content-6-detail">
            <div class="resume-content-6-background" data-src="https://arylab.me/resumepresentation/index" data-serial="2">
              <video src="../assets/resume/diamond.webm" autoplay loop type="video/webm"></video>
              <div class="resume-content-6-text1">Ⅰ</div>
              <div class="resume-content-6-text2">滑动布局</div>
              <div class="resume-content-6-text3"><span class="resume-content-6-text3a">SPA</span><br><span class="resume-content-6-text3a">DESIGN</span></div>
            </div>
          </div>
          <div class="resume-content-6-detail">
            <div class="resume-content-6-background" data-src="https://arylab.me/resumepresentation/solitaire" data-serial="3">
              <video src="../assets/resume/solitaire.webm" autoplay loop type="video/webm"></video>
              <div class="resume-content-6-text1">Ⅱ</div>
              <div class="resume-content-6-text2">德州扑克</div>
              <div class="resume-content-6-text3"><span class="resume-content-6-text3b">APP</span><br><span class="resume-content-6-text3b">DESIGN</span></div>
            </div>
          </div>
          <div class="resume-content-6-detail">
            <div class="resume-content-6-background" data-src="https://arylab.me/resumepresentation/signin?redirect=%2Findex" data-serial="4">
              <video src="../assets/resume/signin.webm" autoplay loop type="video/webm"></video>
              <div class="resume-content-6-text1">Ⅲ</div>
              <div class="resume-content-6-text2">登录系统</div>
              <div class="resume-content-6-text3"><span class="resume-content-6-text3a">SPA</span><br><span class="resume-content-6-text3a">BACKEND</span></div>
            </div>
          </div>
          <div class="resume-content-6-detail">
            <div class="resume-content-6-background" data-src="https://arylab.me/resumepresentation/article/blog" data-serial="5">
              <video src="../assets/resume/article.webm" autoplay loop type="video/webm"></video>
              <div class="resume-content-6-text1">Ⅳ</div>
              <div class="resume-content-6-text2">内容管理</div>
              <div class="resume-content-6-text3"><span class="resume-content-6-text3a">CMS</span><br><span class="resume-content-6-text3a">BACKEND</span></div>
            </div>
          </div>
          <div class="resume-content-6-detail">
            <div class="resume-content-6-background" data-src="https://arylab.me/resumepresentation/shadowsocks" data-serial="6">
              <video src="../assets/resume/shadowsocks.webm" autoplay loop type="video/webm"></video>
              <div class="resume-content-6-text1">Ⅴ</div>
              <div class="resume-content-6-text2">分发器</div>
              <div class="resume-content-6-text3"><span class="resume-content-6-text3c">SPA</span><br><span class="resume-content-6-text3c">BACKEND</span></div>
            </div>
          </div>
          <div class="resume-content-6-detail">
            <div class="resume-content-6-background" data-src="https://arylab.me/resumepresentation/resume" data-serial="7">
              <video src="../assets/resume/resume.webm" autoplay loop type="video/webm"></video>
              <div class="resume-content-6-text1">Ⅵ</div>
              <div class="resume-content-6-text2">简历</div>
              <div class="resume-content-6-text3"><span class="resume-content-6-text3a">SPA</span><br><span class="resume-content-6-text3a">MOBILE</span></div>
            </div>
          </div>
          <div class="resume-content-6-detail">
            <div class="resume-content-6-background" data-src="https://arylab.me/resumepresentation/article/blog/" data-serial="8">
              <video src="../assets/resume/blog.webm" autoplay loop type="video/webm"></video>
              <div class="resume-content-6-text1">-</div>
              <div class="resume-content-6-text2">技术博客</div>
            </div>
          </div>
          <div class="resume-content-6-detail">
            <div class="resume-content-6-background" data-serial="9">
              <video src="../assets/resume/comingsoon.webm" autoplay loop type="video/webm"></video>
              <div class="resume-content-6-text1">-</div>
              <div class="resume-content-6-text2">待续...</div>
            </div>
          </div>
        </div>
        <div class="resume-content-6-personal" :class="personalAnimationStart">
          <div class="resume-content-image"></div>
          <ul>
            <li>张宇 Ary</li>
            <li>中南大学 / 本科 / 城市规划 / 2015年毕业</li>
            <li>两年设计行业经验 / 前端新人 / 熬夜达人 / 追求像素级精准</li>
          </ul>
        </div>
        <div class="resume-content-6-indicator">
          <ul :class="presentationIndicator">
            <li @click="presentationCurrent = 1" @touchstart="presentationCurrent = 1"></li>
            <li @click="presentationCurrent = 2" @touchstart="presentationCurrent = 2"></li>
            <li @click="presentationCurrent = 3" @touchstart="presentationCurrent = 3"></li>
            <li @click="presentationCurrent = 4" @touchstart="presentationCurrent = 4"></li>
            <li @click="presentationCurrent = 5" @touchstart="presentationCurrent = 5"></li>
            <li @click="presentationCurrent = 6" @touchstart="presentationCurrent = 6"></li>
            <li @click="presentationCurrent = 7" @touchstart="presentationCurrent = 7"></li>
            <li @click="presentationCurrent = 8" @touchstart="presentationCurrent = 8"></li>
            <li @click="presentationCurrent = 9" @touchstart="presentationCurrent = 9"></li>
          </ul>
        </div>
      </article>
      <article class="resume-content-intersection"></article>
      <article class="resume-content-7">
        <div class="resume-content-image"></div>
        <ul>
          <li>电子邮箱：ary@arylab.me</li>
          <li>联系电话：+86 13187314217</li>
          <li @click="$router.push('/article/blog')" @touchend="touchRedirectUrl('https://arylab.me/article/blog', $event)" title="点击进入我的技术博客 https://arylab.me/article/blog">技术博客：<span>https://arylab.me/article/blog</span></li>
          <li @click="$router.push('/')" @touchend="touchRedirectUrl('https://arylab.me', $event)" title="点击进入我的个人主页 https://arylab.me">个人主页：<span>https://arylab.me</span></li>
        </ul>
      </article>
    </div>
    <!-- resume-fixed: 固定内容层 - 4 -->
    <div class="resume-fixed">
      <ul class="resume-fixed-header" :class="headerIndicator">
        <li></li>
        <li @click="$router.push('/')" title="点击进入我的个人主页 https://arylab.me"></li>
        <li></li>
        <li @click="scrollCurrent = 2" @touchstart="scrollCurrent = 2">技术能力</li>
        <li></li>
        <li @click="scrollCurrent = 6" @touchstart="scrollCurrent = 6">作品展示</li>
        <li></li>
        <li @click="scrollCurrent = 7" @touchstart="scrollCurrent = 7">联系方式</li>
        <li></li>
        <li><a class="resume-fixed-header-print" href="../../static/张宇-前端工程师-简历.pdf" download>需要打印？</a></li>
        <li></li>
      </ul>
      <div class="resume-fixed-footer">Arylab<span>2017</span></div>
      <ul class="resume-fixed-nav" :class="scrollIndicator">
        <li @click="scrollCurrent = 2">熟悉前端</li>
        <li>×</li>
        <li @click="scrollCurrent = 3">涉猎后端</li>
        <li>×</li>
        <li @click="scrollCurrent = 4">兼通设计</li>
        <li>×</li>
        <li @click="scrollCurrent = 5">紧抓基础</li>
      </ul>
    </div>
    <!-- resume-profile: 资料信息层 - 5 -->
    <div class="resume-profile"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      scrollCurrent: 1,
      scrollTimer: 0,
      screenY: 0,
      personalAnimationStart: '',
      presentationAnimationStart: '',
      startScreenHint: '',
      presentationCurrent: 1,
      screenX: 0
    }
  },
  computed: {
    scrollIndicator () {
      return 'resume-fixed-nav-' + this.scrollCurrent
    },
    isScrollArrowUpShow () {
      return this.scrollCurrent === 1 ? 'resume-fixed-arrow-hide' : ''
    },
    isScrollArrowDownShow () {
      return this.scrollCurrent === 7 ? 'resume-fixed-arrow-hide' : ''
    },
    presentationIndicator () {
      return 'resume-content-6-indicator-' + this.presentationCurrent
    },
    headerIndicator () {
      if (this.scrollCurrent === 6) {
        return 'resume-fixed-header-2'
      } else if (this.scrollCurrent === 7) {
        return 'resume-fixed-header-3'
      } else if (this.scrollCurrent === 1) {
        return ''
      }
      return 'resume-fixed-header-1'
    }
  },
  methods: {
    scrollKeydownListener (e) {
      e.preventDefault()
      e.stopPropagation()
      if (e.keyCode === 38 || e.keyCode === 33 || e.keyCode === 74) {
        this.scrollThrottler(-1, 2000)
      } else if (e.keyCode === 40 || e.keyCode === 34 || e.keyCode === 32 || e.keyCode === 75) {
        this.scrollThrottler(1, 2000)
      } else if (this.scrollCurrent === 6 && e.keyCode === 39 && this.presentationCurrent !== 9) {
        this.presentationCurrent++
      } else if (this.scrollCurrent === 6 && e.keyCode === 37 && this.presentationCurrent !== 1) {
        this.presentationCurrent--
      }
    },
    scrollWheelListener (e) {
      e.preventDefault()
      e.stopPropagation()
      if (e.deltaY < 0) {
        this.scrollThrottler(-1, 2000)
      } else if (e.deltaY > 0) {
        this.scrollThrottler(1, 2000)
      }
    },
    scrollThrottler (delta, timeout) {
      if (this.scrollTimer === 0 && this.scrollCurrent + delta !== 0 && this.scrollCurrent + delta !== 8) {
        this.scrollExecutor(delta)
        this.scrollTimer = setTimeout(() => {
          this.scrollTimer = 0
        }, timeout)
      }
    },
    scrollExecutor (delta) {
      this.scrollCurrent += delta
    },
    scrollArrowUp () {
      if (this.scrollCurrent !== 1) {
        this.scrollCurrent -= 1
      }
    },
    scrollArrowDown () {
      if (this.scrollCurrent !== 5) {
        this.scrollCurrent += 1
      }
    },
    touchstartListener (e) {
      e.preventDefault()
      this.screenY = e.touches[0].screenY
      window.addEventListener('touchmove', this.touchmoveListener, false)
      this.$refs.resumeContent.style.transition = 'all 0s ease'
    },
    touchmoveListener (e) {
      this.$refs.resumeContent.style.marginTop = (e.changedTouches[0].screenY - this.screenY) / 2 + 'px'
    },
    touchendListener (e) {
      let prev = this.screenY
      let current = e.changedTouches[0].screenY
      if (current - prev > 100) {
        this.scrollThrottler(-1, 2000)
      } else if (current - prev < -100) {
        this.scrollThrottler(1, 2000)
      }
      window.removeEventListener('touchmove', this.touchmoveListener, false)
      this.$refs.resumeContent.style.transition = 'all 2s ease'
      this.$refs.resumeContent.style.marginTop = 0
    },
    mousedownListener (e) {
      this.screenY = e.screenY
      window.addEventListener('mousemove', this.mousemoveListener, false)
      this.$refs.resumeContent.style.transition = 'all 0s ease'
    },
    mousemoveListener (e) {
      this.$refs.resumeContent.style.marginTop = (e.screenY - this.screenY) / 2 + 'px'
    },
    mouseupListener (e) {
      let prev = this.screenY
      let current = e.screenY
      if (current - prev > 100) {
        this.scrollThrottler(-1, 2000)
      } else if (current - prev < -100) {
        this.scrollThrottler(1, 2000)
      }
      window.removeEventListener('mousemove', this.mousemoveListener, false)
      this.$refs.resumeContent.style.transition = 'all 2s ease'
      this.$refs.resumeContent.style.marginTop = 0
    },
    presentationWheelListener (e) {
      if (e.deltaY > 0) {
        if (this.presentationCurrent !== 9) {
          this.presentationCurrent++
          e.stopPropagation()
        }
      } else if (e.deltaY < 0) {
        if (this.presentationCurrent !== 1) {
          this.presentationCurrent--
          e.stopPropagation()
        }
      }
    },
    presentationTouchstartListener (e) {
      e.preventDefault()
      this.screenX = e.touches[0].screenX
    },
    presentationTouchendListener (e) {
      let prev = this.screenX
      let current = e.changedTouches[0].screenX
      if (current - prev > 100 && this.presentationCurrent > 1) {
        this.presentationCurrent--
      } else if (current - prev < -100 && this.presentationCurrent < 9) {
        this.presentationCurrent++
      }
    },
    presentationMousedownListener (e) {
      this.screenX = e.screenX
    },
    presentationMouseupListener (e) {
      let prev = this.screenX
      let current = e.screenX
      if (current - prev > 100 && this.presentationCurrent > 1) {
        this.presentationCurrent--
      } else if (current - prev < -100 && this.presentationCurrent < 9) {
        this.presentationCurrent++
      }
    },
    presentationClickListener (e) {
      let target = e.target
      do {
        if (target.dataset.serial) {
          if (parseInt(target.dataset.serial) === this.presentationCurrent) {
            if (target.dataset.src) {
              window.open(target.dataset.src)
            }
          } else {
            this.presentationCurrent = parseInt(target.dataset.serial)
          }
          break
        } else {
          target = target.parentNode
        }
      } while (target !== e.currentTarget)
    },
    redirectUrl (url) {
      window.location.href = url
    },
    touchRedirectUrl (url, e) {
      if (Math.abs(e.changedTouches[0].screenY - this.screenY) < 10) {
        window.location.gref = url
      }
    }
  },
  watch: {
    scrollCurrent (val, oldval) {
      if (val === 6) {
        this.personalAnimationStart = 'resume-content-6-personal-now'
        this.presentationAnimationStart = 'resume-content-6-presentation-now'
      }
      if (oldval === 1) {
        this.startScreenHint = 'resume-content-1-hint-hide'
      }
    }
  },
  mounted () {
    window.addEventListener('keydown', this.scrollKeydownListener, false)
    window.addEventListener('wheel', this.scrollWheelListener, false)
    window.addEventListener('touchstart', this.touchstartListener, false)
    window.addEventListener('touchend', this.touchendListener, false)
    window.addEventListener('mousedown', this.mousedownListener, false)
    window.addEventListener('mouseup', this.mouseupListener, false)
    this.$refs.resumeBackground.style.backgroundPosition = `0 ${Math.floor(Math.random() * 250)}vh`
    this.$refs.resumeMisc.style.backgroundPosition = `0 ${Math.floor(Math.random() * 500)}vh`
    this.$refs.resumeMask.style.backgroundPosition = `0 ${Math.floor(Math.random() * 1000)}vh`
  },
  beforeDestroy () {
    window.removeEventListener('keydown', this.scrollKeydownListener, false)
    window.removeEventListener('wheel', this.scrollWheelListener, false)
    window.removeEventListener('touchstart', this.touchstartListener, false)
    window.removeEventListener('touchend', this.touchendListener, false)
    window.removeEventListener('mousedown', this.mousedownListener, false)
    window.removeEventListener('mouseup', this.mouseupListener, false)
  }
}
</script>

<style lang="less">
.resume {
  height: 100vh;
  font-size: 1.2rem;
  color: #333;
  cursor: default;
  user-select: none;
  ul, h3, p {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
  }
}
.clearfix::after {
  content: "";
  display: block;
  clear: both;
  visibility: hidden;
  height: 0;
  font-size: 0;
}

// resume-background: 背景层 - 0 **************************************
.resume-background {
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 250vh;
  background: url(../assets/resume/x3.png) repeat scroll;
  background-size: 40%;
  transition: margin-top 3.5s ease;
}
@media screen and (orientation:portrait) {
  .resume-background {
    background-size: 50%;
  }
}

// resume-misc: 漂浮物层 - 1 **************************************
.resume-misc {
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 550vh;
  background: url(../assets/resume/x5.png) repeat scroll;
  background-size: 66.66%;
  transition: margin-top 3s ease;
}
@media screen and (orientation:portrait) {
  .resume-misc {
    background-size: 80%;
  }
}

// resume-mask: 近景层 - 2 **************************************
.resume-mask {
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 1000vh;
  background: url(../assets/resume/x7.png) repeat scroll;
  background-size: 100%;
  transition: margin-top 2.5s ease;
}

// resume-content: 正文层 - 3 **************************************
.resume-content {
  position: absolute;
  overflow: hidden;
  z-index: 3;
  width: 100%;
  transition: all 2s ease;
  article {
    display: flex;
    align-items: center;
    overflow: hidden;
    width: 100%;
    height: 100vh;
  }
}
// 第1页 *******************
.resume-content-1 {
  ul {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 100%;
    li {
      flex: 0 0 auto;
      font-size: 2em;
      font-weight: 700;
      color: #080808;
      text-shadow: 0 0 2px #ccc;
      &:nth-child(2n) {
        margin: .5em;
        color: #f33;
        text-shadow: 0 0 2px #fcc;
      }
      &:nth-child(8) {
        flex: 0 0 100%;
        margin: 0;
        font-size: 1.6em;
        font-weight: 400;
        text-align: center;
        transform: none;
        text-shadow: 0 0 2px #fcc;
      }
    }
  }
}
.resume-content-1-hint {
  position: absolute;
  top: 90vh;
  left: 50%;
  margin-left: -20em;
  width: 40em;
  font-size: .8em;
  text-align: center;
  animation: text-flicker 1s ease infinite;
}
.resume-content-1-hint-hide {
  display: none;
}
@media screen and (orientation:portrait) {
  .resume-content-1 {
    ul {
      flex-flow: column wrap;
      // padding-bottom: 2em;
      li {
        font-size: 1.2em;
        &:nth-child(2n) {
          margin: 0;
        }
        &:nth-child(8) {
          margin-top: 2em;
          font-size: .9em;
        }
      }
    }
  }
}
// 第2~5页 *******************
.resume-content-2, .resume-content-3, .resume-content-4, .resume-content-5 {
  ul {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    padding: 0 3em;
    li {
      overflow: hidden;
      flex: 0 0 90%;
      font-size: 1em;
      font-weight: 400;
      // 条目 - 标题
      h3 {
        font-size: 1em;
        transition: all .5s ease;
        opacity: .5;
        span {
          margin-left: 1em;
          font-size: 0.6em;
        }
      }
      // 条目 - 分数计量条
      &>div {
        box-sizing: border-box;
        border: 1px solid #333;
        border-radius: 4px;
        width: 100%;
        height: 1em;
        background-color: #fff;
        background-image: linear-gradient(90deg,rgba(255,220,220,.8), rgba(255,70,70,.8));
        transition: all .5s ease;
        &>div {
          float: right;
          border-left: 1px solid #333;
          border-radius: 0 4px 4px 0;
          height: 100%;
          background: #f8f8f8;
        }
      }
      // 条目 - 详情文字
      p {
        margin-left: 1.2em;
        max-height: 0;
        font-size: .6em;
        line-height: 1.33em;
        opacity: 0;
        transition: all .3s ease;
        &::before {
          content: "* ";
          margin-left: -1.2em;
        }
      }
      // 条目 - 整体 hover 效果
      &:hover {
        h3 {
          opacity: 1;
        }
        &>div {
          background-color: #f33;
        }
        &>p {
          opacity: 1;
          max-height: 2.66em;
        }
      }
    }
  }
}
@media screen and (orientation:portrait) {
  .resume-content-2, .resume-content-3, .resume-content-4, .resume-content-5 {
    ul {
      padding: 0;
      li {
        h3 {
          span {
            display: block;
            margin-left: 0;
            margin-top: -3px;
          }
        }
        p {
          max-height: 0;
          line-height: 1em;
        }
        &:hover {
          &>p {
            max-height: 4em;
          }
        }
      }
    }
  }
}
article.resume-content-6 {
  display: block;
}
.resume-content-6-presentation {
  position: absolute;
  z-index: 0;
  height: 100vh;
  width: 600%;
  opacity: 1;
  transition: margin-left 1s ease;
}
.resume-content-6-detail {
  display: flex;
  justify-content: center;
  align-items: center;
  float: left;
  height: 100%;
  width: 10%;
  &:nth-child(1) .resume-content-6-background { // 个人信息
    background: rgba(255,255,255,.2) url(../assets/resume/pst1.png) no-repeat;
    background-size: contain;
    background-position: 50%;
  }
  &:nth-child(3) .resume-content-6-background { // Solitaire
    background: rgb(19,200,171);
    video {
      border: 2px solid #f8f8f8;
    }
    .resume-content-6-text1 {
      color: #fff;
    }
  }
  &:nth-child(4) .resume-content-6-background { // Signin
    background: #fff;
    .resume-content-6-text2 {
      color: #333;
    }
  }
  &:nth-child(5) .resume-content-6-background { // Article
    .resume-content-6-text1 {
      color: rgb(21,240,211);
    }
  }
  &:nth-child(6) .resume-content-6-background { // Shadowsocks
    background: radial-gradient(#888,#333);
    video {
      border: 2px solid #faa;
    }
    .resume-content-6-text1 {
      color: #faa;
    }
  }
  &:nth-child(7) .resume-content-6-background { // Resume
    background: #fff;
    .resume-content-6-text1, .resume-content-6-text2 {
      color: #f33;
    }
  }
  &:nth-child(9) .resume-content-6-background { // Comming Soon
    video {
      border: 2px solid #fff;
    }
  }
}
.resume-content-6-background {
  overflow: hidden;
  display: flex;
  flex: 0 0 auto;
  justify-content: center;
  align-items: center;
  border: 1px solid #666;
  height: 300vh;
  width: 43vw;
  box-shadow: 0 0 10px -2px #333;
  transform: rotate(45deg);
  background: linear-gradient(-45deg, #111, #111, #fff, #fff);
  transition: transform .3s ease;
  cursor: pointer;
  video {
    z-index: -1;
    flex: 0 0 auto;
    border: 2px solid #333;
    height: 47.8125vmin;
    width: 85vmin;
    transform: rotate(-45deg);
  }
  &:hover {
    transform: rotate(45deg) scale(1.1);
    .resume-content-6-text2 {
      z-index: 3;
    }
  }
}
.resume-content-6-text1 {
  position: absolute;
  margin-top: -22vh;
  margin-left: -22vh;
  transform: rotate(-45deg);
  font-size: 12vh;
  font-weight: 700;
}
.resume-content-6-text2 {
  position: absolute;
  margin-top: 20.2vh;
  margin-left: 19.8vh;
  transform: rotate(-45deg);
  font-size: 6vh;
  font-weight: 400;
  color: #fff;
}
.resume-content-6-text3 {
  position: absolute;
  z-index: 0;
  margin-top: -40vh;
  margin-left: 24vh;
  transform: rotate(-45deg);
  font-size: 2.5vh;
  font-weight: 700;
  font-variant: small-caps;
  line-height: 4vh;
  span {
    display: inline-block;
    margin-bottom: 1vh;
    border-radius: .5vh;
    padding: 0 1vh;
    text-align: center;
  }
  .resume-content-6-text3a {
    border: 2px solid #333;
    background: #fff;
    color: #333;
  }
  .resume-content-6-text3b {
    border: 2px solid #fff;
    background: rgb(19,200,171);
    color: #fff;
  }
  .resume-content-6-text3c {
    border: 2px solid #faa;
    background: #666;
    color: #f8f8f8;
  }
}
.resume-content-6-presentation-now {
  animation: presentation-show 6s ease forwards;
}
@keyframes presentation-show {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.resume-content-6-personal {
  display: flex;
  visibility: hidden;
  flex-flow: row wrap;
  z-index: 1;
  height: 100%;
  justify-content: center;
  align-items: center;
  align-content: center;
  &>div {
    flex: 0 0 auto;
    width: 7.5em;
    height: 7.5em;
    background: url(../assets/resume/avatar.png);
    background-size: contain;
  }
  ul {
    flex: 0 0 auto;
    margin-left: 1em;
    height: 8em;
    li {
      width: auto;
      height: 2em;
      line-height: 2em;
      font-size: 1em;
      font-weight: 700;
      &:first-child {
        line-height: 2em;
        font-size: 2em;
      }
    }
  }
}
.resume-content-6-personal-now {
  animation: personal-show 4s ease forwards;
}
@keyframes personal-show {
  0% {
    visibility: visible;
    opacity: 1;
    transform: scale(1);
  }
  75% {
    visibility: visible;
    opacity: 1;
    transform: scale(1);
  }
  100% {
    visibility: hidden;
    opacity: 0;
    transform: scale(1.2);
  }
}
.resume-content-6-indicator {
  position: absolute;
  z-index: 1;
  margin-top: -1.6em;
  height: 3vh;
  width: 100%;
  ul {
    padding: 0;
    margin: 0;
    font-size: 0;
    text-align: right;
    li {
      display: inline-block;
      border-radius: 100vh;
      transform: rotate(45deg);      
      margin-right: 2vh;
      height: 2vh;
      width: 2vh;
      background: #fff;
      transition: all .5s ease;
      box-shadow: 0 0 1px 0 #333;
      cursor: pointer;
      &:hover {
        transform: scale(1.25);
        background: #fff;
      }
      &:first-child {
        margin-left: 2vh;
      }
      &:last-child {
        font-size: 1rem;
        margin-right: 3em;
      }
    }
  }
}
.resume-content-6-indicator-1 {
  li:nth-child(1) {
    transform: scale(1.25);
    background: #000000;
  }
}
.resume-content-6-indicator-2 {
  li:nth-child(2) {
    transform: scale(1.25);
    background: #080808;
  }
}
.resume-content-6-indicator-3 {
  li:nth-child(3) {
    transform: scale(1.25);
    background: #101010;
  }
}
.resume-content-6-indicator-4 {
  li:nth-child(4) {
    transform: scale(1.25);
    background: #181818;
  }
}
.resume-content-6-indicator-5 {
  li:nth-child(5) {
    transform: scale(1.25);
    background: #202020;
  }
}
.resume-content-6-indicator-6 {
  li:nth-child(6) {
    transform: scale(1.25);
    background: #282828;
  }
}
.resume-content-6-indicator-7 {
  li:nth-child(7) {
    transform: scale(1.25);
    background: #303030;
  }
}
.resume-content-6-indicator-8 {
  li:nth-child(8) {
    transform: scale(1.25);
    background: #383838;
  }
}
.resume-content-6-indicator-9 {
  li:nth-child(9) {
    transform: scale(1.25);
    background: #404040;
  }
}
@media screen and (orientation:portrait) {
  .resume-content-6-background {
    width: 40vw;
    height: 40vw;
    video {
      height: 36vw;
      width: 64vw;
    }
    .resume-content-6-text1 {
      display: none;
    }
    .resume-content-6-text2 {
      display: none;
    }
    .resume-content-6-text3 {
      display: none;
    }
  }
  .resume-content-6-personal {
    flex-flow: column wrap;
    justify-content: center;
    ul {
      margin: .5em 0 0;
      width: 100%;
      li {
        width: 100%;
        height: 1.5em;
        line-height: 1.5em;
        font-size: .6em;
        text-align: center;
        &:first-child {
          line-height: 1em;
          font-size: 1em;
        }
      }
    }
  }
  .resume-content-6-indicator {
    margin-top: -8em;
    ul {
      text-align: center;
      li:last-child {
        font-size: 0;
      }
    } 
  }
}
.resume-content-7 {
  justify-content: center;
  &>div {
    flex: 0 0 auto;
    width: 7em;
    height: 7em;
    background: #fff url(../assets/resume/wechat.png);
    background-size: contain;
  }
  ul {
    flex: 0 0 auto;
    margin-left: 2em;
    height: 8em;
    li {
      width: auto;
      height: 2em;
      line-height: 2em;
      font-size: 1em;
      font-weight: 700;
      &:nth-child(3), &:nth-child(4) {
        cursor: pointer;
        span {
          text-decoration: underline;
        }
      }
    }
  }
}
@media screen and (orientation:portrait) {
  .resume-content-7 {
    flex-flow: column wrap;
    justify-content: center;
    ul {
      margin: 2em 0 0;
      width: 100%;
      li {
        width: 100%;
        height: 1.5em;
        line-height: 1.5em;
        font-size: .6em;
        text-align: center;
      }
    }
  }
}

// resume-fixed: 固定内容层 - 4 **************************************
.resume-fixed {
  position: fixed;
  z-index: 4;
  height: 0;
  width: 0; 
}
// 头部导航条 *******************
.resume-fixed-header {
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  width: 100%;
  min-width: 40em;
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
.resume-fixed-header-print {
  text-decoration: none !important;
}
.resume-fixed-header-1 {
  li:nth-child(4) {
    animation: text-flicker 1s ease infinite;
  }
}
.resume-fixed-header-2 {
  li:nth-child(6) {
    animation: text-flicker 1s ease infinite;
  }
}
.resume-fixed-header-3 {
  li:nth-child(8) {
    animation: text-flicker 1s ease infinite;
  }
}
// 底部网站信息 *******************
.resume-fixed-footer {
  position: fixed;
  left: 3em;
  bottom: 1em;
  font-size: .75em;
  font-weight: 700;
  span {
    margin-left: .75em;
    font-weight: 400;
  }
}
// 右下导航指示器 *******************
.resume-fixed-nav {
  position: fixed;
  right: 3em;
  bottom: 1em;
  font-size: .75em;
  font-weight: 700;
  transition: all 1s ease;
  li {
    display: inline;
    color: #999;
    cursor: pointer;
    transition: all 1s ease;
    &:nth-child(2n) {
      color: #f33;
      cursor: default;
    }
  }
}
// 右下导航指示器在不同页面的动画 *******************
.resume-fixed-nav-1, .resume-fixed-nav-6, .resume-fixed-nav-7 {
  bottom: -2em;
}
.resume-fixed-nav-2 {
  li:nth-child(1) {
    color: #333;
  }
}
.resume-fixed-nav-3 {
  li:nth-child(3) {
    color: #333;
  }
}
.resume-fixed-nav-4 {
  li:nth-child(5) {
    color: #333;
  }
}
.resume-fixed-nav-5 {
  li:nth-child(7) {
    color: #333;
  }
}
.resume-fixed-nav-6 {
  li:nth-child(7) {
    bottom: -2em;
  }
}
@media screen and (orientation:portrait) {
  .resume-fixed-header {
    min-width: 0;
    width: 100vw;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    li {
      // 文字部分
      &:nth-child(2n) {
        flex: 0 0 auto;
        font-size: .8em;
      }
      // 分隔线部分
      &:nth-child(2n+1) {
        flex: 1 1 auto;
      }
      // 分隔线部分 - 自适应分隔线
      &:nth-child(9) {
        flex: 1 1 auto;
      }
      &:nth-child(2n+4):hover {
        animation: none;
      }
      &:nth-child(1) {
        display: none;
        flex: 0 0 0;
      }
      &:nth-child(2) {
        display: none;
        flex: 0 0 0;
      }
      &:nth-child(10) {
        display: none;
        flex: 0 0 0;
      }
      &:nth-child(11) {
        display: none;
        flex: 0 0 0;
      }
    }
  }
  .resume-fixed-footer {
    display: none;
  }
  .resume-fixed-nav {
    bottom: 1em;
    right: 0;
    width: 100%;
    font-size: .6em;
    text-align: center;
  }
  .resume-fixed-nav-1, .resume-fixed-nav-6, .resume-fixed-nav-7 {
    bottom: -6em;
  }
}

// resume-profile: 资料信息层 - 5 **************************************
.resume-profile {
  
}
</style>
