import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Ravvast from "../views/Ravvast.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/ravvast-drum",
    name: "ravvast-drum",
    component: Ravvast
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
