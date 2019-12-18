
import Msite from '@/pages/Msite/Msite.vue'
import Order from '@/pages/Order/Order.vue'
import Profile from '@/pages/Profile/Profile.vue'
import Search from '@/pages/Search/Search.vue'
import Login from '@/pages/Login/Login.vue'
import UserInfo  from '@/pages/userInfo/userInfo.vue'
import Goods from '@/pages/Shop/Goods.vue'
import Info from '@/pages/Shop/Info.vue'
import Ratings from '@/pages/Shop/Ratings.vue'
import Shop from '@/pages/Shop/Shop.vue'


export default[
  {
    path:'/msite',
    component:Msite,
    meta:{
      isShow:true
    }
  },
  {
    path:'/order',
    component:Order,
    meta:{
      isShow:true
    }
  },
  {
    path:'/profile',
    component:Profile,
    meta:{
      isShow:true
    }
  },
  {
    path:'/search',
    component:Search,
    meta:{
      isShow:true
    }
  },
  {
    path:'/login',
    component:Login,
  },
  {
    path:'/userInfo',
    component:UserInfo,
  },
  {
    path:'/shop',
    component:Shop,
    children:[
      {
        path:'/goods',
        component:Goods,
      },
      {
        path:'/info',
        component:Info,
      },
      {
        path:'/ratings',
        component:Ratings,
      },
    ]
  },
  {
    path: '/',
    redirect: '/msite'
  }


]
  

