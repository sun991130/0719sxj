import ajax from './ajax'

//包含多个请求模块

//根据经纬度获取位置详情reqGeography
export const reqAddress = (longitude, latitude) => ajax(`/position/${latitude},${longitude}` ) 


//2、获取食品分类列表  
export const reqFood = ()=> ajax(`/index_category`,{
  headers: {
    needCheck: true
  }
})

//店家分类列表
export const reqShops = ({longitude, latitude}) => ajax('/shops', {
  params: {longitude, latitude},
  headers: {
    needCheck: true
  }
}
)

//发送短信验证码
export const reqmsm = (phone) => ajax('/sendcode', {params: {phone}})


//用户名密码验证登录
export const reqPwdLogin = ({name, pwd, captcha}) => ajax.post('/login_pwd', {name, pwd, captcha})


//手机验证码登录
export const reqPhone = ({phone,code}) => ajax.post('/login_sms', {phone,code})


//自动登录
export const reqtoko = () => ajax.get('/auto_login')
