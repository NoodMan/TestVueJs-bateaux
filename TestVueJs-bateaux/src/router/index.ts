import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
 
    {
      path: "/add",
      name: "home",
      component: () => import("../views/BoatView.vue"),
    },
    {
      path: "/look",
      name: "home",
      component: () => import("../views/ListView.vue"),
    },
  ],
});

export default router;
