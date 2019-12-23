import Vue from '@/main'

const goTo = (_blank,path,data)=>{
    if(_blank){
        console.log(Vue)
        const routeUrl = Vue.$router.resolve({
            path: path,
            query: data
        })
        window.open(routeUrl.href, '_blank')
    }
    else{
        Vue.$router.push({
            name: path,
            params: data
        })
    }
}

export default {
    install(Vue,options) {
        Vue.prototype.goTo = goTo
    }
}