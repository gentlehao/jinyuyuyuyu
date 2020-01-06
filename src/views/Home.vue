<template>
  <div class="home">
    <back-to-top></back-to-top>
    <Top></Top>
    <Header></Header>
    <NavMenu activeIndex='1'></NavMenu>
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
