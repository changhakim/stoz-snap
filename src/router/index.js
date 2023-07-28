import { createRouter, createWebHistory } from "vue-router";
import StozMain from "../views/main/StozMain.vue";

const routes = [
  {
    
    path: "/",
    name: "stozMain",
    component: StozMain,
    
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 };
  },
});

export default router;
