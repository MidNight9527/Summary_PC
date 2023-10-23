<template>
  <div>
    <div style="margin-top: 2%; ">
      <div
        style="
          width: 96%;
          margin-top: 0%;
          margin-left: 2%;
          border-radius: 20px;
          background-color: white;
        "
      >
        <div style="margin-left: 4%; margin-top: 3%">
          <div style="padding-top: 1px;text-align: center;">
            <div style=" margin-top: 30px;">
              <el-avatar
                :size="100"
                :src="userlist.useravatar"
              /><h3>{{ name }}</h3>
            </div>
          </div>
          <h3>
            <el-button
              type="text"
              style="margin-left: 82%; font-size: 5px"
              @click="moban"
            >下载模板
            </el-button>
          </h3>
        </div>
        <div
          class="mine comment"
          style="
            width: 80%;
            margin-top: 1%;
            margin-left: 10%;
            border: 3px solid #e5e6eb;
            border-radius: 20px;
          "
        >
          <div style="margin-left: 4%; margin-top: 1%;">
            <h4>原文</h4>
            <p>{{ history.originaltext }}</p>
          </div>
        </div>
        <div style="text-align: center;">
          <img
            src="../../icons/conversion.png"
            style="width: 80px;"
          >
        </div>
        <div
          class="mine comment"
          style="
            width: 80%;
            margin-top: 1%;
            margin-left: 10%;
            border: 3px solid #e5e6eb;
            border-radius: 20px;
          "
        >
          <div style="margin-left: 4%; margin-top: 1%;">
            <h4>摘要文本</h4>
            <p>{{ history.summarytext }}</p>
          </div>
        </div>
        <div style="text-align: right; padding-right: 10%;">
          <div
            style="float: right; margin-left: 20px;"
            @click="likebtn"
          >
            <div v-if="likeShow">
              <img
                src="../../icons/like.png"
                style=" width: 20px; margin-top: 20px;"
                alt=""
              >
            </div>
            <div v-else>
              <img
                src="../../icons/likeed.png"
                style=" width: 20px; margin-top: 20px;"
                alt=""
              >
            </div>
          </div>
          <div
            @click="collectbtn"
          >
            <img
              v-if="collectShow"
              src="../../icons/collect.png"
              style=" width: 20px;  margin-top: 20px;"
              alt=""
            >
            <img
              v-else
              src="../../icons/collected.png"
              style=" width: 20px;  margin-top: 20px;"
              alt=""
            >

          </div>
          <div style="height: 20px;" />
        </div>
      </div>
    </div>
    <div style="margin-top: 1%;">
      <div
        style="
          width: 96%;
          margin-left: 2%;
          border-radius: 20px;
          background-color: white;
        "
      >
        <div
          class="mine comment"
          style="
            width: 80%;
            margin-left: 10%;
            border: 3px solid #e5e6eb;
            border-radius: 20px;
          "
        >
          <div style="margin-left: 4%;">
            <h4>评论  <div class="reply-comment">
              <input
                v-model="formObj.insertcommenttext"
                style="height: 40px;border-radius: 5px;
                     outline: none;
                     margin-top: 10px;
                     width: 70%;
                     font-size: 18px;
                     padding: 0 20px;
                     border: 2px solid skyblue;"
                type="text"
                placeholder="请输入评论 . . ."
                @keyup.enter="reply_sumbit(item, 0)"
              >
              <button
                style="width: 15%;
                  height: 43px;
                   border: 0;
                  border-radius: 5px;
                    font-size: 18px;
                   font-weight: 500;
                    color: #fff;
                    background-color: rgb(118, 211, 248);
                     cursor: pointer;
                   letter-spacing: 2px;
                       margin-left: 20px;"
                @click="reply_sumbit"
              >发表评论</button>
            </div>
              <div
                v-if="sysb"
                style="margin-top: 20px;"
              >暂无评论，请你做首发人</div>
              <div v-else>
                <div style="display: flex; align-items: center; margin-top: 10px; border: 3px solid #e5e6eb;border-radius: 20px;">
                  <el-avatar
                    :size="50"
                    :src="listuser[0].user.useravatar"
                    style=" float: left; margin-left: 6px; "
                  />
                  <div style="margin-left: 2%; width: 90%;">
                    <h5>{{ listuser[0].user.username }}<p>{{ listuser[0].commenttext }}</p></h5>
                  </div>
                </div>
                <div style="display: flex; align-items: center;  margin-top: 10px; border: 3px solid #e5e6eb;border-radius: 20px;">
                  <el-avatar
                    :size="50"
                    :src="listuser[1].user.useravatar"
                    style=" float: left; margin-left: 6px;"
                  />
                  <div style="margin-left: 2%; width: 90%;">
                    <h5>{{ listuser[1].user.username }}<p>{{ listuser[1].commenttext }}</p></h5>
                  </div>
                </div>
                <div style="display: flex; align-items: center; margin-top: 10px; border: 3px solid #e5e6eb;border-radius: 20px;">
                  <el-avatar
                    :size="50"
                    :src="listuser[2].user.useravatar"
                    style=" float: left; margin-left: 6px;"
                  />
                  <div style="margin-left: 2%; width: 90%;">
                    <h5>{{ listuser[2].user.username }}<p>{{ listuser[2].commenttext }}</p></h5>
                  </div>
                </div>
              </div>

              <div style="height: 10px;" />
            </h4></div>
        </div>
      </div>
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

<!-- <style scoped>
</style> -->
