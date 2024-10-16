<script setup>
import logo from "../../../assets/image/logo.png";
import pfp from "../../../assets/image/pfp.png";
import { MdOutlinedDashboard } from "@kalimahapps/vue-icons";
import { AkPeopleGroup } from "@kalimahapps/vue-icons";
import { BsCalendar2Check } from "@kalimahapps/vue-icons";
import { FaUserDoctor } from "@kalimahapps/vue-icons";
import { MdOutlinedCastForEducation } from "@kalimahapps/vue-icons";
import { HeOutlineGroupDiscussionMeetingx3 } from "@kalimahapps/vue-icons";
import { CaSettings } from "@kalimahapps/vue-icons";
import { HuLogout } from "@kalimahapps/vue-icons";
import { RouterLink, useRoute } from "vue-router";
import { navState } from "../../../reactive/store.js";
import { ref, defineProps } from "vue";

function handleSideclick(e) {
  if (e.target.id != "sidebar") {
    navState.isToggled = false;
  }
}
</script>

<template>
  <div
    id="sidebar-wrapper"
    v-on:click="handleSideclick"
    :class="[
      navState.isToggled ? 'isEntered' : 'hidden',
      'absolute md:relative z-10 md:block transition-all duration-300 w-[100%] bg-darkOverlay md:bg-none',
    ]"
  >
    <div
      id="sidebar"
      class="w-[80%] md:w-full bg-white h-full min-h-[100vh] shadow-lg flex flex-col space-y-3 items-center text-black relative"
    >
      <div class="flex items-center space-x-2 p-2 py-6 px-1">
        <img :src="logo" class="w-[40px] h-[40px]" alt="" />
        <h2 class="text-xl font-bold sarala text-lightblue500">Doe's Clinic</h2>
      </div>
      <div class="w-full flex flex-col h-full space-y-2">
        <RouterLink
          to="home"
          class="flex space-x-4 px-12 py-[0.6rem] hover:border-l-[0.2rem] hover:border-lightblue500 transition ease-linear duration-300"
          active-class=" border-l-[0.2rem] border-lightblue500 bg-primaryOverlay text-lightblue500"
        >
          <MdOutlinedDashboard class="text-2xl" />
          <h2 class="text-md font-[500]">Dashboard</h2>
        </RouterLink>
        <RouterLink
          to="patients"
          class="flex space-x-4 px-12 py-[0.6rem] hover:border-l-[0.2rem] hover:border-lightblue500 transition ease-linear duration-300"
          active-class=" border-l-[0.2rem] border-lightblue500 bg-primaryOverlay text-lightblue500"
        >
          <AkPeopleGroup class="text-2xl" />
          <h2 class="text-md font-[500]">Patients</h2>
        </RouterLink>
        <RouterLink
          to="appointments"
          class="flex space-x-4 px-12 py-[0.6rem] hover:border-l-[0.2rem] hover:border-lightblue500 transition ease-linear duration-300"
          active-class=" border-l-[0.2rem] border-lightblue500 bg-primaryOverlay text-lightblue500"
        >
          <HeOutlineGroupDiscussionMeetingx3 class="text-2xl" />
          <h2 class="text-md font-[500]">Appointments</h2>
        </RouterLink>
        <RouterLink
          to="staffs"
          class="flex space-x-4 px-12 py-[0.6rem] hover:border-l-[0.2rem] hover:border-lightblue500 transition ease-linear duration-300"
          active-class=" border-l-[0.2rem] border-lightblue500 bg-primaryOverlay text-lightblue500"
        >
          <FaUserDoctor class="text-2xl" />
          <h2 class="text-md font-[500]">Staffs</h2>
        </RouterLink>
        <RouterLink
          to="education"
          class="flex space-x-4 px-12 py-[0.6rem] hover:border-l-[0.2rem] hover:border-lightblue500 transition ease-linear duration-300"
          active-class=" border-l-[0.2rem] border-lightblue500 bg-primaryOverlay text-lightblue500"
        >
          <MdOutlinedCastForEducation class="text-2xl" />
          <h2 class="text-md font-[500]">Education content</h2>
        </RouterLink>
        <RouterLink
          to="inventory"
          class="flex space-x-4 px-12 py-[0.6rem] hover:border-l-[0.2rem] hover:border-lightblue500 transition ease-linear duration-300"
          active-class=" border-l-[0.2rem] border-lightblue500 bg-primaryOverlay text-lightblue500"
        >
          <BsCalendar2Check class="text-2xl" />
          <h2 class="text-md font-[500]">Medical Inventory</h2>
        </RouterLink>
        <RouterLink
          to="settings"
          class="flex space-x-4 px-12 py-[0.6rem] hover:border-l-[0.2rem] hover:border-lightblue500 transition ease-linear duration-300"
          active-class=" border-l-[0.2rem] border-lightblue500 bg-primaryOverlay text-lightblue500"
        >
          <CaSettings class="text-2xl" />
          <h2 class="text-md font-[500]">Settings</h2>
        </RouterLink>
        <a
          class="flex space-x-4 px-12 py-[0.6rem] hover:cursor-pointer hover:text-lightblue500 transition ease-linear duration-300 absolute bottom-0"
          active-class=" border-l-[0.2rem] border-lightblue500 bg-primaryOverlay text-lightblue500"
        >
          <HuLogout class="text-2xl" />
          <h2 class="text-md font-[500]">Logout</h2>
        </a>
      </div>
    </div>
  </div>
</template>
