import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
  {
    path: "/404",
    component: () => import("../pages/404.vue"),
  },
  {
    path: "/",
    component: () => import("../pages/Cover.vue"),
  },
  {
    path: "/cover",
    component: () => import("../pages/Cover.vue"),
  },
  {
    path: "/about",
    component: () => import("../pages/About.vue"),
  },
  {
    path: "/team",
    component: () => import("../pages/TeamSelector.vue"),
  },
  {
    path: "/courts",
    component: () => import("../pages/CourtSizes.vue"),
  },
  {
    path: "/travel",
    component: () => import("../pages/Travel.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
