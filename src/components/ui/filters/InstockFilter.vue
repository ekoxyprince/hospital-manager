<template>
  <Filter :optionLabel="type" placeHolder="In Stock" />
</template>

<script setup>
import Filter from "./Filter.vue";
import { ref } from "vue";

const type = ref("instock");
</script>
