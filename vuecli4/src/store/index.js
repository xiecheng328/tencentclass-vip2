import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1,
    userList: []
  },
  getters: {
    newCount(state) {
      return state.count + 100
    }
  },
  mutations: {
    add(state) {
      state.count++
    },
    reduce(state) {
      state.count--
    },
    setUserList(state, list){
      state.userList = list
    }
  },
  actions: {
    addAciton({commit}){
      setTimeout(()=>{
        commit('add')
      }, 1000)
    },
    async getUserList({commit}){
      // 发送ajax请求
      const {data: {list}} = await axios.get('https://api.myjson.com/bins/cr2oe')
      commit('setUserList', list)
    }
  },
  modules: {
    
  }
})