<script setup>
import { defineProps } from "vue";
import { MaWasteBasket } from "@kalimahapps/vue-icons";
import { CaWarningFilled } from "@kalimahapps/vue-icons";
import { ref } from "vue";
const props = defineProps({
  tableData: Array,
});
const isClicked = ref(Array(props.tableData.length).fill(false));
function handleClick(index) {
  console.log(isClicked.value);
  isClicked.value[index] = !isClicked.value[index];
}
</script>

<template>
  <div class="overflow-hidden px-3 max-w-[920px]">
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Date</th>
            <th>Patient Name</th>
            <th>Patient Age</th>
            <th>Doctor</th>
            <th>Fee Status</th>
            <th>User Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(data, index) in tableData">
            <td>{{ data.time }}</td>
            <td>{{ data.date }}</td>
            <td>
              <div class="table_pfp">
                <img :src="data.image" alt="" />
                <p>{{ data.name }}</p>
              </div>
            </td>
            <td>{{ data.age }}</td>
            <td>{{ data.doctor }}</td>
            <td>
              <div
                :class="[
                  data.feeStatus == 'paid' ? 'text-green-400' : 'text-rose-400',
                  'text-sm',
                ]"
              >
                {{ data.feeStatus }}
              </div>
            </td>
            <td>
              <div
                :class="[
                  data.feeStatus == 'paid'
                    ? 'text-borderColor'
                    : 'text-lightblue500 cursor-pointer',
                  'text-[0.85rem] font-semibold',
                ]"
              >
                Request Fee
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<style scoped>
.table-container {
  width: 100%;
  height: 60vh;
  overflow: auto;
}
table {
  max-width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
}
thead {
  position: sticky;
  top: 0;
  z-index: 1;
  width: 100%;
  background-color: #fff;
  @apply border-b border-borderColor;
}
table,
th,
td {
  padding: 0.3rem;
  text-align: justify;
}
th,
td {
  @apply h-[2.5rem] min-w-[5rem] md:min-w-[125px] py-3 text-center;
}
tr {
  @apply border-b border-borderColor;
}
tr:last-child {
  @apply border-b-0;
}
tr:nth-child(n) {
  @apply hover:shadow-xl;
}
.table_pfp {
  @apply flex items-center space-x-1.5;
}
.table_pfp img {
  @apply w-[1rem] h-[1rem] md:w-[2rem] md:h-[2rem] rounded-full;
}
table th {
  @apply text-[12px] md:text-[15px] font-[600] text-[#242222];
}
table td {
  @apply text-[11px] md:text-[15px] font-[400] text-[#595959];
}
</style>
