import React from 'react'
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import './style.less'
import { WhiteSpace } from 'antd-mobile'
import Carousel from '@/components/Carousel/'
import Classify from './subpages/Classify'
import Hot from './subpages/Hot'


import HomeHeader from '@/components/HomeHeader'
class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            initDone: true,
            fetchData: '1'
        }
    }
    render() {
        return (
            <div>
                {
                this.state.initDone ?
                <div>
                    <HomeHeader cityName="广州"></HomeHeader>
                    <WhiteSpace size="lg"/>
                    <Carousel></Carousel>
                    <WhiteSpace size="lg"/>
                    <Classify/>
                    <WhiteSpace size="lg"/>
                    <Hot/>
                </div>
                :<div>加载中...</div>
                }
            </div>
        )
    }
}

// -------------------redux react 绑定--------------------
// function mapStateToProps(state) {
//     return {
//         userinfo : state.userinfo
//     }
// }

// function mapDispatchToProps(dispatch) {
//     return {
//         userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch),
//     }
// }
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(App)
export default App
