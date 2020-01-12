<template>
  <div class="Login">
    <div :class="sign?'dowebok right-panel-active':'dowebok'" id="dowebok">
      <div class="form-container sign-up-container">
        <el-form :inline="true" :model="formSignUp" :rules="ruleSignUp" label-width="100px" ref="formSignUp">
          <h1>注册</h1>
          <span class="mgb-20 fc-999">您需要使用手机号注册</span>
          <el-form-item label="昵称:" prop="name">
            <el-input v-model="formSignUp.name" type="text" placeholder="请输入昵称" />
          </el-form-item>
          <el-form-item label="手机号:" prop="phone">
            <el-input v-model="formSignUp.phone" type="phone" placeholder="请输入手机号" />
          </el-form-item>
          <el-form-item label="短信验证码:" prop="msgCode">
            <el-input v-model="formSignUp.msgCode" type="text" placeholder="请输入短信验证码" />
          </el-form-item>
          <!-- <el-form-item label="密码:" prop="password">
            <el-input v-model="formSignUp.password" type="password" placeholder="请输入密码" />
          </el-form-item>
          <el-form-item label="确认密码:" prop="confirmPwd">
            <el-input v-model="formSignUp.confirmPwd" type="password" placeholder="请再次输入密码" />
          </el-form-item> -->
          <el-form-item>
            <msg-code :legal="phoneLegal" :phone="formSignUp.phone" @click.native="validateField('formSignUp','phone')"></msg-code>
            <button class="ghost mgl-20" @click="submitForm('formSignUp')">注册</button>
          </el-form-item>
        </el-form>
      </div>
      <div class="form-container sign-in-container">
        <el-form :model="formSignIn" :rules="ruleSignIn" ref="formSignIn" v-if="!signInWay">
          <h1>登录</h1>
          <span @click="changeSignIn(1)" class="fc-999">或使用短信验证码</span>
          <el-form-item label="手机号：" prop="phone">
            <el-input v-model="formSignIn.phone" type="phone" placeholder="请输入手机号" />
          </el-form-item>
          <el-form-item label="密码：" prop="password">
            <el-input v-model="formSignIn.password" type="password" placeholder="请输入密码" />
          </el-form-item>
          <el-form-item class="identify_out" label="验证码：" prop="identifyCode">
            <el-input v-model="formSignIn.identifyCode" type="text" placeholder="请输入验证码(不区分大小写)" />
            <identify :identifyCode="identifyCode" @click.native="refreshCode"></identify>
          </el-form-item>
          <a>忘记密码？</a>
          <button class="ghost" @click="submitForm('formSignIn')">登录</button>
        </el-form>
        <el-form :model="formSignIn" :rules="ruleSignIn" ref="formSignIn" v-if="signInWay">
          <h1>登录</h1>
          <span @click="changeSignIn(0)" class="fc-999">或使用您的密码</span>
          <el-form-item label="手机号：" prop="phone">
            <el-input v-model="formSignIn.phone" type="phone" placeholder="请输入手机号" />
          </el-form-item>
          <el-form-item label="短信验证码" prop="msgCode">
            <el-input v-model="formSignIn.msgCode" type="text" placeholder="请输入短信验证码" />
          </el-form-item>
          <el-form-item class="identify_out" label="验证码：" prop="identifyCode">
            <el-input v-model="formSignIn.identifyCode" type="text" placeholder="请输入验证码(不区分大小写)" />
            <identify :identifyCode="identifyCode" @click.native="refreshCode"></identify>
          </el-form-item>
          <a>忘记密码？</a>
          <el-form-item>
            <msg-code :legal="phoneLegal" :phone="formSignIn.phone" @click.native="validateField('formSignIn','phone')"></msg-code>
            <button class="ghost mgl-20" @click="submitForm('formSignIn')">登录</button>
          </el-form-item>
        </el-form>
      </div>
      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-panel overlay-left">
            <h1>已有帐号？</h1>
            <p>请使用您的帐号进行登录</p>
            <el-button class="ghost" id="signIn" @click="toSignIn">登录</el-button>
          </div>
          <div class="overlay-panel overlay-right">
            <h1>没有帐号？</h1>
            <p>立即注册加入我们，和我们一起开始旅程吧</p>
            <el-button class="ghost" id="signUp" @click="toSignUp">注册</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import identify from '@/components/Identify'
import msgCode from '@/components/MsgCode'

export default {
  name: 'loginIndex',
  data() {
    let validatePhone = (rule, value, callback) => {
      let str = /^1[3|4|5|7|8][0-9]{9}$/
      if(!str.test(value)){
        callback(new Error('您输入的手机号不合法!'))
      }
      else{
        callback()
      }
    }
    // let validatePwd = (rule, value, callback) => {
      
    // }
    // let validateConfPwd = (rule, value, callback) => {
      
    // }
    let validateIdCode = (rule, value, callback) => {
      if(value.toUpperCase()!==this.identifyCode.toUpperCase()){
        callback(new Error('验证码有误!'))
      }
      else{
        callback()
      }
    }
    return {
      sign: true, //切换登录和注册,false为登录,true为注册
      signInWay: 1, //登录方式，1为短信验证码，0为密码
      phoneLegal: false, //手机号是否合法
      identifyCode: '3782', // 图形验证码
      formSignUp: {
        name: '',
        phone: '',
        // password: '',
        // confirmPwd: ''
        msgCode: ''
      }, // 注册校验字段
      formSignIn: {
        phone: '',
        password: '',
        identifyCode: '',
        msgCode: ''
      }, // 登录校验字段
      ruleSignUp: {
        name: [
          { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入手机号!', trigger: 'blur' },
          { validator: validatePhone, trigger: 'blur' }
        ],
        msgCode: [
          { required: true, message: '请输入短信验证码!', trigger: 'blur' },
        ],
        // password: [
        //   { required: true, message: '请输入密码!', trigger: 'blur' }
        // ],
        // confirmPwd: [
        //   { required: true, message: '请再次输入密码!', trigger: 'blur' }
        // ]
      }, // 注册校验规则
      ruleSignIn: {
        phone: [
          { required: true, message: '请输入手机号!', trigger: 'blur' },
          { validator: validatePhone, trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码!', trigger: 'blur' }
        ],
        msgCode: [
          { required: true, message: '请输入短信验证码!', trigger: 'blur' },
        ],
        identifyCode: [
          { required: true, message: '请输入验证码!', trigger: 'blur' },
          { validator: validateIdCode, trigger: 'blur' }
        ]
      }, // 登录校验规则
    }
  },
  created() {
    
  },
  mounted() {
    this.identifyCode = this.makeCode()
    // console.log(this.identifyCode)
  },
  methods: {
    //切换登录
    toSignIn() {
      this.sign = false
    },
    //切换登录方式
    changeSignIn(way){
      this.signInWay = way
    },

    //切换注册
    toSignUp() {
      this.sign = true
    },
    
    //刷新验证码
    refreshCode() {
      this.identifyCode = this.makeCode()
      // console.log(this.identifyCode)
    },

    //提交整个表单
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if(formName=='formSignIn'){
            this.$store.dispatch("userLogin", true)
            localStorage.setItem("isLogin", "true")
            // this.$router.push('/')
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    //校验部分字段
    validateField(formName,prop) {
      this.$refs[formName].validateField(prop,(error) => {
        if(!error){
          switch (prop) {
            case 'phone': 
              this.phoneLegal = true
              break
          }
        }
      })
    }
  },
  components: {
    identify,
    msgCode
  }
}
</script>

<style scoped>
.Login {
  width: 100%;
  height: 100vh;
  background: #ededed;
  padding-top: 100px;
}

h1 {
  font-weight: bold;
  margin: 0;
}

p {
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
}

span {
  font-size: 12px;
}

a {
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
}

.dowebok {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
  margin: 0px auto;
}

.form-container form{
  background: #fff;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.sign-in-container .el-form-item__content ,.sign-in-container .el-form-item {
  margin-bottom: 10px;
  width: 80%;
}

.social-container {
  margin: 20px 0;
}

.social-container a {
  border: 1px solid #ddd;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  height: 40px;
  width: 40px;
}

.social-container a:hover {
  background-color: #eee;
}

.ghost{
  border-radius: 5px;
  border: 1px solid#FFF0F5;
  background:#00BFFF;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: all .2s;
  cursor: pointer;
}

.ghost:hover{
  background: #eff;
  color: #333;
}

.ghost:active {
  transform: scale(0.95);
}

.ghost:focus {
  outline: none;
}

.overlay .ghost {
  background: transparent;
  border-color: #fff;
}
.overlay .ghost:hover{
  transform: scale(1.05);
  border-color: #333;
}

.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}

.sign-in-container {
  left: 0;
  width: 50%;
  z-index: 2;
}

.sign-in-container span:hover{
  cursor: pointer;
  color: #333;
}

.sign-up-container {
  left: 0;
  width: 50%;
  z-index: 1;
  opacity: 0;
}

.identify_out{
  position: relative;
}

.overlay-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
}

.overlay {
  background:#00BFFF;
  background: linear-gradient(to right, #00BFFF,#4169E1) no-repeat 0 0 / cover;
  color: #fff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateY(0);
  transition: transform 0.6s ease-in-out;
}

.overlay-panel {
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
  height: 100%;
  width: 50%;
  text-align: center;
  transform: translateY(0);
  transition: transform 0.6s ease-in-out;
}

.overlay-right {
  right: 0;
  transform: translateY(0);
}

.overlay-left {
  transform: translateY(-20%);
}

/* Move signin to right */
.dowebok.right-panel-active .sign-in-container {
  transform: translateY(100%);
}

/* Move overlay to left */
.dowebok.right-panel-active .overlay-container {
  transform: translateX(-100%);
}

/* Bring signup over signin */
.dowebok.right-panel-active .sign-up-container {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
}

/* Move overlay back to right */
.dowebok.right-panel-active .overlay {
  transform: translateX(50%);
}

/* Bring back the text to center */
.dowebok.right-panel-active .overlay-left {
  transform: translateY(0);
}

/* Same effect for right */
.dowebok.right-panel-active .overlay-right {
  transform: translateY(20%);
}
</style>
