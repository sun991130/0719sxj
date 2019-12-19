//用户相关的模块
import {
  APP_USER,
  APP_TOKON,
  CLEAR_TOKON,
  CLEAR_USER
} from '../mutations_Type'

import {reqtoko} from '@/axios'

export default {
  state:{
    user:{},
    token:localStorage.getItem('token_key') || '',
  
    
  },
  mutations:{
    [APP_USER](state,{user}){
      state.user = user
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
  },
  actions:{
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
  },
  getters:{}
}