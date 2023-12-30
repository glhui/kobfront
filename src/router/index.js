import { createRouter, createWebHistory  } from 'vue-router'
import PkIndexView from '@/views/pk/PkIndexView'
import RecordsIndexView from '@/views/records/RecordsIndexView'
import RanklistIndexView from '@/views/ranklist/RanklistIndexView'
import Error404View from '@/views/error/Error404View'
import UserIndexView from '@/views/user/UserIndexView'

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/pk/', // 重定向
  },
  {
    path: "/pk/",
    name: "pk_index", 
    component: PkIndexView
  },
  {
    path: "/record/",
    name: "record_index",
    component: RecordsIndexView
  },
  {
    path: "/ranklist/",
    name: "ranklist_index",
    component: RanklistIndexView
  },
  {
    path: "/user/bot/",
    name: "user_bot_index",
    component: UserIndexView,
  },
  {
    path: "/404/",
    name: "404",
    component: Error404View,
  },

  {
    path: "/: catchAll(.*)",
    redirect: "/404/"
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
