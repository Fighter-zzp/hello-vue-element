import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router'

// 导入 ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App'

// axios通信
import axios from 'axios'
Vue.prototype.axios = axios;

// 安装路由
Vue.use(VueRouter);

// 安装 ElementUI
Vue.use(ElementUI);

import Vuex from 'vuex'
import store from './store'

Vue.use(Vuex);

//使拥钩子函数来判断登录状态
router.beforeEach((to,form,next)=>{
    let loginStatus = sessionStorage.getItem('isLogin');
    // 退出则清除sessionStorage
    if (to.path==='/logout'){
      sessionStorage.clear();
      next({path:'/login'});
    }else if (to.path==='/login'){
      // 已经登录了，直接放回主页面
      if (loginStatus!==null)
        next({path:'/main'});
    }else if (loginStatus===null){
      /**
       * 这里是没有登录
       */
      // console.log(loginStatus);
      next({path:'/login'});
    }
    next();//到下一个路由
  });

new Vue({
  el: '#app',
  // 启用路由
  router,
  store,
  // 启用 ElementUI
  render: h => h(App)
});
