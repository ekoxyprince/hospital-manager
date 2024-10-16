<script setup>
import { defineProps } from "vue";
import img from "../../../assets/image/patient1.jpg";
import PrimaryButton from "../Buttons/PrimaryButton.vue";
defineProps({
  data: {
    type: Object,
    default: {
      img: img,
      patient: "Jame Gathriel",
      notice: "Doctor fee pending",
    },
  },
});
</script>

<template>
  <div
    class="w-full grid grid-cols-tile2-col space-x-3 jus py-2 items-center border-b border-borderColor"
  >
    <div class="w-[2rem] h-[2rem]">
      <img :src="data.img" class="w-[100%] h-[100%] rounded-full" alt="" />
    </div>
    <div class="flex flex-col">
      <h3 class="text-lightDarkTextColor text-[0.85rem]">{{ data.patient }}</h3>
      <p class="text-[0.7rem] text-red-600">{{ data.notice }}</p>
    </div>
    <div class="flex items-start justify-center text-[0.85rem]">
      <PrimaryButton text="Request fee" />
    </div>
  </div>
</template>
