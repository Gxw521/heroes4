<template>
  <div>
    <h2 class="sub-header">添加英雄</h2>
    <form>
      <div class="form-group">
        <label for="name">英雄名称</label>
        <input v-model="formData.title" type="text" class="form-control" id="name" placeholder="英雄名称">
      </div>
      <div class="form-group">
        <label for="sex">英雄性别</label>
        <input v-model="formData.author" type="text" class="form-control" id="sex" placeholder="英雄性别">
      </div>
      <button @click.prevent="handleAdd" type="submit" class="btn btn-success">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

  export default {
    data() {
      return {
        //一个对象,绑定文本框的数据，将来也是post给服务器的数据
        formData: {
          title: '',
          author: ''
        }
      };
    },
    methods: {
      //添加英雄
      handleAdd() {
        //发送ajax请求
        axios
          .post('http://localhost:3000/posts', this.formData)
          .then((response) => {
            // console.log(response);
            if(response.status === 201) {
              //跳转
              this.$router.push('/heroes');
            }else{
              alert("添加失败");
            }
          })
          .catch((err) => {
            console.log(err);
          })
      }
    }
  };
</script>

<style>

</style>

