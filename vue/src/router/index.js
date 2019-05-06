import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
import regards from '../components/Z-regards'
export default new Router({
  routes: [


    {path:'/regards',component:regards}
  ]
})
