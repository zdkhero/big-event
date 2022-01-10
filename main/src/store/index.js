import Vue from 'vue'
import Vuex from 'vuex'
import { getUserInfo } from '@/api/user.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token') || '', // 存储 Token
    userInfo: {} // 用户信息
  },
  mutations: {
    // 更新 token
    setToken (state, newToken) {
      state.token = newToken
      localStorage.setItem('token', newToken)
    },

    // 设置用户信息
    setUserInfo (state, info) {
      state.userInfo = info
    }
  },
  actions: {
    // 获取用户信
    async getUserInfo (context) {
      const { data: res } = await getUserInfo()

      if (res.code === 0) {
        context.commit('setUserInfo', res.data)
      }
    }
  },
  modules: {
  }
})
