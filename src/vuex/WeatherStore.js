import Vue from "vue";
import Vuex from "vuex";
import VueResource from "vue-resource";

Vue.use(Vuex);
Vue.use(VueResource);

const state = {
  route: "",
  search: "",
  cityName: "",
  weatherCurrent: null,
  weatherCurrentLoaded: false,
  weatherCurrentError: false,
  weatherDetails: null,
  weatherDetailsLoaded: false,
  weatherDetailsError: false
};

const getters = {
  route: state => state.route,
  search: state => state.search,
  cityName: state => state.cityName,
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

  SET_CITY_NAME: (state, cityName) => {
    state.cityName = cityName;
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
  },

  RESET_WEATHER_CURRENT: state => {
    state.weatherCurrent = null;
    state.weatherCurrentLoaded = false;
    state.weatherCurrentError = false;
  },

  RESET_WEATHER_DETAILS: state => {
    state.weatherDetails = null;
    state.weatherDetailsLoaded = false;
    state.weatherDetailsError = false;
  }
};

const actions = {
  updateRoute: (store, route) => {
    store.commit("SET_ROUTE", route);
    store.dispatch("launchSearch");
  },

  updateSearchInput: (store, search) => {
    store.commit("SET_SEARCH", search);
  },

  launchSearch: store => {
    if (store.state.search.trim().length > 0) {
      switch (store.state.route) {
        case "weatherCurrent":
          store.dispatch("launchSearchCurrent");
          break;
        case "weatherDetails":
          store.dispatch("launchSearchDetails");
          break;
      }
    }
  },

  launchSearchCurrent: store => {
    const isNotSameCity =
      store.state.cityName.toLowerCase() !==
      store.state.search.trim().toLowerCase();

    if (isNotSameCity) {
      store.commit("SET_CITY_NAME", "");
      store.commit("RESET_WEATHER_DETAILS");
    }

    if (isNotSameCity || store.state.weatherCurrent == null) {
      store.commit("RESET_WEATHER_CURRENT");

      Vue.http.options.root = "http://localhost:8090";

      Vue.resource("weather{/cityName}")
        .get({ cityName: store.state.search })
        .then(
          response => {
            store.commit(
              "SET_CITY_NAME",
              (((response || {}).data || {}).city || {}).name
            );
            store.commit("SET_WEATHER_CURRENT", (response || {}).data);
          },
          error => {
            store.commit("SET_WEATHER_CURRENT_ERROR", true);
          }
        )
        .then(() => {
          store.commit("SET_WEATHER_CURRENT_LOADED", true);
        });
    }
  },

  launchSearchDetails: store => {
    const isNotSameCity =
      store.state.cityName.toLowerCase() !==
      store.state.search.trim().toLowerCase();

    if (isNotSameCity) {
      store.commit("SET_CITY_NAME", "");
      store.commit("RESET_WEATHER_CURRENT");
    }

    if (isNotSameCity || store.state.weatherDetails == null) {
      store.commit("RESET_WEATHER_DETAILS");

      Vue.http.options.root = "http://localhost:8090";

      Vue.resource("weather/details{/cityName}")
        .get({ cityName: store.state.search })
        .then(
          response => {
            store.commit(
              "SET_CITY_NAME",
              (((response || {}).data || {}).city || {}).name
            );
            store.commit("SET_WEATHER_DETAILS", (response || {}).data);
          },
          error => {
            store.commit("SET_WEATHER_DETAILS_ERROR", true);
          }
        )
        .then(() => {
          store.commit("SET_WEATHER_DETAILS_LOADED", true);
        });
    }
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
