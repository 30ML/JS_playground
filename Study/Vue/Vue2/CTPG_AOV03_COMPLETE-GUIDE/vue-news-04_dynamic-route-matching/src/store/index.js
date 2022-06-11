import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    news: [],
    asks: [],
    jobs: [],
    userInfo: {},
  },
  getters: {
    fetchedJobs(state) {
      return state.jobs
    },
    fetchedUserInfo(state) {
      return state.userInfo
    }
  },
  actions,
  mutations,
})
