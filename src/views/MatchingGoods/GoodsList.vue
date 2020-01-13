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
        <List header="Header" footer="Footer" border size="large">
          <ListItem>This is a piece of text.</ListItem>
          <ListItem>This is a piece of text.</ListItem>
          <ListItem>This is a piece of text.</ListItem>
        </List>
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
      // activeIndex: '1' //导航菜单当前状态
    }
  },
  props: {
    activeIndex: {
      type: String,
      default: '1'
    }
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
.filter {
  width: 1024px;
  margin: auto;
}
</style>