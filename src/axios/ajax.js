//发送请求和响应拦截器
//二次封装axios

import axios from 'axios'
import qs from 'qs'
import { Indicator, Toast, MessageBox } from 'mint-ui'
import store from '@/store/index.js'
import router from '@/router/index.js'

//axios里面有个实例对象 也是一个函数 create
const instance = axios.create({
  // baseURL:'http://localhost:4000',
  baseURL:'/api',
  // 4. 配置请求超时的时间
  timeout: 20000

})

//发送请求拦截器
instance.interceptors.request.use((config) => {

  Indicator.open()
  // 3. 对post请求参数进行ulencode处理, 而不使用默认的json方式(后台接口不支持)
  const data = config.data
  if(data instanceof Object){
    config.data = qs.stringify(data)
  }

  //5.获取tokon的值
  const token = store.state.token

  //如果当前接口需要token校验,但是没有token,不发请求,进入错误流程
    if(token){
    //如果有token 则吧 token添加到请求头去
      config.headers['Authorization'] = token
    }else {
    //如果没有tokon则直接进入错误的回调
      const needCheck = config.headers.needCheck
    if(needCheck){
      throw new Error('没有登录,不能请求')
    }
    }




  return config

})



//发送响应拦截器
instance.interceptors.response.use(
 
  //成功的回调
  response => {

    Indicator.close()
    // 异步请求成功的数据不是response, 而是response.data
    return response.data

  },
  //失败的回调
  error =>{
     //隐藏请求loading
    Indicator.close()
    
    const response = error.response
    //没法请求的错误
      if(!response){
        const path = router.currentRoute.path
        if (path!=='/login') {
          // console.log('+++++++')
          router.replace('/login')
          Toast(error.message)
        }
      }else{
        if (error.response.status===401) {
          const path = router.currentRoute.path
          if (path!=='/login') {
            // console.log('-----------')
            store.dispatch('getOut')
            router.replace('/login')
            Toast(error.response.data.message || '登陆失效, 请重新登陆')
          }
        } else if (error.response.status===404) { // status为: 404: 提示访问的资源不存在
          MessageBox('提示', '访问的资源不存在')
        } else {
          // 1. 统一处理请求异常
          MessageBox('提示', '请求出错: ' + error.message)
        }
      }
   


    // return Promise.reject(error)
    //统一处理异常
    // alert('请求出错' + error.message)

    //// 返回一个pending状态的promise => 中断promie链  防止错误传递下去
    return new Promise( () =>{})
  }
)


export default instance


// 统一处理请求异常
// 2. 异步请求成功的数据不是response, 而是response.data
// 3. 对post请求参数进行ulencode处理, 而不使用默认的json方式(后台接口不支持)
// 4. 配置请求超时的时间
// 5. 通过请求头携带token数据
