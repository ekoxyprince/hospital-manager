<script setup>
import { ref, defineProps, watch, defineEmits } from "vue";
const props = defineProps({
  title: {
    type: String,
    default: "Staff details",
  },
  modalValue: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits();

const isVisible = ref(props.modalValue);

const closeDialog = () => {
  isVisible.value = false;
  emit("update:modelValue", false);
};
watch(
  () => props.modalValue,
  (newValue) => {
    isVisible.value = newValue;
  }
);
</script>
<template>
  <div class="parent-dialog">
    <div class="child-dialog">
      <div>
        <h2 class="">
          {{ title }}
        </h2>
        <i class="pi pi-times" @click="closeDialog"></i>
      </div>

      <slot></slot>
      <button @click="closeDialog">Close</button>
    </div>
  </div>
</template>
<style>
.parent-dialog {
  background-color: rgb(0, 0, 0, 0.1);
  position: fixed;
  top: 0%;
  right: 0%;
  left: 0%;
  bottom: 0%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.child-dialog {
  background-color: white;

  padding: 20px;
  border-radius: 10px;
}
</style>
