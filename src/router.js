import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";
import Details from "./components/Details.vue";
import singleBlog from "./components/singleBlog.vue";
import ProductListOne from "./components/ProductListOne.vue";
import ProductListTwo from "./components/ProductListTwo.vue";

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
    },
    {
      path: "/blog/:id",
      name: "singleBlog",
      component: singleBlog
    },
    {
      path: "/listone",
      name: "listone",
      component: ProductListOne
    },
    {
      path: "/listtwo",
      name: "listtwo",
      component: ProductListTwo
    }
  ]
});
