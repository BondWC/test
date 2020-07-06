import Vue from 'vue'
import Router from 'vue-router'
import PLAY from '@/components/LOL/PLAY'
import HeroXx from '@/components/LOL/Hero/HeroXx'
import axiosJson from '@/components/LOL/axiosJson'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'PLAY',
      component: PLAY
    },
    {
      path: '/HeroXx',
      name: 'HeroXx',
      component: HeroXx
    },
    {
      path: '/axiosJson',
      name: 'axiosJson',
      component: axiosJson
    }
  ]
})
