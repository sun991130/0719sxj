import {reqAddress,reqFood,reqShops,reqtoko} from '@/axios'
import {AJAX_ADDRESS,AJAX_SHOPS,AJAX_FOODS,APP_USER,APP_TOKON,CLEAR_TOKON,CLEAR_USER} from './mutations_Type'


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


      
      
  }
}