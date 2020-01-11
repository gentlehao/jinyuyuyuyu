<template>
  <div class="home">
    <back-to-top></back-to-top>
    <Top></Top>
    <Header></Header>
    <div class="nav">
      <NavMenu activeIndex='1'></NavMenu>
    </div>
    <el-carousel trigger="click" height="320px">
      <el-carousel-item v-for="banner in 5" :key="banner" :interval="5000">
        <router-link :to="{name:'',query:''}"><el-image class="banner"></el-image></router-link>
      </el-carousel-item>
    </el-carousel>
    <div class="content" element-loading-background="rgba(255, 255, 255, 0.6)">
      <div class="someNum fz-16 pdt-20 fc-666">
        <i class="el-icon-info"></i>
      </div>
      <div class="recommend_goods">
        <el-row :gutter="20">
          <el-col :span="18">
            <i class="el-icon-goods fz-18 fc-666 pdb-20">今日商品推荐</i>
            <el-card :body-style="{ padding: '0px' }">
              <el-tabs v-model="activeRType" type="card">
                <el-tab-pane label="LDPE" name="LDPE">
                  <el-table
                    :data="recommendData"
                    stripe
                    style="width: 100%"
                    v-loading="true">
                    <el-table-column
                      prop="date"
                      label="日期"
                      width="180">
                    </el-table-column>
                    <el-table-column
                      prop="name"
                      label="姓名"
                      width="180">
                    </el-table-column>
                    <el-table-column
                      prop="address"
                      label="地址">
                    </el-table-column>
                  </el-table>
                </el-tab-pane>
                <el-tab-pane label="HDPE" name="HDPE"></el-tab-pane>
                <el-tab-pane label="LLDPE" name="LLDPE"></el-tab-pane>
                <el-tab-pane label="PPHM" name="PPHM"></el-tab-pane>
                <el-tab-pane label="PPCP" name="PPCP"></el-tab-pane>
                <el-tab-pane label="PVC" name="PVC"></el-tab-pane>
                <el-tab-pane label="ABS" name="ABS"></el-tab-pane>
                <el-tab-pane label="MPE" name="MPE"></el-tab-pane>
                <el-tab-pane label="更多>>" name="more"></el-tab-pane>
              </el-tabs>
            </el-card>
          </el-col>
          <el-col :span="6">
            <i class="el-icon-medal-1 fz-18 fc-666 pdb-20">热卖商品</i>
            <el-card :body-style="{ padding: '0px' }">
              <el-carousel height="200px" direction="vertical" :interval="5000">
                <el-carousel-item v-for="item in 3" :key="item">
                  <router-link :to="{name:'',query:''}"><el-image class="sellwell"></el-image></router-link>
                </el-carousel-item>
              </el-carousel>
            </el-card>
          </el-col>
        </el-row>
      </div>
      <div class="recommend_business">
        <el-row :gutter="20">
          <el-col :span="18">
            <i class="el-icon-s-cooperation fz-18 fc-666 pdb-20">推荐商家</i>
            <router-link :to="{name:'',query:''}"><span class="right">成为商家>></span></router-link>
            <div class="business">
              <el-card :body-style="{ padding: '0px'}" shadow="hover" v-for="i in 10" :key="i">
                  <el-image></el-image>
                  <div style="padding: 14px;">
                    <span>好吃的汉堡</span>
                  </div>
              </el-card>
            </div>
          </el-col>
          <el-col :span="6">
            <i class="el-icon-bell fz-18 fc-666 pdb-20">最新入驻</i>
            <el-card :body-style="{ padding: '0px' }">
              <el-carousel height="200px" direction="vertical" :interval="5000">
                <el-carousel-item v-for="item in 3" :key="item">
                  <router-link :to="{name:'',query:''}"><el-image class="sellwell"></el-image></router-link>
                </el-carousel-item>
              </el-carousel>
            </el-card>
          </el-col>
        </el-row>
      </div>
      <div class="trend">
        <div class="fz-18 fc-666 pdb-20"><Icon type="md-analytics"/>价格行情</div>
        <ve-line :data="priceData"></ve-line>
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

export default {
  name: 'home',
  data() {
    return {
      banners: [], //轮播图
      activeRType: 'LDPE', //当前推荐商品类型
      recommendData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
      priceData: {
        columns: ['日期', '访问用户', '下单用户', '下单率'],
        rows: [
          { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
          { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
          { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
          { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
          { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
          { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 },
          { '日期': '1/7', '访问用户': 4793, '下单用户': 4793, '下单率': 0.88 }
        ]
      }
    }
  },
  components: {
    backToTop,
    Top,
    Header,
    Footer,
    NavMenu
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.nav, .someNum {
  width: 1024px;
  margin: auto;
}
.recommend_goods, .recommend_business, .trend {
  width: 1024px;
  margin: 50px auto 0 auto;
}
.banner, .sellwell {
  height: 100%;
  width: 100%;
  background: skyblue;
}
.banner:hover {
  cursor: pointer;
}
.content {
  padding: 0 0 50px 0;
}
.recommend_goods .el-tabs__header{
  margin: 0;
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
}
.business:hover {
  cursor: pointer;
}
.clearfix:before, .clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
</style>