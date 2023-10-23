<template>
  <el-upload
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
  </el-upload>
</template>
<script lang="ts">
export default {
  name: 'MUpload',
  props: {
    onselect: {
      type: Function
    },
    onupload: {
      type: Function
    },
    autoUpload: {
      type: Function
    }
  }
}
</script>
