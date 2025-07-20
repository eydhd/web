import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NotFound from "../views/kk/qwe/404.vue";
import Comment from "../views/kk/Comment-section.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/kk/AboutView.vue"),
  },
  {
    path: "/Comment",
    name: "Comment",
    component: () => import("../views/kk/Comment-section.vue"),
  },
  {
    path: "/:pathMatch(.*)*", // 通配符路由，捕获所有未匹配的路由
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
