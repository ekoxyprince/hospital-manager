<script setup>
import ContentCard from "../../../components/ui/cards/ContentCard.vue";
import { StaffData } from "../../../constants/data/tabledata.js";
import StaffTable from "../../../components/ui/tables/StaffTable.vue";
import SecondaryButton from "../../../components/ui/Buttons/SecondaryButton.vue";
import { ClAddPlus } from "@kalimahapps/vue-icons";
import { BySearch } from "@kalimahapps/vue-icons";
import { ref, defineProps } from "vue";
import StaffModal from "../../../components/ui/modals/StaffModal.vue";
const date = ref();
const props = defineProps({});
const visible = ref(false);
const handleClick = (e) => {
  console.log(e);
  visible.value = !visible.value;
};
</script>

<template>
  <StaffModal v-model="visible" @onclick="handleClick" />
  <div class="w-full px-2">
    <ContentCard styles="w-full">
      <div class="flex space-x-12 border-b border-borderColor">
        <div class="w-full px-3 flex justify-between">
          <h3 class="text-md font-normal py-3 border-b-2 border-lightblue500">
            Staff Info
          </h3>
          <div>
            <SecondaryButton @btnClick="handleClick">
              <div class="flex space-x-2 items-center">
                <ClAddPlus class="text-xl" />
                <p>Add Staff</p>
              </div>
            </SecondaryButton>
          </div>
        </div>
      </div>
      <div class="flex px-2 py-4 space-x-6">
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
        <div class="card flex justify-center">
          
        </div>
      </div>
      <StaffTable :tableData="StaffData" />
    </ContentCard>
  </div>
</template>
