<script setup>
import { defineProps } from "vue";
import img from "../../../assets/image/course1.jpg";
import PrimaryButton from "../Buttons/PrimaryButton.vue";
defineProps({
  data: {
    type: Object,
    default: {
      img: img,
      title: "4 Nutition to take daily",
      author: "By John Harmelton",
    },
  },
});
</script>

<template>
  <div
    class="w-full grid grid-cols-tile-col space-x-3 jus py-2 items-center border-b border-borderColor"
  >
    <div class="w-[2rem] h-[2rem]">
      <img :src="data.img" class="w-[100%] h-[100%] rounded-full" alt="" />
    </div>
    <div class="flex flex-col">
      <h3 class="text-lightDarkTextColor text-[0.85rem]">{{ data.title }}</h3>
      <p class="text-[0.75rem] sm:text-[0.7rem] text-fadeTextColor">{{ data.author }}</p>
    </div>
    <div class="flex items-start justify-center text-[0.75rem] sm:text-[0.7rem]">
      <PrimaryButton text="Assign" />
    </div>
  </div>
</template>
