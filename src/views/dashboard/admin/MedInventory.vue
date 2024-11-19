<script setup>
import ContentCard from "../../../components/ui/cards/ContentCard.vue";
import { InventoryData } from "../../../constants/data/tabledata.js";
import MedInventoryTable from "../../../components/ui/tables/MedInventoryTable.vue";
import SecondaryButton from "../../../components/ui/Buttons/SecondaryButton.vue";
import { ClAddPlus } from "@kalimahapps/vue-icons";
import { BySearch } from "@kalimahapps/vue-icons";
import { ref, defineProps } from "vue";
import InventoryModal from "../../../components/ui/modals/InventoryModal.vue";
import DatePicker from "primevue/datepicker";
import ProductFilter from "../../../components/ui/filters/ProductFilter.vue";
import InstockFilter from "../../../components/ui/filters/InstockFilter.vue";
import ManufacturerFilter from "../../../components/ui/filters/ManufacturerFilter.vue";
import SelectFilter from "../../../components/ui/filters/Filtermenu/SelectFilter.vue";
const props = defineProps({});
const visible = ref(false);
const handleClick = (e) => {
  console.log(e);
  visible.value = !visible.value;
};
</script>

<template>
  <InventoryModal v-model="visible" @onclick="handleClick" />
  <div class="w-full px-2">
    <ContentCard styles="w-full">
      <div class="flex space-x-12 border-b border-borderColor">
        <div class="w-full px-3 flex justify-between">
          <h3 class="text-md font-normal py-3 border-b-2 border-lightblue500">
            MEDICINE INVENTORY
          </h3>
          <div>
            <SecondaryButton @btnClick="handleClick">
              <div class="flex space-x-2 items-center">
                <ClAddPlus class="text-xl" />
                <p>Add Product</p>
              </div>
            </SecondaryButton>
          </div>
        </div>
      </div>
      <div class="flex justify-start items-center py-4 px-2 space-x-6">
        <div class="relative flex">
          <input
            type="text"
            placeholder="Search"
            class="bg-primaryOverlay py-1.5 outline-none pl-8 md:pl-10 rounded-3xl max-w-[8rem] md:max-w-full"
          />
          <BySearch
            class="absolute left-3 md:left-4 top-[50%] translate-y-[-50%] text-lightDarkTextColor"
          />
        </div>
        <SelectFilter />
        <div class="md:flex gap-x-4 lg:flex-row md:flex-row hidden">
          <ProductFilter />
          <InstockFilter />
          <DatePicker
            placeholder="Expiry Date"
            v-model="date"
            class="border-2 border-lightblue500 rounded-3xl overflow-hidden text-lightblue500"
            fluid
            iconDisplay="input"
            showIcon
          />
          <ManufacturerFilter />
        </div>
      </div>
      <MedInventoryTable :tableData="InventoryData" />
    </ContentCard>
  </div>
</template>
