import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const state = {};

const getters = {};

const mutations = {};

const actions = {};

let weatherStore = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  // TODO strict : false for PRODUCTION
  strict: true
});

export default weatherStore;
