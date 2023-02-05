import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/configuration",
      name: "configuration",
      component: () => import("../views/ConfigurationView.vue"),
    },
    {
      path: "/game",
      name: "game",
      component: () => import("../views/GameView.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  console.log(to, from, next);
  if (to.name !== "home" && !from.name) {
    next({ name: "home" });
  } else {
    next();
  }
});

export default router;
