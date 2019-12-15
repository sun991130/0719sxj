import {reqAddress,reqFood,reqShops} from '@/axios'
import {AJAX_ADDRESS,AJAX_SHOPS,AJAX_FOODS} from './mutations_Type'


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
}