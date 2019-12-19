<template>
  <div>
    ShopGoods组件
  </div>
</template>

<script>
import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState(['goods'])
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
