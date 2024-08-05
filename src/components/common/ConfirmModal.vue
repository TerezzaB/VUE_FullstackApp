<template>
  <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-white p-4 rounded shadow-md">
      <p class="mb-4">{{ message }}</p>
      <div class="flex justify-end">
        <button @click="$emit('cancel')" class="px-4 py-2 bg-gray-300 rounded mr-2">Cancel</button>
        <button @click="$emit('confirm')" class="px-4 py-2 bg-red-500 text-white rounded">Confirm</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ message: string }>();
</script>


