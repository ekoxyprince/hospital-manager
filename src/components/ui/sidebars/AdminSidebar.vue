<script setup>
import logo from "../../../assets/image/download.jpg";
import pfp from "../../../assets/image/pfp.png";
import { MdOutlinedDashboard } from "@kalimahapps/vue-icons";
import { AkPeopleGroup } from "@kalimahapps/vue-icons";
import { BsCalendar2Check } from "@kalimahapps/vue-icons";
import { RouterLink, useRoute } from "vue-router";
import { ref } from "vue";
</script>

<template>
  <div class="absolute hidden md:relative md:block">
    <div
      class="w-full bg-white h-full min-h-[100vh] shadow-lg flex flex-col space-y-3 items-center text-black relative"
    >
      <div class="flex items-center space-x-2 p-2 py-3 px-2">
        <img :src="logo" class="w-[30px] h-[30px] rounded-full" alt="" />
        <h2 class="text-lg font-bold">Management Software</h2>
      </div>
      <div class="flex flex-col space-y-1 items-center p-2 py-3 px-2">
        <img :src="pfp" class="w-[65px] h-[65px] rounded-full" alt="" />
        <h2 class="text-lg font-semibold">Doctor Doe</h2>
        <p class="text-md text-borderColor font-semibold">General Medical Doctor</p>
      </div>
      <div class="w-full flex flex-col h-full space-y-2">
        <RouterLink
          to="home"
          class="flex space-x-4 px-12 py-[0.6rem] rounded-tr-xl rounded-br-xl hover:border-l-[0.5rem] hover:border-indigo500 transition ease-linear duration-300"
          active-class=" border-l-[0.5rem] border-indigo500 bg-glassIndigo400 text-white"
        >
          <MdOutlinedDashboard class="text-2xl" />
          <h2 class="text-md font-bold">Dashboard</h2>
        </RouterLink>
        <RouterLink
          to="staffs"
          class="flex space-x-4 px-12 py-[0.6rem] rounded-tr-xl rounded-br-xl hover:border-l-[0.5rem] hover:border-indigo500 transition ease-linear duration-300"
          active-class=" border-l-[0.5rem] border-indigo500 bg-glassIndigo400 text-white"
        >
          <AkPeopleGroup class="text-2xl" />
          <h2 class="text-md font-bold">Staffs</h2>
        </RouterLink>
        <RouterLink
          to="attendance"
          class="flex space-x-4 px-12 py-[0.6rem] rounded-tr-xl rounded-br-xl hover:border-l-[0.5rem] hover:border-indigo500 transition ease-linear duration-300"
          active-class=" border-l-[0.5rem] border-indigo500 bg-glassIndigo400 text-white"
        >
          <BsCalendar2Check class="text-2xl" />
          <h2 class="text-md font-bold">Attendance</h2>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
