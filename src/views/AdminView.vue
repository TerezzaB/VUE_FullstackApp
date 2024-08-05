<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Admin Panel</h1>
    
    <!-- Users Management -->
    <div>
      <h2 class="text-xl font-semibold mb-2">Users</h2>
      <button 
        @click="addUser" 
        class="mb-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500"
      >
        Add User
      </button>
      <table class="w-full border-collapse">
        <thead>
          <tr class="bg-gray-200">
            <th class="border p-2">ID</th>
            <th class="border p-2">Name</th>
            <th class="border p-2">Email</th>
            <th class="border p-2">Role</th>
            <th class="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id" class="text-center">
            <td class="border p-2">{{ user.id }}</td>
            <td class="border p-2">{{ user.name }}</td>
            <td class="border p-2">{{ user.email }}</td>
            <td class="border p-2">{{ user.role }}</td>
            <td class="border p-2">
              <button @click="editUser(user.id)" class="px-2 py-1 bg-yellow-500 text-white rounded">Edit</button>
              <button @click="deleteUser(user.id)" class="ml-2 px-2 py-1 bg-red-500 text-white rounded">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <!-- Categories Management -->
    <div class="mt-8">
      <h2 class="text-xl font-semibold mb-2">Categories</h2>
      <button 
        @click="addCategory" 
        class="mb-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500"
      >
        Add Category
      </button>
      <table class="w-full border-collapse">
        <thead>
          <tr class="bg-gray-200">
            <th class="border p-2">ID</th>
            <th class="border p-2">Name</th>
            <th class="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="category in categories" :key="category.id" class="text-center">
            <td class="border p-2">{{ category.id }}</td>
            <td class="border p-2">{{ category.name }}</td>
            <td class="border p-2">
              <button @click="editCategory(category.id)" class="px-2 py-1 bg-yellow-500 text-white rounded">Edit</button>
              <button @click="deleteCategory(category.id)" class="ml-2 px-2 py-1 bg-red-500 text-white rounded">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';

// Users and Categories state
const users = ref<any[]>([]);
const categories = ref<any[]>([]);

// Fetch users from API
const fetchUsers = async () => {
  try {
    const response = await axios.get('https://localhost:5173/api/users');
    users.value = response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};

// Fetch categories from API
const fetchCategories = async () => {
  try {
    const response = await axios.get('https://localhost:5173/api/order-categories');
    categories.value = response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
};

// -----------------------USERS----------------------------------

// Adding a new user
const addUser = async () => {
  try {
    const newUser = {
      name: 'New User',
      email: 'newuser@example.com',
      role: 'user'
    };
    await axios.post('https://localhost:5173/api/users', newUser);
    fetchUsers(); // Refresh the list after adding
  } catch (error) {
    console.error('Error adding user:', error);
  }
};

// Editing an existing user
const editUser = async (id: number) => {
  try {
    const updatedUser = {
      name: 'Updated Name',
      email: 'updatedemail@example.com',
      role: 'admin'
    };
    await axios.put(`https://localhost:5173/api/users/${id}`, updatedUser);
    fetchUsers(); // Refresh the list after editing
  } catch (error) {
    console.error('Error editing user:', error);
  }
};

// Deleting a user
const deleteUser = async (id: number) => {
  try {
    await axios.delete(`https://localhost:5173/api/users/${id}`);
    fetchUsers(); // Refresh the list after deletion
  } catch (error) {
    console.error('Error deleting user:', error);
  }
};

// -----------------------CATEGORY----------------------------------

// Adding a new category
const addCategory = async () => {
  try {
    const newCategory = {
      name: 'New Category'
    };
    await axios.post('https://localhost:5173/api/order-categories', newCategory);
    fetchCategories(); // Refresh the list after adding
  } catch (error) {
    console.error('Error adding category:', error);
  }
};

// Editing an existing category
const editCategory = async (id: number) => {
  try {
    const updatedCategory = {
      name: 'Updated Category'
    };
    await axios.put(`https://localhost:5173/api/order-categories/${id}`, updatedCategory);
    fetchCategories(); // Refresh the list after editing
  } catch (error) {
    console.error('Error editing category:', error);
  }
};

// Deleting a category
const deleteCategory = async (id: number) => {
  try {
    await axios.delete(`https://localhost:5173/api/order-categories/${id}`);
    fetchCategories(); // Refresh the list after deletion
  } catch (error) {
    console.error('Error deleting category:', error);
  }
};

// Fetch data on component mount
onMounted(() => {
  fetchUsers();
  fetchCategories();
});
</script>
