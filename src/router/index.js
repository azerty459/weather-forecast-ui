import Vue from "vue";
import Router from "vue-router";
import PrevisionsList from "./../components/PrevisionsList.vue";
import HumidityDetails from "./../components/HumidityDetails.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: null
    },
    {
      path: "/meteo/:ville",
      component: PrevisionsList,
      props: route => ({ type: "full", ville: route.params.ville })
    },
    {
      path: "/hottestday/:ville",
      component: PrevisionsList,
      props: route => ({ type: "hot", ville: route.params.ville })
    },
    {
      path: "/rainydays/:ville",
      component: PrevisionsList,
      props: route => ({ type: "rain", ville: route.params.ville })
    },
    {
      path: "/humiditystats/:ville",
      component: HumidityDetails,
      props: route => ({ ville: route.params.ville })
    }
  ]
});
