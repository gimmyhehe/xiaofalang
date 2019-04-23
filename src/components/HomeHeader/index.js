import React from 'react'
import { withRouter,Link } from 'react-router-dom'
import { Icon } from 'antd-mobile'
import store from '@/store'
import './style.scss'

class HomeHeader extends React.Component {
    render() {
        return (
            <div id="home-header" className="clearfix">
                <div className="home-header-left float-left" onClick={this.openCityPage.bind(this)}>
                    <span>{this.props.cityName}</span>
                    &nbsp;
                    <Icon type='down'></Icon>
                </div>
                <div className="home-header-middle">
                    <div className="search-container">
                        <i className="iconfont iconsearch" style={{display:'inline-block'}}></i>
                        <input type="text" placeholder="请输入关键字" style={{display:'inline-block',maxWidth:"100px"}} />
                    </div>
                </div>
                {
                    store.getState().userinfo.token?
                    <div className='user-info'>
                        <Link to="user" className='ellipsis'>
                            <img src={this.props.userinfo.img} alt="" />
                            {this.props.userinfo.userName}
                        </Link>
                    </div>
                    :
                    <div className='user-info'>
                        <Link to="login">
                            <img src="/static/imgs/default.png" alt="" />
                            登录
                        </Link>
                    </div>
                }
            </div>
        )
    }
    openCityPage(){
        this.props.history.push('/city')
    }
}

export default withRouter(HomeHeader)