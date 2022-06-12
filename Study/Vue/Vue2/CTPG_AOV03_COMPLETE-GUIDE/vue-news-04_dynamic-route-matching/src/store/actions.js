import {
  fetchNewsList,
  fetchAsksList,
  fetchJobsList,
  fetchUserInfo,
  fetchItemInfo,
} from '../api/index'

export default {
  /* DEFAULT */
  FETCH_NEWS(context) {
    fetchNewsList()
      .then(response => {
        console.log(response.data)
        context.commit('SET_NEWS', response.data)
      })
      .catch(error => console.log(error))
  },

  /* ES6: Destructuring */
  FETCH_ASKS({ commit }) {  // Destructuring
    fetchAsksList()
      .then(({ data }) => {  // Destructuring
        console.log(data)
        commit('SET_ASKS', data)
      })
      .catch((error) => {
        console.log(error)
      })
  },

  /* Vuex Helper */
  FETCH_JOBS({ commit }) {
    fetchJobsList()
      .then(({ data }) => {
        console.log(data)
        commit('SET_JOBS', data)
      })
      .catch((error) => {
        console.log(error)
      })
  },

  FETCH_USER_INFO({ commit }, userName) {
    fetchUserInfo(userName)
      .then(({ data }) => {
        console.log(data)
        commit('SET_USER_INFO', data)
      })
      .catch((error) => {
        console.log(error)
      })
  },

  FETCH_ITEM_INFO({ commit }, itemId) {
    fetchItemInfo(itemId)
      .then(({ data }) => {
        console.log(data)
        commit('SET_ITEM_INFO', data)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}