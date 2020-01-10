<template>
  <div class="footer pdtb-20">
    <div class="footer_content auto fc-white ">
      <div class="wxMp center">
        <p class="fz-18 fw-blod">扫一扫，使用xxx网微信小程序</p>
        <el-image></el-image>
      </div>
      <el-divider direction="vertical"></el-divider>
      <div class="offiacc center">
        <p class="fz-18 fw-blod">扫一扫，关注xxx网微信公众号</p>
        <el-image></el-image>
      </div>
      <el-divider direction="vertical"></el-divider>
      <div class="callUs center">
        <p class="fz-18 fw-blod">联系我们</p>
        <ul>
          <li>工作时间：</li>
          <li>服务热线：</li>
          <li>电子邮箱：</li>
          <li></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
.footer{
  background:#87CEFA;
}
.footer_content{
  width: 1024px;
  display: flex;
  justify-content: space-between;
}
.footer_content .el-divider--vertical{
  height: auto;
}
</style>