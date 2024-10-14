<script setup>
import { navState } from "../../../reactive/store.js";

function handleToggle() {
  navState.isToggled = !navState.isToggled;
}
</script>
<template>
  <nav class="bg-[white]">
    <div
      class="bg-[borderColor] w-full h-[4rem] box-border flex items-center justify-between rounded-[0.5rem] content-center gap-4"
    >
      <!-- The logo section -->
      <img
        src="../../../assets/image/download.jpg"
        class="h-6 inline-block pl-1 md:h-8 lg:h-10"
      />
      <!-- Search bar section -->
      <div
        class="flex justify-center content-center relative border border-[gray] rounded-md"
      >
        <input
          type="text"
          class="rounded-md border-none h-8 grow focus:outline-none w-full md:flex-grow lg:w-96"
          placeholder=" Search... "
        />
        <div
          class="bg-[white] h-full w-8 absolute right-0 top-1/2 translate-y-[-50%] flex items-center rounded-[6px] justify-center hover:bg-[gray] hidden md:flex"
        >
          <i class="pi pi-search" style="font-size: 1rem"></i>
        </div>
      </div>
      <!-- Link section -->
      <div class="flex flex-row items-center space-x-2">
        <div
          class="rounded-1/2 h-8 w-8 bg-[white] flex items-center justify-center shadow-md active:shadow-none cursor-pointer md:hidden"
        >
          <i class="pi pi-bars"></i>
        </div>
      </div>
      <div
        class="bg-white-50 h-[50%] rounded-l-full rounded-r-full flex justify-between mr-2 md:w-auto space-x-6 shadow-md"
      >
        <div
          class="rounded-[50%] h-[2rem] w-[2rem] bg-[white] flex items-center justify-center shadow-md active:shadow-none"
        >
          <i class="pi pi-bell relative">
            <div
              class="bg-red-500 h-1 w-1 rounded-full absolute left-[80%] top-[65%]"
            ></div>
          </i>
        </div>
        <div
          class="rounded-full h-8 w-8 bg-[white] flex items-center justify-center"
        >
          <img
            src="../../../assets/image/pfp.png"
            alt=""
            class="inline-flex size-full"
          />
        </div>
      </div>
    </div>
  </nav>
</template>
