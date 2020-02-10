import Vue from '@/main'

import api from './api';
// console.log(Vue.$router.push())
//路由跳转
const goTo = {
    //打开新标签页
    blank: (path, data) => {
            const routeUrl = Vue.$router.resolve({
                path: path,
                query: data
            })
            window.open(routeUrl.href, '_blank') 
    },
    //不打开新标签页
    name: (path, data) => {
        Vue.$router.push({
            name: path,
            params: data
        })
    },
    path: (path, data) => {
        Vue.$router.push({
            path: path,
            params: data
        })
    }
}

//图形验证码生成
const makeCode = () => {
    return Math.random().toString(36).substring(3, 7)
}

export default {
    install(Vue) {
        Vue.prototype.goTo = goTo
        Vue.prototype.api = api
        Vue.prototype.makeCode = makeCode
    }
}