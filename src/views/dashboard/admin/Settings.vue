<script setup>
import ContentCard from "../../../components/ui/cards/ContentCard.vue";
import SecondaryButton from "../../../components/ui/Buttons/SecondaryButton.vue";
import { ClAddPlus } from "@kalimahapps/vue-icons";
import { BySearch } from "@kalimahapps/vue-icons";
import InfoCards from "../../../components/ui/cards/InfoCard.vue";
import { ref } from "vue";
import PatientModal from "../../../components/ui/modals/PatientModal.vue";
const date = ref();
const isVisible = ref(false);
function handleModal() {
  isVisible.value = !isVisible.value;
}
</script>

<template>
  <div class="w-full px-2">
    <PatientModal :visible="isVisible" @onClose="handleModal" />
    <ContentCard styles="w-full">
      <div class="flex space-x-12 border-b border-borderColor">
        <div class="w-full px-3 flex justify-between">
          <h3 class="text-md font-normal py-3 border-b-2 border-lightblue500">
            Settings
          </h3>
          <div>
            <SecondaryButton @btnClick="handleModal">
              <div class="flex space-x-2 items-center">
                <ClAddPlus class="text-xl" />
                <p>Save</p>
              </div>
            </SecondaryButton>
          </div>
        </div>
      </div>
      <div class="flex px-2 py-4 space-x-6">
        <div class="relative flex">
          <input
            type="text"
            placeholder="Search"
            class="bg-primaryOverlay py-1.5 outline-none pl-8 md:pl-10 rounded-3xl max-w-[8rem] md:max-w-full"
          />
          <BySearch
            class="absolute left-3 md:left-4 top-[50%] translate-y-[-50%] text-lightDarkTextColor"
          />
        </div>
      </div>
      <div class="flex flex-col items-start space-y-3">
        <h1 class="text-[1.3rem]">Account</h1>
        <div class="flex items-center justify-start space-x-3 w-[80%]">
          <img src="../../../assets/image/pfp.png" alt="" />
          <div class="flex flex-col">
            <h2 class="">Prince Dennis</h2>

            <span class="text-[0.56rem] text-[grey]"
              >denniseinstien@gmail.com</span
            >
          </div>
        </div>
        <div>
          <h2>Subscription</h2>
          <InputCards></InputCards>
        </div>
      </div>
    </ContentCard>
  </div>
</template>
