import Vue from '@/main'

//路由跳转
const goTo = (_blank,path,data)=>{
    if(_blank){
        //打开新标签页
        const routeUrl = Vue.$router.resolve({
            path: path,
            query: data
        })
        window.open(routeUrl.href, '_blank')
    }
    else{
        //不打开新标签页
        Vue.$router.push({
            name: path,
            params: data
        })
    }
}

//发送请求
const api = (url,data,vueExam,method='POST')=> {
    switch(method) {
        case 'GET':
            vueExam.axios({
                url: url,
                method: method,
                params: data
            }).then(res=> {
                return new Promise((resolve)=> {})
            }).catch(e=> {
                return new Promise((resolve)=> {})
            })
            break
        case 'POST': default:
            vueExam.axios({
                url: url,
                method: method,
                data: data
            }).then(res=> {
                return new Promise((resolve)=> {})
            }).catch(e=> {
                return new Promise((resolve)=> {})
            })
    }
}

//图形验证码生成
const makeCode = ()=> {
    return Math.random().toString(36).substring(3,7)
}

export default {
    install(Vue) {
        Vue.prototype.goTo = goTo
        Vue.prototype.makeCode = makeCode
    }
}