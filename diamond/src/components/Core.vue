<template>
  <div class="core test" :class="navigationObject">
    <div class="core-grid grid-unit"></div>
    <div class="core-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'navigationStep'
    ]),
    navigationObject () {
      return {
        'navigation-core-up1': this.navigationStep === 1,
        'navigation-core-up2': this.navigationStep === 2,
        'navigation-core-up3': this.navigationStep === 3,
        'navigation-core-down1': this.navigationStep === -1,
        'navigation-core-down2': this.navigationStep === -2,
        'navigation-core-down3': this.navigationStep === -3
      }
    }
  }
}
</script>

<style>
</style>
