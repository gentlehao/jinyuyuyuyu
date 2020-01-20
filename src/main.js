import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import VCharts from 'v-charts'

import filters from '@/modules/filters'
import methods from '@/modules/methods'

import '@/assets/css/base.css'

Vue.config.productionTip = false

Vue.use(VueAxios,axios)

Vue.use(ElementUI)
Vue.use(ViewUI)
Vue.use(VCharts)

Vue.use(filters)
Vue.use(methods)

router.beforeEach((to, from, next) => {
  //如果登录标志存在且为true，即用户已登录
  if(localStorage.getItem("isLogin") === "true"){
    store.state.isLogin = true
    next()
  }
  //如果登录标志不存在，即未登录
  else{
    //用户想进入需要登录的页面，则定向回登录界面
    if(to.meta.needLogin){
      ViewUI.Message.info('请您先登录')
      next({path:'/login'})
    }
    //用户进入无需登录的界面，则跳转继续
    else{
      next()
    }
  }
})

export default new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
