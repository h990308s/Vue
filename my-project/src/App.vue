<template>
  <div id="app">
    <table id="table">
      <thead>
        <tr>
          <th>编号</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user,index) in stu" :key="index">
          <td>{{index+1}}</td>
          <td>{{user.name}}</td>
          <td>{{user.age}}</td>
          <td><button @click="remove(index)">移除</button></td>
        </tr>
        <tr>
          <td></td>
          <td><input id="name" placeholder="姓名" v-model="user.name"></td>
          <td><input id="age" placeholder="年龄" v-model="user.age"></td>
          <td><button style="background: #f90;" @click="insert">添加</button></td>
        </tr>
      </tbody>
    </table> 
  </div>
</template>

<script>

export default {
  data() {
    return({
      stu:[
        {'name': '张三', 'age': 17},
        {'name': '里斯', 'age': 18},
        {'name': '王五', 'age': 19}
      ],
      user:{
        name:'',
        age:''
      }
    })
  },
  methods: {
    insert:function(){
      this.stu.push(this.user)
      this.user=''
    },
    remove:function(index){
      this.stu.splice(index,1)
    }
  }
}
</script>

<style>
  table{
    border: 2px solid #ff6600;
    border-radius: 5px;
    margin: 0 auto;
  }
  button{
    background: rgb(0, 122, 204);
    border: none
  }
  button:hover{
    background-color: #ff6600
  }
  li{
    list-style: none
  }
  td{
    text-align: center
  }
</style>
