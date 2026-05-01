import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TechniqueView from '../views/TechniqueView.vue'
import SuiviView from '../views/SuiviView.vue'
import IntegrationView from '../views/IntegrationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/technique',
      name: 'technique',
      component: TechniqueView,
    },
    {
      path: '/suivi',
      name: 'suivi',
      component: SuiviView,
    },
    {
      path: '/integration',
      name: 'integration',
      component: IntegrationView,
    }
  ],
})

export default router
