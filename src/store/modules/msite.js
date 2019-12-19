//首页模块
//  相关数据管理

import {
  AJAX_ADDRESS,
  AJAX_SHOPS,
  AJAX_FOODS,
} from '../mutations_Type'

import {reqAddress,reqFood,reqShops} from '@/axios'

export default {
  state:{
    longitude :116.36867,//经度
    latitude:40.10038,//纬度
   //地址信息对象
    address :{},
    //分类数组
    categorys:[],
    //商家列表
    shops:[]
  },

  mutations:{
    [AJAX_ADDRESS](state,address){
      state.address = address
    },
    [AJAX_FOODS](state,categorys){
      state.categorys = categorys
    },
    [AJAX_SHOPS](state,shops){
      state.shops = shops
    }
  },

  actions:{
    async getAddress({commit,state}){
      const {longitude,latitude} = state
      const result = await reqAddress(longitude,latitude)
      if(result.code ===0){
        const address = result.data
        commit(AJAX_ADDRESS,address)
      }
    },
  
    async getFoods({commit}){
      const result = await reqFood()
      if(result.code ===0){
        const food = result.data
        commit(AJAX_SHOPS,food)
      }
    },
  
    async getshops({commit,state}){
      const {longitude, latitude} = state
      const result = await reqShops({longitude, latitude})
      if(result.code ===0){
        const shops = result.data
        commit(AJAX_FOODS,shops)
      }
    },
  
  },
  getters:{}
}