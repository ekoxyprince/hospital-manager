<script setup lang="js">
import { defineProps } from "vue";
defineProps({
  text: String,
});
</script>

<template>
  <button
    class="bg-primary text-white flex-1 px-3 py-2 rounded-xl shadow-2xl hover:bg-borderColor hover:text-black active:shadow-none"
  >
    {{ text }}
  </button>
</template>
