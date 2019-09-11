import Vue from "vue";
import Router from "vue-router";

const WeatherPage = () => import("./WeatherPage");
const WeatherCurrent = () => import("./../components/WeatherCurrent");
const WeatherDetailed = () => import("./../components/WeatherDetailed");
const WeatherWeek = () => import("./../components/WeatherWeek");

Vue.use(Router);

let router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: WeatherPage,
      name: "weather",
      children: [
        {
          path: ":id(\\d+)/current",
          component: WeatherCurrent
        },
        {
          path: ":id(\\d+)/detail",
          component: WeatherDetailed
        },
        {
          path: ":id(\\d+)/week",
          component: WeatherWeek
        }
      ]
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});

export default router;
