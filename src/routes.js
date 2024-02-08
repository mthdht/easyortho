/*
export const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/:user/dashboard', component: Dashboard, name: 'user.dashboard' },
];*/

import Home from '@/pages/Home.vue';
import Lesson from '@/pages/Lesson.vue'

export const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/lessons/:lesson', component: Lesson, name: 'lessons.show'}
]