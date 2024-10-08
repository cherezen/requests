import Vue from "vue";
import VueRouter from "vue-router";

import LoginPage from "../views/LoginPage.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/login",
      component: LoginPage,
    },
  ],
});

export default router;
