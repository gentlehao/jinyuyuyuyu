<template>
  <div class="goodsDetail">
    <back-to-top></back-to-top>
    <Top></Top>
    <Header></Header>
    <div class="nav">
      <NavMenu :activeIndex="activeIndex"></NavMenu>
    </div>
    <div class="content">
      <div class="detail_head">
        <div class="goodsImg">
          <pic-zoom url="" :scale="3" :show-eidt="true" :scroll="true"></pic-zoom>
        </div>
        <div class="majorParams">
          <el-container>
            <el-header><h2>{{'name'}}</h2></el-header>
            <el-main>
              <p>报价：<span class="fz-20 fc-red">￥123.4</span></p>
              <p>实时库存：<span class="fz-16 fc-999"></span></p>
            </el-main>
            <el-footer>
              <Button size="large">价格洽谈</Button>
              <Button type="primary" size="large">立即下单</Button>
            </el-footer>
          </el-container>
        </div>
      </div>
      <div class="detail_content">
        <el-row :gutter="10">
          <el-col :span="18">
            <el-tabs type="border-card">
              <el-tab-pane label="商品详情">
                <el-card class="box-card">
                  <div slot="header" class="clearfix">
                    <span>主要参数</span>
                  </div>
                  <div v-for="o in 4" :key="o" class="text item">
                    <el-row :gutter="20">
                      <el-col :span="6"><div class="grid-content bg-purple">{{o}}</div></el-col>
                      <el-col :span="6"><div class="grid-content bg-purple">{{o}}</div></el-col>
                      <el-col :span="6"><div class="grid-content bg-purple">{{o}}</div></el-col>
                      <el-col :span="6"><div class="grid-content bg-purple">{{o}}</div></el-col>
                    </el-row>
                  </div>
                </el-card>
              </el-tab-pane>
              <el-tab-pane label="全部参数">
                <el-card class="box-card">全部参数</el-card>
              </el-tab-pane>
            </el-tabs>
          </el-col>
          <el-col :span="6">
            <div class="alike_title">
              <hr /><span><i class="el-icon-goods"></i>相似商品</span><hr />
            </div>
            <div class="alike_goods">
              <div class="good_box" v-for="good in 4" :key="good">
                <el-card :body-style="{ padding: '0px'}" shadow="hover">
                  <router-link :to="{name:'goodsDetail',query:{activeIndex: '2'}}"><el-image></el-image></router-link>
                  <div class="fz-18 fc-red pd-5">111111</div>
                  <router-link :to="{name:'goodsDetail',query:{activeIndex: '2'}}"><div class="pd-5">111111111</div></router-link>
                  <router-link :to="{name:'goodsDetail',query:{activeIndex: '2'}}"><div class="fc-666 pd-5"><i class="el-icon-s-cooperation"></i>1111111</div></router-link>
                </el-card>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import backToTop from '@/components/BackToTop'
import Top from '@/components/Top'
import Header from '@/components/Header'
import NavMenu from '@/components/NavMenu'
import Footer from '@/components/Footer'
import PicZoom from 'vue-piczoom'

export default {
  data() {
    return {
      activeIndex: '2'
    }
  },
  created() {
    this.activeIndex = this.$route.query.activeIndex
  },
  components: {
    backToTop,
    Top,
    Header,
    NavMenu,
    Footer,
    PicZoom
  },
}
</script>

<style lang="scss" scoped>
.nav {
  border-bottom: solid 1px #e6e6e6;
}
.detail_head, .detail_content {
  width: 1024px;
  margin: 30px auto 0 auto;
  overflow: hidden;
}
.goodsImg {
  width: 300px;
  height: 300px;
  float: left;
}
.majorParams {
  float: left;
  margin: 0 30px;
}
.el-container {
  height: 300px;
}
.majorParams button {
  margin: 0 20px 0 0;
}
.alike_title{
  text-align:center;
  margin:0 auto;
  height:20px;
  font-size: 15px;
  color: #009688;
  hr{
    width:20%;
    display:inline-block;
    vertical-align:middle;
    border-color: #defffc;
  }
  span{
    padding: 0 10px;
  }
}
.good_box {
  width: 80%;
  margin: 15px auto;
}
</style>