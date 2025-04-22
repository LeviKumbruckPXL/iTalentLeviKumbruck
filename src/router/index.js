import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import OverviewView from '../views/OverviewView.vue'

const routes = [
  { path: '/',          name: 'home',     component: HomeView },
  { path: '/overview',  name: 'overview', component: OverviewView }
]

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
