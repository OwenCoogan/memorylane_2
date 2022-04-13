import { createRouter, createWebHistory } from 'vue-router'

import { checkUserToken } from '../services/auth.middleware'
import store from '../store'

function RedirectToLogin() {
  checkUserToken(store)
  if(store.state.auth.status.loggedIn === false){
    console.log('redirect')
    router.push('/login')
  }
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomePage.vue'),
  },
  {
    path: '/signin',
    name: 'Sign-in',
    component: () => import('../views/Signin.vue')
  },
  {
    path: '/map',
    name: 'Map',
    component: () => import('../views/MainMap.vue'),
    beforeEnter: () => {
      RedirectToLogin()
    },
  },
  {
    path: '/post/:id',
    name: 'Post {{ $route.params.id }}',
    component: () => import('../views/PostPage.vue'),
    beforeEnter: () => {
      RedirectToLogin()
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Signin.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "about" */ '../views/Profile.vue'),
    beforeEnter: () => {
      RedirectToLogin()
    },
  }

]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
