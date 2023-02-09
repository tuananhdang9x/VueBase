import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/password',
    name: 'ForgotPassword',
    component: () => import('../components/login/ForgotPasswordPage.vue')
  },
  {
    path: '/change-password',
    name: 'ChangePassword',
    component: () => import('../components/login/ChangePasswordPage.vue')
  },
  {
    path: '/status',
    name: 'StatusPage',
    component: () => import('../components/login/StatusPage.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
