<template>
    <div class="login_container">
      <div class="login_box">
        <div class="avatar_box">
          <img src="../../../public/c251cb60c9db8a2a2fca060434c45abf11169907.jpg" alt="">
        </div>
        <el-form label-width="80px" class="login_in">
          <el-form-item label="用户名">
            <el-input type="text" v-model="userName" />
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password" v-model="password" />
          </el-form-item>
          <el-form-item class="btns">
            <el-button type="primary" @click="login">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </template>
  
<script>
import { reactive, toRefs } from '@vue/reactivity'
import { ElNotification } from 'element-plus'
import store from '../../store/store'
import { login } from '../../api/login.js'
import router from '../../router/router'
export default {
  setup() {
    const data = reactive({
      userName:'樊子夜',
      password:'123'
    })
    const method = {
      login: () => {
        store.dispatch('login',
          { userName: data.userName, password: data.password }).then(res => {
            router.push('/index')
        }).catch((error) => {
          console.log(error);
          ElNotification.error({
            message: "登陆失败",
            showClose: false
          })
        })
      }
    }
    return {
      ...toRefs(data),
      ...method
    }
  }
}
</script>
  
  <style scoped lang="less">
    .login_container {
      background-color: #42b983;
      height: 100%;
    }
  
    .login_box {
      width: 450px;
      height: 300px;
      background-color: #fff;
      border-radius: 3px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
  
      .avatar_box {
        height: 130px;
        width: 130px;
        border: 1px solid #eee;
        border-radius: 50%;
        box-shadow: 0 0 10px #ddd;
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #fff;
        padding: 10px;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background-color: #eee;
        }
      }
    }
  
    .btns {
      display: flex;
      justify-content: flex-end;
  
    }
  
    .login_in {
      position: absolute;
      bottom: 0;
      width: 100%;
      padding: 0 20px;
      box-sizing: border-box;
    }
  </style>