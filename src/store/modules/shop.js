//商家相关的模块
import Vue from 'vue'
import {reqInfo,reqGoods,reqRatings} from '@/axios'

import {SHOP_GOODS,SHOP_INFO,SHOP_RATINGS,ADD_COUNT,DEL_COUNT} from '../mutations_Type'

export default {
  state:{
    goods: [], // 商品列表
    ratings: [], // 商家评价列表
    info: {}, // 商家信息
  },
  mutations:{
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

    //food的增加
    [ADD_COUNT](state,{food}){
      if(food.count){
        food.count++
      }else{
        //如果food中没有count 就添加一个 值为1
        //后添加的count没有数据绑定 给响应对象添加一个新的属性
        // counnt = 1

        //添加响应式 
        Vue.set(food ,'count' ,1)
      }
    },
    //food减少 
    [DEL_COUNT](state,{food}){
      //限制不会多点
     if(food.count > 0){
      food.count--
     }
    }
  },

  actions:{
     // 异步获取商家信息
  async getShopInfo({commit}, cb) {
    const result = await reqInfo()
    if(result.code===0) {
      const info = result.data
      info.score = 3.5
      commit(SHOP_INFO, {info})

      cb && cb()
    }
  },

  // 异步获取商家评价列表
  async getShopRatings({commit}, cb) {
    const result = await reqRatings()
    if(result.code===0) {
      const ratings = result.data
      commit(SHOP_RATINGS, {ratings})

      cb && cb()
    }
  },

  // 异步获取商家商品列表
  async getShopGoods({commit}, cb) {
    const result = await reqGoods()
    if(result.code===0) {
      const goods = result.data
      commit(SHOP_GOODS, {goods})
      // 如果组件中传递了接收消息的回调函数, 数据更新后, 调用回调通知调用的组件
      cb && cb()
    }
  },

  //更新food中的数量 同步关系

  updatafoodcount({commit},{isAdd,food} ){
    if(isAdd){
      commit(ADD_COUNT,{food})
    }else{
      commit(DEL_COUNT,{food})
    }
  }
  },

  getters:{

  }
}