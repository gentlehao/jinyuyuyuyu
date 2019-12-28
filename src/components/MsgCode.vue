<template>
  <el-button :disabled="msgAbled" @click="getCode">{{text}}</el-button>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      text: '获取验证码', //按钮文本
      count: '', //倒计时
      msgAbled: false, //短信验证码按钮可用
      timer: null,
    }
  },
  methods: {
    getCode(){
      const TIME_COUNT = 60;
      if (!this.timer) {
        this.count = TIME_COUNT;
        this.msgAbled = true;
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--;
          } else {
            this.text = '获取验证码';
            this.msgAbled = false;
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000)
      }
    }
  },
  watch:{
      count(val){
        this.text = `${val}秒后重新获取`
      }
    }
}
</script>