import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/HomePage.vue')
  },
  {
    path: '/signin',
    name: 'Sign-in',
    component: () => import(/* webpackChunkName: "about" */ '../views/Signin.vue')
  },
  {
    path: '/map',
    name: 'Map',
    component: () => import(/* webpackChunkName: "about" */ '../views/MainMap.vue')
  },
  {
    path: '/post/:id',
    name: 'Post {{ $route.params.id }}',
    component: () => import(/* webpackChunkName: "about" */ '../views/PostPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
