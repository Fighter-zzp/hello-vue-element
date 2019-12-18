<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    mounted() {
      //增加监听刷新事件
      window.addEventListener('unload',this.saveState);
    },
    methods:{
      saveState(){
        // 设置sessionStorage，存入state对象，因为setItem只能存字符串，所以所以对象序列化为json字符串
        sessionStorage.setItem('userState', JSON.stringify(this.$store.state.user));
      }
    }
  }
</script>
