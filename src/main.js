import './utils/rem'
import './style/index.scss'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import echarts from 'echarts'
import animated from 'animate.css'
require('./map/china.js')

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'xe-utils'

Vue.use(ElementUI);
Vue.use(animated)
// Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
