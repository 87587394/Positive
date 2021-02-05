<style lang='less'>
header {
    background: #545c64;
  display: flex;
  justify-content: space-between;
  .menu-demo {
    width: 70%;
  }
  h1{
      width: 30%;
      text-align: center;
  }
}
</style>
<template>
  <div>
    <!-- 头部 -->
    <header>
      <h1>crm客户管理系统</h1>
      <el-menu
        class="menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1">
          <router-link to="/organize">组织结构</router-link>
        </el-menu-item>
        <el-menu-item index="2"
          ><router-link to="/customer">客户管理</router-link></el-menu-item
        >
      </el-menu>
    </header>

    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>