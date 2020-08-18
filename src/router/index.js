import Vue from 'vue'
import VueRouter from 'vue-router'
import TopLabs from '@/pages/TopLabs.vue'
import Categories from '@/pages/Categories.vue'
import Login from '@/pages/Login.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'TopLabs',
    component: TopLabs
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories,
  }
]

const router = new VueRouter({
  routes
})

export default router
