<template>
  <div class="home">
    <back-to-top></back-to-top>
    <Top></Top>
    <Header></Header>
    <div class="nav">
      <NavMenu :activeIndex="activeIndex"></NavMenu>
    </div>
    <el-carousel trigger="click" height="320px">
      <el-carousel-item v-for="banner in 5" :key="banner" :interval="5000">
        <router-link :to="{name:'',query:''}">
          <el-image class="banner"></el-image>
        </router-link>
      </el-carousel-item>
    </el-carousel>
    <div class="content" element-loading-background="rgba(255, 255, 255, 0.6)">
      <div class="someNum fz-16 pdt-20 fc-666">
        <i class="el-icon-info"></i>
      </div>
      <div class="recommend_goods">
        <el-row :gutter="20">
          <el-col :span="18">
            <i class="el-icon-s-goods fz-18 fc-666 pdb-20">今日商品推荐</i>
            <router-link :to="{name:'',query:''}">
              <span class="right">更多>></span>
            </router-link>
            <el-card :body-style="{ padding: '0px' }">
              <el-tabs v-model="activeRType" type="card">
                <el-tab-pane label="LDPE" name="LDPE">
                  <el-table :data="recommendData" stripe style="width: 100%" v-loading="true">
                    <el-table-column prop="date" label="日期" width="180"></el-table-column>
                    <el-table-column prop="name" label="姓名" width="180"></el-table-column>
                    <el-table-column prop="address" label="地址"></el-table-column>
                  </el-table>
                </el-tab-pane>
                <el-tab-pane label="HDPE" name="HDPE"></el-tab-pane>
                <el-tab-pane label="LLDPE" name="LLDPE"></el-tab-pane>
                <el-tab-pane label="PPHM" name="PPHM"></el-tab-pane>
                <el-tab-pane label="PPCP" name="PPCP"></el-tab-pane>
                <el-tab-pane label="PVC" name="PVC"></el-tab-pane>
                <el-tab-pane label="ABS" name="ABS"></el-tab-pane>
                <el-tab-pane label="MPE" name="MPE"></el-tab-pane>
              </el-tabs>
            </el-card>
          </el-col>
          <el-col :span="6">
            <i class="el-icon-medal-1 fz-18 fc-666 pdb-20">热卖商品</i>
            <el-card :body-style="{ padding: '0px' }">
              <el-carousel height="200px" direction="vertical" :interval="5000">
                <el-carousel-item v-for="item in 3" :key="item">
                  <router-link :to="{name:'',query:''}">
                    <el-image class="sellwell"></el-image>
                  </router-link>
                </el-carousel-item>
              </el-carousel>
            </el-card>
          </el-col>
        </el-row>
      </div>
      <Business></Business>
      <div class="trend">
        <div class="fz-18 fc-666 pdb-20">
          <Icon type="md-analytics" />市场行情
        </div>
        <el-row>
          <el-col :span="18">
            <div></div>
            <ve-line :data="priceData" :settings="chartSettings"></ve-line>
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
import Business from '@/components/Business'
import Footer from '@/components/Footer'

export default {
  name: 'home',
  data() {
    this.chartSettings = {
      axisSite: { right: ['成交量'] },
      yAxisType: ['MB', 'KMB'],
      yAxisName: ['价格', '成交量']
    }
    return {
      activeIndex: '1', //导航菜单当前状态
      banners: [], //轮播图
      activeRType: 'LDPE', //当前推荐商品类型
      recommendData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ],
      priceData: {
        columns: ['日期', '价格', '成交量'],
        rows: [
          { 日期: '1/1', 价格: 1393, 成交量: 1093 },
          { 日期: '1/2', 价格: 3530, 成交量: 3230 },
          { 日期: '1/3', 价格: 2923, 成交量: 2623 },
          { 日期: '1/4', 价格: 1723, 成交量: 1423 },
          { 日期: '1/5', 价格: 3792, 成交量: 3492 },
          { 日期: '1/6', 价格: 4593, 成交量: 4293 },
          { 日期: '1/7', 价格: 4793, 成交量: 4793 }
        ]
      }
    }
  },
  components: {
    backToTop,
    Top,
    Header,
    NavMenu,
    Business,
    Footer
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.nav {
  border-bottom: solid 1px #e6e6e6;
}
.someNum {
  width: 1024px;
  margin: auto;
}
.recommend_goods,
.trend {
  width: 1024px;
  margin: 50px auto 0 auto;
}
.banner,
.sellwell {
  height: 100%;
  width: 100%;
}
.banner:hover {
  cursor: pointer;
}
.recommend_goods .el-tabs__header {
  margin: 0;
}
</style>