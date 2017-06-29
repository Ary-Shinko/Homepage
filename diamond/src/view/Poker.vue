<template>
  <div class="poker">
    <card-table></card-table>
    <router-link class="login-button" :to="{ path: '/signin', query: { redirect: '/poker' }}">Sign In</router-link>
    <header-title v-fade main-color="#396" sub-color="#3a6">POKER</header-title>
  </div>
</template>

<script>
import CardTable from '../components/poker/CardTable.vue'
import HeaderTitle from '../components/HeaderTitle.vue'

export default {
  components: {
    CardTable,
    HeaderTitle
  }
}
</script>

<style lang="less">
.poker {
  width: 100vw;
  height: 100vh;
  background: #3a6;
}
</style>
