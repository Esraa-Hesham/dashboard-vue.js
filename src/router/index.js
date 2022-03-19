import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import login from "../views/auth/login.vue";
import UsersTable from "../views/UsersTable/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
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
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
