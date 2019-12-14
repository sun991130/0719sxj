import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'
import router from './router/index'
import Header from './components//Header//header.vue'


Vue.component('Header',Header)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
