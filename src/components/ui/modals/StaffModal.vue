<template>
  <div v-if="isVisible" class="dialog-overlay" id="par" @click="handler">
    <div class="dialog-container">
      <div
        class="dialog-header flex justify-between items-center content-center pb-2"
      >
        <h2>{{ title }}</h2>
        <button @click="closeDialog" class="hover:text-red-600">
          <i class="pi pi-times-circle" style="font-size: 24px"></i>
        </button>
      </div>
      <div
        class="flex flex-col space-y-3 items-center min-w-[20rem] md:min-w-[30rem] items-start space-y-6"
      >
        <div class="flex flex-col relative form-group w-[97%]">
          <input
            type="text"
            class="outline-none p-1.5 rounded-lg border border-borderColor flex-1"
            placeholder=""
          />
          <label
            for=""
            id="label"
            class="absolute top-[50%] text-[0.86rem] left-2 translate-y-[-46%] bg-white"
          >
            Staff Name
          </label>
        </div>
        <div class="flex flex-col relative form-group w-[97%]">
          <input
            type="date"
            class="outline-none p-1.5 rounded-lg border border-borderColor flex-1"
            placeholder=""
          />
        </div>
        <select
          name="gender"
          class="outline-none w-[97%] border border-borderColor rounded-lg p-1.5 text-[0.86rem]"
        >
          <option>Select Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>
        <div class="flex flex-col relative form-group w-[97%]">
          <input
            type="text"
            class="outline-none p-1.5 rounded-lg border border-borderColor flex-1"
            placeholder=""
          />
          <label
            for=""
            id="label"
            class="absolute top-[50%] text-[0.86rem] left-2 translate-y-[-46%] bg-white"
          >
            Role
          </label>
        </div>
        <div class="flex flex-col relative form-group w-[97%]">
          <input
            type="text"
            class="outline-none p-1.5 rounded-lg border border-borderColor flex-1"
            placeholder=""
          />
          <label
            for=""
            id="label"
            class="absolute top-[50%] text-[0.86rem] left-2 translate-y-[-46%] bg-white"
          >
            Phone Number
          </label>
        </div>
        <div class="flex flex-col relative form-group w-[97%]">
          <input
            type="email"
            class="outline-none p-1.5 rounded-lg border border-borderColor flex-1"
            placeholder=""
          />
          <label
            for=""
            id="label"
            class="absolute top-[50%] text-[0.86rem] left-2 translate-y-[-46%] bg-white"
          >
            Email
          </label>
        </div>
        <div class="flex flex-col relative form-group w-[97%]">
          <input
            type="text"
            class="outline-none p-1.5 rounded-lg border border-borderColor flex-1"
            placeholder=""
          />
          <label
            for=""
            id="label"
            class="absolute top-[50%] text-[0.86rem] left-2 translate-y-[-46%] bg-white"
          >
            Staff Action
          </label>
        </div>
        <div class="flex flex-col space-y-3 w-full justify-center items-center">
          <button class="bg-blue-500 rounded-md p-1.5 text-white w-20">
            Choose
          </button>
          <div class="w-full">
            <button
              class="bg-green-500 rounded-md p-1.5 text-white w-full flex justify-center items-center"
            >
              <i class="pi pi-plus p-2"></i>
              <span>Add</span>
            </button>
          </div>
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
  border-radius: 5px;
}
.form-group label {
  transition: all 0.1s linear;
}
.form-group input:focus + label {
  @apply top-0 text-[0.65rem];
}
</style>
