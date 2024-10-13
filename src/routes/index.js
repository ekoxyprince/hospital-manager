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
      component: import("../components/layout/AdminDashboard.vue"),
      children: [
        {
          path: "home",
          name: "Dashboard Home",
          component: import("../views/dashboard/admin/DashboardHome.vue"),
        },
        {
          path: "staffs",
          name: "Staffs",
          component: import("../views/dashboard/admin/Staffs.vue"),
        },
      ],
    },
  ],
});
export default router;
