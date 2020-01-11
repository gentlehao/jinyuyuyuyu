import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import VCharts from 'v-charts'

import filters from '@/modules/filters'
import methods from '@/modules/methods'

import '@/assets/css/base.css'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(ViewUI)
Vue.use(VCharts)

Vue.use(filters)
Vue.use(methods)

export default new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
