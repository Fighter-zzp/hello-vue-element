<template>
    <div>
      <h2>商品添加-{{$route.params.id}}</h2>
    </div>
</template>

<script>
    export default {
        name: "Add",
        props:["id"],
      beforeRouteEnter:(to,from,next)=>{
        console.log("添加商品");
        //交出路由 回调
        next(vm => {
          vm.getData();
        });
      },
      beforeRouteLeave: (to, from, next) => {
        console.log("添加结束");
        next();
      },
      methods:{
          getData:function () {
            this.axios({
              // 有get请求
              method:'get',
              url:'http://localhost:8080/static/test.json'
            }).then(function (repos) {
              //打印消息
              console.log(repos)
            }).catch(function (error) {
              console.log(error);
            });
          }
      }
    }
</script>

<style scoped>
</style>
