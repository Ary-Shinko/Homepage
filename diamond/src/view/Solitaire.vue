<template>
  <div class="solitaire">
    <card-table></card-table>
    <card-balance></card-balance>
    <card-final-balance></card-final-balance>
    <card-hint v-if="cardHint"></card-hint>
    <before-leave :nextHandle="nextHandle"></before-leave>
    <user-tag></user-tag>
    <header-title v-fade main-color="#565" sub-color="#676">SOLITAIRE</header-title>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

import HeaderTitle from '../components/HeaderTitle.vue'
import BeforeLeave from '../components/BeforeLeave.vue'
import UserTag from '../components/UserTag.vue'
import CardTable from '../components/solitaire/CardTable.vue'
import CardBalance from '../components/solitaire/CardBalance.vue'
import CardFinalBalance from '../components/solitaire/CardFinalBalance.vue'
import CardHint from '../components/solitaire/CardHint.vue'

export default {
  components: {
    HeaderTitle,
    BeforeLeave,
    UserTag,
    CardTable,
    CardBalance,
    CardFinalBalance,
    CardHint
  },
  data () {
    return {
      nextHandle: null
    }
  },
  computed: {
    ...mapState([
      'cardHint'
    ])
  },
  methods: {
    ...mapMutations({
      showLeaveHint: 'SHOW_LEAVE_HINT'
    })
  },
  beforeRouteLeave (to, from, next) {
    if (this.cardHint === false) {
      this.nextHandle = () => {
        next()
      }
      this.showLeaveHint()
    } else {
      next()
    }
  }
}
</script>

<style>
.solitaire {
  width: 100vw;
  height: 100vh;
  background: #22deab;
}
</style>
