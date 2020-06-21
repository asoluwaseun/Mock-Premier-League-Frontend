import Vue from 'vue'
import Vuex from 'vuex'
// import FixturesService from "../services/FixturesService"
// import UserService from "../services/UserService"
// import TeamsService from "../services/TeamsService"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user_details: {},
    teams: {},
    fixtures: {},
    loading: true
  },
  mutations: {
    changeLoading(state, payload){
      this.state.loading = payload
    }
  },
  actions: {

  },
  modules: {
  }
})
