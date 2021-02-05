<style lang="less">
.container {
  box-sizing: border-box;
  padding: 20px;
  margin: 20px auto;
  // width: 600px;
  border: 2px solid red;
  .headBox {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  section {
    span {
      margin-right: 10px;
    }
  }
}
</style>
<template>
  <div class="container">
    <!-- 头部的结构 -->
    <header class="headBox">
      <h2>板牙拖车</h2>
      <el-button type="success" @click="dialogVisible = true"
        >新建任务</el-button
      >
    </header>

    <!-- 分割线 -->
    <el-divider content-position="left">板牙拖车</el-divider>

    <!-- 三个tag选择按钮 -->
    <section>
      <el-tag :type="type === 0 ? 'success' : 'info'" @click="type = 0"
        >全部</el-tag
      >
      <el-tag :type="type === 1 ? 'success' : 'info'" @click="type = 1"
        >未完成</el-tag
      >
      <el-tag :type="type === 2 ? 'success' : 'info'" @click="type = 2"
        >已完成</el-tag
      >
    </section>
    <!-- 分割线 -->
    <el-divider content-position="left">板牙拖车</el-divider>
    <!-- 这是表格 -->
    <el-table :data="tableDate" style="width: 100%" :border="true" stripe>
      <el-table-column prop="id" label="编号" width="50" align="center">
      </el-table-column>
      <el-table-column prop="task" label="任务描述" width="180" align="center">
      </el-table-column>
      <el-table-column
        prop="state"
        label="状态"
        width="180"
        align="center"
        :formatter="handleState"
      >
      </el-table-column>
      <el-table-column
        prop="time"
        label="完成时间"
        width="100"
        align="center"
        :formatter="handleTime"
      >
      </el-table-column>
      <el-table-column prop="" label="操作" align="center">
        <!-- <el-button size="mini">删除</el-button>
        <el-button size="mini">完成</el-button> -->
        <template slot-scope="scope">
          <el-button @click="handleDel(scope.row)" size="small">删除</el-button>
          <el-button size="small">完成</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 这是模态框 -->
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="90%"
      :before-close="handleClose"
      :close-on-click-modal="false"
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
          <el-divider content-position="left">请离远一些</el-divider>
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
        <el-button type="primary" @click="addTask">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import moment from "moment";
import { addTaskList,delTodoList} from "../api/todo";

export default {
  data() {
    return {
      type: 0,
      // tableDate: [
      //   {
      //     id: 1,
      //     state: 0,
      //     task: "我是第一个任务",
      //     time: "2020-12-21 08:12:00",
      //   },
      //   {
      //     id: 2,
      //     state: 1,
      //     task: "我是第二个任务",
      //     time: "2020-12-21",
      //   },
      // ],
      dialogVisible: false,
      info: {
        desc: "",
        time: "",
      },
      rules: {
        desc: [
          { required: true, message: "请输入任务描述", trigger: "blur" },
          { min: 1, max: 5, message: "长度在 1 到 5 个字符", trigger: "blur" },
        ],
        time: [{ required: true, message: "请输入时间", trigger: "blur" }],
      },
    };
  },
  methods: {
    handleClose() {
      // 在dialog关闭之前会执行和这个函数
      console.log("用户想关闭");
      // $confirm函数的执行结果是一个promise实例，如果当前用户点击的是ok，那当前的promise的实例就是成功态，否则就是失败态
      this.$confirm("您确定要关闭当前新建窗口吗?", "警告", {
        confirmButtonText: "ok",
        cancelButtonText: "no",
        type: "error",
      })
        .then(() => {
          // 用户点击的是ok就执行此处
          this.dialogVisible = false; // 关闭当前的模态框
          this.$refs.ruleForm.resetFields(); // 重置表单
        })
        .catch(() => {
          // 用户点击的是no就执行此处
        });
    },
    handleState(row) {
      console.log(row);
      let state = row.state;
      return state == 1 ? "已完成" : "未完成";
    },
    handleTime(row) {
      let { state, complete, time } = row;
      return state == 1 ? time : complete;
    },
    handleDel(row) {
      let { id } = row;
      this.$confirm(`您确定要删除${id}好数据吗`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          return delTodoList({id:id})
        }).then((res)=>{
          if(res.code ==0){
            this.$message({
              message:'删除成功',
              type:'success'
            });
          }
          else {
            this.$message({
              message:'删除失败',
              type:'error'
            });
          }
          this.$store.dispatch("todo/updateTodoListAction");
        })
        .catch(() => {});
    },
    addTask() {
      console.log("用户想发送新建任务的接口");
      // this.$refs.ruleForm.validate();// 对都有的表单进行校验
      // this.$refs.ruleForm.resetFields(); // 重置表单

      // validate执行能够对整个表单进行校验
      this.$refs.ruleForm.validate((valid) => {
        // valid，如果当前所有的表单校验都通过，那valid的值就是true，否则就是false
        // 下边的逻辑就可以通过valid的值做进一步的判断
        if (!valid) return;

        // console.log("在这里可以进行正常的新建任务请求了");

        // 此时后台想要的time参数的格式是 'yyyy-mm-dd hh:mm:ss'
        let time = moment(this.info.time).format("YYYY-MM-DD HH:mm:ss");
        console.log("====================================");
        console.log(time);
        console.log("====================================");
        let params = {
          task: this.info.desc,
          time,
        };
        addTaskList(params).then((res) => {
          let { code } = res;
          if (code == 0) {
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
          this.dialogVisible = false; // 关闭模态框
          this.$refs.ruleForm.resetFields(); // 重置表单
          this.$store.dispatch("todo/updateTodoListAction"); // 重新请求数据
        });
      });
    },
  },
  computed: {
    tableDate() {
      // 每一次计算的时候，都需要按照当期的type值过滤一下
      let todoList = this.$store.state.todo.todoList;
      if (this.type == 0) {
        return todoList;
      }

      return todoList.filter((item) => {
        return item.state === this.type;
      });
    },
  },
  created() {
    // 发送axios请求，当请求成功以后，把请求回来的数据存储到data中
    this.$store.dispatch("todo/updateTodoListAction");
  },
};
</script>