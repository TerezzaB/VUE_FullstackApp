// src/stores/auth.ts
import { defineStore } from 'pinia';
import axios from 'axios';

interface User {
  id: number;
  email: string;
  role: string;
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null,
    isLoading: false,
  }),
  getters: {
    isAuthenticated: (state) => state.user !== null,
    isAdmin: (state) => state.user?.role === 'admin',
  },
  actions: {
    async login(email: string, password: string) {
      try {
        this.isLoading = true;
        const response = await axios.post('https://localhost/login', { email, password });
        this.user = response.data;
      } catch (error) {
        console.error('Error during login:', error);
      } finally {
        this.isLoading = false;
      }
    },
    async signup(email: string, password: string) {
      try {
        this.isLoading = true;
        const response = await axios.post('https://localhost/signup', { email, password });
        this.user = response.data;
      } catch (error) {
        console.error('Error during signup:', error);
      } finally {
        this.isLoading = false;
      }
    },
    async logout() {
      try {
        this.isLoading = true;
        await axios.post('https://localhost/logout');
        this.user = null;
      } catch (error) {
        console.error('Error during logout:', error);
      } finally {
        this.isLoading = false;
      }
    },
    setUser(user: User) {
      this.user = user;
    },
    async deleteAccount() {
      if (!this.user) return;
      try {
        this.isLoading = true;
        await axios.delete(`https://api.example.com/users/${this.user.id}`);
        this.user = null;
      } catch (error) {
        console.error('Error deleting account:', error);
      } finally {
        this.isLoading = false;
      }
    },
  },
});
