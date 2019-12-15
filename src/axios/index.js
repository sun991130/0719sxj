import ajax from './ajax'

//包含多个请求模块

//根据经纬度获取位置详情reqGeography
export const reqAddress = (longitude, latitude) => ajax(`/position/${latitude},${longitude}`) 


//2、获取食品分类列表  
export const reqFood = ()=> ajax(`/index_category`)

//店家分类列表
export const reqShops = ({longitude, latitude}) => ajax('/shops', {params: {longitude, latitude}})