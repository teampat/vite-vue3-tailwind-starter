import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import NotFound from './views/NotFound.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home, meta: { title: 'Home' } },
    {
      path: '/about',
      meta: { title: 'About' },
      component: About
    },
    { path: '/:path(.*)', component: NotFound },
  ],
})

router.beforeEach((to, from, next) => {
  next()
})
