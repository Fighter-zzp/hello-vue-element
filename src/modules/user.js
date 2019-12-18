// 存放组件的公共数据
const user= {
  state : sessionStorage.getItem('userState') ? JSON.parse(sessionStorage.getItem('userState')) : {
    // 初始化user对象
    user: {
      username: ''
    }
  },
// 用来监听并实时获取组件的公共数据（通过state）
  getters : {
    //获取user对象
    getUser(state) {
      return state.user;
    }
  },
//用来更新store内的数据，但是为同步更新
  mutations : {
    updateUser(state, user) {
      state.user = user;
    }
  },
// 用来触发mutations，以此达到异步
  actions : {
    asyncUpdateUser(context, user) {
      // 在组件中是通过 this.$store.dispatch('asyncUpdateUser', user); 来调用 actions
      context.commit("updateUser", user)
    }
  }
};
//初始化，把属性加载处理
export default user;
