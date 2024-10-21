<template>
  <div v-if="isVisible" class="dialog-overlay">
    <div class="dialog-container">
      <div
        class="dialog-header flex justify-between max-w-lg min-w-60 items-center content-center"
      >
        <h2>{{ title }}</h2>
        <button @click="closeDialog" class="hover:text-red-600">
          <i class="pi pi-times-circle" style="font-size: 24px"></i>
        </button>
      </div>
      <div class="dialog-body flex flex-col space-y-3 items-center">
        <div>
          <input
            type="text"
            class="outline-none p-1.5 rounded-lg border-current"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: "Dialog Title",
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits();

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
}
.dialog-container {
  background: white;
  padding: 20px;
  border-radius: 5px;
}
</style>
