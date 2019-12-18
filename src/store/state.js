//定义状态

export default{
   longitude :116.36867,//经度
   latitude:40.10038,//纬度
  //地址信息对象
  address :{},
  //分类数组
  categorys:[],
  //商家列表
  shops:[],
  user:{},
  token:localStorage.getItem('token_key') || '',
  goods: [], // 商品列表
  ratings: [], // 商家评价列表
  info: {}, // 商家信息
}