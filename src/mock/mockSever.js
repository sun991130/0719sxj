import Mock from 'mockjs'  
import apiData from './data.json' //得到里面的对象 自动解析完成

Mock.mock('/api/info', {code:0, data:apiData.info})
Mock.mock('/api/goods', {code:0, data:apiData.goods})
Mock.mock('/api/ratings', {code:0, data:apiData.ratings})
