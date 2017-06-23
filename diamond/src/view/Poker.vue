<template>
  <div class="poker">
    <card-table></card-table>
    <router-link class="login-button" :to="{ path: '/signin', query: { redirect: '/poker' }}">Sign In</router-link>
    <logo></logo>
  </div>
</template>

<script>
import Logo from '../components/Logo.vue'
import CardTable from '../components/poker/CardTable.vue'

export default {
  components: {
    Logo,
    CardTable
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
