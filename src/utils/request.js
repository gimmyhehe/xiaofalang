import axios from 'axios'
import qs from 'qs'
import store from '@/store'
import { update } from '@/store/userinfo/action'
import { setToken,setUserInfo } from '@/utils/auth'
import sessionStore from '@/utils/sessionStore'
import { Modal } from 'antd-mobile'
const alert = Modal.alert
const CancelToken = axios.CancelToken
var cancel;
function paramsToFormData(params){
    let formData = new FormData()
    for(let key in params){
        formData.append(key,params[key])
    }
    return formData
}
var service=axios.create({
    baseURL:process.env.BASE_API,
    timeout:5000
})
 //添加请求拦截器
 service.interceptors.request.use(function(config){
     console.log('store',store.getState())
    // if(store.getters.token){
    //     config.headers['TOKEN']=getCookie('TOKEN')
    // }
    return config
},function(error){
    return Promise.reject(error)
})
//添加响应拦截器
service.interceptors.response.use(function(response){
   /**
   * 下面的注释为通过在response里，自定义code来标示请求状态
   * 当code返回如下情况则说明权限有问题，登出并返回到登录页
   * 如想通过xmlhttprequest来状态码标识 逻辑可写在下面error中
   */
  // response => {
  //   const res = response.data
  //   if (res.code !== 20000) {
  //     })
  //     // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
  //     if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
  //       }).then(() => {
  //         })
  //       })
  //     }
  //     return Promise.reject('error')
  //   } else {
  //     return response.data
  //   }
  // },
    console.log(response)
    const res = response
    let token = res.headers['user_name']
    let userId = res.headers['user_id']
    if (token) {
        let userinfo = store.getState().userinfo
        userinfo.token = token

        store.dispatch(update(userinfo))
      // 如果 header 中存在 token，现在只从response更新token
        setUserInfo('20190402003221259611')
        setToken({token})
        sessionStore.setItem('userId',userId)
    }
    // Token-Refresh-At: 1544499859
    if (res.status !== 200) {
        alert('response返回了错误信息')
      return Promise.reject(new Error('error'))
    } else {
      return response
    }
},function(error){
    console.log('err'+error)
    // Modal.alert({
    //     Message:error.message,
    // })
    return Promise.reject(error)
}
)
//get请求
export  function get(url,param){
    return new Promise((resolve,reject)=>{
        service({
            method:'get',
            url,
            params:param,
            cancelToken:new CancelToken(c=>{
                cancel=c
            })
        }).then(res=>{  //axios返回的是一个promise对象
            resolve(res)  //resolve在promise执行器内部 
        }).catch(err=>{
            console.log(err,'异常')
        })

    })
}
//post请求
export  function post(url,params){
    return new Promise((resolve,reject)=>{
        service({
            method:'post',
            url,
            headers: {
                //'Content-Type': 'application/x-www-form-urlencoded', 
                "Content-Type": "multipart/form-data"
              },
            // data:qs.stringify(params), 当Content-Type为application/x-www-form-urlencoded需要转换参数
            data:paramsToFormData(params),
            cancelToken:new CancelToken(c=>{
                cancel=c
            })
        }).then(res=>{
            resolve(res)
        }).catch(err=>{
            console.log(err,'异常')
        })
    })
}
// export default service