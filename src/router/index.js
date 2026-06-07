import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TechniqueView from '../views/TechniqueView.vue'
import SuiviView from '../views/SuiviView.vue'
import IntegrationView from '../views/IntegrationView.vue'

// Savoir-faire techniques
import ServerView from '@/views/technique/ServerView.vue'
import PHPView from '@/views/technique/PHPView.vue'
import DrupalView from '@/views/technique/DrupalView.vue'
import ComposerView from '@/views/technique/ComposerView.vue'

// Savoir-faire suivi
import GitView from '@/views/suivi/GitView.vue'
import TachesView from '@/views/suivi/TachesView.vue'
import ImprevusView from '@/views/suivi/ImprevusView.vue'

// Savoir-faire integration
import IntegrationServiceView from '@/views/integration/IntegrationServiceView.vue'
import AutonomieView from '@/views/integration/AutonomieView.vue'
import ContexteView from '@/views/integration/ContexteView.vue'

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
      path: '/technique/server',
      name: 'technique/server',
      component: ServerView,
    },
    {
      path: '/technique/php',
      name: 'technique/php',
      component: PHPView,
    },
    {
      path: '/technique/drupal',
      name: 'technique/drupal',
      component: DrupalView,
    },
    {
      path: '/technique/composer',
      name: 'technique/composer',
      component: ComposerView,
    },
    {
      path: '/suivi',
      name: 'suivi',
      component: SuiviView,
    },
    {
      path: '/suivi/git',
      name: 'suivi/git',
      component: GitView,
    },
    {
      path: '/suivi/taches',
      name: 'suivi/taches',
      component: TachesView,
    },
    {
      path: '/suivi/imprevus',
      name: 'suivi/imprevus',
      component: ImprevusView,
    },
    {
      path: '/integration',
      name: 'integration',
      component: IntegrationView,
    },
    {
      path: '/integration/integration-service',
      name: 'integration/integration-service',
      component: IntegrationServiceView,
    },
    {
      path: '/integration/autonomie',
      name: 'integration/autonomie',
      component: AutonomieView,
    },
    {
      path: '/integration/contexte',
      name: 'integration/contexte',
      component: ContexteView,
    }
  ],
})

export default router
