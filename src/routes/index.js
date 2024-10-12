import { createRouter, createWebHistory } from "vue-router";

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
      component: import("../views/dashboard/DashboardHome.vue"),
      children: [
        {
          path: "/home",
        },
      ],
    },
  ],
});
export default router;
