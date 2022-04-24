import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import ContentView from "../views/ContentView.vue";
import ShortestPathView from "../views/ShortestPath.vue";
import MoreAlgorithmsView from "../views/MoreAlgorithmsView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/shortest-path",
    name: "shortest-path",
    component: ShortestPathView,
  },
  {
    path: "/more-algorithms",
    name: "more-algorithms",
    component: MoreAlgorithmsView,
  },
  {
    path: "/learning-material",
    name: "learning-material",
    component: ContentView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
