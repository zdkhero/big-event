import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token') || '' // 存储 Token
  },
  mutations: {
    // 更新 token
    setToken (state, newToken) {
      state.token = newToken
      localStorage.setItem('token', newToken)
    }
  },
  actions: {
  },
  modules: {
  }
})
