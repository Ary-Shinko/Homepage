<template>
  <div class="article-submit">
    <div class="article-submit-content">
      <h1>Submit your article</h1>
      <div>
        <span>Author: {{ authData.name ? authData.name : '(Autofilled after sign in)' }}</span>
        <span>Date: {{ date }}</span>
        <span>License: {{ license }}</span>
        <span>Type: {{ type }}</span>
      </div>
      <input class="article-submit-title" type="text" placeholder="Title" v-model="title">
      <textarea placeholder="Write article here" v-model="content"></textarea>
      <div>
        <span><input type="text" placeholder="Keyword" v-model="keywords[0]"><input type="text" placeholder="Keyword(optional)" v-model="keywords[1]"><input type="text" placeholder="Keyword(optional)" v-model="keywords[2]"><input type="text" placeholder="Keyword(optional)" v-model="keywords[3]"></span><br>
        <span><button @click="checkArticle">Submit</button><button @click="saveDraft(); $emit('close'); postMessage('Draft saved.')">Save</button><button @click="$emit('close')">Cancel</button></span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      date: new Date().toLocaleDateString().split('/').map(v => v.padStart(2, 0)).join('/'),
      license: 'CC BY-NC 3.0',
      type: 'Blog',
      title: '',
      content: '',
      keywords: ['', '', '', ''],
      saveTimer: 0
    }
  },
  props: ['status'],
  computed: {
    ...mapState([
      'articleCurrent',
      'authData'
    ])
  },
  methods: {
    ...mapActions([
      'submitArticle',
      'postMessage'
    ]),
    saveDraft () {
      window.localStorage.setItem('articleDraftTitle', this.title)
      window.localStorage.setItem('articleDraftContent', this.content)
      window.localStorage.setItem('articleDraftKeywords', JSON.stringify(this.keywords))
    },
    checkArticle () {
      if (this.title && this.content && this.keywords[0]) {
        this.submitArticle({
          articleData: {
            author: this.authData.name,
            date: this.date,
            license: this.license,
            type: this.type,
            title: this.title,
            content: this.content,
            keywords: this.keywords
          },
          callback: () => {
            window.localStorage.setItem('articleDraftTitle', '')
            window.localStorage.setItem('articleDraftContent', '')
            window.localStorage.setItem('articleDraftKeywords', '')
            this.$emit('close')
          }}
        )
      }
    }
  },
  mounted () {
    if (window.localStorage['articleDraftContent'] || window.localStorage['articleDraftTitle'] || window.localStorage['articleDraftKeywords']) {
      this.title = window.localStorage['articleDraftTitle']
      this.content = window.localStorage['articleDraftContent']
      this.keywords = JSON.parse(window.localStorage['articleDraftKeywords'])
    }
    this.saveTimer = setInterval(() => {
      this.saveDraft()
      this.postMessage(`Autosaved at ${new Date().toTimeString().substr(0, 8)}.`)
    }, 30000)
  },
  beforeDestroy () {
    clearInterval(this.saveTimer)
  }
}
</script>

<style lang="less">
.article-submit {
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 3rem;
  background: rgba(0, 0, 0, 0.85);
  color: #213040;
  .article-submit-content {
    height: 100%;
    padding: 3rem;
    background: #f8f8f8;
    border-radius: .5rem;
    h1 {
      margin: 0;
    }
    span {
      margin-right: 3rem;
    }
    textarea {
      margin: 1rem 0 1rem;
      padding: 0;
      width: 100%;
      height: 16rem;
      border: none;
      border-radius: .3rem;
      background: #eee;
      resize : none;
      font-family: 'Roboto Mono', 'SourceHanSansCNNormal', sans-serif;
      &:focus {
        background: #f8f8f8;
        outline: none;
      }
      &::placeholder {
        color: #aaa;
        font-family: 'Roboto Mono', 'SourceHanSansCNNormal', sans-serif;
      }
    }
    input {
      margin: 0 2rem 0 0;
      padding: 0;
      height: 1.5rem;
      width: 11rem;
      border: none;
      border-bottom: 1px solid #aaa;
      transition: all ease .3s;
      background: #f8f8f8;
      font-family: 'Roboto Mono', 'SourceHanSansCNNormal', sans-serif;
      &:focus {
        border-bottom: 1px solid #213040;
        outline: none;
      }
      &::placeholder {
        color: #aaa;
        font-family: 'Roboto Mono', 'SourceHanSansCNNormal', sans-serif;
      }
      &.article-submit-title {
        margin-top: 2rem;
        width: 100%;
        height: 2rem;
        font-weight: 800;
        font-size: 1.2rem;
      }
    }
    button {
      float: right;
      margin: 1rem 0 0 2rem;
      padding: 0;
      height: 1.5rem;
      width: 8rem;
      border: none;
      border-radius: .3rem;
      background: #e0e0e0;
      font-weight: 800;
      font-family: 'Roboto Mono', 'SourceHanSansCNNormal', sans-serif;
      &:focus {
        background: #eee;
        outline: none;
      }
    }
  }
}
</style>
