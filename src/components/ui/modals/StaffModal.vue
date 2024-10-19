<script setup>
import { defineProps, toRefs, ref } from "vue";

const props = defineProps({
  visibility: {
    type: Boolean,
    default: false,
  },
});
const { visibility: visible } = toRefs(props);
</script>
<template>
  <Dialog
    @close="$emit('close-modal')"
    :visible="visible"
    modal
    header="Edit Profile"
  >
    <span class=""></span>
    <div></div>
  </Dialog>
</template>
