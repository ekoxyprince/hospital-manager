export default [
  {
    path: "home",
    name: "Dashboard",
    component: import("../views/dashboard/admin/DashboardHome.vue"),
  },
  {
    path: "staffs",
    name: "Staffs",
    component: import("../views/dashboard/admin/Staffs.vue"),
  },
  {
    path: "attendance",
    name: "Staff Attendance",
    component: import("../views/dashboard/admin/Attendance.vue"),
  },
  {
    path: "patients",
    name: "Patient Details",
    component: import("../views/dashboard/admin/Patients.vue"),
  },
  {
    path: "appointments",
    name: "Apointments",
    component: import("../views/dashboard/admin/Appointment.vue"),
  },
];
