import Vue from 'vue'
import App from './App.vue'
import Route from 'vue-router'
import routers from './allRouteFile/route.js'
import store from './allFile/vuex.js'
import axios from 'axios'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
Vue.prototype.$http = axios
require("./assets/js/bootstrap.js")
require("./assets/css/bootstrap.css")
Vue.use(Route)
const router=new Route(routers)
new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App)
})
