import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";
import Details from "./components/Details.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/details",
      name: "details",
      component: Details
    }
  ]
});
