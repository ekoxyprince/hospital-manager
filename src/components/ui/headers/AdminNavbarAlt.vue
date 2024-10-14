<script setup>
import logo from "../../../assets/image/download.jpg";
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
      <h1 class="text-xl font-semibold md:text-4xl md:font-bold">Welcome, Prince</h1>
    </div>
    <div class="flex space-x-2 items-center rounded-3xl bg-white shadow-md p-1">
      <div
        @click="handleToggle"
        class="cursor-pointer w-[2.5rem] h-[2.5rem] rounded-full shadow-lg active:shadow-none md:hidden flex items-center justify-center"
      >
        <HeFilledUiMenuGrid class="text-2xl md:hidden" />
      </div>
      <div
        class="cursor-pointer w-[2.5rem] h-[2.5rem] rounded-full shadow-lg flex items-center justify-center"
      >
        <ClBellNotification class="text-2xl" />
      </div>
      <img :src="pfp" class="w-[2.5rem] h-[2.5rem] rounded-full" alt="" />
    </div>
  </div>
</template>
