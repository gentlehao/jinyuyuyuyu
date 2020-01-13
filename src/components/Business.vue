<template>
    <div class="recommend_business">
      <el-row :gutter="20">
        <el-col :span="18">
          <i class="el-icon-s-cooperation fz-18 fc-666 pdb-20">推荐商家</i>
          <router-link :to="{name:'',query:''}"><span class="right">成为商家>></span></router-link>
          <div class="business">
            <el-card :body-style="{ padding: '0px'}" shadow="hover" v-for="i in 10" :key="i">
                <el-image></el-image>
                <div style="padding: 14px;">
                  <span>商家{{i}}</span>
                </div>
            </el-card>
          </div>
        </el-col>
        <el-col :span="6">
          <i class="el-icon-bell fz-18 fc-666 pdb-20">最新入驻</i>
          <el-card :body-style="{ padding: '0px' }">
            <el-carousel height="200px" direction="vertical" :interval="5000">
              <el-carousel-item v-for="item in 3" :key="item">
                <router-link :to="{name:'',query:''}"><el-image class="newBusiness"></el-image></router-link>
              </el-carousel-item>
            </el-carousel>
          </el-card>
        </el-col>
      </el-row>
    </div>
</template>
<script>
export default {
    name: 'business'
}
</script>

<style lang="scss" scoped>
.recommend_business{
  width: 1024px;
  margin: 50px auto 0 auto;
}
.business {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  border: 1px solid #EBEEF5;
  padding: 20px;
}
.business .el-card{
  margin: 10px;
  width: 15%;
}
.business .el-card:hover {
  cursor: pointer;
}
.clearfix:before, .clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.newBusiness {
  height: 100%;
  width: 100%;
}
</style>