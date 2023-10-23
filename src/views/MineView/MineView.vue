<template>
  <div>
    <div
      class="mine head"
      style="
        background-color: #deecfb;
        width: 96%;
        margin-left: 2%;
        height: 300px;
        margin-top: 1%;
        text-align: center;
        line-height: 30px;
        border-radius: 10px
      "
    >
      <el-avatar
        :size="100"
        :src="userlist.useravatar"
        style="margin-top: 0.8%;"
      />
      <h2>名字：{{ name }}</h2>
      <h2>个性签名：{{ userlist.usersign }}</h2>
      <el-button @click="update">更改个人信息</el-button>
    </div>
    <div style="margin-top: 2%; height: 600px">
      <div
        style="
          width: 65%;
          height: 550px;
          margin-top: 0%;
          margin-left: 2%;
          background-color: white;
          float: left;
          border-radius: 20px
        "
      >
        <div style="margin-left: 4%; margin-top: 3%">
          <h3>
            我的关注
            <el-button
              type="text"
              style="margin-left: 82%; font-size: 5px"
              @click="SeeMore"
            >去论坛看看
            </el-button>
          </h3>
        </div>
        <div
          class="mine like"
          style="
            width: 29%;
            height: 200px;
            margin-top: 0%;
            margin-left: 4%;
            float: left;
            border: 2px solid #e5e6eb;
            border-radius: 10px
          "
        >
          <h5 style="margin-left: 2%;">我点赞的文章一</h5>
          <p
            v-if="listlikehistorysy.length !== 0"
            style="
              word-break: break-all;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      display: -webkit-box;
                      -webkit-box-orient: vertical;
                      -webkit-line-clamp: 3; /* 超出几行省略 */
                      text-indent: 40px;"
          >
            {{ listlikehistorysy[0].history.originaltext }}
          </p>
          <p v-else>暂无数据，快快去添加把！！！</p>
          <div
            v-if="listlikehistorysy.length !== 0"
            style="margin-left: 75%; color: #e67979;"
            @click="goone"
          >查看简文</div>
        </div>
        <div
          class="mine collect"
          style="
            width: 29%;
            height: 200px;
            margin-top: 0%;
            margin-left: 2%;
            float: left;
            border: 2px solid #e5e6eb;
            border-radius: 10px
          "
        >
          <h5 style="margin-left: 2%;">我收藏的文章一</h5>
          <p
            v-if="listcollecthistory.length !== 0"
            style="
              word-break: break-all;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      display: -webkit-box;
                      -webkit-box-orient: vertical;
                      -webkit-line-clamp: 3; /* 超出几行省略 */
                      text-indent: 40px;"
          >
            {{ listcollecthistory[0].history.originaltext }}
          </p>
          <p v-else>暂无数据，快快去添加把！！！</p>
          <div
            v-if="listcollecthistory.length !== 0"
            style="margin-left: 75%; color: #e67979;"
            @click="gotwo"
          >查看简文</div>
        </div>
        <div
          class="mine comment"
          style="
            width: 29%;
            height: 200px;
            margin-top: 0%;
            margin-left: 2%;
            float: left;
            border: 2px solid #e5e6eb;
            border-radius: 10px
          "
        >
          <h5 style="margin-left: 2%;">我评论的文章一</h5>
          <p
            v-if="listuser.length !== 0"
            style="
              word-break: break-all;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      display: -webkit-box;
                      -webkit-box-orient: vertical;
                      -webkit-line-clamp: 3; /* 超出几行省略 */
                      text-indent: 40px;"
          >
            {{ listuser[0].history.originaltext }}
          </p>
          <p v-else>暂无数据，快快去添加把！！！</p>
          <div
            v-if="listuser.length !== 0"
            style="margin-left: 75%; color: #e67979;"
            @click="gothree"
          >查看简文</div>
        </div>
        <div
          class="mine like"
          style="
            width: 29%;
            height: 200px;
            margin-top: 1%;
            margin-left: 4%;
            float: left;
            border: 2px solid #e5e6eb;
            border-radius: 10px
          "
        >
          <h5 style="margin-left: 2%;">我点赞的文章二</h5>
          <p
            v-if="listlikehistorysy.length>1"
            style="
              word-break: break-all;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      display: -webkit-box;
                      -webkit-box-orient: vertical;
                      -webkit-line-clamp: 3; /* 超出几行省略 */
                      text-indent: 40px;"
          >
            {{ listlikehistorysy[1].history.originaltext }}
          </p>
          <p v-else>暂无数据，快快去添加把！！！</p>
          <div
            v-if="listlikehistorysy.length>1"
            style="margin-left: 75%; color: #e67979;"
            @click="gofour"
          >查看简文</div>
        </div>
        <div
          class="mine collect"
          style="
            width: 29%;
            height: 200px;
            margin-top: 1%;
            margin-left: 2%;
            float: left;
            border: 2px solid #e5e6eb;
            border-radius: 10px
          "
        >
          <h5 style="margin-left: 2%;">我收藏的文章二</h5>
          <p
            v-if="listcollecthistory.length>1"
            style="
              word-break: break-all;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      display: -webkit-box;
                      -webkit-box-orient: vertical;
                      -webkit-line-clamp: 3; /* 超出几行省略 */
                      text-indent: 40px;"
          >
            {{ listcollecthistory[1].history.originaltext }}
          </p>
          <p v-else>暂无数据，快快去添加把！！！</p>
          <div
            v-if="listcollecthistory.length>1"
            style="margin-left: 75%; color: #e67979;"
            @click="gofive"
          >查看简文</div>
        </div>
        <div
          class="mine comment"
          style="
            width: 29%;
            height: 200px;
            margin-top: 1%;
            margin-left: 2%;
            float: left;
            border: 2px solid #e5e6eb;
            border-radius: 10px
          "
        >
          <h5 style="margin-left: 2%;">我评论的文章二</h5>
          <p
            v-if="listuser.length>1"
            style="
              word-break: break-all;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      display: -webkit-box;
                      -webkit-box-orient: vertical;
                      -webkit-line-clamp: 3; /* 超出几行省略 */
            "
          >
            {{ listuser[1].history.originaltext }}
          </p>
          <p v-else>暂无数据，快快去添加把！！！</p>
          <div
            v-if="listuser.length>1"
            style="margin-left: 75%; color: #e67979;"
            @click="gosix"
          >查看简文</div>
        </div>
      </div>
      <div
        style="
          width: 30%;
          height: 550px;
          margin-left: 68%;
          background-color: white;
          border-radius: 20px
        "
      >
        <div style="margin-left: 4%; margin-top: 3%; float: left; ">
          <div style="">
            <h3>我的最新简报</h3>
            <p
              v-if="listuserhistorywdy.length !== 0"
              style="width: 90%;
                      word-break: break-all;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      display: -webkit-box;
                      -webkit-box-orient: vertical;
                      -webkit-line-clamp: 14; /* 超出几行省略 */"
            >{{ listuserhistorywdy[0].originaltext }}</p>
            <p v-else>暂无数据，快快去添加把！！！</p>
            <div
              v-if="listuserhistorywdy.length !== 0"
              style="margin-top: 3%; margin-left: 80%; color: #e67979;"
              @click="MyBriefingDetails"
            >查看简文</div>
          </div>
        </div>
      </div>
    </div>
    <div
      style="
        width: 65%;
        margin-left: 2%;
        background-color: white;
        float: left;
        border-radius: 20px
      "
    >
      <div style="margin-left: 4%; margin-top: 3% ; border-radius: 20px;">
        <h3>
          大家最新的动态
          <el-button
            type="text"
            style="margin-left: 88%; font-size: 5px"
            @click="SeeMore"
          >去论坛看看
          </el-button>
          <div style="width: 95%;">
            <div
              style="border: 2px solid #e5e6eb; height: 90px; border-radius: 20px ;
                      margin-top:10px"
            >
              <el-avatar
                style="float: left; margin-top: 1.5%; margin-left: 3%;"
                :size="40"
                :src="listlikehistory[0].user.useravatar"
              />
              <p
                style="margin-left: 2%;
                      word-break: break-all;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      display: -webkit-box;
                      -webkit-box-orient: vertical;
                      -webkit-line-clamp: 2; /* 超出几行省略 */"
              >:{{ listlikehistory[0].originaltext }}</p>
            </div>
            <div
              style="border: 2px solid #e5e6eb; height: 90px; border-radius: 20px ;
                      margin-top:10px"
            >
              <el-avatar
                style=" float: left; margin-top: 1.5%; margin-left: 3%;"
                :size="40"
                :src="listlikehistory[0].user.useravatar"
              />
              <p
                style="margin-left: 1.8%; word-break: break-all;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      display: -webkit-box;
                      -webkit-box-orient: vertical;
                      -webkit-line-clamp: 2; /* 超出几行省略 */"
              >:{{ listlikehistory[0].summarytext }}</p>
            </div>
            <div
              style="border: 2px solid #e5e6eb; height: 90px; border-radius: 20px ;
                      margin-top:10px"
            >
              <el-avatar
                style=" float: left; margin-top: 1.5%; margin-left: 3%;"
                :size="40"
                :src="listlikehistory[2].user.useravatar"
              />
              <p
                style="margin-left: 1.8%; word-break: break-all;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      display: -webkit-box;
                      -webkit-box-orient: vertical;
                      -webkit-line-clamp: 2; /* 超出几行省略 */"
              >:{{ listlikehistory[2].summarytext }}</p>
            </div>
            <div
              style="border: 2px solid #e5e6eb; height: 90px; border-radius: 20px ;
                      margin-top:10px"
            >
              <el-avatar
                style=" float: left; margin-top: 1.5%; margin-left: 3%;"
                :size="40"
                :src="listlikehistory[3].user.useravatar"
              />
              <p
                style="margin-left: 1.8%; word-break: break-all;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      display: -webkit-box;
                      -webkit-box-orient: vertical;
                      -webkit-line-clamp: 2; /* 超出几行省略 */"
              >:{{ listlikehistory[3].summarytext }}</p>
            </div>
            <div
              style="border: 2px solid #e5e6eb; height: 90px; border-radius: 20px ;
                      margin-top:10px"
            >
              <el-avatar
                style=" float: left; margin-top: 1.5%; margin-left: 3%;"
                :size="40"
                :src="listlikehistory[4].user.useravatar"
              />
              <p
                style="margin-left: 1.8%; word-break: break-all;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      display: -webkit-box;
                      -webkit-box-orient: vertical;
                      -webkit-line-clamp: 2; /* 超出几行省略 */"
              >:{{ listlikehistory[4].summarytext }}</p>
            </div>
            <!-- </div> -->
          </div>
        </h3>
      </div>
    </div>
    <div
      style="
        width: 30%;
        height: 500px;
        margin-left: 68%;
        background-color: white;
        border-radius: 20px ;
      "
    >
      <div style="margin-left: 4%; margin-top: 3%; border-radius: 20px ; float: left">
        <div>
          <p style="width: 200px; font-size: 20px;">实时热点</p>
        </div>
        <p
          style="width: 400px; overflow: hidden; color: rgb(245, 73, 73);
                      text-overflow: ellipsis;
                      margin-top: 4px;
                      display: -webkit-box;
                      -webkit-box-orient: vertical;
                      -webkit-line-clamp: 1; /* 超出几行省略 */"
        >1.{{ hotspotlist[0].history.summarytext }}</p>
        <p
          style="width: 400px;; overflow: hidden;  color: rgb(245, 73, 73);
                      text-overflow: ellipsis;
                      margin-top: 4px;
                      display: -webkit-box;
                      -webkit-box-orient: vertical;
                      -webkit-line-clamp: 1; /* 超出几行省略 */"
        >2.{{ hotspotlist[1].history.summarytext }}</p>
        <p
          style="width: 400px;; overflow: hidden;  color: rgb(245, 73, 73);
                      text-overflow: ellipsis;
                      margin-top: 4px;
                      display: -webkit-box;
                      -webkit-box-orient: vertical;
                      -webkit-line-clamp: 1; /* 超出几行省略 */"
        >3.{{ listlikehistory[1].summarytext }}</p>
        <p
          style="width: 400px;; overflow: hidden;
                      text-overflow: ellipsis;
                      margin-top: 4px;
                      display: -webkit-box;
                      -webkit-box-orient: vertical;
                      -webkit-line-clamp: 1; /* 超出几行省略 */"
        >4.{{ listlikehistory[2].summarytext }}</p>
        <p
          style="width: 400px;; overflow: hidden;
                      text-overflow: ellipsis;
                      margin-top: 4px;
                      display: -webkit-box;
                      -webkit-box-orient: vertical;
                      -webkit-line-clamp: 1; /* 超出几行省略 */"
        >5.{{ listlikehistory[1].summarytext }}</p>
        <p
          style="width: 400px;; overflow: hidden;
                      text-overflow: ellipsis;
                      margin-top: 4px;
                      display: -webkit-box;
                      -webkit-box-orient: vertical;
                      -webkit-line-clamp: 1; /* 超出几行省略 */"
        >6.{{ listlikehistory[1].summarytext }}</p>
        <p
          style="width: 400px;; overflow: hidden;
                      text-overflow: ellipsis;
                      margin-top: 4px;
                      display: -webkit-box;
                      -webkit-box-orient: vertical;
                      -webkit-line-clamp: 1; /* 超出几行省略 */"
        >7.{{ listlikehistory[1].summarytext }}</p>
        <p
          style="width: 400px;; overflow: hidden;
                      text-overflow: ellipsis;
                      margin-top: 4px;
                      display: -webkit-box;
                      -webkit-box-orient: vertical;
                      -webkit-line-clamp: 1; /* 超出几行省略 */"
        >8.{{ listlikehistory[1].summarytext }}</p>
        <p
          style="width: 400px;; overflow: hidden;
                      text-overflow: ellipsis;
                      margin-top: 4px;
                      display: -webkit-box;
                      -webkit-box-orient: vertical;
                      -webkit-line-clamp: 1; /* 超出几行省略 */"
        >9.{{ listlikehistory[1].summarytext }}</p>
      </div>
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
            prop="updateuseravatar"
          >
            <el-upload
              :action="valueUrl"
              :on-success="handleAvatarSuccess"
            >
              <img
                v-if="formObj.updateuseravatar"
                :src="formObj.updateuseravatar"
                style="width: 100px"
              >
              <img
                v-else
                :src="userlist.useravatar"
                style="width: 100px"
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
              :placeholder="userlist.username"
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
            />
          </el-form-item>

          <el-form-item
            label="手机号"
            prop="updateuserphone"
          >
            <el-input
              v-model="formObj.updateuserphone"
              autocomplete="off"
              value="userlist.userphone"
            />
          </el-form-item>

          <el-form-item
            label="个性签名"
            prop="updateusersign"
          >
            <el-input
              v-model="formObj.updateusersign"
              autocomplete="off"
              value="userlist.usersign"
            />
          </el-form-item>
        </el-form>
        <div
          slot="footer"
          style="margin-left: 60%"
        >
          <el-button @click="cancel">取消</el-button>
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
      this.userinfos()
      this.comments()
      this.likes()
      this.collects()
      this.historyuseridlist()
      this.hotspot()
    })
  },

  methods: {
    hotspot() {
      hotspotN().then((res) => {
        console.log('syqq', res.data)
        this.hotspotlist = res.data
      })
      this.hotspottwo()
    },
    sysysy() {
      console.log('sysysy', this.hotspotlist)
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
      console.log('hotspotNNN', this.hotspotlist)
    },

    Detail() {
      this.$router.push({ path: this.redirect || '/BriefingDetails' })
    },
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
    // likehistorys() {
    //   likehistory(this.userid).then((res) => {
    //     console.log('点赞简报返回', res)
    //     this.listlikehistory = res.data.reverse()
    //     console.log('列表点赞简报返回', this.listlikehistory)
    //   })
    // },
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
        // console.log('个人的历史记录', res)
        this.listuserhistorywdy = res.data.reverse()
        console.log('个人的历史记录', this.listuserhistorywdy)
      })
    },
    update() {
      this.dialogFormVisible = true
      this.dialogTitle = '更改个人信息'
      this.formObj.updatepassword = this.userlist.password
      this.formObj.updateuseravatar = this.userlist.useravatar
      this.formObj.updateusername = this.userlist.username
      this.formObj.updateuserphone = this.userlist.userphone
      this.formObj.updateusersign = this.userlist.usersign
      this.formObj.updateuserid = this.userlist.userid
      this.formObj.updateusertype = this.userlist.usertype
      console.log('ddddd', this.dialogFormVisible)
      console.log(this.userlist.useravatar)
      console.log(this.formObj.updatepassword)
    },
    cancel() {
      this.dialogFormVisible = false
      console.log(this.formObj.updatepassword)
      console.log(this.formObj.updateuseravatar)
      console.log(this.formObj.updateusername)
      console.log(this.formObj.updateuserphone)
      console.log(this.formObj.updateusersign)
      console.log(this.formObj.updateuserid)
      console.log(this.formObj.updateusertype)
      console.log(this.listhistory)
    },
    // 查看原文的跳转
    MyBriefingDetails() {
      this.$router.push({ path: '/BriefingDetails', query: { historyid: this.listlikehistory[0].historyid }})
    },

    // 查看6个
    goone() {
      this.$router.push({ path: '/BriefingDetails', query: { historyid: this.listlikehistorysy[0].historyid }})
    },
    gotwo() {
      this.$router.push({ path: '/BriefingDetails', query: { historyid: this.listcollecthistory[0].historyid }})
    },
    gothree() {
      this.$router.push({ path: '/BriefingDetails', query: { historyid: this.listuser[0].historyid }})
    },
    gofour() {
      this.$router.push({ path: '/BriefingDetails', query: { historyid: this.listlikehistorysy[1].historyid }})
    },
    gofive() {
      this.$router.push({ path: '/BriefingDetails', query: { historyid: this.listcollecthistory[1].historyid }})
    },
    gosix() {
      this.$router.push({ path: '/BriefingDetails', query: { historyid: this.listuser[1].historyid }})
    },
    // 查看所以历史记录的跳转
    SeeMore() {
      this.$router.push({ path: this.redirect || '/SeeMore' })
    },
    handleAvatarSuccess(res) {
      console.log('获取照片路径', res)
      this.formObj.updateuseravatar = res.data.fileUrl
    },
    // beforeAvatarUpload(file) {
    //   console.log('失败', file)
    // },
    confirm() {
      if (!(/^1[34578]\d{9}$/.test(this.formObj.updateuserphone))) { // 手机号正则校验
        this.$notify.error({
          message: '请输入整齐的手机号',
          showClose: false
        })
      } else { // 手机号正确则无错误信息
        if (this.formObj.updatepassword === '' || this.formObj.updateuseravatar === '' || this.formObj.updateuserid === '' || this.formObj.updateusername === '' || this.formObj.updateusersign === '' || this.formObj.updateuserphone === '' || this.formObj.updateusertype === '') {
          this.$notify.error({
            message: '请先完善好信息',
            showClose: false
          })
        } else {
          update(this.formObj.updatepassword, this.formObj.updateuseravatar, this.formObj.updateuserid, this.formObj.updateusername, this.formObj.updateusersign, this.formObj.updateuserphone, this.formObj.updateusertyp).then((res) => {
            console.log('更改返回', res)
            if (res.httpCode === 200) {
              this.dialogFormVisible = false
              this.$notify({
                title: '成功',
                message: '更改成功',
                type: 'success'
              })
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

<!-- <style scoped>
</style> -->
