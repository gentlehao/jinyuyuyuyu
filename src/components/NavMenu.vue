<template>
  <div class="navMenu">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1"><router-link :to="{path:'/'}">首页</router-link></el-menu-item>
      <el-menu-item index="2"><router-link :to="{path:'/'}">自营市场</router-link></el-menu-item>
      <el-menu-item index="3"><router-link :to="{path:'/'}">供应商供应</router-link></el-menu-item>
      <el-menu-item index="4"><router-link :to="{path:'/'}">价格行情</router-link></el-menu-item>
      <el-menu-item index="5"><router-link :to="{path:'/'}">问题咨询</router-link></el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'navMenu',
  props: {
    activeIndex:{
      type: String,
      default: '1'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>