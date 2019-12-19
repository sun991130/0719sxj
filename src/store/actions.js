import {reqAddress,reqFood,reqShops,reqtoko,reqInfo,reqGoods,reqRatings} from '@/axios'
import {AJAX_ADDRESS,AJAX_SHOPS,AJAX_FOODS,APP_USER,APP_TOKON,CLEAR_TOKON,CLEAR_USER
,SHOP_GOODS,SHOP_RATINGS,SHOP_INFO
} from './mutations_Type'


export default{


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

 
  //保存用户
  getuser({commit},user){
    const token = user.token
    console.log(token)

    //上传token
    localStorage.setItem('token_key', token)

    
    console.log(token)

    //删除user内部的tokon
    delete user.token
    //保存到用户
    commit(APP_USER,{user})
    //保存到tokon
    commit(APP_TOKON,{token})
  },

  getOut({commit}){
    localStorage.removeItem('token_key')
    commit(CLEAR_TOKON)
    commit(CLEAR_USER)
  },

  //自动登录
 async getToko({commit,state}){
      
    //有tokon 并且没有user信息 是个空对象
    if(state.token && !state.user._id){
      //发送请求
      const result = await reqtoko()
      //对成功的处理
        if(result.code === 0){
          const user = result.data
          commit(APP_USER,{user})
        }

    }
  },

  //商品列表

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

}