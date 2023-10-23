<template>
  <div class="background">
    <img
      src="../../icons/indexphoto.jpg"
      class="img"
    >
    <div class="NOhaveuerifo">
      <div class="glide">体验游客版萃文匠心的魅力</div>
      <img
        class="downward"
        src="../../icons/downward.png"
      >
      <div class="BigFlex">
        <div class="LeftInput">
          <!-- 这个div是左侧的输入框 -->
          <div class="yuanwen">原文</div>
          <div class="input">
            <el-input
              v-model="textarea2"
              type="textarea"
              :autosize="{ minRows:17, maxRows: 17}"
              placeholder="请输入内容"
              style="width:300px;
                   margin-left:-120px;
                   margin-top:15px;
                   box-shadow: 10px 10px 15px -10px
                   border-radius: 15px;
            "
              @input="search($event)"
            />
          </div>
        </div>
        <div class="ChoiceConversion">
          <!-- 转换和选择器 -->
          <!-- <el-select
            v-model="value"
            placeholder="请选择"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              style="font-family: 楷体;"
            />
          </el-select> -->
          <img
            src="../../icons/conversion.png"
            class="conversion"
            @click="toConversion"
          >
        </div>
        <!-- 右侧的文章 -->
        <div class="reightInput">
          <!-- 这个div是左侧的输入框 -->
          <div class="zhaiyao">摘要文本</div>
          <div class="inputtwo">
            <el-input
              v-model="textarea3"
              type="textarea"
              :disabled="disabled"
              :autosize="{ minRows:17, maxRows: 17}"
              placeholder="请先输入转换文章"
              style="width:300px;
                   margin-left:-120px;
                   margin-top:15px;
                  box-shadow: 10px 10px 15px -10px
                   border-radius: 15px;
            "
            />
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="username === undefined"
      class="Warningmessage"
    >
      欢迎你的使用，如果想使用更多其他功能，请先登录！！！
    </div>
  </div>
</template>

<script>
import './index.css'
import { getSummery } from '../../api/index.js'
export default {
  data() {
    return {
      username: '',
      textarea2: '', // 原文
      textarea3: '', // 翻译后
      inPercent: 0.1
    }
  },

  created() {
    this.username = this.$store.getters.userInfo.username
  },

  updated() {

  },

  methods: {
    toConversion() {
      getSummery(this.textarea2, this.inPercent).then(res => {
        console.log('测试转换效果的', this.username)
        if (res.httpCode === 200) {
          this.textarea2 = ''
          this.textarea3 = res.data
          this.disabled = false
        } else {
          this.$notify({
            title: '本文不适合做摘要处理,请重新输入'
          })
          this.textarea2 = ''
        }
      })
    }

  }

}
</script>

