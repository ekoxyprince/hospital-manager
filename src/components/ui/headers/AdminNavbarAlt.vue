<script setup>
import logo from "../../../assets/image/download.jpg";
import pfp from "../../../assets/image/pfp.png";
import { HeFilledUiMenuGrid } from "@kalimahapps/vue-icons";
import { ClBellNotification } from "@kalimahapps/vue-icons";
</script>

<template>
  <div
    class="w-full rounded-3xl bg-white h-14 shadow-md relative flex justify-between items-center p-1 px-2"
  >
    <div class="flex space-x-2 items-center">
      <img :src="logo" class="w-[2.5rem] h-[2.5rem] rounded-full" alt="" />
    </div>
    <div class="flex space-x-2 items-center">
      <div
        class="cursor-pointer w-[2.5rem] h-[2.5rem] rounded-full shadow-lg md:hidden flex items-center justify-center"
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
