<template>
  <div class="bg-white flex md:hidden lg:hidden items-center justify-center">
    <div class="flex">
      <div
        class="w-8 h-8 rounded-[50%] shadow-lg flex items-center justify-center"
        v-if="!showValue"
        @click="toggleValue"
      >
        <i class="pi pi-bars"></i>
      </div>
    </div>
    <div
      class="bg-[rgb(4, 5, 5)] flex-col space-y-4 p-5 justify-center rounded-md min-w-[7rem] max-w-[7rem] relative shadow-md"
      v-if="showValue"
    >
      <InstockFilter />
      <ProductFilter />
      <ManufacturerFilter />
      <DatePicker
        placeholder="Expiry Date"
        v-model="date"
        class="border-2 border-lightblue500 rounded-3xl overflow-hidden text-lightblue500"
        fluid
        iconDisplay="input"
        showIcon
      />
      <div
        class="w-4 h-4 rounded-[50%] shadow-lg flex items-center justify-center absolute top-0 right-0 bg-white"
        @click="toggleValue"
      >
        <i class="pi pi-times" style="font-size: 0.5rem; color: black"></i>
      </div>
    </div>
  </div>
</template>

<script setup>
import InstockFilter from "../InstockFilter.vue";
import ManufacturerFilter from "../ManufacturerFilter.vue";
import ProductFilter from "../ProductFilter.vue";
import { ref } from "vue";

const showValue = ref(false);
const toggleValue = () => {
  showValue.value = !showValue.value;
};
</script>
