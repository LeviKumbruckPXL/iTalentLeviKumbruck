import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import OverviewView from '../views/OverviewView.vue'
import SelectView from '../views/SelectView.vue'
import ActivityDetailView from '../views/ActivityDetailView.vue'
import EindReflectieView from '../views/EindReflectieView.vue'


const routes = [
  { path: '/',          name: 'home',     component: HomeView },
  { path: '/overview',  name: 'overview', component: OverviewView },
  { path: '/select',     name: 'select',   component: SelectView },
  {
    path: '/activity/:slug',
    name: 'activity',
    component: ActivityDetailView,
    props: true
  },
  { path: '/eindreflectie', name: 'eindreflectie', component: EindReflectieView },
]

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
