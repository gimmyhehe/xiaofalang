import React from 'react';
import ReactDOM from 'react-dom';
import './styles/common.less';
import './styles/style.scss';
import * as serviceWorker from './serviceWorker';
import { createHashHistory } from 'history';
//redux相关配置
import {Provider} from 'react-redux'
import store from './store/'
// 引入路由配置
import RouteMap from './router/routerMap'
const history = createHashHistory();
ReactDOM.render(
  <Provider store={store}>
    <RouteMap history={history} />
  </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
