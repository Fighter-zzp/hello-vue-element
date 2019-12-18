<template>
  <div>
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1']">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-user"/>用户管理</template>
            <el-menu-item-group>
              <el-menu-item index="1-1"><router-link to="/user/add/1">用户添加</router-link></el-menu-item>
              <el-menu-item index="1-2"><router-link to="/user/list">用户列表</router-link></el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-shopping-cart-1"/>商品管理</template>
            <el-menu-item-group>
              <el-menu-item index="2-1"><router-link to="/goods/add/2">商品添加</router-link></el-menu-item>
              <el-menu-item index="2-2"><router-link to="/goods/list">商品列表</router-link></el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"/>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item><router-link to="/home/Zzp">首页</router-link></el-dropdown-item>
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
              <el-dropdown-item><router-link to="/logout">退出</router-link></el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <!--显示登陆后的用户名-->
          <span>{{this.$store.getters.getUser.username}}</span>
        </el-header>

        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
</style>

<script>
  export default {
    name:'Main'
  };
</script>
