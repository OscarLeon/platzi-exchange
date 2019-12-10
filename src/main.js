import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'

import router from '@/router/index.js'
import { dollarFilter, percentFilter } from '@/utils/filters'

import VueMeta from 'vue-meta'

Vue.use(VueMeta)

Vue.use(Chartkick.use(Chart))

Vue.filter('dollar', dollarFilter)
Vue.filter('percent', percentFilter)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
