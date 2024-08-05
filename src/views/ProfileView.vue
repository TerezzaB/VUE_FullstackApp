<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Profile</h1>
    <div>
      <label class="block mb-2">Email:</label>
      <input type="text" v-model="user.email" class="border p-2 w-full rounded" disabled />
    </div>
    <div class="mt-4">
      <label class="block mb-2">Change Password:</label>
      <input type="password" v-model="newPassword" placeholder="New Password" class="border p-2 w-full rounded" />
      <button @click="changePassword" class="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500">Update</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';
import axios from 'axios';

const authStore = useAuthStore();
const user = authStore.user!;
const newPassword = ref('');

// Function to change password
const changePassword = async () => {
  try {
    await axios.post('http://localhost/api/user/update-profile', { password: newPassword.value });
    alert('Password changed successfully!');
  } catch (error) {
    console.error('Error changing password:', error);
  }
};
</script>
