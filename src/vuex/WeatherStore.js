import Vue from "vue";
import Vuex from "vuex";
import VueResource from "vue-resource";

Vue.use(Vuex);
Vue.use(VueResource);

const state = {
  route: "",
  search: "",
  weatherCurrent: {},
  weatherCurrentLoaded: false,
  weatherCurrentError: false,
  weatherDetails: {},
  weatherDetailsLoaded: false,
  weatherDetailsError: false
};

const getters = {
  route: state => state.route,
  search: state => state.search,
  weatherCurrent: state => state.weatherCurrent,
  weatherCurrentLoaded: state => state.weatherCurrentLoaded,
  weatherCurrentError: state => state.weatherCurrentError,
  weatherDetails: state => state.weatherDetails,
  weatherDetailsLoaded: state => state.weatherDetailsLoaded,
  weatherDetailsError: state => state.weatherDetailsError
};

const mutations = {
  SET_ROUTE: (state, route) => {
    state.route = route;
  },

  SET_SEARCH: (state, search) => {
    state.search = search;
  },

  SET_WEATHER_CURRENT: (state, weather) => {
    state.weatherCurrent = weather;
  },

  SET_WEATHER_CURRENT_LOADED: (state, loaded) => {
    state.weatherCurrentLoaded = loaded;
  },

  SET_WEATHER_CURRENT_ERROR: (state, error) => {
    state.weatherCurrentError = error;
  },

  SET_WEATHER_DETAILS: (state, weather) => {
    state.weatherDetails = weather;
  },

  SET_WEATHER_DETAILS_LOADED: (state, loaded) => {
    state.weatherDetailsLoaded = loaded;
  },

  SET_WEATHER_DETAILS_ERROR: (state, error) => {
    state.weatherDetailsError = error;
  }
};

const actions = {
  launchSearch: store => {
    switch (store.state.route) {
      case "weatherCurrent":
        store.dispatch("launchSearchCurrent");
        break;
      case "weatherDetails":
        store.dispatch("launchSearchDetails");
        break;
    }
  },

  launchSearchCurrent: store => {
    Vue.http.options.root = "http://localhost:8090";

    store.commit("SET_WEATHER_CURRENT_LOADED", false);
    store.commit("SET_WEATHER_CURRENT_ERROR", false);

    Vue.resource("weather{/cityName}")
      .get({ cityName: store.state.search })
      .then(
        response => {
          store.commit("SET_WEATHER_CURRENT", response.data);
        },
        error => {
          store.commit("SET_WEATHER_CURRENT_ERROR", true);
        }
      )
      .then(() => {
        store.commit("SET_WEATHER_CURRENT_LOADED", true);
      });
  },

  launchSearchDetails: store => {
    Vue.http.options.root = "http://localhost:8090";

    store.commit("SET_WEATHER_DETAILS_LOADED", false);
    store.commit("SET_WEATHER_DETAILS_ERROR", false);

    Vue.resource("weather/details{/cityName}")
      .get({ cityName: store.state.search })
      .then(
        response => {
          store.commit("SET_WEATHER_DETAILS", response.data);
        },
        error => {
          store.commit("SET_WEATHER_DETAILS_ERROR", true);
        }
      )
      .then(() => {
        store.commit("SET_WEATHER_DETAILS_LOADED", true);
      });
  }
};

let weatherStore = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  strict: process.env.NODE_ENV !== "production"
});

export default weatherStore;
