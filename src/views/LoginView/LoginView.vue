<template>
  <div class="login_container">
    <div class="login_box">
      <div class="login">登录</div>
      <el-form
        label-width="80px"
        class="login_in"
      >
        <div class="inputusernameandpassword">
          <el-input
            v-model="loginForm.username"
            placeholder="请输入用户名"
            class="username"
            type="text"
            show-word-limit
          />
          <el-input
            v-model="loginForm.password"
            placeholder="请输入密码"
            class="password"
            type="password"
            show-password
          />
        </div>
        <div class="RegisterAndPassword">
          <el-button
            type="text"
            style="margin-left: 30px;"
            @click="register"
          >注册</el-button>
          <el-button
            type="text"
            style="margin-left: 230px;"
            @click="forgotmypassword"
          >忘记密码</el-button>
        </div>
        <el-form-item class="loginsy">
          <el-button
            class="loginbutton"
            type="primary"
            @click="login"
          >登录</el-button>
        </el-form-item>
      </el-form>
    </div>

    <div>
      <el-dialog
        :visible.sync="dialogFormpasswordVisible"
        :title="passworddialogTitle"
        @close="cancel"
      >
        <el-form
          ref="forgot"
          :model="forgot"
          label-width="auto"
          required
        >

          <el-form-item
            label="用户名"
            prop="forgotusername"
          >
            <el-input
              v-model="forgot.forgotusername"
              autocomplete="off"
              placeholder="请输入用户名"
            />
          </el-form-item>

          <el-form-item
            label="手机号"
            prop="forgotuserphone"
          >
            <el-input
              v-model="forgot.forgotuserphone"
              autocomplete="off"
              placeholder="请输入手机号"
            />
          </el-form-item>
        </el-form>
        <div
          slot="footer"
          style="margin-left: 70%;"
        >
          <el-button
            @click="cancel"
          >取消</el-button>
          <el-button
            type="primary"
            @click="forgotpassword"
          >找回密码</el-button>
        </div>
      </el-dialog>
    </div>

    <div>
      <el-dialog
        :visible.sync="dialogFormVisible"
        :title="dialogTitle"
        @close="cancel"
      >
        <el-form
          ref="formObj"
          :model="formObj"
          label-width="auto"
          required
        >
          <el-form-item
            label="用户头像"
            prop="registeruseravatar"
          >
            <el-upload
              :action="valueUrl"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img
                v-if="formObj.registeruseravatar"
                :src="formObj.registeruseravatar"
                style="width: 100px;"
              >
              <img
                v-else
                :src="url"
                style="width: 100px;"
              >
            </el-upload>
          </el-form-item>

          <el-form-item
            label="用户名"
            prop="registerusername"
          >
            <el-input
              v-model="formObj.registerusername"
              autocomplete="off"
              placeholder="请输入用户名"
            />
          </el-form-item>

          <el-form-item
            label="密码"
            prop="registerpassword"
          >
            <el-input
              v-model="formObj.registerpassword"
              type="password"
              show-password
              autocomplete="off"
              placeholder="请输入密码"
            />
          </el-form-item>

          <el-form-item
            label="手机号"
            prop="registeruserphone"
          >
            <el-input
              v-model="formObj.registeruserphone"
              autocomplete="off"
              placeholder="请输入手机号"
            />
          </el-form-item>

          <el-form-item
            label="个性签名"
            prop="registerusersign"
          >
            <el-input
              v-model="formObj.registerusersign"
              autocomplete="off"
              placeholder="请输入个性签名"
            />
          </el-form-item>
        </el-form>
        <div
          slot="footer"
          style="margin-left: 60%;"
        >
          <el-button
            @click="cancel"
          >取消</el-button>
          <el-button
            type="primary"
            @click="confirm"
          >确定</el-button>
        </div>
      </el-dialog>
    </div>

  </div>
</template>

<script>
import './login.css'
import { register, forgotpassword } from '../../api/register.js'
export default {
  data() {
    return {
      valueUrl: 'https://www.woodymidnight.cn/Summary/document/uploadFile',
      url: 'https://www.woodymidnight.cn/upload/Summary/1ee11ac7-bfed-6e7b-86be-297c4f2323a6/上传头像.png', // 没有照片时候
      loginForm: {
        username: '',
        password: ''
      },
      formObj: {
        registerpassword: '', // 注册的密码
        registerusername: '', // 注册的名字
        registeruserphone: '', // 注册的手机号
        registerusersign: '', // 注册的个性签名
        registeruseravatar: '' // 注册的照片
      },
      forgot: {
        forgotusername: '',
        forgotuserphone: ''
      },
      dialogTitle: '', // 气泡框标题
      dialogFormVisible: false, // 气泡框显示状态
      dialogFormpasswordVisible: false,
      passworddialogTitle: ''
    }
  },
  created() {
  },
  methods: {
    // 登录
    login() {
      console.log('dada')
      if (this.loginForm.username === '' || this.loginForm.password === '') {
        this.$notify.error({
          message: '登陆时候请输入完全信息',
          showClose: false
        })
      } else {
        this.$store.dispatch('user/login',
          { userName: this.loginForm.username, password: this.loginForm.password }).then(res => {
          console.log('syres')
          this.$router.push({ path: this.redirect || '/index' })
          this.loginForm.username = ''
          this.loginForm.password = ''
        }).catch((error) => {
          console.log(error)
          this.$notify.error({
            message: '登陆失败',
            showClose: false
          })
          this.loginForm.username = ''
          this.loginForm.password = ''
        })
      }
    },
    // 注册弹出框
    register() {
      this.dialogFormVisible = true
      this.dialogTitle = '注册'
      this.formObj.registerpassword = ''
      this.formObj.registeruseravatar = ''
      this.formObj.registerusername = ''
      this.formObj.registeruserphone = ''
      this.formObj.registerusersign = ''
      console.log('ddddd', this.dialogFormVisible)
    },
    // 找回密码
    forgotmypassword() {
      this.dialogFormpasswordVisible = true
      this.passworddialogTitle = '找回密码'
      this.forgot.forgotusername = ''
      this.forgot.forgotuserphone = ''
    },
    // 关闭气泡框
    cancel() {
      this.dialogFormVisible = false
      this.dialogFormpasswordVisible = false
      this.formObj.registerpassword = ''
      this.formObj.registeruseravatar = ''
      this.formObj.registerusername = ''
      this.formObj.registeruserphone = ''
      this.formObj.registerusersign = ''
    },
    // 上传图片
    handleAvatarSuccess(res) {
      this.formObj.registeruseravatar = res.data.fileUrl
    },
    beforeAvatarUpload(file) {
      console.log('失败', file)
    },

    // 注册
    confirm() {
      if (!(/^1[34578]\d{9}$/.test(this.formObj.registeruserphone))) { // 手机号正则校验
        this.$notify.error({
          message: '请输入整齐的手机号',
          showClose: false
        })
      } else { // 手机号正确则无错误信息
        if (this.formObj.registerpassword === '' || this.formObj.registeruseravatar === '' || this.formObj.registerusername === '' || this.formObj.registeruserphone === '' || this.formObj.registerusersign === '') {
          this.$notify.error({
            message: '请先完善好信息',
            showClose: false
          })
        } else {
          register(this.formObj.registerpassword, this.formObj.registeruseravatar, this.formObj.registerusername, this.formObj.registeruserphone, this.formObj.registerusersign).then((res) => {
            console.log('注册返回', res)
            if (res.httpCode === 200) {
              this.dialogFormVisible = false
              this.formObj.registerpassword = ''
              this.formObj.registeruseravatar = ''
              this.formObj.registerusername = ''
              this.formObj.registeruserphone = ''
              this.formObj.registerusersign = ''
              this.$notify({
                title: '成功',
                message: '注册成功',
                type: 'success'
              })
            } else {
              this.dialogFormVisible = false
              this.formObj.registerpassword = ''
              this.formObj.registeruseravatar = ''
              this.formObj.registerusername = ''
              this.formObj.registeruserphone = ''
              this.formObj.registerusersign = ''
              this.dialogFormpasswordVisible = false
              this.$notify.error({
                title: '错误',
                message: '注册失败'
              })
            }
          })
        }
      }
    },

    // 找回密码
    forgotpassword() {
      forgotpassword(this.forgot.forgotuserphone, this.forgot.forgotusername).then((res) => {
        console.log('密码找回', res)
        if (res.httpCode === 200) {
          this.dialogFormpasswordVisible = false
          this.forgot.forgotusername = ''
          this.forgot.forgotuserphone = ''
          this.$alert(res.data.password, '你的密码', {
            confirmButtonText: '确定'
            // callback: action => {
            //   this.$message({
            //     type: 'info',
            //     message: `action: ${action}`
            //   })
            // }
          })
        } else {
          this.forgot.forgotusername = ''
          this.forgot.forgotuserphone = ''
          this.$notify.error({
            title: '错误',
            message: '找回失败'
          })
        }
      })
    }
  }
}

</script>
