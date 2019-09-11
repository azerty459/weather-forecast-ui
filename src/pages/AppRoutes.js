import Vue from "vue";
import Router from "vue-router";

const CitizenPage = () => import("./CitizenPage");
const HelloWorld = () => import("../components/HelloWorld");

Vue.use(Router);

let router = new Router({
  mode: "history",
  routes: [
    {
      path: "/a",
      component: CitizenPage,
      name: "detail"
    },
    {
      path: "/a/:id",
      component: CitizenPage,
      name: "detail",
      props: true
    },
    {
      path: "/b",
      component: HelloWorld,
      name: "hello"
    },
    {
      path: "*",
      redirect: "/a"
    }
  ]
});

export default router;
