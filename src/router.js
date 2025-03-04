import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from './views/HomeView.vue'
import ProfileView from './views/ProfileView.vue'
import FactsView from './views/FactsView.vue'
import LessonsView from './views/LessonsView.vue'
import PlayView from './views/PlayView.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      name: 'Home',
      component: HomeView,
      path: '/:id?' //Optional id parameter
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
    },
    {
      name: 'Playing',
      component: PlayView,
      path: '/:id?'
    }, 
  ]
})
