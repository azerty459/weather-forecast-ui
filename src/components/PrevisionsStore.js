import Vuex from 'vuex'
import Vue from "vue";


const state = {
  prevision: {
    previsionsList: Object,
    previsionUnique :Object

  }

}

const getters = {

  previsionsList: state => state.prevision.previsionsList,
  previsionUnique : state => state.prevision.previsionUnique,

}

let store = new Vuex.Store({
  state: state,
  mutations: {
    ADD_PREVISIONS_LIST(state, previsionsList) {
      Vue.set(this.state.prevision,'previsionsList', previsionsList)
    },

    ADD_PREVISION_UNIQUE(state, previsionUnique) {
      // state.prevision.previsionUnique = previsionUnique
      Vue.set(this.state.prevision,'previsionUnique', previsionUnique)
    }


  },
  getters: getters,
  actions: {},


})

global.store = store
export default store
