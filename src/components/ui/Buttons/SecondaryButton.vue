<script setup lang="js"></script>

<template>
  <button
    @click="$emit('btnClick')"
    class="bg-lightblue500 text-white flex-1 px-3 py-2 rounded-xl shadow-md hover:bg-primaryOverlay hover:text-lightblue500 active:shadow-none"
  >
    <slot></slot>
  </button>
</template>
