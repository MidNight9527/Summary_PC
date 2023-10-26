<template>
  <!-- <el-image style="position:absolute;width: 100%;height: 100%;z-index: 10000;" :src="src" fit="fill"></el-image> -->
  <el-upload
    style="position:absolute;width: 100%;height: 100%;z-index: 10001;"
    :auto-upload="false"
    @change="onupload"
  >
    <template #trigger><el-button
      size="small"
      type="primary"
    >
      <el-image
        style="position:absolute;width: 100%;height: 100%;z-index: 10000; left: 0%; top: 0%;"
        :src="src"
        fit="fill"
      />
    </el-button></template>
  </el-upload>
</template>
<script lang="ts">
export default {
  props: {
    onupload: { type: Function },
    src: { type: String }
  }
}
</script>
