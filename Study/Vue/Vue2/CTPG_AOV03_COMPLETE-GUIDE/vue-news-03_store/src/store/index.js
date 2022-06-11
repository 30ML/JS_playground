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
  },
  getters: {
    fetchedJobs(state) {
      return state.jobs
    },
  },
  actions,
  mutations,
})
