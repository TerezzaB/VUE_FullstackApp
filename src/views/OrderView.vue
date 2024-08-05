<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Orders</h1>
    <button
      @click="createOrder"
      class="mb-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500"
    >
      Create Order
    </button>
    <table class="w-full border-collapse">
      <thead>
        <tr class="bg-gray-200">
          <th class="border p-2">ID</th>
          <th class="border p-2">Status</th>
          <th class="border p-2">Category</th>
          <th class="border p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders" :key="order.id" class="text-center">
          <td class="border p-2">{{ order.id }}</td>
          <td class="border p-2">{{ order.status }}</td>
          <td class="border p-2">{{ order.category }}</td>
          <td class="border p-2">
            <button @click="viewOrder(order.id)" class="px-2 py-1 bg-blue-500 text-white rounded">View</button>
            <button @click="editOrder(order.id)" class="ml-2 px-2 py-1 bg-yellow-500 text-white rounded">Edit</button>
            <button @click="deleteOrder(order.id)" class="ml-2 px-2 py-1 bg-red-500 text-white rounded">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const orders = ref<any[]>([]);
const router = useRouter();

// Načítanie zoznamu objednávok z API
const fetchOrders = async () => {
  try {
    const response = await axios.get('https://api/orders');
    orders.value = response.data;
  } catch (error) {
    console.error('Error fetching orders:', error);
  }
};

// Vytvorenie novej objednávky
const createOrder = () => {
  alert('Create Order button clicked. Implement the logic here.');
};

// Zobrazenie detailov objednávky
const viewOrder = (id: number) => {
  router.push({ path: `/orders/${id}` }); // Navigácia na stránku s detailmi objednávky
};

// Úprava objednávky
const editOrder = (id: number) => {
  alert(`Edit Order with ID: ${id}. Implement the logic here.`);
};

// Zmazanie objednávky
const deleteOrder = async (id: number) => {
  try {
    await axios.delete(`https://localhost/api/orders/${id}`);
    fetchOrders(); // Obnov zoznam po zmazaní
  } catch (error) {
    console.error('Error deleting order:', error);
  }
};

onMounted(fetchOrders);
</script>
