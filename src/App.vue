<template>
  <div id="app">
    <Header v-if="showHeader" />

    <router-view />

    <Preloader v-if="loading" />
    <ConfirmModal 
      v-if="showConfirmModal" 
      :message="confirmMessage" 
      @confirm="handleConfirm" 
      @cancel="handleCancel" 
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useAuthStore } from './stores/auth';
import { useRouter, useRoute } from 'vue-router';
import Header from './components/common/Header.vue';
import Preloader from './components/common/Preloader.vue';
import ConfirmModal from './components/common/ConfirmModal.vue';

// Store using for authentification
const authStore = useAuthStore();

// defining refs
const loading = ref<boolean>(false);
const showConfirmModal = ref<boolean>(false);
const confirmMessage = ref<string>('');

// confirm + cancel handle
const handleConfirm = async () => {
  try {
    loading.value = true;
    await authStore.deleteAccount();
    confirmMessage.value = '';
    showConfirmModal.value = false;
  } catch (error) {
    console.error('Error during confirmation:', error);
  } finally {
    loading.value = false;
  }
};

const handleCancel = () => {
  showConfirmModal.value = false;
  confirmMessage.value = '';
};

// Route using
const router = useRouter();
const route = useRoute();

// show/hide header
const showHeader = computed(() => !['/', '/login', '/forgot-password', '/reset-password', '/signup'].includes(route.path));

// if HomeView was visited
const hasVisitedHome = localStorage.getItem('hasVisitedHome');

onMounted(() => {
  if (!hasVisitedHome) {
    localStorage.setItem('hasVisitedHome', 'true');
    router.push('/');
  } else if (route.path === '/') {
    router.push('/login');
  }
});
</script>
