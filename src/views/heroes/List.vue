<template>
  <div>
    <h2 class="sub-header">英雄管理</h2>
    <!-- <a class="btn btn-success" href="add.html">添加</a> -->
    <router-link class="btn btn-success" to="/heroes/add">添加</router-link>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>姓名</th>
            <th>性别</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in list" :key="item.id">
            <td>{{ index + 1 }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.author }}</td>
            <td>
              <!-- <a href="edit.html">edit</a> -->
              <router-link :to="'/heroes/' + item.id">edit</router-link>
              &nbsp;&nbsp;
              <a @click.prevent="handleDelete(item.id)" 
                href="javascript:void(0)">delete</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
//导入axios模块
import axios from 'axios';

  export default {
    data() {
      return {
        list: []
      };
    },
    created() {
      //发送异步请求，获取数据
      this.loadData();
      // axios
      //     .get('http://localhost:3000/posts')
      //     .then((response) => {
      //       // console.log(response)
      //       if(response.status === 200) {
      //         this.list = response.data;
      //       }
      //     })
      //     .catch((err) => {
      //       console.lg(err)
      //     })
    },
    methods: {
       //加载列表数据
      loadData() {
        axios
          .get('http://localhost:3000/posts')
          .then((response) => {
            // console.log(response)
            if(response.status === 200) {
              this.list = response.data;
            }
          })
          .catch((err) => {
            console.lg(err)
          })
      },
      //删除数据
      handleDelete(id) {
        // console.log(id);  
        if(!confirm('是否要删除此数据？')) {
          return;
        }
        // 发送请求，删除英雄
        axios
          .delete(`http://localhost:3000/posts/${id}`)
          .then((response) => {
            // console.log(response);
            if(response.status === 200) {
              // 成功，重新加载列表
             this.loadData();
            }else {
             alert('失败');
            }
          })
          .catch((err) => {
            console.log(err)
          })
      }
    }
  };
</script>

<style>

</style>