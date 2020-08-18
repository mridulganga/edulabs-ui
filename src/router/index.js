import Vue from 'vue'
import VueRouter from 'vue-router'
import TopLabs from '@/pages/TopLabs.vue'
import Categories from '@/pages/Categories.vue'
import Login from '@/pages/Login.vue'
import DoingLabs from '@/pages/DoingLabs.vue'
import Certificates from '@/pages/Certificates.vue'
import Users from '@/pages/Users.vue'
import CollegeBundles from '@/pages/CollegeBundles.vue'
import Register from '@/pages/Register.vue'
import UserProfile from '@/pages/UserProfile.vue'


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
  },
  {
    path: '/doingLabs',
    name: 'DoingLabs',
    component: DoingLabs,
  },
  {
    path: '/collegeBundles',
    name: 'CollegeBundles',
    component: CollegeBundles,
  },
  {
    path: '/certificates',
    name: 'Certificates',
    component: Certificates,
  },
  {
    path: '/users',
    name: 'Users',
    component: Users,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/userProfile',
    name: 'UserProfile',
    component: UserProfile,
  }
]

const router = new VueRouter({
  routes
})

export default router
