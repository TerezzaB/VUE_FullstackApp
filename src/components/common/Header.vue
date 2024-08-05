<template>
  <header class="bg-gray-800 p-4">
    <div class="container mx-auto flex justify-between items-center">
      <h1 class="text-white text-lg font-bold">My App</h1>
      <nav>
        <router-link to="/dashboard" class="text-white mr-4">Dashboard</router-link>
        <router-link to="/orders" class="text-white mr-4">Orders</router-link>
        <router-link to="/profile" class="text-white mr-4">Profile</router-link>
        <button @click="logout" class="text-white">Logout</button>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();

const logout = () => {
  authStore.logout();
};
</script>

