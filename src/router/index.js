import Vue from 'vue'
import Router from 'vue-router'

import Login from "../view/Login"
import Main from '../view/Main'
import list from "../view/user/List";
import add from "../view/user/Add";
import List from "../view/goods/List";
import Add from "../view/goods/Add";
import NotFound from "../view/error/NotFound";

Vue.use(Router);

export default new Router({
  routes: [
    {
      // 登录页
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      // 首页
      path: '/main',
      name: 'Main',
      component: Main,
      //嵌套路由
      children:[
        //用户
        {
          path:'/user/list',
          component:list
        },
        {
          path:'/user/add/:id',
          component:add
        },
        //商品
        {
          path:'/goods/list',
          component:List
        },
        {
          path:'/goods/add/:id',
          component:Add,
          props: true
        },
      ]
    },
    {
      // 登录页
      path: '/home',
      redirect:'/main'
    },
    {
      path: '*',
      component: NotFound
    }
  ]
});
