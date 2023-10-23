<template>
  <div>
    <h3>文章论坛</h3>
    <div class="table">
      <el-table
        stripe
        :data="historyLable"
        style="width: 100%"
      >
        <el-table-column
          label="序号"
          width="200"
        >
          <template slot-scope="Scope">
            <!-- 不让序号是id 否则会出现断层 -->
            {{ Scope.$index+(page.pageNum -1)*page.size +1 }}
          </template>
        </el-table-column>
        <el-table-column
          prop="user.username"
          label="用户名称"
          width="200"
        />
        <el-table-column
          show-overflow-tooltip
          prop="originaltext"
          label="原始文章"
          width="480"
        />
        <el-table-column
          show-overflow-tooltip
          prop="summarytext"
          label="简化文章"
          width="300"
        />
        <el-table-column
          label="操作"
          fixed="right"
          width="250px"
        >
          <!-- 删除和修改按键 -->
          <template slot-scope="Scope">
            <el-button
              type="primary"
              size="mini"
              @click="update(Scope.row.historyid)"
            >去看看</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="page">
      <el-pagination
        :current-page="page.pageNum"
        :page-sizes="[10, 15]"
        :page-size="page.size"
        layout="total, sizes,prev, pager, next"
        :total="page.total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>

</template>

<script>
import { selectAll } from '../../api/SeeMore.js'
export default {
  data() {
    return {
      historyLable: [],
      page: {
        pageNum: 1, // 当前页数
        size: 10, // 显示条数
        total: 0 // 总共页数
      },
      tableLoading: false // 加载图标显示状态
    }
  },

  created() {
    this.username = this.$store.getters.userInfo.username
    this.selectAllsy()
  },

  updated() {
  },

  methods: {
    update(historyid) {
      this.$router.push({ path: '/BriefingDetails', query: { historyid: historyid }})
    },

    /* 分页操作 */
    handleSizeChange(val) {
      this.page.size = val
      this.selectAllsy()
    },

    handleCurrentChange(val) {
      this.page.pageNum = val
      this.selectAllsy()
    },
    selectAllsy() {
      this.tableLoading = true
      selectAll(this.page.pageNum, this.page.size).then(res => {
        console.log('获取数据', res)
        if (res.httpCode === 200) {
          this.page.total = res.data.pageTotal
          this.page.pageNum = res.data.pageNum
          this.page.size = res.data.pageSize
          this.historyLable = res.data.list.reverse()
          this.tableLoading = false
        }
      })
    }

  }
}

</script>

<style>
.page {
  margin: 20px 0;
  float: right;
}
</style>
