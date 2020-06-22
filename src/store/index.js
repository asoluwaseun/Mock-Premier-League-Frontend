import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    user_details: {},
    teams: {},
    fixtures: {},
    loading: true
  },
  mutations: {
    changeLoading(state, payload){
      state.loading = payload
    },
    setUserDetails(state, payload){
      state.user_details = payload;
    }
  },
  actions: {

  },
  modules: {
  }
})
