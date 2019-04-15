import React from 'react'
import {  Route, Switch  } from "react-router-dom";
import User from '@/pages/user/index'
import Profile from './Profile'
import Discount from './subpages/Discount'
import Member from './subpages/Member'
import About from './subpages/About'
import Order from '@/pages/user/Order'
import Collection from '@/pages/user/Collection'
class UserLayout extends React.Component {
    render() {
        return (
            <Switch>
              <Route path='/user' exact component={User}/>
              <Route path='/user/profile' exact component={Profile}/>
              <Route path='/user/discount' exact component={Discount}/>
              <Route path='/user/member' exact component={Member}/>
              <Route path='/user/about' exact component={About}/>
              <Route path='/user/order' exact component={Order}/>
              <Route path='/user/collection' exact component={Collection}/>
            </Switch>
        )
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export 
export default UserLayout
// module.exports = NotFound