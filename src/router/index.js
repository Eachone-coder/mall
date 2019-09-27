import Vue from 'vue'
import Router from 'vue-router'

import Home from "@/view/Home";
import Classify from "@/view/Classify";
import GoodList from "@/view/GoodList";


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '/',
      component: Home,
    },
    {
      path: '/classify',
      name: 'classify',
      component: Classify,
    }
    ,
    {
      path: '/goodList',
      name: 'goodList',
      component: GoodList,
    }
  ]
})
