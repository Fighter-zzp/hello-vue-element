/**
 * 这里是对状态的管理
 **/
import Vue from 'vue'
import Vuex from 'vuex'
import user from '../modules/user'
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user
  }
});
