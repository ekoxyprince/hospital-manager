<script setup>
import { defineProps, toRefs, ref } from "vue";

const props = defineProps({
  visibility: {
    type: Boolean,
    default: false,
  },
  closeButtonProps: {
    type: Object,
    default: {
      style: { display: "none" },
    },
  },
});

const { visibility: visible } = toRefs(props);
</script>
<template>
  <Dialog
    @beforeClose="handleBeforeHide"
    :closeButtonProps="closeButtonProps"
    :visible="visible"
    modal
    header="Edit Profile"
  >
    <span class=""></span>
    <div></div>
  </Dialog>
</template>
