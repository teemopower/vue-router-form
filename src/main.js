import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueResource from "vue-resource";
import cors from "cors";

Vue.use(VueResource);
Vue.use(cors);

Vue.config.productionTip = false;

export const bus = new Vue();

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
