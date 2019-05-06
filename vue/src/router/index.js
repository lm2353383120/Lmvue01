import Vue from 'vue'
import Router from 'vue-router'

import Lheader from '../components/Lheader'



Vue.use(Router)
import regards from '../components/Z-regards'
export default new Router({
  routes: [

//首页组件的路由
    {path:'/lheader',component:Lheader},
    {path:'/regards',component:regards},




  ]
})
