<template>
  <div class="tarot">
    <before-leave :nextHandle="nextHandle"></before-leave>
    <user-tag></user-tag>
    <header-title v-fade main-color="#565" sub-color="#676">TAROT</header-title>
    http://www.marytcusack.com/maryc/tarot/Art%20Nouveau.html TESTING
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

import HeaderTitle from '../components/HeaderTitle.vue'
import BeforeLeave from '../components/BeforeLeave.vue'
import UserTag from '../components/UserTag.vue'
// import CardTable from '../components/solitaire/CardTable.vue'

export default {
  components: {
    HeaderTitle,
    BeforeLeave,
    UserTag
  },
  data () {
    return {
      nextHandle: null
    }
  },
  methods: {
    ...mapMutations({
      showLeaveHint: 'SHOW_LEAVE_HINT'
    })
  },
  beforeRouteLeave (to, from, next) {
    this.nextHandle = () => {
      next()
    }
    this.showLeaveHint()
  }
}
</script>

<style>
.tarot {
  width: 100vw;
  height: 100vh;
  background: #335;
}
</style>
