<script setup>
import ContentCard from "../../../components/ui/cards/ContentCard.vue";
import ContentTable from "../../../components/ui/tables/ContentTable.vue";
import SecondaryButton from "../../../components/ui/Buttons/SecondaryButton.vue";
import { ClAddPlus } from "@kalimahapps/vue-icons";
import { BySearch } from "@kalimahapps/vue-icons";
import { ref } from "vue";
import { patient1Data } from "../../../constants/data/tabledata.js";
import { educationalData } from "../../../constants/data/tiledata.js";
import ShareContent from "../../../components/ui/modals/ShareContent.vue";
const date = ref();
const isVisible = ref(false);
function handleModal() {
  isVisible.value = !isVisible.value;
}
</script>

<template>
  <div class="w-full px-2">
    <ShareContent
      v-model="isVisible"
      @onclick="handleModal"
      :modalData="patient1Data"
    />
    <ContentCard styles="w-full">
      <div class="flex space-x-12 border-b border-borderColor">
        <div class="w-full px-3 flex justify-between">
          <h3 class="text-md font-normal py-3 border-b-2 border-lightblue500">
            Education Content
          </h3>
          <div>
            <SecondaryButton @btnClick="handleModal">
              <div class="flex space-x-2 items-center">
                <ClAddPlus class="text-xl" />
                <p>Share Content</p>
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
        <div>
          <DatePicker
            placeholder="Filter by date"
            v-model="date"
            class="border-2 border-lightblue500 rounded-3xl overflow-hidden text-lightblue500"
            fluid
            iconDisplay="input"
            showIcon
          ></DatePicker>
        </div>
      </div>
      <ContentTable :tableData="educationalData" />
    </ContentCard>
  </div>
</template>
