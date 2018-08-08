<template>
  <div id="app">
    <!-- 网页的header -->
    <app-header></app-header>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3 col-md-2 sidebar">
          <!-- 侧边栏 -->
          <app-sidebar></app-sidebar>
        </div>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <!-- 列表 -->
          <!-- 根据路由变化，占位标签router-view -->
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import AppHeader from './components/AppHeader.vue';
  import AppSidebar from './components/AppSidebar.vue';
  export default {
    components: {
      AppHeader,
      AppSidebar
    }
  };
</script>

<style>

</style>
