<template>
  <div v-if="isVisible" class="dialog-overlay" id="par" @click="handler">
    <div class="dialog-container">
      <div
        class="dialog-header flex justify-between items-center content-center mb-4"
      >
        <h2>{{ title }}</h2>
        <button @click="closeDialog" class="hover:text-red-500">
          <i
            class="pi pi-times text-[rgb(198, 187, 190)]"
            style="font-size: 20px"
          ></i>
        </button>
      </div>
      <div class="relative flex">
        <input
          type="text"
          placeholder="Search"
          class="bg-primaryOverlay py-1.5 outline-none pl-8 md:pl-10 rounded-3xl max-w-full"
        />
        <BySearch
          class="absolute left-3 md:left-4 top-[50%] translate-y-[-50%] text-lightDarkTextColor"
        />
      </div>
      <div
        class="flex flex-col space-y-3 items-start min-w-[20rem] md:min-w-[24rem] space-y-6 pt-4"
      >
        <div v-for="data in modalData" :key="data.id" class="w-[100%]">
          <div class="flex items-center justify-between space-x-1.5">
            <div class="flex space-x-2 items-center">
              <img :src="data.image" alt="" class="size-10 rounded-[50%]" />
              <div class="text-[0.87rem] text-[grey]">
                {{ data.name }}
              </div>
            </div>
            <CheckButton />
          </div>
        </div>
        <SecondaryButton class="w-[95%] self-center">
          Assign Content
        </SecondaryButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from "vue";
import { BySearch } from "@kalimahapps/vue-icons";
import SecondaryButton from "../Buttons/SecondaryButton.vue";
import CheckButton from "../Buttons/CheckButton.vue";
const props = defineProps({
  title: {
    type: String,
    default: "Share Edaucation Content",
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
  modalData: {
    type: Array,
  },
});

const emit = defineEmits(["onclick", "close"]);
function handler(e) {
  if (e.target.id == "par") {
    emit("onclick");
  }
}

const isVisible = ref(props.modelValue);

const closeDialog = () => {
  isVisible.value = false;
  emit("update:modelValue", false);
};

// Watch for changes in modelValue prop
watch(
  () => props.modelValue,
  (newValue) => {
    isVisible.value = newValue;
  }
);
</script>

<style>
.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.dialog-container {
  background: white;
  padding: 20px;
  border-radius: 2.4rem;
}
.dialog-header {
  position: relative;
  width: 100%;
}
.dialog-header::before {
  content: "";
  background: rgb(231, 234, 243);
  width: 100%;
  height: 0.09rem;
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>
