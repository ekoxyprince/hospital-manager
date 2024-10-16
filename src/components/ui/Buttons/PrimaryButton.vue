<script setup lang="js">
import { defineProps } from "vue";
defineProps({
  text: String,
});
</script>

<template>
  <button
    class="bg-lightblue500 text-white flex-1 px-3 py-2 rounded-xl shadow-2xl hover:bg-primaryOverlay hover:text-lightblue500 active:shadow-none"
  >
    {{ text }}
  </button>
</template>
