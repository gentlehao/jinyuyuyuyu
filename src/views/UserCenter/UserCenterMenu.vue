<template>
  <div class="userCenterMenu">
    <back-to-top></back-to-top>
    <Top></Top>
    <Header></Header>
    <div class="nav">
      <NavMenu activeIndex="0"></NavMenu>
    </div>
    <div class="content">
      <div class="allItem">
        <el-row>
          <el-col :span="4">
            <Menu active-name="1" width="auto">
              <MenuGroup title="个人信息">
                <MenuItem name="1" :to="{name: 'userInfo'}">
                  <Icon type="md-document" />
                  个人资料
                </MenuItem>
                <MenuItem name="2">
                  <Icon type="md-chatbubbles" />
                  账号管理
                </MenuItem>
              </MenuGroup>
              <MenuGroup title="采购订单">
                <MenuItem name="3">
                  <Icon type="md-heart" />
                  全部订单
                </MenuItem>
                <MenuItem name="4">
                  <Icon type="md-leaf" />
                  添加订单
                </MenuItem>
              </MenuGroup>
            </Menu>
          </el-col>
          <el-col :span="20">
            <router-view />
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

export default {
  name: 'userCenterMenu',
  components: {
    backToTop,
    Top,
    Header,
    NavMenu,
    Footer
  },
}
</script>
<style lang="scss">
.nav {
  border-bottom: solid 1px #e6e6e6;
}
.allItem {
  width: 1024px;
  margin: 30px auto 0 auto;
  background: #fff;
}
</style>