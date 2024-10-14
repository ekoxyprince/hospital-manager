<script setup>
import InfoCard from "../../../components/ui/cards/InfoCard.vue";
import { BsPeople } from "@kalimahapps/vue-icons";
import { McInventoryLine } from "@kalimahapps/vue-icons";
import { AnFilledMedicineBox } from "@kalimahapps/vue-icons";
import { CaReminder } from "@kalimahapps/vue-icons";
</script>

<template>
  <div class="flex flex-col space-y-2">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-2">
      <InfoCard>
        <div class="flex space-x-3 items-center">
          <div
            class="flex w-[3rem] h-[3rem] rounded-full items-center justify-center bg-glassIndigo400"
          >
            <BsPeople class="text-2xl text-indigo500 font-bold" />
          </div>
          <div class="flex flex-col space-y-1">
            <p class="text-md font-normal text-borderColor">Total Staffs</p>
            <h3 class="text-2xl font-semibold">2,000</h3>
            <p></p>
          </div>
        </div>
      </InfoCard>
      <InfoCard>
        <div class="flex space-x-3 items-center">
          <div
            class="flex w-[3rem] h-[3rem] rounded-full items-center justify-center bg-glassIndigo400"
          >
            <CaReminder class="text-2xl text-indigo500 font-bold" />
          </div>
          <div class="flex flex-col space-y-1">
            <p class="text-md font-normal text-borderColor">Daily Reminders</p>
            <h3 class="text-2xl font-semibold">20</h3>
            <p></p>
          </div>
        </div>
      </InfoCard>
      <InfoCard>
        <div class="flex space-x-3 items-center">
          <div
            class="flex w-[3rem] h-[3rem] rounded-full items-center justify-center bg-glassIndigo400"
          >
            <AnFilledMedicineBox class="text-2xl text-indigo500 font-bold" />
          </div>
          <div class="flex flex-col space-y-1">
            <p class="text-md font-normal text-borderColor">Total Drugs</p>
            <h3 class="text-2xl font-semibold">20,000</h3>
            <p></p>
          </div>
        </div>
      </InfoCard>
      <InfoCard
        ><div class="flex space-x-3 items-center">
          <div
            class="flex w-[3rem] h-[3rem] rounded-full items-center justify-center bg-glassIndigo400"
          >
            <McInventoryLine class="text-2xl text-indigo500 font-bold" />
          </div>
          <div class="flex flex-col space-y-1">
            <p class="text-md font-normal text-borderColor">Total Inventories</p>
            <h3 class="text-2xl font-semibold">8,000</h3>
            <p></p>
          </div>
        </div>
      </InfoCard>
    </div>
  </div>
</template>
