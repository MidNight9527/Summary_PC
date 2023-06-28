<template>
  <div>
    <div style="margin-top: 2%; height: 600px;">
      <div
        style="
          width: 96%;
          margin-top: 0%;
          margin-left: 2%;
          background-color: white;
        "
      >
        <div style="margin-left: 4%; margin-top: 3%">
          <div style="text-align: center;">
            <el-avatar
              :size="100"
              :src="userlist.useravatar"
            /><h3>{{ name }}</h3>
          </div>
          <h3>
            <el-button type="text" style="margin-left: 82%; font-size: 5px" @click="guanzhu">查看更多
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
          "
        >
          <div style="margin-left: 4%; margin-top: 1%;">
            <h4>摘要文本</h4>
						<p>{{ history.summarytext }}</p>
          </div>
        </div>
      </div>
    </div>
		<div style="margin-top: 4%; height: 600px">
      <div
        style="
          width: 96%;
          margin-left: 2%;
          background-color: white;
        "
      >
        <div
          class="mine comment"
          style="
            width: 80%;
            margin-left: 10%;
            border: 3px solid #e5e6eb;
          "
        >
          <div style="margin-left: 4%;">
            <h4>评论  <div class="reply-comment">
              <input style="height: 40px;border-radius: 5px;
                     outline: none;
                     width: 70%;
                     font-size: 18px;
                     padding: 0 20px;
                     border: 2px solid skyblue;"
                     type="text"
                     placeholder="请输入评论 . . ."
                     v-model="formObj.insertcommenttext"
                     @keyup.enter="reply_sumbit(item, 0)"
              />
            <button style="width: 15%;
                  height: 43px;
                   border: 0;
                  border-radius: 5px;
                    font-size: 18px;
                   font-weight: 500;
                    color: #fff;
                    background-color: rgb(118, 211, 248);
                     cursor: pointer;
                   letter-spacing: 2px;
                       margin-left: 20px;" @click="reply_sumbit">发表评论</button>
          </div></h4>
						<div style="display: flex; align-items: center; border: 3px solid #e5e6eb;">
							<el-avatar
              :size="50"
              :src="userlist.useravatar"
							style=" float: left;"
            />
						<div style="margin-left: 2%;">
							<h5>{{ userlist.username }}<p>{{ listuser[0].commenttext }}</p></h5>
					</div>
					</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { userinfo, comment, like, likehistory, collect, collecthistory, userhistory, historyall, historyselect, insert } from '../../api/BriefingDetails.js'
export default {
  name: 'BrifingDetails',
  data() {
    return {
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
      dialogFormVisible: false // 气泡框显示状态
    }
  },
  mounted() {
  },

  created() {
    // this.avatar = this.userlist.useravatar
    // this.username = this.userlist.username
    // this.password = this.userlist.password
    // this.userid = this.$store.getters.userid
    this.userid = this.$store.getters.userInfo.userid
    // this.likeid = this.listlike[0].likeid]
    this.userinfos()
    this.comments()
    this.likes()
    this.likehistorys()
    this.collects()
    this.historyalls()
    this.collecthistorys()
    this.userhistorys()
    this.historyselects()
  },

  methods: {
    guanzhu() {
      console.log('列表简报返回', this.listuser)
    },
    comments() {
      this.historyid = 1
      console.log('11111', this.historyid)
      comment(this.historyid).then((res) => {
        console.log('评论返回', res)
        this.listuser = res.data
        console.log('列表评论返回', this.listuser)
      })
    },
    userinfos() {
      userinfo(this.userid).then((res) => {
        console.log('用户信息返回', res)
        this.userlist = res.data
        this.avatar = res.data.useravatar
        this.username = res.data.username
        this.password = res.data.password
        console.log('列表用户信息返回', this.userlist)
      })
    },
    likes() {
      like(this.userid).then((res) => {
        console.log('点赞id返回', res)
        this.listlike = res.data
        this.likeid = res.data[0].likeid
        console.log('列表点赞id返回', this.listlike)
      })
    },
    likehistorys() {
      likehistory(this.userid).then((res) => {
        console.log('点赞简报返回', res)
        this.listlikehistory = res.data
        console.log('列表点赞简报返回', this.listlikehistory)
      })
    },
    collects() {
      collect(this.userid).then((res) => {
        console.log('收藏id返回', res)
        this.listcollect = res.data
        console.log('列表收藏id返回', this.listcollect)
      })
    },
    collecthistorys() {
      collecthistory(this.userid).then((res) => {
        console.log('收藏简报返回', res)
        this.listcollecthistory = res.data
        console.log('列表收藏简报返回', this.listcollecthistory)
      })
    },
    userhistorys() {
      userhistory(this.userid).then((res) => {
        console.log('用户简报返回', res)
        this.listuserhistory = res.data
        console.log('列表用户简报返回', this.listuserhistory)
      })
    },
    historyalls() {
      historyall(this.userid).then((res) => {
        console.log('简报返回', res)
        this.listhistory = res.data
        console.log('列表简报返回', this.listhistory)
      })
    },
    historyselects() {
      this.historyid = 1
      console.log('11111', this.historyid)
      historyselect(this.historyid).then((res) => {
        console.log('简报详情返回', res)
        this.history = res.data
        console.log('列表简报详情返回', this.history)
      })
    },
    reply_sumbit() {
      this.formObj.historyid = 1
      this.formObj.insertuserid = this.userid
      insert(this.formObj.commenttext, this.formObj.historyif, this.formObj.userid).then((res) => {
        console.log('评论成功返回', res)
      })
    }
  }
}
</script>

<!-- <style scoped>
</style> -->
