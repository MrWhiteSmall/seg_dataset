import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/smj_index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'smj_index',
      component: Index
    }
  ]
})
