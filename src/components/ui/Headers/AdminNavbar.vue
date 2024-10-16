<script setup>
import logo from "../../../assets/image/logo.png";
import pfp from "../../../assets/image/pfp.png";
import { HeFilledUiMenuGrid } from "@kalimahapps/vue-icons";
import { ClBellNotification } from "@kalimahapps/vue-icons";
import { navState } from "../../../reactive/store.js";

function handleToggle() {
  navState.isToggled = !navState.isToggled;
}
</script>

<template>
  <div class="w-full h-14 relative flex justify-between items-center p-1 px-2">
    <div class="flex space-x-2 items-center">
      <h1 class="text-xl font-[400] md:text-2xl md:font-[500] text-lightDarkTextColor">
        Dashboard
      </h1>
    </div>
    <div class="flex space-x-2 items-center p-1">
      <div
        @click="handleToggle"
        class="cursor-pointer w-[2.5rem] h-[2.5rem] rounded-full shadow-lg active:shadow-none md:hidden flex items-center justify-center"
      >
        <HeFilledUiMenuGrid class="text-2xl md:hidden" />
      </div>
      <div class="cursor-pointer flex items-center justify-center">
        <ClBellNotification class="text-2xl" />
      </div>
      <div class="flex items-center space-x-2">
        <div class="w-[2.8rem] h-[2.8rem] rounded-full border border-lightblue500">
          <img :src="pfp" class="w-full h-full rounded-full" alt="" />
        </div>
        <div class="flex flex-col space-y-0">
          <h3 class="text-[12px] font-bold text-lightDarkTextColor">John Doe</h3>
          <p class="text-[11px] font-normal text-fadeTextColor">Admin</p>
        </div>
      </div>
    </div>
  </div>
</template>
