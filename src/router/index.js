import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ConfigurationView from "../views/ConfigurationView.vue";
import GameView from "../views/GameView.vue";

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
      component: ConfigurationView,
    },
    {
      path: "/game",
      name: "game",
      component: GameView,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.name !== "home" && !from.name) {
    next({ name: "home" });
  } else {
    next();
  }
});

export default router;
