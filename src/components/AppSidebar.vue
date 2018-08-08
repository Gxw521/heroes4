<template>
  <ul class="nav nav-sidebar">
    <!-- <li><a href="#" class="active">英雄列表</a></li>
    <li><a href="#">武器列表</a></li>
    <li><a href="#">装备列表</a></li> -->
    <router-link tag="li" to="/heroes">
      <a>英雄列表</a>
    </router-link>
    <router-link tag="li" to="/equips">
      <a>装备列表</a>
    </router-link>
    <router-link tag="li" to="/weapons">
      <a>武器列表</a>
    </router-link>
  </ul>
</template>

<script>
  export default {
    data() {
      return {

      };
    }
  }
</script>

<style>

</style>

