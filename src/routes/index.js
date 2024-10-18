import { createRouter, createWebHistory } from "vue-router";
import adminRoute from "./adminRoute";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/login",
      name: "Login",
      component: import("../views/auth/Login.vue"),
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: import("../components/layout/AdminDashboard.vue"),
      children: adminRoute,
    },
  ],
});
export default router;
