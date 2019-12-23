import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './Home'
import Login from './Login'

Vue.use(VueRouter)

const routes = new Set([
  ...Home,
  ...Login
])

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
