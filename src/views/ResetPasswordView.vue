<template>
    <div class="p-4 max-w-md mx-auto">
      <h1 class="text-2xl font-bold mb-4">Reset Password</h1>
      <form @submit.prevent="submitResetPassword">
        <div class="mb-4">
          <label for="password" class="block text-sm font-medium text-gray-700">New Password</label>
          <input type="password" id="password" v-model="password" class="mt-1 block w-full border-gray-300 rounded-md" required />
        </div>
        <div class="mb-4">
          <label for="confirmPassword" class="block text-sm font-medium text-gray-700">Confirm Password</label>
          <input type="password" id="confirmPassword" v-model="confirmPassword" class="mt-1 block w-full border-gray-300 rounded-md" required />
        </div>
        <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500">Reset Password</button>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import axios from 'axios';
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  const password = ref<string>('');
  const confirmPassword = ref<string>('');
  
  const submitResetPassword = async () => {
    if (password.value !== confirmPassword.value) {
      alert('Passwords do not match.');
      return;
    }
  
    try {
      const token = route.query.token; // Token passed as query parameter
      await axios.post('https://localhost/reset-password', { token, password: password.value });
      alert('Password has been reset successfully.');
    } catch (error) {
      console.error('Error resetting password:', error);
    }
  };
  </script>
  
  