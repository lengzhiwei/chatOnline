// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant'
import 'vant/lib/index.css'
import axios from 'axios'
Vue.prototype.$axios = axios    //全局注册，使用方法为:this.$axios
Vue.use(Vant)
Vue.config.productionTip = false
// 得到手机屏幕的宽度
let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth
// 得到html的Dom元素
let htmlDom = document.getElementsByTagName('html')[0]
// 设置根元素字体大小
htmlDom.style.fontSize = htmlWidth / 20 + 'px'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
