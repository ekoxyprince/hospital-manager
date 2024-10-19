<script setup>
import ContentCard from "../../../components/ui/cards/ContentCard.vue";
import { appointment1Data } from "../../../constants/data/tabledata.js";
import AppointmentTable from "../../../components/ui/tables/AppointmentTable.vue";
import SecondaryButton from "../../../components/ui/Buttons/SecondaryButton.vue";
import { ClAddPlus } from "@kalimahapps/vue-icons";
import { BySearch } from "@kalimahapps/vue-icons";
import { ref } from "vue";
const date = ref();
const selectedTable = ref("new");
function handleTableSelect(type) {
  selectedTable.value = type;
}
</script>

<template>
  <div class="w-full px-2">
    <ContentCard>
      <div class="flex space-x-12 border-b border-borderColor">
        <div class="w-full px-3 flex justify-between">
          <div class="flex space-x-2 md:space-x-8">
            <h3
              v-on:click="handleTableSelect.call(this, 'new')"
              :class="[
                selectedTable == 'new'
                  ? 'border-b-2 border-lightblue500'
                  : 'cursor-pointer',
                'text-sm font-normal py-2',
              ]"
            >
              New Appointment
            </h3>
            <h3
              v-on:click="handleTableSelect.call(this, 'completed')"
              :class="[
                selectedTable == 'completed'
                  ? 'border-b-2 border-lightblue500'
                  : 'cursor-pointer',
                'text-sm font-normal py-2 ',
              ]"
            >
              Completed Appointment
            </h3>
          </div>
          <div class="mb-3">
            <SecondaryButton>
              <div class="flex space-x-2 items-center">
                <ClAddPlus class="text-xl" />
                <p class="hidden md:block">New Appointment</p>
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
      <AppointmentTable :tableData="appointment1Data.tableBody" />
    </ContentCard>
  </div>
</template>
