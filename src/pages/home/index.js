import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userInfoActionsFromOtherFile from '@/store/userinfo/action-type'
import { CITYNAME } from '@/config/localStoreKey'
import localStore from '@/utils/localStore'
import './style.scss'
import { WhiteSpace } from 'antd-mobile'
import Carousel from '@/components/Carousel/'
import Classify from './subpages/Classify'
import BusinessList from './BusinessList/'
import Hot from './subpages/Hot'
import Footer from '@/components/common/footer'


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
                <div className='m-home' style={{paddingBottom:'50px'}}>
                    <HomeHeader cityName={localStore.getItem(CITYNAME)}></HomeHeader>
                    <WhiteSpace size="lg"/>
                    <Carousel></Carousel>
                    <WhiteSpace size="lg"/>
                    <Classify/>
                    <WhiteSpace size="lg"/>
                    <Hot/>
                    <BusinessList/>
                    <Footer/>
                </div>
                :<div>加载中...</div>
                }
            </div>
        )
    }
}

// -------------------redux react 绑定--------------------
function mapStateToProps(state) {
    return {
        userinfo : state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch),
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
