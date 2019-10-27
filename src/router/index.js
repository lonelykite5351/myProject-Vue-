import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import resume from '@/components/pages/resume'
import memoryFlop from '@/components/pages/memoryFlop'

import 'bootstrap'
import 'bootstrap/js/dist/util'
import 'bootstrap/js/dist/alert'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/pages/resume',
      name: 'resume',
      component: resume
    },
    {
      path: '/pages/memoryFlop',
      name: 'memoryFlop',
      component: memoryFlop
    },
  ]
})
