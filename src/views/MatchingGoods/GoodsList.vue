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
              <div class="_factor" style="width:920px"></div>
            </ListItem>
            <ListItem>
              <span>种类：</span>
              <div class="_class" style="width:920px">
                <el-collapse>
                  <el-collapse-item name="1">
                    <template slot="title">
                      <CheckboxGroup v-model="filterList" size="small">
                        <Checkbox v-for="label in class_.first" :key="label" :label="label" border></Checkbox>
                        <Checkbox label="樱桃" border></Checkbox>
                        <Checkbox label="西瓜" border></Checkbox>
                        <Checkbox label="西瓜" border></Checkbox>
                        <Checkbox label="樱桃" border></Checkbox>
                        <Checkbox label="西瓜" border></Checkbox>
                        <Checkbox label="樱桃" border></Checkbox>
                        <Checkbox label="西瓜" border></Checkbox>
                        <Checkbox label="樱桃" border></Checkbox>
                        <Checkbox label="西瓜" border></Checkbox>
                        <Checkbox label="樱桃" border></Checkbox>
                        <Checkbox label="西瓜" border></Checkbox>
                      </CheckboxGroup>
                    </template>
                    <CheckboxGroup v-model="filterList" size="small">
                      <Checkbox v-for="label in class_.last" :key="label" :label="label" border></Checkbox>
                      <Checkbox label="樱桃" border></Checkbox>
                      <Checkbox label="西瓜" border></Checkbox>
                    </CheckboxGroup>
                  </el-collapse-item>
                </el-collapse>
              </div>
            </ListItem>
            <ListItem>
              <span>材料：</span>
              <div class="_material" style="width:920px">
                <el-collapse>
                  <el-collapse-item name="1">
                    <template slot="title">
                      <CheckboxGroup v-model="filterList" size="small">
                        <Checkbox v-for="label in material_.first" :key="label" :label="label" border></Checkbox>
                        <Checkbox label="樱桃" border></Checkbox>
                        <Checkbox label="西瓜" border></Checkbox>
                        <Checkbox label="西瓜" border></Checkbox>
                        <Checkbox label="樱桃" border></Checkbox>
                        <Checkbox label="西瓜" border></Checkbox>
                        <Checkbox label="樱桃" border></Checkbox>
                        <Checkbox label="西瓜" border></Checkbox>
                        <Checkbox label="樱桃" border></Checkbox>
                        <Checkbox label="西瓜" border></Checkbox>
                        <Checkbox label="樱桃" border></Checkbox>
                        <Checkbox label="西瓜" border></Checkbox>
                      </CheckboxGroup>
                    </template>
                    <CheckboxGroup v-model="filterList" size="small">
                      <Checkbox v-for="label in material_.last" :key="label" :label="label" border></Checkbox>
                      <Checkbox label="樱桃" border></Checkbox>
                      <Checkbox label="西瓜" border></Checkbox>
                    </CheckboxGroup>
                  </el-collapse-item>
                </el-collapse>
              </div>
            </ListItem>
        </List>
        <div class="pdt-10">
          <span>筛选条件：</span>
          <Tag type="border" closable color="primary" v-for="label in filterList" :key="label" @on-close="delFilter()">{{label}}</Tag>
        </div>
      </div>
      <div class="goods">
        <el-tabs v-model="activeRType" @tab-click="Sort">
          <el-tab-pane v-for="item in sortList" :key="item.name" :label="item.label" :name="item.name">
            <div class="goods_box">
              <div class="good_box" v-for="good in 10" :key="good">
                <el-card :body-style="{ padding: '0px'}" shadow="hover">
                    <router-link :to="{name:'goodsDetail',query:{activeIndex: '2'}}"><el-image></el-image></router-link>
                    <div class="fz-18 fc-red pd-5">111111</div>
                    <router-link :to="{name:'goodsDetail',query:{activeIndex: '2'}}"><div class="pd-5">111111111</div></router-link>
                    <router-link :to="{name:'goodsDetail',query:{activeIndex: '2'}}"><div class="fc-666 pd-5"><i class="el-icon-s-cooperation"></i>1111111</div></router-link>
                </el-card>
              </div>
              <i v-for="i in 9" :key="i+'_'"></i>
            </div>
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
          label: '综合排序⇕', //排序名
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
      ], //排序规则组
      filterList: ['香蕉','苹果','西瓜'], //筛选条件组
      factor_: {first:[], last:[]}, //厂家条件
      class_: {first:[], last:[]}, //类别条件
      material_: {first:[], last:[]}, //材料条件
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
            this.$set(this.sortList[index], 'label', this.sortList[index].rules.slice(1,2) == '0'?'价格由高到低⇓':'价格由低到高⇑')
            break
          case 2:
            this.$set(this.sortList[index], 'label', this.sortList[index].rules.slice(1,2) == '0'?'销量由高到低⇓':'销量由低到高⇑')
            break
          default:
            return
        }
      }
      else {
        this.$set(this.sortList[index], 'label', '综合排序⇕')
      }
      this.sortList.forEach((e,i)=> {
        if(i!=index){
          this.$set(this.sortList[i], 'label', e.label.slice(0,2))
        }
      })
    }
  },
}
</script>

<style lang="scss" scoped>
.nav {
  border-bottom: solid 1px #e6e6e6;
}
.filter, .page, .goods {
  width: 1024px;
  margin: 30px auto 0 auto;
}
.pages {
  display: inline-block;
}
._factor ._class ._material {
  width: 900px;
}
.ivu-btn-small span {
  font-size: 9px;
}
.goods_box {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.good_box {
  width: 22%;
  margin: 15px 10px 0 0;
}
.goods_box > i {
  width: 22%;
  margin-right: 10px;
}
</style>