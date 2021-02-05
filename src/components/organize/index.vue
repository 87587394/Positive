<style lang='less'>
    .box {
        height: 1500px;
        display: flex;
        .leftBox{
            width: 30%;
            background-color: skyblue;
        }
        .rightBox{
            width: 70%;
            background-color: red;
        }
    }
    a {
    color: red;
    
    }
</style>
<template>
    <div class="box">
        <div class="leftBox">
            <!-- 
             -->
            <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">员工</template>
          <el-menu-item index="1-1">
              <router-link to="/organize/list">列表</router-link>
          </el-menu-item>
          <el-menu-item index="1-2">
              <router-link to="/organize/detail">详情</router-link>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">员工</template>
          <el-menu-item index="2-1">
              <router-link to="/organize/list">职务列表</router-link>
          </el-menu-item>
          <el-menu-item index="2-2">
              <router-link to="/organize/detail">新增职务</router-link>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>

    </el-menu>
        </div>
        <div class="rightBox">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>