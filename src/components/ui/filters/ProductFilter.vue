<template>
  <Filter :optionLabel="type" placeHolder="Product Type" />
</template>

<script setup>
import Filter from "./Filter.vue";
import { ref } from "vue";
const type = ref("type");
</script>
