import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue"; //首页
import AboutView from "@/views/kk/essay/AboutView.vue"; //文章
import club from "../views/kk/club/club.vue"; //俱乐部
import Comment from "../views/kk/Comment-section/Comment-section.vue"; //评论区
import concerning from "../views/kk/concerning/concerning.vue"; //关于
import NotFound from "../views/kk/error/4xx/404/404.vue"; //404

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "首页",
      menuOrder: 1,
    },
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
    meta: {
      title: "文章",
      menuOrder: 2,
    },
  },
  {
    path: "/club",
    name: "club",
    component: club,
    meta: {
      title: "俱乐部",
      menuOrder: 3,
    },
  },
  {
    path: "/Comment",
    name: "Comment",
    component: Comment,
    meta: {
      title: "评论区",
      menuOrder: 4,
    },
  },
  {
    path: "/concerning",
    name: "concerning",
    component: concerning,
    meta: {
      title: "关于",
      menuOrder: 5,
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
    meta: {
      title: "404",
      menuOrder: 6,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
