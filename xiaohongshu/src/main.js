// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import router from './router'
import axios from 'axios'
import 'swiper/dist/css/swiper.css'
import { store } from './store/store'


Vue.config.productionTip = false


// 将axios 放入到Vue的原型链中，所有的组件都可以使用
Vue.prototype.axios = axios

Vue.use(VueAwesomeSwiper);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  axios,
  components: { App },
  template: '<App/>'
})
