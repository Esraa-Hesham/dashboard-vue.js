import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

import login from "../views/auth/login.vue";
import UsersTable from "../views/UsersTable/index.vue";
import store from "../store/index.js";

Vue.use(VueRouter);
function isLoggedIn() {
  return !!store.getters.getLoggedInUser;
}

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/login",
    name: "login",
    component: login,
  },
  {
    path: "/UsersTable/",
    name: "UsersTable",
    component: UsersTable,
    beforeEnter: (to, from, next) => {
      if (isLoggedIn()) return next();
      else return next({ name: "login" });
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
