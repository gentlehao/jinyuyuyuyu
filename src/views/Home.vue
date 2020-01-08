<template>
  <div class="home">
    <back-to-top></back-to-top>
    <Top></Top>
    <Header></Header>
    <div class="nav">
      <NavMenu activeIndex='1'></NavMenu>
    </div>
    <div class="content" v-loading="true" element-loading-background="rgba(255, 255, 255, 0.6)">
      <el-carousel trigger="click" height="320px">
        <el-carousel-item v-for="banner in 5" :key="banner" :interval="5000">
          <router-link :to="{name:'',query:''}"><el-image class="banner"></el-image></router-link>
        </el-carousel-item>
      </el-carousel>
      <div class="someNum fz-16">
        <i class="el-icon-info"></i>
      </div>
      <div class="recommend">
        
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
.nav, .someNum{
  width: 1024px;
  margin: auto;
}
.banner {
  height: 100%;
  width: 100%;
  background: skyblue;
}
.banner:hover {
  cursor: pointer;
}
</style>