<script setup>
import logo from "../../../assets/image/download.jpg";
import pfp from "../../../assets/image/pfp.png";
import { MdOutlinedDashboard } from "@kalimahapps/vue-icons";
import { AkPeopleGroup } from "@kalimahapps/vue-icons";
import { BsCalendar2Check } from "@kalimahapps/vue-icons";
import { RouterLink } from "vue-router";
</script>

<template>
  <div
    class="w-full bg-adminSidebg h-full min-h-[100vh] shadow-lg flex flex-col space-y-3 items-center text-white"
  >
    <div class="flex items-center space-x-2 p-2 py-3 px-2">
      <img :src="logo" class="w-[30px] h-[30px] rounded-full" alt="" />
      <h2 class="text-lg font-bold">Management Software</h2>
    </div>
    <div class="flex flex-col space-y-1 items-center p-2 py-3 px-2">
      <img :src="pfp" class="w-[65px] h-[65px] rounded-full" alt="" />
      <h2 class="text-lg font-semibold">Doctor Doe</h2>
      <p class="text-md text-borderColor font-semibold opacity-60">
        General Medical Doctor
      </p>
    </div>
    <div class="w-full flex flex-col h-full space-y-2">
      <RouterLink
        to="home"
        class="flex space-x-4 px-12 py-2 border-l-[0.5rem] hover:border-l-[0.5rem] hover:border-indigo-500 border-indigo-500 transition ease-linear duration-300"
      >
        <MdOutlinedDashboard class="text-2xl" />
        <h2>Dashboard</h2>
      </RouterLink>
      <RouterLink
        to="home"
        class="flex space-x-4 px-12 py-2 hover:border-l-[0.5rem] hover:border-indigo-500 transition ease-linear duration-300"
      >
        <AkPeopleGroup class="text-2xl" />
        <h2>Staffs</h2>
      </RouterLink>
      <RouterLink
        to="home"
        class="flex space-x-4 px-12 py-2 hover:border-l-[0.5rem] hover:border-indigo-500 transition ease-linear duration-300"
      >
        <BsCalendar2Check class="text-2xl" />
        <h2>Attendance</h2>
      </RouterLink>
    </div>
  </div>
</template>
