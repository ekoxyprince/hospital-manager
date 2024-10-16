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
