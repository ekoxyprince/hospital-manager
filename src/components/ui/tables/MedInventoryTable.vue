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
  <div class="overflow-hidden px-3 md:max-w-[920px] xl:max-w-[100%]">
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th><input type="checkbox" class="mr-2" />Product Name</th>
            <th>Type</th>
            <th>
              Price
              <span class="text-sm font-light">(per pack)</span>
            </th>
            <th>In Stock</th>
            <th>Expiry Date</th>
            <th>Manufacturer</th>
            <th>User Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(data, index) in tableData">
            <td>
              <div class="table_pfp">
                <input type="checkbox" class="mr-2" />
                <img :src="data.image" alt="" />
                <p>{{ data.name }}</p>
              </div>
            </td>
            <td>{{ data.type }}</td>
            <td>{{ data.price }}</td>
            <td>{{ data.instock }}</td>
            <td>{{ data.expirydate }}</td>
            <td>{{ data.manufacturer }}</td>
            <td>
              <div class="flex justify-center relative">
                <div
                  @click="handleClick.call(this, index)"
                  class="flex flex-col space-y-1 items-center justify-center w-[2.5rem] h-[2.5rem] rounded-full cursor-pointer hover:shadow-lg active:shadow-none"
                >
                  <span
                    class="w-[0.25rem] h-[0.25rem] rounded-full bg-borderColor"
                  ></span>
                  <span
                    class="w-[0.25rem] h-[0.25rem] rounded-full bg-borderColor"
                  ></span>
                  <span
                    class="w-[0.25rem] h-[0.25rem] rounded-full bg-borderColor"
                  ></span>
                </div>
                <div
                  :class="[
                    isClicked[index] ? 'flex' : 'hidden',
                    'absolute top-[100%] px-1 py-1 bg-white rounded-md shadow-md space-x-2 justify-center',
                  ]"
                >
                  <div
                    class="h-6 w-6 border border-b border-red-500 rounded-md flex justify-center items-center"
                  >
                    <MaWasteBasket
                      class="text-red-500 cursor-pointer text-xl"
                    />
                  </div>
                  <div
                    class="h-6 w-6 border border-b border-blue-500 rounded-md flex justify-center items-center"
                  >
                    <CaWarningFilled
                      class="text-lightblue500 cursor-pointer text-xl"
                    />
                  </div>
                  <div
                    class="border border-b w-6 h-6 border-blue-500 flex justify-center items-center rounded-md"
                  >
                    <i
                      class="pi pi-plus text-blue-500"
                      style="font-size: 0.9rem"
                    ></i>
                  </div>
                  <div></div>
                </div>
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
  text-align: center;
}
th,
td {
  @apply h-[2.5rem] min-w-[5rem] md:min-w-[125px] py-3 text-left px-8;
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
