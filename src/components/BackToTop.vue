<template>
  <transition name='slide-fade'>
    <div class='page-component-up' :style="{'opacity':isShow}" @click='getTop'>
      <i class="el-icon-caret-top"></i>
      <div style="color: #333">TOP</div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'BackTop',
  data () {
    return {
      isShow: 0,
    }
  },
  methods: {
    //  添加样式，鼠标hover上去，改变颜色
    addhoverClass (e) {
      if (e.type === 'mouseover' && this.$el.classList) {
        this.$el.classList.add('hover')
      } else if (e.type === 'mouseout' && this.$el.classList) {
        this.$el.classList.remove('hover')
      }
    },
    showIcon () {
      if (document.documentElement.scrollTop > 100) {
        this.isShow = 0.4
        this.$el.addEventListener('mouseover', this.addhoverClass)
        this.$el.addEventListener('mouseout', this.addhoverClass)
      } else if (document.documentElement.scrollTop < 100) {
        this.isShow = 0
      }
    },
    getTop () {
      let timer = setInterval(() => {
        let top = document.documentElement.scrollTop
        let speed = Math.ceil(top / 15)
        document.documentElement.scrollTop = top - speed
        if (top === 0) {
          clearInterval(timer)
        }
      }, 3)
    }
  },
  mounted () {
    window.addEventListener('scroll', this.showIcon)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.showIcon)
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
.slide-fade-enter-active {
  transition: all .3s;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.3, 0.8, 1.0);
  opacity: 0;
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active 在低于 2.1.8 版本中 */ {
  // transform: translateY(-20px);
  opacity: 0;
}
.page-component-up{
  background-color:#666;
  box-shadow: 0 0 10px #000;
  position: fixed;
  right: 3rem;
  bottom: 6rem;
  width: 50px;
  height: 50px;
  border-radius: 5px;
  cursor: pointer;
  opacity: .4;
  transition: .4s;
  text-align: center;
  z-index: 999;
}
.el-icon-caret-top {
  font-size: 24px;
  color: #00F;
  text-align: center;
  z-index: 1000
}
.hover{
  background-color:#F8F8FF;
}
</style>