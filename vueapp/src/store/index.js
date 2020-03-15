import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    color:'red',
    title:'电影'
  },
  getters: {

  },
  mutations: {
    change(state,obj){
      state.color = obj.color;
      state.title = obj.title;
    }
  },
  actions: {

  },
  modules: {
    
  }
})