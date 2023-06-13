<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import { method } from 'lodash';
</script>

<template>
  <div id="app">
    <div v-if="this.$route.meta.showTab" >
      <el-menu
        :default-active="activeIndex2"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :ellipsis="false"
        @select="handleSelect"
      >
        <el-menu-item v-for="(item, key) in menuRoutes" :key="key + 1" @click="changeMenu(item)" :index="key">{{item.meta.title}}</el-menu-item>
        <div class="flex-grow" />
        <el-sub-menu index="100">
          <template #title>{{userInfo.userName}}</template>
          <el-menu-item index="100-1" style="color: red;" @click="logout">注销</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default{
  data(){
    return{
      menuRoutes: [],
      userInfo: {}
    }
  },
  updated(){
    this.userInfo = this.$store.getters.userInfo
    if(this.menuRoutes.length === 0){
      this.$router.options.routes.forEach(item => {
        if(item.meta.title !== null){
          if(item.meta.type.includes(this.$store.getters.userInfo.usertype)){
            this.menuRoutes.push(item)
          }
        }
      });
    }
  },
  methods: {
    changeMenu(item){
      console.log(item);
      this.$router.push(item.path)
    },
    logout(){
      this.$store.dispatch('resetToken');
      this.$router.push('/')
      this.menuRoutes = []
    }
  }
}

</script>

<style scoped>
  #app{
    padding: 0px;
    margin: 0px;
    width: 100%;
  }
  html,body,#app{
    height: 100vh;
  }
  body{
    padding: 0;
    margin: 0;
  }
  .flex-grow {
    flex-grow: 1;
  }
</style>
