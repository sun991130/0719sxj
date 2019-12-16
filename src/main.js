import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'
import router from './router/index'
import Header from './components//Header//header.vue'
import store from './store/index'
import * as API from './axios/index'
import i18n from './i18n'
import './validate'

Vue.prototype.$API = API
Vue.component('Header',Header)

new Vue({
  render: h => h(App),
  router,
  i18n,
  store
}).$mount('#app')
