import Vue from 'vue'
import Router from 'vue-router'

import Lheader from '../components/Lheader'

import store from '../components/Z-store'

Vue.use(Router)
import regards from '../components/Z-regards'
export default new Router({
  routes: [

//首页组件的路由
    //首页
    {path:'/lheader',component:Lheader},
    //关于
    {path:'/regards',component:regards},
    //商城
    {path:'/store',component:store}




  ]
})
