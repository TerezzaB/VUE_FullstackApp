<template>
    <div class="p-4 max-w-md mx-auto">
      <h1 class="text-2xl font-bold mb-4">Forgot Password</h1>
      <form @submit.prevent="submitForgotPassword">
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-white">Email</label>
          <input type="email" id="email" v-model="email" class="mt-1 p-2 block w-full border rounded-md" required />
        </div>
        <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500">Submit</button>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import axios from 'axios';
  
  const email = ref<string>('');
  
  const submitForgotPassword = async () => {
    try {
      await axios.post('https://localhost/forgot-password', { email: email.value });
      alert('A reset link has been sent to your email address.');
    } catch (error) {
      console.error('Error sending reset link:', error);
    }
  };
  </script>
  
  