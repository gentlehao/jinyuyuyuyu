import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
import store from '@/store'
import ViewUI from 'view-design'

const config = {
    // 基础url前缀
    baseURL: '/api',
    // 请求头信息
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Accept': 'application/json',
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
window._axiosPromiseArr = []

const instance = axios.create(config)

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
        ViewUI.LoadingBar.start()
        //权限验证
        const token = localStorage.getItem('token') || store.state.token
        if (token) {
            config.headers.Token = token
        }
        //序列化数据
        if (request.method.toLocaleLowerCase() === 'post' ||
            request.method.toLocaleLowerCase() === 'put' ||
            request.method.toLocaleLowerCase() === 'delete') {
            request.data = qs.stringify(request.data)
        }
        return request
    },
    error => {
        ViewUI.LoadingBar.error()
        //判断请求超时
        if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
            Vue.$router.push({ path: '' })
        }
        return Promise.reject(error)
    }
)

// 响应拦截器
instance.interceptors.response.use(
    response => {
        let data = null
        // IE9时response.data是undefined，因此需要使用response.request.responseText(Stringify后的字符串)
        if (response.data == undefined) {
            data = response.request.responseText
        } else {
            data = response.data
        }
        ViewUI.LoadingBar.finish()
        return data
    },
    error => {
        if (error && error.response) {
            switch (error.response.status) {
                case 400:
                    error.message = '请求错误'
                    break
                case 401:
                    error.message = '未授权，请登录'
                    break
                case 403:
                    error.message = '拒绝访问'
                    break
                case 404:
                    error.message = `请求地址出错: ${error.response.config.url}`
                    break
                case 408:
                    error.message = '请求超时'
                    break
                case 500:
                    error.message = '服务器内部错误'
                    break
                case 501:
                    error.message = '服务未实现'
                    break
                case 502:
                    error.message = '网关错误'
                    break
                case 503:
                    error.message = '服务不可用'
                    break
                case 504:
                    error.message = '网关超时'
                    break
                case 505:
                    error.message = 'HTTP版本不受支持'
                    break
                default:
            }
            ViewUI.LoadingBar.error()
            ViewUI.Message.error(error.message)
        }
        return Promise.reject(error)
    }
)

export default (url = '', method = 'GET', data = {}) => {
    let options = {
        url,
        cancelToken: new CancelToken(c => {
            cancel = c
            window._axiosPromiseArr.push({ cancel })
        })
    }
    method = method.toUpperCase();

    return new Promise((resolve, reject) => {
        if (method === 'GET') {
            options = Object.assign(options, {
                method: 'get',
                params: data,
            })
        } else if (method === 'POST') {
            options = Object.assign(options, {
                method: 'post',
                data,
            })
        } else if (method === 'PATCH') {
            options = Object.assign(options, {
                method: 'patch',
                data,
            })
        } else if (method === 'PUT') {
            options = Object.assign(options, {
                method: 'put',
                data,
            })
        } else if (method === 'DEL') {
            options = Object.assign(options, {
                method: 'del',
                data,
            })
        }
        instance(options)
            .then(res => {
                resolve(res)
                return false
            })
    })
}