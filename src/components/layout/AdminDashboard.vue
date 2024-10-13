<script setup>
import AdminSidebar from "../ui/sidebars/AdminSidebar";
import { RouterView } from "vue-router";
</script>

<template>
  <div class="grid grid-cols-dash-col gap-1">
    <AdminSidebar />
    <div>
      <div></div>
      <RouterView></RouterView>
    </div>
  </div>
</template>
