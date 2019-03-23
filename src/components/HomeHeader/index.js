import React from 'react'
import { withRouter } from 'react-router-dom'
import { Icon } from 'antd-mobile'
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
                        <i className="icon-search"></i>
                        <input type="text" placeholder="请输入关键字"/>
                    </div>
                </div>
            </div>
        )
    }
    openCityPage(){
        this.props.history.push('/city')
    }
}

export default withRouter(HomeHeader)