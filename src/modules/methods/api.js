import Vue from '@/main'
import qs from 'qs'

const config = {
    // 基础url前缀
    baseURL: 'baseUrl',
    // 请求头信息
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Accept': 'application/json'
    },
    // 设置超时时间
    timeout: 10000,
    // 携带凭证
    // 
    withCredentials: false,
    // 返回数据类型
    responseType: 'json',
}
let cancel, promiseArr = {}
const CancelToken = axios.CancelToken

//配置全局取消数组
window._axiosPromiseArr = [];

const instance = Vue.axios.create(config)
// request 拦截器
instance.interceptors.request.use(
    request => {
        //发起请求时，取消掉当前正在进行的相同请求
        if (promiseArr[request.url]) {
            promiseArr[request.url]('操作取消')
            promiseArr[request.url] = cancel
        } else {
            promiseArr[request.url] = cancel
        }
)