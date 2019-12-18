import {AJAX_ADDRESS,
        AJAX_SHOPS,
        AJAX_FOODS,
        APP_USER,
        APP_TOKON,
        CLEAR_TOKON,
        CLEAR_USER,
        SHOP_GOODS,
        SHOP_INFO,
        SHOP_RATINGS
  } from './mutations_Type'

  export default{
    [AJAX_ADDRESS](state,address){
      state.address = address
    },
    [AJAX_FOODS](state,categorys){
      state.categorys = categorys
    },
    [AJAX_SHOPS](state,shops){
      state.shops = shops
    },
    [APP_USER](state,{user}){
      state.user = user
    },
    [APP_TOKON](state,{token}){
      state.token = token
    },
    
    [APP_TOKON](state,{token}){
      state.token = token
    },
    [CLEAR_TOKON](state){
      state.token = ''
    },
    [CLEAR_USER](state){
      state.user = {}
    },

    //商家列表

    [SHOP_GOODS](state,{goods}){
      state.goods = goods
    },
    [SHOP_INFO](state,{info}){
      state.info = info
    },
    [SHOP_RATINGS](state,{ratings}){
      state.ratings = ratings
    },
    
  }