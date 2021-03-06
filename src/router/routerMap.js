import React from 'react'
import { HashRouter as Router, Route, Switch  } from "react-router-dom";
import AnimatedRouter from 'react-animated-router'; //我们的AnimatedRouter组件
import 'react-animated-router/animate.css'; //引入默认的动画样式定义
import App from '@/pages/home/index'
import UserLayout from '@/pages/user/Layout'

import City from '@/pages/City/index'
import Login from '@/pages/common/Login'
import Find from '@/pages/Find/index'
import Register from '@/pages/common/Register'
import NotFound from '@/pages/404'
// import User from '../pages/User'
// import Search from '../pages/Search'
// import Detail from '../pages/Detail'
// import NotFound from '../pages/404'

// 如果是大型项目，router部分就需要做更加复杂的配置
// 参见 https://github.com/reactjs/react-router/tree/master/examples/huge-apps

class RouterMap extends React.Component {
    render() {
        return (
            <Router>
              <AnimatedRouter>
                <Route path='/' exact component={App}/>
                <Route path='/user'  component={UserLayout}/>
                <Route path='/city' exact component={City}/>
                <Route path='/find'  component={Find}/>
                <Route path='/login'  component={Login}/>
                <Route path='/register'  component={Register}/>
                {/* <Route path='/city' exact component={City}/>
                <Route path='/search/:category' exact component={Search}/> */}
                {/* <Route path="/test1" exact render={(props) => {
                    return(
                        <div>
                            <Route path='/test1/tohome' exact render={props=>(<div>jflaskjflasjfd</div>)}></Route>
                            <Route path='/test1/aa' exact component={Home}></Route>
                        </div>
                        )
                    }} /> */}
                <Route path='*' component={NotFound}/>
              </AnimatedRouter>  
            </Router>
        )
    }
}

export default RouterMap
