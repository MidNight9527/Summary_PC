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
            <!-- 第一行 -->
            <div class="stepsOne_line_Box_title">模板</div>
            <!-- 第二行 参数内容 -->
            <div class="stepsOne_line_Box_contentBox">
              <!-- 第二行参数内容 第一行 -->
              <div class="stepsOne_line_Box_content_firstLine">
                <div class="stepsOne_line_Box_content_firstLine_Oneitem">参数</div>
                <div class="stepsOne_line_Box_content_firstLine_Twoitem">参数</div>
              </div>
              <!-- 第二行参数内容 第二行 -->
              <div class="stepsOne_line_Box_content_SecondLine">
                <div class="stepsOne_line_Box_content_SecondLine_item">参数</div>
              </div>
            </div>
            <!-- 按钮 -->
            <div class="stepsOne_line_Box_button">
              <el-button
                type="primary"
                class="stepsOne_line_Box_button"
                size="mini"
              >选择</el-button>
            </div>
          </div>
          <!-- 右部分 -->
          <div class="stepsOne_line_rightBox">
            <!-- 第一行 -->
            <div class="stepsOne_line_Box_title">模板</div>
            <!-- 第二行 参数内容 -->
            <div class="stepsOne_line_Box_contentBox">
              <!-- 第二行参数内容 第一行 -->
              <div class="stepsOne_line_Box_content_firstLine">
                <div class="stepsOne_line_Box_content_firstLine_Oneitem">参数</div>
                <div class="stepsOne_line_Box_content_firstLine_Twoitem">参数</div>
              </div>
              <!-- 第二行参数内容 第二行 -->
              <div class="stepsOne_line_Box_content_SecondLine">
                <div class="stepsOne_line_Box_content_SecondLine_item">参数</div>
              </div>
            </div>
            <!-- 按钮 -->
            <div class="stepsOne_line_Box_button">
              <el-button
                type="primary"
                class="stepsOne_line_Box_button"
                size="mini"
              >选择</el-button>
            </div>
          </div>
        </div>
        <!-- 第二行 -->
        <div class="stepsTwo_lineBox">
          <!-- 左部分 -->
          <div class="stepsOne_line_leftBox">
            <!-- 第一行 -->
            <div class="stepsOne_line_Box_title">模板</div>
            <!-- 第二行 参数内容 -->
            <div class="stepsOne_line_Box_contentBox">
              <!-- 第二行参数内容 第一行 -->
              <div class="stepsOne_line_Box_content_firstLine">
                <div class="stepsOne_line_Box_content_firstLine_Oneitem">参数</div>
                <div class="stepsOne_line_Box_content_firstLine_Twoitem">参数</div>
              </div>
              <!-- 第二行参数内容 第二行 -->
              <div class="stepsOne_line_Box_content_SecondLine">
                <div class="stepsOne_line_Box_content_SecondLine_item">参数</div>
              </div>
            </div>
            <!-- 按钮 -->
            <div class="stepsOne_line_Box_button">
              <el-button
                type="primary"
                class="stepsOne_line_Box_button"
                size="mini"
              >选择</el-button>
            </div>
          </div>
          <!-- 右部分 -->
          <div class="stepsOne_line_rightBox">
            <!-- 第一行 -->
            <div class="stepsOne_line_Box_title">模板</div>
            <!-- 第二行 参数内容 -->
            <div class="stepsOne_line_Box_contentBox">
              <!-- 第二行参数内容 第一行 -->
              <div class="stepsOne_line_Box_content_firstLine">
                <div class="stepsOne_line_Box_content_firstLine_Oneitem">参数</div>
                <div class="stepsOne_line_Box_content_firstLine_Twoitem">参数</div>
              </div>
              <!-- 第二行参数内容 第二行 -->
              <div class="stepsOne_line_Box_content_SecondLine">
                <div class="stepsOne_line_Box_content_SecondLine_item">参数</div>
              </div>
            </div>
            <!-- 按钮 -->
            <div class="stepsOne_line_Box_button">
              <el-button
                type="primary"
                class="stepsOne_line_Box_button"
                size="mini"
              >选择</el-button>
            </div>
          </div>
        </div>
      </div>
      <!-- 步骤二 -->
      <div
        v-if="active === 1"
        class="stepsTwoBox"
      >
        <!-- 第一行 -->
        <div class="stepsTwo_oneLineBox">
          <div class="stepsTwo_lineTitle">模型选择</div>
          <el-select
            v-model="value"
            class="stepsTwo_linePicker"
            placeholder="请选择"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
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
          action="https://www.woodymidnight.cn/Summary/document/uploadFile"
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
          @click="next"
        >提交</el-button>
        <el-button
          v-if="active === 3"
          style="margin-top: 12px;"
        >查看简报</el-button>
        <el-button
          v-if="active === 3"
          style="margin-top: 12px;"
        >返回</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import '../CreateBriefing/CreateBriefing.css'
export default {
  name: 'SummaryPCGuidePage',

  data() {
    return {
      active: 0,
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '',
      textarea1: '',
      fileList: []
    }
  },

  mounted() {

  },

  methods: {
    prev() {
      --this.active
      if (this.active < 0) this.active = 0
    },
    next() {
      if (this.active++ > 2) this.active = 0
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
    success(response, file, fileList) {
      console.log('文件上传成功', file.response.data.fileUrl)
    }
  }
}
</script>

