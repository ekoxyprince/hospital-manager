<template>
  <label class="custom-checkbox">
    <input type="checkbox" />
    <span class="pi pi-check checkbox"></span>
  </label>
</template>

<script>
export default {};
</script>
<style scoped>
.custom-checkbox {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid grey;
  height: 1.2rem;
  width: 1.2rem;
  border-radius: 5px;
}

input {
  display: none; /* Hide the default checkbox */
}

.custom-checkbox .checkbox {
  font-size: 0.6rem;
  color: white;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.custom-checkbox input:checked + .checkbox {
  background-color: rgb(22, 138, 216); /* Background color when checked */
  border-color: rgb(33, 131, 211); /* Border color when checked */
}
.custom-checkbox input:checked {
  border-color: rgb(22, 138, 216);
}
</style>
