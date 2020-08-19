import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './Home'
import Login from './Login'
import MatchingGoods from './MatchingGoods'
import UserCenter from './UserCenter'

Vue.use(VueRouter)

const routes = new Set([
  ...Home,
  ...Login,
  ...MatchingGoods,
  ...UserCenter
])

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
