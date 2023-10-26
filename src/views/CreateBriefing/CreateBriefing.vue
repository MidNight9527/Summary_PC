<template>
  <div>
    <!-- 表单模块 -->
    <div class="FormModule">
      <!-- 标题 -->
      <div class="PageTitle">
        创建渠道表单
      </div>

      <!-- 状态条 -->
      <div class="StatusBarBox">
        <el-steps
          :active="active"
          finish-status="success"
          align-center
        >
          <el-step
            title="选择简报模板"
            description="模板选择"
          />
          <el-step
            title="选择模型、算法"
            description="形式选择"
          />
          <el-step
            title="选择文本上传方式"
            description="创建成功"
          />
          <el-step
            title="生成简报"
            description="生成成功"
          />
        </el-steps>
      </div>
      <!-- 内容显示 -->
      <!-- 步骤一 -->
      <div
        v-if="active === 0"
        class="stepsOneBox"
      >
        <!-- 第一行 -->
        <div class="stepsOne_lineBox">
          <!-- 左部分 -->
          <div class="stepsOne_line_leftBox">
            <div
              v-if="select === 1"
              style="margin-left: 90px;"
            >选这个！</div>
            <img
              src="../../icons/one.png"
              style="width: 250px;margin-top: 8px; "
              @click="one"
            >
          </div>
          <!-- 右部分 -->
          <div class="stepsOne_line_rightBox">
            <div
              v-if="select === 2"
              style=" margin-left: 90px; "
            >选这个！</div>
            <img
              src="../../icons/two.png"
              style="width: 250px; margin-top: 8px;"
              @click="two"
            >
          </div>
        </div>
        <!-- 第二行 -->
        <div class="stepsTwo_lineBox">
          <!-- 左部分 -->
          <div class="stepsOne_line_leftBox">
            <div
              v-if="select === 3"
              style="margin-left: 90px;"
            >选这个！</div>
            <img
              src="../../icons/three.png"
              style="width: 250px; margin-top: 8px;"
              @click="three"
            >
          </div>
          <!-- 右部分 -->
          <div class="stepsOne_line_rightBox">
            <div
              v-if="select === 4"
              style="margin-left: 90px;"
            >选这个！</div>
            <!-- 第一行 -->
            <img
              src="../../icons/four.png"
              style="width: 250px; margin-top: 8px;"
              @click="four"
            >
          </div>
        </div>
      </div>
      <!-- 步骤二 -->
      <div
        v-if="active === 1"
        class="stepsTwoBox"
      >
        <!-- 第二行 -->
        <div class="stepsTwo_twoLineBox">
          <div class="stepsTwo_lineTitle">算法选择</div>
          <el-select
            v-model="value"
            placeholder="请选择"
            class="stepsTwo_linePicker"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
      </div>
      <!-- 步骤三 -->
      <div
        v-if="active === 2"
        class="stepsThreeBox"
      >
        <!-- 多行文本输入框 -->
        <el-input
          v-model="textarea1"
          type="textarea"
          :autosize="{ minRows: 14, maxRows: 38}"
          class="textinput"
          placeholder="请输入内容"
        />
        <!-- 上传文件 -->
        <el-upload
          class="upload-demo"
          action="https://www.woodymidnight.cn/Summary/summary/getTextString"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          multiple
          :limit="1"
          :on-exceed="handleExceed"
          :on-success="success"
        >
          <el-button
            size="small"
            class="uploadButton"
            type="primary"
          >文件上传更快捷</el-button>
        </el-upload>
        <!-- <el-upload
          action
          :data="{'algorithmId': 'TextRank', 'inPercent': 0.1, 'userId': 23}"
          style="position:absolute;width: 100%;height: 100%;z-index: 1000;"
          :auto-upload="false"
          @change="onselect"
        >
          <template #trigger><el-button
            size="small"
            type="primary"
          >选择</el-button></template>
          <el-button
            v-if="!autoUpload"
            style="margin-left: 1px;"
            size="small"
            type="success"
            @click="onupload"
          >上传</el-button>
        </el-upload> -->

      </div>
      <!-- 步骤四 -->
      <div
        v-if="active === 3"
        class="stepsFoureBox"
      >
        <div class="stepsFoureContentBox">
          <img
            class="stepsFoureImage"
            src="../../assets/Yes.png"
          >
          <div class="stepsFoureContentsBox">
            <div class="stepsFoureContent_one">生成成功</div>
            <div class="stepsFoureContent_two">简报生成成功</div>
          </div>

        </div>
      </div>
      <!-- 按钮 -->
      <div class="buttonBox">
        <el-button
          v-if="active === 1 || active === 2"
          style="margin-top: 12px;"
          @click="prev"
        >上一步</el-button>
        <el-button
          v-if="active === 0 || active === 1 "
          style="margin-top: 12px;"
          type="primary"
          @click="next"
        >下一步</el-button>
        <el-button
          v-if="active === 2"
          style="margin-top: 12px;"
          type="primary"
          @click="listnext"
        >提交</el-button>
        <el-button
          v-if="active === 3"
          style="margin-top: 12px;"
          @click="xizaimoban"
        >查看简报</el-button>
        <el-button
          v-if="active === 3"
          style="margin-top: 12px;"
          @click="goindex"
        >返回</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { list, getDownLoadUrl } from '../../api/CreateBriefing.js'
import '../CreateBriefing/CreateBriefing.css'
import MUpload from '@/components/MUpload/MUpload.vue'
export default {
  name: 'SummaryPCGuidePage',
  comments: {
    MUpload
  },
  data() {
    return {
      url: '',
      historyid: '',
      inPercent: 0.1, // inPercent
      userid: '', // userId
      select: 0,
      active: 0,
      options: [{
        value: 'BART',
        label: 'BART'
      }, {
        value: 'ROBERTa',
        label: 'ROBERTa'
      }, {
        value: 'Seq2Seq',
        label: 'Seq2Seq'
      }, {
        value: 'TextRank',
        label: 'TextRank'
      }],
      value: '', // algorithmId
      textarea1: '',
      fileList: []
    }
  },
  created() {
    this.userid = this.$store.getters.userInfo.userid
  },

  mounted() {

  },
  methods: {
    onselect() {
      console.log(arguments)
    },
    autoUpload() {
      console.log('aaaaaaaaaaaaaaaaaaaaaaa')
      console.log(arguments)
    },
    goindex() {
      this.$router.push({ path: this.redirect || '/index' })
    },
    one() {
      this.select = 1
    },
    two() {
      this.select = 2
    },
    three() {
      this.select = 3
    },
    four() {
      this.select = 4
    },
    prev() {
      --this.active
      if (this.active < 0) this.active = 0
    },
    next() {
      if (this.active++ > 2) this.active = 0
    },
    listnext() {
      if (this.active++ > 2) this.active = 0
      list(this.value, this.textarea1, this.inPercent, this.userid).then((res) => {
        this.historyid = res.data.history.historyid
        console.log('我的', res)
        this.shuchu()
      })
    },
    shuchu() {
      getDownLoadUrl(this.historyid, this.select).then((res) => {
        this.url = res.data
        console.log('我的文档链接', res)
      })
    },
    xizaimoban() {
      console.log('我进来了')
      const iframe = document.createElement('iframe')
      iframe.style.display = 'none'
      iframe.style.height = 0
      iframe.src = this.url
      document.body.appendChild(iframe)
      setTimeout(() => { iframe.remove() }, 5 * 60 * 1000)
    },
    // 文件删除后 事件
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    //
    handlePreview(file) {
      console.log(file)
    },
    // 文件超出限制 事件
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    // 文件删除前 事件
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    },
    // 文件上传成功 事件
    success(res, response, file, fileList) {
      console.log('res', res)
      this.textarea1 = res.data
      // console.log('文件上传成功', file.response.data.fileUrl)
    }
  }
}
</script>

