<template>
  <div class="card flex justify-center">
    <Select
      v-model="selectedType"
      :options="InventoryData"
      :optionLabel="optionLabel"
      :placeholder="placeHolder"
      class="w-full lg:w-56 md:w-20"
    >
      <template #value="slotProps">
        <div v-if="slotProps.value" class="flex items-center">
          <div>{{ slotProps.value.placeHolder }}</div>
        </div>
        <span v-else>
          {{ slotProps.placeholder }}
        </span>
      </template>
      <template #option="slotProps">
        <div class="flex items-center">
          <div>{{ slotProps.option.type }}</div>
        </div>
      </template>
      <template #dropdownicon>
        <i class="pi pi-sort-down-fill" />
      </template>
      <template #footer>
        <div class="p-3">
          <Button
            label="Add New"
            fluid
            severity="secondary"
            text
            size="small"
            icon="pi pi-plus"
          />
        </div>
      </template>
    </Select>
  </div>
</template>

<script setup>
import Button from "primevue/button";
import { defineProps, ref } from "vue";
import { InventoryData } from "../../../constants/data/tabledata.js";
import Select from "primevue/select";
const selectedType = ref();

const props = defineProps({
  optionLabel: String,
  placeHolder: String,
});
</script>
