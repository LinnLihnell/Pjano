import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from './views/HomeView.vue'
import ProfileView from './views/ProfileView.vue'
import FactsView from './views/FactsView.vue'
import LessonsView from './views/LessonsView.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: HomeView,
      path: '/'
    },
    {
      component: ProfileView,
      path: '/profile'
    },
    {
      component: FactsView,
      path: '/facts'
    },
    {
      component: LessonsView,
      path: '/lessons'
    }
  ]
})
