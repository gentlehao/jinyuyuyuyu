<template>
  <el-button :disabled="msgAbled">{{text}}</el-button>
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
      phoneNum: '', //手机号
      phoneLegal: false //手机号是否已合法
    }
  },
  props: {
    legal:{
      type: Boolean,
      default: false
    },
    phone:{
      type: String,
      default: ''
    }
  },
  methods: {
    getCode(){
      if(this.phoneLegal){
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
    }
  },
  watch:{
      count(val){
        this.text = `${val}秒后重新获取`
      },
      phone(val){
        this.phoneNum = val
      },
      legal(val){
        this.phoneLegal = val
        this.getCode()
      }
    }
}
</script>