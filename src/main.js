// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";

import Vuex from "vuex";
import store from "./vuex/WeatherStore";
Vue.use(Vuex);

import router from "./pages/AppRoutes";

Vue.config.productionTip = false;

router.afterEach((to, from, next) => {
  store.dispatch("updateRoute", router.currentRoute.name);
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>",
  store,
  router
});
