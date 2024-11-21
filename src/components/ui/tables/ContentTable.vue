<script setup>
import { defineProps } from "vue";

import SecondaryButton from "../Buttons/SecondaryButton.vue";
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
  <div class="overflow-hidden px-3 md:max-w-[920px] xl:max-w-[100%]">
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Assign Content</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="data in tableData" :key="data.title">
            <td>
              <div class="table_pfp">
                <img :src="data.img" alt="" />
                <p>{{ data.title }}</p>
              </div>
            </td>
            <td>{{ data.author }}</td>
            <td>
              <SecondaryButton>
                <p>Assign</p>
              </SecondaryButton>
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
  text-align: center;
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
.isEntered {
  animation: enterAnimation 300ms linear forwards;
}
</style>
