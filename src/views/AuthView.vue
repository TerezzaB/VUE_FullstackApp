<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <h1 class="text-3xl font-bold text-white mb-4">Login</h1>
    <form @submit.prevent="login" class="w-full max-w-sm">
      <div class="mb-4">
        <label class="block text-white">Email</label>
        <input type="email" v-model="email" required class="mt-1 p-2 w-full border rounded" />
      </div>
      <div class="mb-4">
        <label class="block text-white">Password</label>
        <input type="password" v-model="password" required class="mt-1 p-2 w-full border rounded" />
      </div>
      <div class="flex justify-between items-center mb-4">
        <a @click.prevent="goToForgotPassword" class="text-blue-600 hover:underline cursor-pointer">Forgot Password?</a>
      </div>
      <button type="submit" class="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500">Login</button>
    </form>
    <p class="mt-4 text-white">
      Don't have an account? 
      <router-link to="/signup" class="text-blue-600 hover:underline">Sign Up</router-link>
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';

import axios from 'axios';


const authStore = useAuthStore();
const router = useRouter();

const email = ref<string>('');
const password = ref<string>('');

const login = async () => {
  await authStore.login(email.value, password.value);
  if (authStore.isAuthenticated) {
    router.push('/dashboard');
  }
};

const goToForgotPassword = () => {
  router.push('/forgot-password');
};



const users = ref<any[]>([]);

const fetchUsers = async () => {
  try {
    const response = await axios.get('http://localhost:5173/api/users');
    users.value = response.data;
    console.log("Users: ", response);
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};


onMounted(() => {
  fetchUsers();
});
</script>
