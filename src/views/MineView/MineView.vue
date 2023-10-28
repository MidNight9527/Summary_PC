<template>
  <div class="mineView">
    <div class="mine-head">
      <el-avatar
        :size="100"
        :src="userlist.useravatar"
        style="margin: 10px 0"
      />
      <div class="mine-head-text">名字：{{ name }}</div>
      <div class="mine-head-text">个性签名：{{ userlist.usersign }}</div>
      <el-button @click="updateData">更改个人信息</el-button>
    </div>
    <div class="mine-body">
      <el-row
        type="flex"
        class="row-bg"
      >
        <el-col :span="14">
          <div>
            <div class="mine-care">
              <h3>我的收藏</h3>
              <el-button
                type="text"
                @click="SeeMore"
              >去论坛看看</el-button>
            </div>
            <div class="mine-care-body">
              <el-empty v-if="listcollecthistory.length == 0" description="暂无数据，快去使用吧！"></el-empty>
              <div
                v-else
                v-for="(e, i) in listcollecthistory"
                :key="i"
              >
                <el-card
                  v-if="i < 4"
                  shadow="hover"
                  class="mine-care-card"
                >
                  <div class="ellipsis-line">{{ e.history.originaltext }}</div>
                  <el-button
                    type="text"
                    class="mine-care-button"
                    @click="goone(e.historyid)"
                  >查看简文</el-button>
                </el-card>
              </div>
            </div>
            <div class="mine-comment">
              <div class="mine-comment-title">
                <h3 style="margin: 0;padding: 0;">大家最新的动态</h3>
                <el-button
                  type="text"
                  @click="SeeMore"
                >去论坛看看</el-button>
              </div>
              <el-empty v-if="listlikehistory.length == 0" description="暂无数据，快去使用吧！"></el-empty>
              <div
                v-else
                v-for="(e, i) in listlikehistory"
                :key="i"
              >
                <div
                  v-if="i < 5"
                  class="mine-comment-context"
                >
                  <el-avatar
                    style="margin-right: 10px;"
                    :size="40"
                    :src="e.user.useravatar"
                  />
                  <p class="ellipsis-line">{{ e.summarytext }}</p>
                </div>
              </div>
            </div>
          </div>
        </el-col>
        <div style="width:20px" />
        <el-col :span="10">
          <div class="mine-left">
            <el-card shadow="always">
              <div>
                <p style="font-size: 20px;">我的简报</p>
              </div>
              <div>
                <el-empty v-if="listuserhistorywdy.length == 0" description="暂无数据，快去使用吧！"></el-empty>
                <div
                  v-else
                  v-for="(e, i) in listuserhistorywdy"
                  :key="i"
                >
                  <div
                    v-if="i < 5"
                    class="mine-my-summary"
                  >
                    <p
                      class="ellipsis-line"
                      style="margin-right: 20px;"
                    >{{ i+1 }}.{{ e.originaltext }}</p>
                    <el-button
                      type="text"
                      @click="MyBriefingDetails(e.historyid)"
                    >
                      查看简文
                    </el-button>
                  </div>
                </div>
              </div>
            </el-card>
          </div>
          <div class="mine-left">
            <el-card shadow="always">
              <div>
                <p style="font-size: 20px;">实时热点</p>
              </div>
              <el-empty v-if="hotspotlist.length == 0" description="暂无数据，快去使用吧！"></el-empty>
              <div
                v-else
                v-for="(item, index) in hotspotlist"
                :key="index"
              >
                <p v-if="index < 10" class="ellipsis-line"> {{ index+1 }}.{{ item.history.originaltext }} </p>
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row>
      <div style="height:20px" />
    </div>
    <div>
      <el-dialog
        :visible.sync="dialogFormVisible"
        :title="dialogTitle"
        :append-to-body="true"
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
            prop="updateuseravatar"
          >
            <el-upload
              :action="valueUrl"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img
                v-if="formObj.updateuseravatar"
                :src="formObj.updateuseravatar"
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
            prop="updateusername"
          >
            <el-input
              v-model="formObj.updateusername"
              autocomplete="off"
              placeholder="请输入用户名"
            />
          </el-form-item>

          <el-form-item
            label="密码"
            prop="updatepassword"
          >
            <el-input
              v-model="formObj.updatepassword"
              type="password"
              show-password
              autocomplete="off"
              placeholder="请输入密码"
            />
          </el-form-item>

          <el-form-item
            label="手机号"
            prop="updateuserphone"
          >
            <el-input
              v-model="formObj.updateuserphone"
              autocomplete="off"
              placeholder="请输入手机号"
            />
          </el-form-item>

          <el-form-item
            label="个性签名"
            prop="updateusersign"
          >
            <el-input
              v-model="formObj.updateusersign"
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
import { userinfo, comment, like, collect, update, listlikehistory, listuserhistory, hotspotN, hotspotNN, hotspotNNN } from '../../api/mine.js'
export default {
  name: 'MineView',
  data() {
    return {
      hotspotlist: [],
      valueUrl: 'https://www.woodymidnight.cn/Summary/document/uploadFile',
      url: this.avatar, // 没有照片时候
      name: this.$store.getters.name,
      avatar: this.$store.getters.avatar,
      userlist: [],
      listuser: [],
      listlike: [],
      listlikehistorysy: [],
      listlikehistory: [],
      listcollect: [],
      userid: '',
      likeid: '',
      listcollecthistory: [],
      listhistory: [],
      listuserhistorywdy: [],
      loginForm: {
        username: '',
        password: ''
      },
      formObj: {
        updatepassword: '', // 注册的密码
        updateusername: '', // 注册的名字
        updateuserphone: '', // 注册的手机号
        updateusersign: '', // 注册的个性签名
        updateuseravatar: '', // 注册的照片
        updateuserid: '',
        updateusertype: ''
      },
      dialogTitle: '', // 气泡框标题
      dialogFormVisible: false // 气泡框显示状态
    }
  },
  mounted() {
  },

  created() {
    this.userid = this.$store.getters.userInfo.userid
    listlikehistory().then(res => {
      this.listlikehistory = res.data.reverse()
      console.log('所以历史记录返回', this.listlikehistory)
      this.collects()
      this.userinfos()
      this.comments()
      // this.likes()
      this.historyuseridlist()
      this.hotspot()
    })
  },

  methods: {
    hotspot() {
      hotspotN().then((res) => {
        this.hotspotlist = res.data
      })
      this.hotspottwo()
    },
    hotspottwo() {
      hotspotNN().then((res) => {
        for (var i = 0; i < res.data.length; i++) {
          this.hotspotlist.push(res.data[i])
        }
      })
      this.hotspotthree()
    },
    hotspotthree() {
      hotspotNNN().then((res) => {
        for (var i = 0; i < res.data.length; i++) {
          this.hotspotlist.push(res.data[i])
        }
      })
    },

    Detail() {
      this.$router.push({ path: this.redirect || '/BriefingDetails' })
    },
    userinfos() {
      userinfo(this.userid).then((res) => {
        console.log('用户信息返回', res)
        this.userlist = res.data
        this.avatar = res.data.useravatar
        this.username = res.data.username
        this.password = res.data.password
        // console.log('列表用户信息返回', this.userlist)
      })
    },
    // 评论
    comments() {
      comment(this.userid).then((res) => {
        // console.log('评论返回', res)
        this.listuser = res.data.reverse()
        console.log('列表评论返回', this.listuser)
      })
    },
    // 点赞
    likes() {
      like(this.userid).then((res) => {
        // console.log('点赞id返回', res)
        this.listlikehistorysy = res.data.reverse()
        console.log('列表点赞id返回', this.listlikehistorysy)
      })
    },
    collects() {
      collect(this.userid).then((res) => {
        // console.log('收藏id返回', res)
        this.listcollecthistory = res.data.reverse()
        console.log('列表收藏id返回', this.listcollecthistory)
      })
    },
    // 看个人的
    historyuseridlist() {
      listuserhistory(this.userid).then(res => {
        this.listuserhistorywdy = res.data.reverse()
        console.log('个人的历史记录', this.listuserhistorywdy)
      })
    },
    updateData() {
      console.log(this.dialogFormVisible)
      this.dialogFormVisible = true
      this.dialogTitle = '更改个人信息'
      this.formObj.updatepassword = this.userlist.password
      this.formObj.updateusername = this.userlist.username
      this.formObj.updateuserphone = this.userlist.userphone
      this.formObj.updateusersign = this.userlist.usersign
      this.formObj.updateuseravatar = this.userlist.useravatar
      this.formObj.updateuserid = this.userlist.userid
      this.formObj.updateusertype = this.userlist.usertype
    },
    cancel() {
      this.dialogFormVisible = false
    },
    // 查看原文的跳转
    MyBriefingDetails(id) {
      this.$router.push({ path: '/BriefingDetails', query: { historyid: id }})
    },

    // 查看6个
    goone(id) {
      this.$router.push({ path: '/BriefingDetails', query: { historyid: id }})
    },
    // 查看所以历史记录的跳转
    SeeMore() {
      this.$router.push({ path: this.redirect || '/SeeMore' })
    },
    handleAvatarSuccess(res) {
      console.log('获取照片路径', res)
      this.formObj.updateuseravatar = res.data.fileUrl
    },
    confirm() {
      if (!(/^1[34578]\d{9}$/.test(this.formObj.updateuserphone))) { // 手机号正则校验
        this.$notify.error({
          message: '请输入整齐的手机号',
          showClose: false
        })
      } else {
        console.log(this.formObj)
        if (this.formObj.updatepassword === '' || this.formObj.updateuseravatar === '' || this.formObj.updateuserid === '' || this.formObj.updateusername === '' || this.formObj.updateusersign === '' || this.formObj.updateuserphone === '') {
          this.$notify.error({
            message: '请先完善好信息',
            showClose: false
          })
        } else {
          update(this.formObj.updatepassword, this.formObj.updateuseravatar, this.formObj.updateuserid, this.formObj.updateusername, this.formObj.updateusersign, this.formObj.updateuserphone, this.formObj.updateusertype).then((res) => {
            console.log('更改返回', res)
            if (res.httpCode === 200) {
              this.dialogFormVisible = false
              window.location.reload()
            } else {
              this.dialogFormVisible = false
              this.$notify.error({
                title: '错误',
                message: '更改失败'
              })
            }
          })
        }
      }
    }
  }
}
</script>
<style scoped>
@import "index.css";
</style>
