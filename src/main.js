import Vue from "vue";

import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import { store } from "./store";

Vue.use(VueAxios, axios);

new Vue({
  router,
  store,
  axios,
  VueAxios,
  render: (h) => h(App),
}).$mount("#app");
