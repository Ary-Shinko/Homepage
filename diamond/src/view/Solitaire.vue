<template>
  <div class="solitaire">
    <card-table></card-table>
    <card-balance></card-balance>
    <router-link class="login-button" :to="{ path: '/signin', query: { redirect: '/solitaire' }}">Sign In</router-link>
    <header-title v-fade main-color="#396" sub-color="#3a6">SOLITAIRE</header-title>
  </div>
</template>

<script>
import HeaderTitle from '../components/HeaderTitle.vue'

import CardTable from '../components/solitaire/CardTable.vue'
import CardBalance from '../components/solitaire/CardBalance.vue'

export default {
  components: {
    HeaderTitle,
    CardTable,
    CardBalance
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
