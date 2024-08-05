import { createRouter, createWebHistory } from 'vue-router';
import AuthView from '../views/AuthView.vue';
import DashboardView from '../views/DashboardView.vue';
import OrderView from '../views/OrderView.vue';
import ProfileView from '../views/ProfileView.vue';
import AdminView from '../views/AdminView.vue';
import HomeView from '../views/HomeView.vue';
import ForgotPasswordView from '../views/ForgotPasswordView.vue';
import ResetPasswordView from '../views/ResetPasswordView.vue';
import SignUpView from '@/views/SignUpView.vue';

const routes = [
  { path: '/', component: HomeView, meta: { hideHeader: true, requiresAuth: false } },
  { path: '/login', component: AuthView, meta: { requiresAuth: false } },
  { path: '/forgot-password', component: ForgotPasswordView, meta: { requiresAuth: false } },
  { path: '/signup', component: SignUpView, meta: { requiresAuth: false } },
  { path: '/reset-password', component: AuthView, meta: { requiresAuth: false } },
  { path: '/dashboard', component: DashboardView, meta: { requiresAuth: true } },
  { path: '/orders', component: OrderView, meta: { requiresAuth: true } },
  { path: '/orders/:id', component: OrderView, meta: { requiresAuth: true } },
  { path: '/profile', component: ProfileView, meta: { requiresAuth: true } },
  { path: '/admin/users', component: AdminView, meta: { requiresAuth: true, requiresAdmin: true } },
  { path: '/admin/categories', component: AdminView, meta: { requiresAuth: true, requiresAdmin: true } },
  { path: '/forgot-password', component: ForgotPasswordView, meta: { requiresAuth: false } },
  { path: '/reset-password', component: ResetPasswordView, meta: { requiresAuth: false } }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Navigation guard
router.beforeEach((to, from, next) => {
  const hasVisitedHome = localStorage.getItem('hasVisitedHome');
  if (!hasVisitedHome && to.path !== '/') {
    next('/');
  } else if (hasVisitedHome && to.path === '/') {
    next('/login');
  } else {
    next();
  }

  if (from.path === '/restricted' && to.path === '/forbidden') {
    next(false);
  } else {
    next();
  }
});

export default router;
