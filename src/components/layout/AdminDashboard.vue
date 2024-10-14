<script setup>
import AdminSidebar from "../ui/sidebars/AdminSidebar.vue";
import AdminNavbar from "../ui/Headers/AdminNavbar.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div
    class="grid grid-cols-1 md:grid-cols-dash-col gap-1 bg-primaryBg w-full h-full min-h-[100vh]"
  >
    <AdminSidebar />
    <div class="flex flex-col space-y-6 p-1 py-2 px-2">
      <AdminNavbar />
      <RouterView></RouterView>
    </div>
  </div>
</template>
