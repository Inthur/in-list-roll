import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import polyfill from 'babel-polyfill'

Vue.use(VueRouter);


// 路由器实例
// 配置路由规则
const router = new VueRouter({
  routes: [
    
  ]
})

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
