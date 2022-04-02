import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
 
    {
      path: "/add",
      name: "add",
      component: () => import("../views/AddBoatView.vue"),
    },
    {
      path: "/look",
      name: "list",
      component: () => import("../views/ListView.vue"),
    },
  ],
});

export default router;
