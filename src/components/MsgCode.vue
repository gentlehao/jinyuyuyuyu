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
    legal:{ //手机号是否已合法
      type: Boolean,
      default: false
    },
    phone: { //手机号
      type: String,
      default: ''
    },
    time: { //超时时间
      type: Number,
      default: 60
    }
  },
  methods: {
    getCode(){
      if(this.phoneLegal){
        const TIME_COUNT = this.time
        if (!this.timer) {
          this.count = TIME_COUNT
          this.msgAbled = true
          this.api('user/smsCode', 'get',{
            mobile: this.phoneNum
          }).then((res)=>{
            console.log(res)
          })
          this.timer = setInterval(() => {
            if (this.count > 0 && this.count <= TIME_COUNT) {
              this.count--
            } else {
              this.text = '获取验证码'
              this.msgAbled = false
              clearInterval(this.timer)
              this.timer = null
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