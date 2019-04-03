import Vue from 'vue'
import Router from 'vue-router'
import VoteIndex from '@/components/VoteIndex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'VoteIndex',
      component: VoteIndex
    }
  ]
})
