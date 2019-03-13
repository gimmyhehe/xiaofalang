import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import * as serviceWorker from './serviceWorker';
//redux相关配置
import {Provider} from 'react-redux'
import store from './store/'
// 引入路由配置
import RouteMap from './router/routerMap'
ReactDOM.render(
  <Provider store={store}>
    <RouteMap />
  </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
