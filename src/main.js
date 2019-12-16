import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'
import router from './router/index'
import Header from './components//Header//header.vue'
import store from '@/store'
import VeeValidate from 'vee-validate'
Vue.use(VeeValidate)

Vue.component('Header',Header)

new Vue({
  render: h => h(App),
  router,
  store,

}).$mount('#app')
