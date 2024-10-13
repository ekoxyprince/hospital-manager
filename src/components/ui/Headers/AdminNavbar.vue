<script setup></script>
<template>
  <nav class="bg-[white]">
    <div
      class="bg-[blue] w-full h-[4rem] box-border flex items-center justify-between rounded-[0.5rem] content-center"
    >
      <img
        src="../../../assets/images/Group.png"
        class="h-[2rem] inline-block pl-[1rem]"
      />
      <div class="flex justify-center content-center relative">
        <input
          type="text"
          class="w-[43rem] rounded-[6px] pl-2 border border-[gray] h-[2rem] grow focus:outline-none"
          placeholder="Search... "
        />
        <div
          class="bg-[white] h-full w-[2rem] absolute right-0 top-1/2 translate-y-[-50%] flex items-center rounded-[6px] justify-center hover:bg-[gray]"
        >
          <i class="pi pi-search" style="font-size: 1rem"></i>
        </div>
      </div>
      <div class="flex flex-row items-center space-x-[2rem] pr-[1rem]">
        <div
          class="rounded-[50%] h-[2rem] w-[2rem] bg-[white] flex items-center justify-center"
        >
          <i class="pi pi-bars"></i>
        </div>
        <div
          class="rounded-[50%] h-[2rem] w-[2rem] bg-[white] flex items-center justify-center"
        >
          <i class="pi pi-bell"></i>
        </div>
        <div
          class="rounded-[50%] h-[2rem] w-[2rem] bg-[white] flex items-center justify-center"
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
