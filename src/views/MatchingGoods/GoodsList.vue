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
        <List item-layout="vertical" v-for="i in 4" :key="i">
          <ListItem>
            <ListItemMeta/>
            <template slot="action">
              
            </template>
          </ListItem>
        </List>
      </div>
      <div class="page">
        <Page :total="100" show-elevator class="pages" />
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
      activeIndex: '2' //导航菜单当前状态
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
  }
}
</script>

<style lang="scss" scoped>
.nav {
  border-bottom: solid 1px #e6e6e6;
}
.filter, .page{
  width: 1024px;
  margin: auto;
}
.pages {
  display: inline-block;
}
</style>