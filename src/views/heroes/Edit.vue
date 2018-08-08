<template>
  <div>
    <h2 class="sub-header">编辑英雄</h2>
    <form>
      <div class="form-group">
        <label for="name">英雄名称</label>
        <input v-model="formData.title" type="text" class="form-control" id="name" placeholder="英雄名称">
      </div>
      <div class="form-group">
        <label for="sex">英雄性别</label>
        <input v-model="formData.author" type="text" class="form-control" id="sex" placeholder="英雄性别">
      </div>
      <button @click.prevent="handleEdit" type="submit" class="btn btn-success">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: ['id'],
  data() {
    return {
      formData: {
        title: '',
        author: ''
      }
    };
  },
  created() {
    //根据id请求，英雄对象
    axios 
      // .get('http://localhost:3000/posts' + this.id)
      .get(`http://localhost:3000/posts/${this.id}`)
      .then((response) => {
        console.log(response);
        if(response.status ===200) {
          // this.formData.title = response.data.title;
          // this.formData.author = response.data.author;
          this.formData = response.data;
        }
      })
      .catch((err) => {
        console.log(err);
      })
  },
  methods: {
    //点击按钮编辑英雄
    handleEdit() {
      axios
        .put(`http://localhost:3000/posts/${this.id}`, this.formData)
        .then((response) => {
          // console.log(respnse);
          if(response.status === 200) {
            //挑战到列表
            this.$router.push('/heroes');
          }else {
            alert('失败')
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
