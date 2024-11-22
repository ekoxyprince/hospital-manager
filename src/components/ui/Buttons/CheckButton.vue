<template>
  <label class="custom-checkbox">
    <input type="checkbox" />
    <span class="checkmark"></span>
  </label>
</template>

<script>
export default {};
</script>
<style>
.custom-checkbox {
  display: inline-flex;
  align-items: center;
}

.custom-checkbox input {
  display: none; /* Hide the default checkbox */
}

.custom-checkbox .checkmark {
  width: 20px;
  height: 20px;
  border: 2px solid #ccc; /* Border color */
  border-radius: 4px; /* Rounded corners */
  position: relative;
  margin-right: 8px;
}

.custom-checkbox input:checked + .checkmark {
  background-color: rgb(22, 138, 216); /* Background color when checked */
  border-color: rgb(33, 131, 211); /* Border color when checked */
}

.custom-checkbox .checkmark::after {
  content: "";
  position: absolute;
  display: none;
}

.custom-checkbox input:checked + .checkmark::after {
  display: block;
}

.custom-checkbox .checkmark::after {
  left: 7px;
  top: 3px;
  width: 5px;
  height: 10px;
  border: solid white; /* Checkmark color */
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.custom-checkbox {
  display: inline-flex;
  align-items: center;
}
</style>
