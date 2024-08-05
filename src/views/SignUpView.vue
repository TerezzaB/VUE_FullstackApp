<template>
    <div class="flex flex-col items-center justify-center h-screen">
      <h1 class="text-3xl font-bold text-gray-800 mb-4">Sign Up</h1>
      <form @submit.prevent="signup" class="w-full max-w-sm">
        <div class="mb-4">
          <label class="block text-gray-700">Email</label>
          <input type="email" v-model="email" required class="mt-1 p-2 w-full border rounded" />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">Password</label>
          <input type="password" v-model="password" required class="mt-1 p-2 w-full border rounded" />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">Confirm Password</label>
          <input type="password" v-model="confirmPassword" required class="mt-1 p-2 w-full border rounded" />
        </div>
        <button type="submit" class="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500">Sign Up</button>
      </form>
      <p class="mt-4 text-gray-600">
        Already have an account?
        <router-link to="/login" class="text-blue-600 hover:underline">Log in</router-link>
      </p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useAuthStore } from '@/stores/auth';
  import { useRouter } from 'vue-router';
  
  const authStore = useAuthStore();
  const router = useRouter();
  
  const email = ref<string>('');
  const password = ref<string>('');
  const confirmPassword = ref<string>('');
  
  const signup = async () => {
    if (password.value !== confirmPassword.value) {
      alert("Passwords do not match.");
      return;
    }
  
    try {
      await authStore.signup(email.value, password.value);
      if (authStore.isAuthenticated) {
        router.push('/dashboard');
      }
    } catch (error) {
      console.error("Signup failed:", error);
      alert("Signup failed. Please try again.");
    }
  };
  </script>
  