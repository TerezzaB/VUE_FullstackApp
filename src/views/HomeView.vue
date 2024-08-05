<template>
  <div class="flex flex-col items-center justify-center h-screen bg-gray-100">
    <h1 class="text-white text-4xl font-bold mb-6">Welcome to my VUE e-shop</h1>
    <button 
      @click="goToLogin" 
      class="text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-200 mb-2"
    >
      Login
    </button>
    <button 
      @click="goToSignup" 
      class="text-white py-2 px-4 rounded hover:bg-green-700 transition-colors duration-200"
    >
      Sign Up
    </button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const goToLogin = () => {
  router.push('/login');
};

const goToSignup = () => {
  router.push('/signup');
};
</script>
