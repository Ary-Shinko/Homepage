<template>
  <div class="solitaire">
    <card-table></card-table>
    <card-balance></card-balance>
    <card-final-balance></card-final-balance>
    <card-hint v-if="cardHint"></card-hint>
    <router-link class="g-login-button" :to="{ path: '/signin', query: { redirect: '/solitaire' }}">Sign In</router-link>
    <header-title v-fade main-color="#396" sub-color="#3a6">SOLITAIRE</header-title>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import HeaderTitle from '../components/HeaderTitle.vue'
import UserTag from '../components/UserTag.vue'
import CardTable from '../components/solitaire/CardTable.vue'
import CardBalance from '../components/solitaire/CardBalance.vue'
import CardFinalBalance from '../components/solitaire/CardFinalBalance.vue'
import CardHint from '../components/solitaire/CardHint.vue'

export default {
  components: {
    HeaderTitle,
    UserTag,
    CardTable,
    CardBalance,
    CardFinalBalance,
    CardHint
  },
  computed: {
    ...mapState([
      'cardHint'
    ])
  }
}
</script>

<style lang="less">
.solitaire {
  width: 100vw;
  height: 100vh;
  background: #3a6;
}
</style>
