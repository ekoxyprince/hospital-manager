<script setup>
import { defineProps } from "vue";
defineProps({
  styles: String,
});
</script>

<template>
  <div :class="[styles, 'p-2 px-4 py-4 rounded-lg']">
    <slot></slot>
  </div>
</template>
