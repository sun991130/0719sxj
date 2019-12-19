<template>
 <section class="msite">
  <!--首页头部-->
  <Header :title="address.name || '定位中...'">
    <span class="header_login" slot="right">
      <span class="header_login_text">登录|注册</span>
    </span>
    <span class="header_search" slot="left">
      <i class="iconfont icon-sousuo"></i>
    </span> 
  </Header>
  <!--首页导航-->
  <nav class="msite_nav">
    <div ref="sc1" class="swiper-container" v-if="shops.length>0">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(shop, index) in shops1" :key="index">
          <div class="link_to_food" v-for="(a, index) in shop" :key="index">
            <div class="food_container">
              <img :src="'https://fuss10.elemecdn.com' + a.image_url">
            </div>
            <span>{{a.title}}</span>
          </div>          
        </div>
        </div>
      <!-- Add Pagination -->
       <div class="swiper-pagination"></div>
    </div>
    <div v-else><img src="./images/msite_back.svg" alt=""></div>
  </nav>
  <!--首页附近商家-->
  <div class="msite_categorys_list">
    <div class="categorys_header">
      <i class="iconfont icon-xuanxiang"></i>
      <span class="categorys_header_title">附近商家</span>
    </div>
    <div class="categorys_container">
      <ul class="categorys_list" v-if='categorys.length>0'>
        <li class="categorys_li border-1px" v-for="categorys in categorys" :key="categorys.id" @click="$router.push('/shop')">
            <a>
              <div class="categorys_left">
                <img class="categorys_img" :src="'https://fuss10.elemecdn.com' + categorys.image_path">
              </div>
              <div class="categorys_right">
                <section class="categorys_detail_header">
                  <h4 class="categorys_title ellipsis">{{categorys.name}}</h4>
                  <ul class="categorys_detail_ul">
                    <li class="supports" v-for="(support, index) in categorys.supports" :key="index">{{support.icon_name}}</li>
                  </ul>
                </section>
                <section class="categorys_rating_order">
                  <section class="categorys_rating_order_left">
                    <div class="star star-24">
                      <span class="star-item on"></span>
                      <span class="star-item on"></span>
                      <span class="star-item on"></span>
                      <span class="star-item half"></span>
                      <span class="star-item off"></span>
                    </div>
                    <div class="rating_section">
                      {{categorys.rating}}
                    </div>
                    <div class="order_section">
                      月售{{categorys.recent_order_num}}单
                    </div>
                  </section>
                  <section class="categorys_rating_order_right">
                    <span class="delivery_style delivery_right"></span>
                  </section>
                </section>
                <section class="categorys_distance">
                  <p class="categorys_delivery_msg">
                    <span>¥{{categorys.float_minimum_order_amount}}起送</span>
                    <span class="segmentation">/</span>
                    <span>配送费约¥{{categorys.float_delivery_fee}}</span>
                  </p>
                </section>
              </div>
            </a>
          </li>
      </ul>
      <ul v-else>
           <li>
            <img src="./images/shop_back.svg" alt="loading">
          </li>
          <li>
            <img src="./images/shop_back.svg" alt="loading">
          </li>
          <li>
            <img src="./images/shop_back.svg" alt="loading">
          </li>
          <li>
            <img src="./images/shop_back.svg" alt="loading">
          </li>
      </ul>
    </div>
    </div>
  </section>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import "swiper/css/swiper.css"
  import {mapState} from 'vuex'
  import _ from 'lodash'
  export default {

    computed: {
      ...mapState(['address','categorys','shops']),
        shops1(){
          return _.chunk(this.shops , 8) 
      }
     
    },
    async mounted() {
      
      this.$store.dispatch('getshops')
      await this.$store.dispatch('getFoods')
        new Swiper(this.$refs.sc1,{
          loop: true,
          pagination: {
          el: '.swiper-pagination',
          },
        })
  }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'

    .msite  //首页
      width 100%
      .msite_nav
        bottom-border-1px(#e4e4e4)
        margin-top 45px
        height 200px
        background #fff
        .swiper-container
          width 100%
          height 100%
          .swiper-wrapper
            width 100%
            height 100%
            .swiper-slide
              display flex
              flex-wrap wrap
              .link_to_food
                width 25%
                .food_container
                  display block
                  width 100%
                  text-align center
                  padding-bottom 10px
                  font-size 0
                  img
                    display inline-block
                    width 50px
                    height 50px
                span
                  display block
                  width 100%
                  text-align center
                  font-size 13px
                  color #666
          .swiper-pagination
            >span.swiper-pagination-bullet-active
              background #02a774
      .msite_categorys_list
        top-border-1px(#e4e4e4)
        margin-top 10px
        background #fff
        .categorys_header
          padding 10px 10px 0
          .categorys_icon
            margin-left 5px
            color #999
          .categorys_header_title
            color #999
            font-size 14px
            line-height 20px
        .categorys_container
          margin-bottom 50px
          .categorys_list
            .categorys_li
              bottom-border-1px(#f1f1f1)
              width 100%
              >a
                clearFix()
                display block
                box-sizing border-box
                padding 15px 8px
                width 100%
                .categorys_left
                  float left
                  box-sizing border-box
                  width 23%
                  height 75px
                  padding-right 10px
                  .categorys_img
                    display block
                    width 100%
                    height 100%
                .categorys_right
                  float right
                  width 77%
                  .categorys_detail_header
                    clearFix()
                    width 100%
                    .categorys_title
                      float left
                      width 200px
                      color #333
                      font-size 16px
                      line-height 16px
                      font-weight 700
                      &::before
                        content '品牌'
                        display inline-block
                        font-size 11px
                        line-height 11px
                        color #333
                        background-color #ffd930
                        padding 2px 2px
                        border-radius 2px
                        margin-right 5px
                    .categorys_detail_ul
                      float right
                      margin-top 3px
                      .supports
                        float left
                        font-size 10px
                        color #999
                        border 1px solid #f1f1f1
                        padding 0 2px
                        border-radius 2px
                  .categorys_rating_order
                    clearFix()
                    width 100%
                    margin-top 18px
                    margin-bottom 8px
                    .categorys_rating_order_left
                      float left
                      color #ff9a0d
                      .star //2x图 3x图
                        float left
                        font-size 0
                        .star-item
                          display inline-block
                          background-repeat no-repeat
                        &.star-48
                          .star-item
                            width 20px
                            height 20px
                            margin-right 22px
                            background-size 20px 20px
                            &:last-child
                              margin-right: 0
                            &.on
                              bg-image('./images/stars/star48_on')
                            &.half
                              bg-image('./images/stars/star48_half')
                            &.off
                              bg-image('./images/stars/star48_off')
                        &.star-36
                          .star-item
                            width 15px
                            height 15px
                            margin-right 6px
                            background-size 15px 15px
                            &:last-child
                              margin-right 0
                            &.on
                              bg-image('./images/stars/star36_on')
                            &.half
                              bg-image('./images/stars/star36_half')
                            &.off
                              bg-image('./images/stars/star36_off')
                        &.star-24
                          .star-item
                            width 10px
                            height 10px
                            margin-right 3px
                            background-size 10px 10px
                            &:last-child
                              margin-right 0
                            &.on
                              bg-image('./images/stars/star24_on')
                            &.half
                              bg-image('./images/stars/star24_half')
                            &.off
                              bg-image('./images/stars/star24_off')
                      .rating_section
                        float left
                        font-size 10px
                        color #ff6000
                        margin-left 4px
                      .order_section
                        float left
                        font-size 10px
                        color #666
                        transform scale(.8)
                    .categorys_rating_order_right
                      float right
                      font-size 0
                      .delivery_style
                        transform-origin 35px 0
                        transform scale(.7)
                        display inline-block
                        font-size 12px
                        padding 1px
                        border-radius 2px
                      .delivery_left
                        color #fff
                        margin-right -10px
                        background-color #02a774
                        border 1px solid #02a774
                      .delivery_right
                        color #02a774
                        border 1px solid #02a774
                  .categorys_distance
                    clearFix()
                    width 100%
                    font-size 12px
                    .categorys_delivery_msg
                      float left
                      transform-origin 0
                      transform scale(.9)
                      color #666
                    .segmentation
                      color #ccc
      
 
</style>
