<script setup>
import { defineProps } from "vue";
defineProps({
  tableData: Object,
});
</script>

<template>
  <div class="overflow-hidden px-3">
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th v-for="head in tableData.tableHeads">{{ head }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="data in tableData.tableBody">
            <td>{{ data.time }}</td>
            <td>{{ data.date }}</td>
            <td>
              <div class="table_pfp">
                <img :src="data.image" alt="" />
                <p>{{ data.name }}</p>
              </div>
            </td>
            <td>{{ data.doctor }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<style scoped>
.table-container {
  @apply w-full overflow-auto h-[13.6rem];
}
@media (max-width: 1024px) {
  .table-container {
    @apply max-w-[450px];
  }
}
@media (max-width: 968px) {
  .table-container {
    @apply max-w-[100%];
  }
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
  @apply h-[2.5rem] min-w-[10rem] md:min-w-[135px] py-3;
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
