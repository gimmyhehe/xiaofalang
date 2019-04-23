import React from 'react';
import ReactDOM from 'react-dom';
import './styles/common.scss';
import './styles/style.scss';
import { SERVER } from '@/config/myconfig'
import * as serviceWorker from './serviceWorker';
import { createHashHistory } from 'history';
import { getUserData } from '@/api/user'
import { update,login } from '@/store/userinfo/action'
import { setToken,getToken } from '@/utils/auth'
//redux相关配置
import {Provider} from 'react-redux'
import store from './store/'
// 引入路由配置
import RouteMap from './router/routerMap'
import 'element-theme-default';
const history = createHashHistory();
const userName = getToken()
window.SERVER = SERVER
if(userName){
  getUserData({user_name:userName}).then(res=>{
    let data = res.data
    let userinfo = store.getState().userinfo
    userinfo.userName = userName
    userinfo.userId = data['user_id']
    userinfo.img = data['user_Pic']['user_pic_dir']
    store.dispatch(login(userinfo))
  })
}
ReactDOM.render(
  <Provider store={store}>
    <RouteMap history={history} />
  </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
