import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false, //是否已登录
    navIndex: '1', //导航菜单当前状态
  },
  getters: {
    //获取登录状态
    isLogin: state => state.isLogin,
  },
  mutations: {
    //保存登录状态
    userStatus(state, flag) {
      state.isLogin = flag
    },
    //保存导航菜单状态
    navStatus(state, flag) {
      state.navIndex = flag
    }
  },
  actions: {
    //获取登录状态
    userLogin({commit}, flag) {
      commit("userStatus", flag)
    },
    //获取导航菜单状态
    navIndex({commit}, flag) {
      commit("navStatus", flag)
    }
  },
  modules: {
  }
})
