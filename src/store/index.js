
import Vue from 'vue'
import Vuex from 'vuex'
import actions  from './actions'
import msite from './modules/msite.js'
import user from './modules/user'
import shop from './modules/shop'
import mutations  from './mutations'



Vue.use(Vuex)

export default new Vuex.Store({
  mutations,
  actions,
  modules:{
    msite,
    user,
    shop
  }
})