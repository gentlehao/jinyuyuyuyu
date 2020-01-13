import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './Home'
import Login from './Login'
import MatchingGoods from './MatchingGoods'

Vue.use(VueRouter)

const routes = new Set([
  ...Home,
  ...Login,
  ...MatchingGoods
])

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
