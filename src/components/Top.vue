<template>
  <div class="top fz-14 lh-35">
    <div class="top_content auto">
      <div>
        <router-link :to="{path:'/'}"><i class="el-icon-s-home">xxx网首页</i></router-link>
        <span class="mgl-20">欢迎来到xxx网，</span>
        <span>请您&nbsp;&nbsp;<router-link :to="{name:'login',query:'sgi'}">登录</router-link></span>
        <span>&nbsp;&nbsp;或&nbsp;&nbsp;<router-link :to="{name:'login',query:'sgu'}">注册</router-link></span>
      </div>
      <div>
        <span class="mgr-5">客服热线:</span><span class="fw-blod fc-read mgr-20">0571-87661392</span>
        <el-dropdown>
          <span class="el-dropdown-link">
            <i class="el-icon-user"></i>个人中心<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人信息</el-dropdown-item>
            <el-dropdown-item>地址管理</el-dropdown-item>
            <el-dropdown-item divided>我的商品</el-dropdown-item>
            <el-dropdown-item>我的审批</el-dropdown-item>
            <el-dropdown-item>我的订单</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'top',
  components: {
    
  },
  methods: {}
}
</script>

<style lang="scss">
.top {
  background:#FFF0F5;
}
.top_content {
  min-width: 1024px;
  width: 1024px;
  display: flex;
  justify-content: space-between;
}
a {
  color: #409EFF;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}
</style>