import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import VueResource from "vue-resource";
import cors from "cors";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

// Vue.use(VueResource);
Vue.use(cors);

Vue.config.productionTip = false;

// custom directives
Vue.directive("theme", {
  bind(el, binding, vnode) {
    if (binding.value === "bright") {
      el.style.color = "red";
    }
    if (binding.value === "dark") {
      el.style.color = "blue";
    }
    if (binding.arg === "color") {
      el.style.backgroundColor = "gray";
    }
  }
});

// customer filters
Vue.filter("slice", value => {
  return value.slice(0, 10);
});

export const bus = new Vue();

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
