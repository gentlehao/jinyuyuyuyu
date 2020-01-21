import Vue from '@/main'
import qs from 'qs'

import api from './api';

//路由跳转
const goTo = (_blank, path, data) => {
    if (_blank) {
        //打开新标签页
        const routeUrl = Vue.$router.resolve({
            path: path,
            query: data
        })
        window.open(routeUrl.href, '_blank')
    }
    else {
        //不打开新标签页
        Vue.$router.push({
            name: path,
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