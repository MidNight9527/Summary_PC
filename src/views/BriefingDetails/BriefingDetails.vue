<template>
  <div>
    <div class="header">
      <el-card shadow="always">
        <div class="header-box">
          <div class="header-userInfo">
            <el-avatar
              :style="{ marginRight: '10px' }"
              :size="50"
              :src="userlist.useravatar"
            />
            <h3>{{ name }}</h3>
          </div>
          <el-button
            type="success"
            @click="moban"
          >下载模板
          </el-button>
        </div>
        <el-row type="flex" class="header-content-box" justify="space-around">
          <el-col :span="11">
            <div class="header-content">
              <h4>原文</h4>
              <p>{{ history.originaltext }}</p>
            </div>
          </el-col>
          <el-col :span="11">
            <div class="header-content ">
              <h4>摘要文本</h4>
              <p>{{ history.summarytext }}</p>
            </div>
          </el-col>
        </el-row>
      </el-card>
      <el-card class="body" shadow="always">
        <div class="body-comment">
          <h3>评论</h3>
          <div class="comment">
            <input
              v-model="formObj.insertcommenttext"
              class="comment-input"
              type="text"
              placeholder="请输入评论 . . ."
              @keyup.enter="reply_sumbit(item, 0)"
            >
            <el-button
              type="primary"
              @click="reply_sumbit"
            >发表评论</el-button>
          </div>
        </div>
        <div>
          <div
            v-for="(e, i) in listuser"
            :key="i"
          >
            <div class="comment-context" v-if="i < 6">
              <el-avatar
                class="comment-context-avatar"
                :size="50"
                :src="e.user.useravatar"
              />
              <div>
                <h5>{{ e.user.username }}<p>{{ e.commenttext }}</p></h5>
              </div>
            </div>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import { userinfo, comment, likedelete, likeinsert, collectdelete, collectinsert, like, collect, getDownLoadUrl, historyselect, insert } from '../../api/BriefingDetails.js'
export default {
  name: 'BrifingDetails',
  data() {
    return {
      sysb: false,
      urlll: '',
      templateId: 1,
      passhistoryid: '',
      valueUrl: 'https://www.woodymidnight.cn/Summary/document/uploadFile',
      url: this.avatar, // 没有照片时候
      id: this.userid,
      name: this.$store.getters.name,
      avatar: this.$store.getters.avatar,
      userlist: [],
      listuser: [],
      listlike: [],
      listlikehistory: [],
      listcollect: [],
      userid: '',
      likeid: '',
      listcollecthistory: [],
      listhistory: [],
      listuserhistory: [],
      history: [],
      loginForm: {
        username: '',
        password: ''
      },
      formObj: {
        insertcommenttext: '',
        inserthistoryid: '',
        insertuserid: ''
      },
      dialogTitle: '', // 气泡框标题
      dialogFormVisible: false, // 气泡框显示状态
      likeShow: '',
      likedShow: '',
      collectShow: '',
      collectedShow: ''
    }
  },
  mounted() {
  },

  created() {
    this.passhistoryid = this.$route.query.historyid
    this.userid = this.$store.getters.userInfo.userid
    comment(this.historyid).then((res) => {
      console.log('评论返回', res)
      this.listuser = res.data.reverse()
      if (res.data.length === 0) {
        this.sysb = true
      } else {
        this.sysb = false
      }
      this.userinfos()
      this.historyselects()
      this.likes()
      this.collects()
      this.userhistorys()
    })
  },

  methods: {
    moban() {
      getDownLoadUrl(this.passhistoryid, this.templateId).then((res) => {
        console.log('我的文档链接', res)
        this.urlll = res.data
        this.xizaimoban()
      })
    },
    xizaimoban() {
      const iframe = document.createElement('iframe')
      iframe.style.display = 'none'
      iframe.style.height = 0
      iframe.src = this.urlll
      document.body.appendChild(iframe)
      setTimeout(() => { iframe.remove() }, 5 * 60 * 1000)
    },

    likebtn() {
      if (this.likeShow === true) {
        likeinsert(this.passhistoryid, this.userid).then((res) => {
          console.log('点赞添加成功', res)
          this.likeShow = false
          this.likedShow = true
          this.listlike = res.data.likeid
        })
      } else {
        console.log('dddad', this.listlike)
        likedelete(this.listlike).then((res) => {
          console.log('点赞删除成功', res)
          this.likeShow = true
          this.likedShow = false
        })
      }
    },

    collectbtn() {
      if (this.collectShow === true) {
        collectinsert(this.passhistoryid, this.userid).then((res) => {
          console.log('收藏添加成功', res)
          this.collectShow = false
          this.collectedShow = true
          this.listcollect = res.data.collectid
        })
      } else {
        console.log('dddad', this.listcollect)
        collectdelete(this.listcollect).then((res) => {
          console.log('收藏删除成功', res)
          this.collectShow = true
          this.collectedShow = false
        })
      }
    },
    // 文章的评论
    comments() {
      this.historyid = this.passhistoryid
      comment(this.historyid).then((res) => {
        console.log('评论返回', res)
        this.listuser = res.data.reverse()
        if (res.data.length === 0) {
          this.sysb = true
        } else {
          this.sysb = false
        }
      })
    },
    // 获取文章用户的信息
    userinfos() {
      userinfo(this.userid).then((res) => {
        // console.log('用户信息返回', res)
        this.userlist = res.data
        this.avatar = res.data.useravatar
        this.username = res.data.username
        this.password = res.data.password
        // console.log('列表用户信息返回', this.userlist)
      })
    },
    // 点赞的情况
    likes() {
      this.formObj.historyid = this.passhistoryid
      this.formObj.userid = this.userid
      like(this.formObj.historyid, this.formObj.userid).then((res) => {
        console.log('点赞id返回', res)
        if (res.data.length === 0) {
          console.log('wojinlail')
          this.likeShow = true
          this.likedShow = false
        } else {
          this.likeShow = false
          this.likedShow = true
          this.listlike = res.data[0].likeid
        }
      })
    },
    collects() {
      this.formObj.insertuserid = this.userid
      collect(this.formObj.historyid, this.formObj.userid).then((res) => {
        console.log('收藏id返回', res)
        if (res.data.length === 0) {
          this.collectShow = true
          this.collectedShow = false
        } else {
          this.collectShow = false
          this.collectedShow = true
          this.listcollect = res.data[0].collectid
        }
      })
    },
    historyselects() {
      this.historyid = this.passhistoryid
      historyselect(this.historyid).then((res) => {
        console.log('lll', res.data)
        this.history = res.data
      })
    },
    reply_sumbit() {
      this.formObj.inserthistoryid = this.passhistoryid
      this.formObj.insertuserid = this.userid
      insert(this.formObj.insertcommenttext, this.formObj.inserthistoryid, this.formObj.insertuserid).then((res) => {
        console.log('评论成功返回', res)
        this.$router.go(0)
      })
    }
  }
}
</script>

<style scoped>
@import "BriefingDetails.css";
</style>
