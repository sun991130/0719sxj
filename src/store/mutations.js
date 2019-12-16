import {AJAX_ADDRESS,
        AJAX_SHOPS,
        AJAX_FOODS,
        APP_USER,
        APP_TOKON
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
    [APP_TOKON](state,{tokon}){
      state.tokon = tokon
    }
  }