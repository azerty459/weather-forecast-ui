import Vue from "vue";
import Vuex from "vuex";

const state = {
  citizen: {}
};

const getters = {
  selectedCitizen: state => state.citizen
};

const mutations = {
  SELECT_CITIZEN: (state, citizen) => {
    state.citizen = citizen;
  }
};

const actions = {
  selectCitizen: (store, citizenId) => {
    Vue.http.options.root = "http://localhost:3000";

    Vue.resource("citizens{/id}/details")
      .get({ id: citizenId })
      .then(
        response => {
          store.commit("SELECT_CITIZEN", response.data[0]);
        },
        error => {
          console.log("error : ", error);
        }
      );
  }
};

let appStore = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  // strict : false in PRODUCTION -> performances
  strict: true
});

export default appStore;
