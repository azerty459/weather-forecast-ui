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
          path: "/current",
          component: WeatherCurrent,
          name: "weatherCurrent"
        },
        {
          path: "/details",
          component: WeatherDetailed,
          name: "weatherDetails"
        },
        {
          path: ":id(\\d+)/week",
          component: WeatherWeek
        }
      ]
    },
    {
      // * is joker : url not recognize, by default redirect to WeatherPage
      path: "*",
      redirect: "/"
    }
  ]
});

export default router;
