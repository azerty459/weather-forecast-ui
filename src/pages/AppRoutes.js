import Vue from "vue";
import Router from "vue-router";

const WeatherPage = () => import("./WeatherPage");

Vue.use(Router);

let router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: WeatherPage,
      name: "weather"
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});

export default router;
