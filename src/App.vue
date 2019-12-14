<template>
  <div>
    <router-view></router-view>
    <Fooder v-show="$route.meta.isShow"></Fooder>
  </div>
</template>

<script type="text/ecmascript-6">
import Fooder from './components/Footer/Fooder.vue'
  export default {
    components:{
      Fooder
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
