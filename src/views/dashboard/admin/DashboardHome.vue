<script setup>
import InfoCard from "../../../components/ui/cards/InfoCard.vue";
import { AkTriangleDownFill } from "@kalimahapps/vue-icons";
import { HeOutlineGroupDiscussionMeetingx3 } from "@kalimahapps/vue-icons";
import { HeFilledConeTestOnNets } from "@kalimahapps/vue-icons";
import { ClUsers } from "@kalimahapps/vue-icons";
import { TaMedicineSyrup } from "@kalimahapps/vue-icons";
import ContentCard from "../../../components/ui/cards/ContentCard.vue";
import { ref } from "vue";
import BasicTable from "../../../components/ui/tables/BasicTable.vue";
import { appointment1Data } from "../../../constants/data/tabledata.js";
import EducationalTile from "../../../components/ui/tiles/EducationalTile.vue";
import FeesTile from "../../../components/ui/tiles/FeesTile.vue";
import ApexDonutChart from "../../../components/ui/charts/ApexDonutChart.vue";

const isToggled = ref(false);
const isToggledChart = ref(false);
const selectedTable = ref("new");
const selected = ref("Weekly");
const selectedChart = ref("Weekly");
function showToggle() {
  isToggled.value = !isToggled.value;
}
function showToggleChart() {
  isToggledChart.value = !isToggled.value;
}
function handleSelect(e) {
  selected.value = e.target.innerText;
  isToggled.value = false;
}
function handleSelectChart(e) {
  selectedChart.value = e.target.innerText;
  isToggledChart.value = false;
}
function handleTableSelect(type) {
  selectedTable.value = type;
}
</script>

<template>
  <div class="flex flex-col space-y-3">
    <div class="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-3 px-2">
      <div class="w-full md:w-1/3">
        <ContentCard>
          <div class="flex flex-col space-y-4">
            <div class="flex justify-between items-center relative">
              <h2 class="text-sm">Activity Overview</h2>
              <div class="flex space-x-1 items-center">
                <p class="text-sm">{{ selected }}</p>
                <AkTriangleDownFill v-on:click="showToggle" class="cursor-pointer" />
              </div>
              <div
                v-show="isToggled"
                class="absolute top-[100%] flex flex-col right-0 space-y-1 shadow-lg bg-white rounded-md overflow-hidden"
              >
                <button
                  @click="handleSelect"
                  class="hover:bg-primaryOverlay px-2 text-[0.8rem] font-[500] text-justify"
                >
                  Monthly
                </button>
                <button
                  @click="handleSelect"
                  class="hover:bg-primaryOverlay px-2 text-[0.8rem] font-[500] text-justify"
                >
                  Weekly
                </button>
                <button
                  @click="handleSelect"
                  class="hover:bg-primaryOverlay px-2 text-[0.8rem] font-[500] text-justify"
                >
                  Daily
                </button>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <InfoCard
                styles="bg-cardColor1 flex-col space-y-2 flex items-center text-center text-lightDarkTextColor"
              >
                <HeOutlineGroupDiscussionMeetingx3 class="text-2xl md:text-xl" />
                <div class="flex flex-col space-y-0 items-center">
                  <p class="text-sm md:text-[0.75rem] xl:text-sm font-semibold">100</p>
                  <p class="text-sm md:text-[0.75rem] xl:text-sm">Appointments</p>
                </div>
              </InfoCard>
              <InfoCard
                styles="bg-cardColor2 flex-col space-y-2 flex items-center text-center text-lightBrownTextColor"
              >
                <ClUsers class="text-xl" />
                <div class="flex flex-col space-y-0 items-center">
                  <p class="text-sm md:text-[0.75rem] xl:text-sm font-semibold">100</p>
                  <p class="text-sm md:text-[0.75rem] xl:text-sm">New Patients</p>
                </div>
              </InfoCard>
              <InfoCard
                styles="bg-cardColor3 flex-col space-y-2 flex items-center text-center text-darkBrownTextColor"
              >
                <TaMedicineSyrup class="text-xl" />
                <div class="flex flex-col space-y-0 items-center">
                  <p class="text-sm md:text-[0.75rem] xl:text-sm font-semibold">100</p>
                  <p class="text-sm md:text-[0.75rem] xl:text-sm">Medicine Sold</p>
                </div>
              </InfoCard>
              <InfoCard
                styles="bg-cardColor4 flex-col space-y-2 flex items-center text-center text-lightDarkerTextColor"
              >
                <HeFilledConeTestOnNets class="text-xl" />
                <div class="flex flex-col space-y-0 items-center">
                  <p class="text-sm md:text-[0.75rem] xl:text-sm font-semibold">100</p>
                  <p class="text-sm md:text-[0.75rem] xl:text-sm">Lab Tests</p>
                </div>
              </InfoCard>
            </div>
          </div>
        </ContentCard>
      </div>
      <div class="w-full md:w-2/3">
        <ContentCard>
          <div class="flex space-x-12 border-b border-borderColor">
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
          <BasicTable :tableData="appointment1Data" />
        </ContentCard>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 px-2">
      <ContentCard styles="max-h-[20rem] overflow-y-auto">
        <div class="flex flex-col space-y-2">
          <div class="flex justify-between items-center relative">
            <h2 class="text-sm">Educational Content</h2>
          </div>
          <EducationalTile />
          <EducationalTile />
          <EducationalTile />
          <EducationalTile />
        </div>
      </ContentCard>
      <ContentCard styles="max-h-[20rem] overflow-y-auto">
        <div class="flex flex-col space-y-2">
          <div class="flex justify-between items-center relative">
            <h2 class="text-sm">Top Medicine sold</h2>
            <div class="flex space-x-1 items-center">
              <p class="text-sm">{{ selectedChart }}</p>
              <AkTriangleDownFill v-on:click="showToggleChart" class="cursor-pointer" />
            </div>
            <div
              v-show="isToggledChart"
              class="absolute top-[100%] flex flex-col right-0 space-y-1 shadow-lg bg-white rounded-md overflow-hidden z-10"
            >
              <button
                @click="handleSelectChart"
                class="hover:bg-primaryOverlay px-2 text-[0.8rem] font-[500] text-justify"
              >
                Monthly
              </button>
              <button
                @click="handleSelectChart"
                class="hover:bg-primaryOverlay px-2 text-[0.8rem] font-[500] text-justify"
              >
                Weekly
              </button>
              <button
                @click="handleSelectChart"
                class="hover:bg-primaryOverlay px-2 text-[0.8rem] font-[500] text-justify"
              >
                Daily
              </button>
            </div>
          </div>
          <ApexDonutChart />
        </div>
      </ContentCard>
      <ContentCard styles="max-h-[20rem] overflow-y-auto">
        <div class="flex flex-col space-y-2">
          <div class="flex justify-between items-center relative">
            <h2 class="text-[0.7rem]">Patient Fee</h2>
          </div>
          <FeesTile />
          <FeesTile />
          <FeesTile />
          <FeesTile />
        </div>
      </ContentCard>
    </div>
  </div>
</template>
