import Vue from 'vue'
import VueRouter from 'vue-router'

import NewsView from '../views/NewsView'
import AskView from '../views/AskView'
import JobsView from '../views/JobsView'
import ItemView from '../views/ItemView'
import UserView from '../views/UserView'

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/news',
    },
    {
      path: '/news', // URL 주소
      name: 'news',
      component: NewsView, // URL 주소로 갔을 때 표시될 컴포넌트
    },
    {
      path: '/ask',
      name: 'ask',
      component: AskView,
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView,
    },
    {
      path: '/user/:id', // Dynamic Route Matching
      component: UserView,
    },
    {
      path: '/item/:id', // Dynamic Route Matching
      component: ItemView,
    },
  ],
})