import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    news: [],
    ask: [],
    jobs: [],
    userInfo: {},
    itemInfo: {},
  },
  getters: {
    fetchedNews(state) {
      return state.news
    },
    fetchedAsk(state) {
      return state.ask
    },
    fetchedJobs(state) {
      return state.jobs
    },
    fetchedUserInfo(state) {
      return state.userInfo
    },
    fetchedItemInfo(state) {
      return state.itemInfo
    },
  },
  actions,
  mutations,
})
