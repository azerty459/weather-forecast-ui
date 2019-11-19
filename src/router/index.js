import Vue from "vue";
import VueResource from "vue-resource";
import Router from "vue-router";
import Forecast from "@/components/Forecast";
import Hotest from "@/components/Hotest";
import Raining from "@/components/Raining";
import Humidity from "@/components/Humidity";
import SelectCity from "@/components/SelectCity";

Vue.use(Router);
Vue.use(VueResource);

export default new Router({
  routes: [
    {
      path: "/forecast/:city/humidity",
      name: "Humidity",
      component: Humidity,
      props: route => ({ city: route.params.city })
    },
    {
      path: "/forecast/:city/raining",
      name: "Raining",
      component: Raining,
      props: route => ({ city: route.params.city })
    },
    {
      path: "/forecast/:city/hotest",
      name: "Hotest",
      component: Hotest,
      props: route => ({ city: route.params.city })
    },
    {
      path: "/forecast/:city",
      name: "Forecast",
      component: Forecast,
      props: route => ({ city: route.params.city })
    },
    {
      path: "/",
      name: "Home",
      component: SelectCity
    }
  ]
});
