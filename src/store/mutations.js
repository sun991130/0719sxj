import {AJAX_ADDRESS,
        AJAX_SHOPS,
        AJAX_FOODS
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
    }
  }