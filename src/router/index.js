

import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'

Vue.use(VueRouter)
export default new VueRouter({
  mode:"history",   //去掉路由器中所有的#
  routes
})