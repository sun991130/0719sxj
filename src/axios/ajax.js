//发送请求和响应拦截器
//二次封装axios

import axios from 'axios'
import qs from 'qs'
import { Indicator } from 'mint-ui';

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
    Indicator.close()
    // return Promise.reject(error)
    //统一处理异常
    alert('请求出错' + error.message)
    return new Promise( () =>{})
  }
)


export default instance


// 统一处理请求异常
// 2. 异步请求成功的数据不是response, 而是response.data
// 3. 对post请求参数进行ulencode处理, 而不使用默认的json方式(后台接口不支持)
// 4. 配置请求超时的时间
// 5. 通过请求头携带token数据
