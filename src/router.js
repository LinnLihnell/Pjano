import {createRouter, createWebHashHistory} from 'vue-router'

import HomeView from './views/HomeView.vue'
import ProfileView from './views/ProfileView.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: HomeView,
      path:'/'
    },
    {
      component: ProfileView,
      path: '/profile'
    }
  ]
})
