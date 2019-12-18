<template>
  <el-table
    :data="tableData"
    height="500"
    border
    style="width: 100%">
    <el-table-column
      prop="id"
      label="ID"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="gender"
      label="性别"
      width="180">
    </el-table-column>
    <el-table-column
      prop="age"
      label="年龄"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      >
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
    export default {
        name: "UserList",
      data(){
        const item ={
            id: '1',
            name: 'Scarborough',
            gender: '男',
            age: '18',
            address: 'xxx xxx xx村 xxx号'
          };
          return{
            tableData: Array(10).fill(item),
            methods: {
              handleClick(row) {
                console.log(row);
              }
            }
          }
      }
    }
</script>

<style scoped>

</style>
