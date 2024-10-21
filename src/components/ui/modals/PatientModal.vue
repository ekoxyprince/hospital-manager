<script setup>
import PrimaryButton from "../Buttons/PrimaryButton.vue";
import FileUpload from "primevue/fileupload";
import { defineProps, defineEmits } from "vue";
defineProps({
  visible: Boolean,
});
const emits = defineEmits(["onClose", "close"]);
function handleClick(e) {
  if (e.target.id == "par") {
    emits("onClose");
  }
}
</script>

<template>
  <div id="par" @click="handleClick" class="modal-container" v-if="visible">
    <div id="mod" class="bg-white shadow-sm rounded-lg p-2 px-3 py-2">
      <div class="flex flex-col space-y-3">
        <div class="flex space-x-3">
          <p class="text-md">Add Patient</p>
        </div>
        <div class="flex flex-col min-w-[20rem] md:min-w-[25rem] space-y-3 px-2">
          <div class="flex flex-col relative form-group">
            <input
              type="text"
              class="outline-none border border-borderColor rounded-lg p-1.5"
              placeholder=""
            />
            <label
              id="label"
              for=""
              class="absolute bg-white text-[0.8rem] top-[50%] left-2 translate-y-[-50%] px-1"
            >
              Patient Name
            </label>
          </div>
          <div class="flex flex-col relative form-group">
            <input
              type="text"
              class="outline-none border border-borderColor rounded-lg p-1.5"
              placeholder=""
            />
            <label
              id="label"
              for=""
              class="absolute bg-white text-[0.8rem] top-[50%] left-2 translate-y-[-50%] px-1"
            >
              Phone Number
            </label>
          </div>
          <div class="flex flex-col relative form-group">
            <input
              type="text"
              class="outline-none border border-borderColor rounded-lg p-1.5"
              placeholder=""
            />
            <label
              id="label"
              for=""
              class="absolute bg-white text-[0.8rem] top-[50%] left-2 translate-y-[-50%] px-1"
            >
              Email Address
            </label>
          </div>
          <div class="flex flex-col relative form-group">
            <input
              type="text"
              class="outline-none border border-borderColor rounded-lg p-1.5"
              placeholder=""
            />
            <label
              id="label"
              for=""
              class="absolute bg-white text-[0.8rem] top-[50%] left-2 translate-y-[-50%] px-1"
            >
              Blood Group
            </label>
          </div>
          <div class="flex flex-col relative form-group">
            <select
              class="outline-none border border-borderColor rounded-lg p-1.5 text-[0.8rem]"
              name=""
              id=""
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div class="flex flex-col relative form-group">
            <input
              type="date"
              class="outline-none border border-borderColor rounded-lg p-1.5"
              placeholder=""
            />
            <label
              id="label"
              for=""
              class="absolute bg-white text-[0.65rem] top-[0] left-2 translate-y-[-50%] px-1"
            >
              Date Of Birth
            </label>
          </div>
          <div class="flex flex-col relative form-group">
            <FileUpload mode="basic" :auto="true"></FileUpload>
            <label
              id="label"
              for=""
              class="absolute bg-white text-[0.65rem] top-[-1px] left-2 translate-y-[-50%]"
            >
              Patient Image
            </label>
          </div>
          <div class="flex justify-end items-center">
            <PrimaryButton text="Add" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-container {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form-group label {
  transition: all 0.3s linear;
}
.form-group input:focus + label {
  @apply top-0 text-[0.65rem];
}
</style>
