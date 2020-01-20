<template>
  <div class="goodsList">
    <back-to-top></back-to-top>
    <Top></Top>
    <Header></Header>
    <div class="nav">
      <NavMenu :activeIndex="activeIndex"></NavMenu>
    </div>
    <div class="content">
      <div class="filter">
        <List border>
            <ListItem>
              <span>厂家：</span>
              <div class="_factor"></div>
            </ListItem>
            <ListItem>
              <span>种类：</span>
              <div class="_class"><Tag type="border" class="mgl-10" v-for="i in 6" :key="i">成品</Tag></div>
            </ListItem>
            <ListItem>
              <span>材料：</span>
              <div class="_material"><Tag type="border" class="mgl-10" v-for="i in 6" :key="i">PVC</Tag></div>
            </ListItem>
        </List>
      </div>
      <div class="goods">
        <el-tabs v-model="activeRType" type="border-card" @tab-click="Sort">
          <el-tab-pane v-for="item in sortList" :key="item.name" :label="item.label" :name="item.name">
            <div>{{goodsList}}</div>
          </el-tab-pane>
        </el-tabs>
      </div>
      <div class="page">
        <Page :total="goodsList.length" show-elevator class="pages" />
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
  name: 'goodsList',
  data() {
    return {
      activeIndex: '2', //导航菜单当前状态
      // tableData: [], //利用空表格的排序
      sortList: [
        {
          label: '综合', //排序名
          name: 'comprehensive', //排序标签名
          rules: '00', //排序规则码
        },
        {
          label: '价格', //排序名
          name: 'price', //排序标签名
          rules: '10', //排序规则码
        },
        {
          label: '销量', //排序名
          name: 'volume', //排序标签名
          rules: '20', //排序规则码
        }
      ],
      sortBackups: [
        {
          label: '综合', //排序名
          name: 'comprehensive', //排序标签名
          rules: '00', //排序规则码
        },
        {
          label: '价格', //排序名
          name: 'price', //排序标签名
          rules: '10', //排序规则码
        },
        {
          label: '销量', //排序名
          name: 'volume', //排序标签名
          rules: '20', //排序规则码
        }
      ],//备用排序列表
      activeRType: 'comprehensive', //默认排序
      goodsList: [], //查回的商品
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
    Footer
  },
  methods: {
    Sort(tab) {
      let index = Number(tab.index)
      if(index){
        this.sortList[index].rules = this.sortList[index].rules.slice(1,2) == '0'?(index+'1'):(index+'0')
        switch(index) {
          case 1:
            this.$set(this.sortList[index], 'label', this.sortList[index].rules.slice(1,2) == '0'?'价格由高到低':'价格由低到高')
            break
          case 2:
            this.$set(this.sortList[index], 'label', this.sortList[index].rules.slice(1,2) == '0'?'销量由高到低':'销量由低到高')
            break
          default:
            return
        }
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.nav {
  border-bottom: solid 1px #e6e6e6;
}
.filter, .page, .goods{
  width: 1024px;
    margin: 30px auto 0 auto;
}
.pages {
  display: inline-block;
}
</style>