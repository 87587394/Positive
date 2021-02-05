<template>
  <div class="container">
    <div class="header">
      <h2>板鸭拖车</h2>
      <el-button type="success" @click="dialogVisible = true"
        >新建任务</el-button
      >
    </div>
    <el-divider content-position="left">------</el-divider>
    <section>
      <el-tag :type="type == 0 ? 'success' : ''" @click="type = 0">全部</el-tag>
      <el-tag :type="type == 1 ? 'success' : ''" @click="type = 1"
        >已完成</el-tag
      >
      <el-tag :type="type == 2 ? 'success' : ''" @click="type = 2"
        >未完成</el-tag
      >
    </section>
    <el-divider content-position="center">------------</el-divider>
    <el-table :data="handleDate" border style="width: 100%">
      <el-table-column prop="id" label="编号" width="50" align="center">
      </el-table-column>
      <el-table-column prop="task" label="任务描述" width="180" align="center">
      </el-table-column>
      <el-table-column
        prop="state"
        label="状态"
        width="80"
        align="center"
        :formatter="handleState"
      >
      </el-table-column>
      <el-table-column
        prop="time"
        label="完成时间"
        align="center"
        :formatter="handleTime"
      >
      </el-table-column>
      <el-table-column prop="" label="操作" align="center">
        <template slot-scope="scope">
          <el-button @click="handleDel(scope.row)" size="small">删除</el-button>
          <el-button size="small" @click="handleComp(scope.row)" v-if="scope.row.state==1"
            >完成</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="80%"
      :before-close="handleClose"
    >
      <span>
        <el-form
          :model="info"
          ref="ruleForm"
          label-width="150px"
          class="demo-ruleForm"
          :rules="rules"
        >
          <el-form-item label="任务描述" prop="desc">
            <el-input v-model="info.desc" placeholder="请输入内容"></el-input>
          </el-form-item>
          <el-divider content-position="left">-----------</el-divider>
          <el-form-item label="预计完成时间" prop="time">
            <el-date-picker
              v-model="info.time"
              type="datetime"
              placeholder="选择日期时间"
            >
            </el-date-picker>
          </el-form-item>
        </el-form>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import moment from "moment";
export default {
  components: {},
  data() {
    return {
      type: 0,
      dialogVisible: false,
      info: {
        desc: "",
        time: "",
      },
      rules: {
        desc: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 55, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        time: [{ required: true, message: "请输入任务时间", trigger: "blur" }],
      },
    };
  },
  methods: {
    handleClose() {
      this.$confirm("确定取消", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.dialogVisible = false;
          this.$refs.ruleForm.resetFields();
        })
        .catch(() => {});
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$store.dispatch("todo/enter", this.info).then((res) => {
            if (res.code == 0) {
              this.$message({
                message: "恭喜您，新增成功",
                type: "success",
              });
            } else {
              this.$message({
                message: "很遗憾，新增失败",
                type: "error",
              });
            }
            this.$store.dispatch("todo/addtoL");
            this.dialogVisible = false;
            this.$refs.ruleForm.resetFields();
          });
        }
      });
    },
    handleState(row) {
      let { state } = row;
      return state == 2 ? "已完成" : "未完成";
    },
    handleTime(row) {
      let { state, time, complete } = row;
      return state == 2 ? complete : time;
    },
    handleDel(row) {
      let { id } = row;
      this.$confirm(`您确定要删除${id}号数据吗`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$store.dispatch("todo/del", id).then((res) => {
            if (res.code == 0) {
              this.$message({
                message: "恭喜您，删除成功",
                type: "success",
              });
            } else {
              this.$message({
                message: "删除失败",
                type: "error",
              });
            }
            this.$store.dispatch("todo/addtoL");
          });
        })
        .catch(() => {});
    },
    handleComp(row) {
      let { id ,state} = row;
      if(state==2) return;
      this.$confirm(`您确定要把${id}号数据改为完成吗`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$store.dispatch("todo/comp", id).then((res) => {
            if (res.code == 0) {
              this.$message({
                message: "恭喜您，更改成功",
                type: "success",
              });
            } else {
              this.$message({
                message: "更改失败",
                type: "error",
              });
            }
            this.$store.dispatch("todo/addtoL");
          });
        })
        .catch(() => {});
    },
  },
  created() {
    this.$store.dispatch("todo/addtoL");
  },
  computed: {
    tableData() {
      return this.$store.state.todo.todoList;
    },
    handleDate() {
      if (this.type == 0) {
        return this.tableData;
      }
      return this.tableData.filter((item) => {
        return item.state == this.type;
      });
    },
  },
};
</script>

<style lang="less">
.container {
  width: 800px;
  box-sizing: border-box;
  border: 2px solid red;
  padding: 20px;
  margin: 20px auto;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  section span {
    margin-right: 20px;
  }
}
</style>