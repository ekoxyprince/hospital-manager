<script setup>
import { RouterLink } from "vue-router";
import PrimaryButton from "../../components/ui/Buttons/PrimaryButton.vue";
</script>

<template>
  <div class="w-full h-[100vh] flex">
    <div class="w-full md:w-1/2 flex flex-col items-center justify-center">
      <div class="w-full px-6 lg:w-[30rem] flex flex-col space-y-12">
        <div class="flex flex-col space-y-2">
          <h2 class="text-3xl font-bold">Welcome back!</h2>
          <p class="text-md font-medium">Enter your Credentials to access your account</p>
        </div>
        <div class="flex flex-col space-y-4">
          <div class="flex flex-col space-y-1">
            <label class="font-semibold" for="email">Email address</label>
            <input
              type="text"
              class="border-borderColor border rounded-xl p-2 px-2 py-2 outline-none"
              placeholder="Enter your email"
            />
          </div>
          <div class="flex flex-col space-y-1">
            <div class="flex justify-between">
              <label class="font-semibold" for="email">Password</label>
              <RouterLink
                class="text-sm font-semibold text-linkColor hover:text-borderColor"
                to="/forget_password"
                >Forgot password?</RouterLink
              >
            </div>
            <input
              type="text"
              class="border-borderColor border rounded-xl p-2 px-2 py-2 outline-none"
              placeholder="Enter your email"
            />
          </div>
          <div class="flex">
            <PrimaryButton text="Sign In" />
          </div>
        </div>
      </div>
    </div>
    <div class="hidden md:flex md:w-1/2 h-full bg-doctor bg-no-repeat bg-cover"></div>
  </div>
</template>
