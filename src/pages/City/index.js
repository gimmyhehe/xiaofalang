import React from 'react'
import { Grid } from 'antd-mobile';
import Header from '@/components/common/header'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { CITYNAME } from '@/config/localStoreKey'
import localStore from '@/utils/localStore'
import * as userInfoActionsFromOtherFile from '@/store/userinfo/action'
import { withRouter } from 'react-router-dom'
class City extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            data:[{text:"深圳"},{text:"广州"},{text:"北京"}]
        }
    }
    render() {
        return (
            <div>
                {/* <h1>{this.props.userinfo ? this.props.userinfo.cityName : "no cityName"}</h1> */}
                <Header title="选择城市页"></Header>
                <div>{console.log(this.props)}</div>
                <Grid data={this.state.data} columnNum={3} onClick={this.changeCity.bind(this)} />
            </div>
        )
    }
    changeCity(item) {
        let newCity = item.text
        if (newCity == null) {
            return
        }
        // 修改 redux
        console.log(this.props.userinfo.cityName)
        const userinfo = this.props.userinfo
        userinfo.cityName = newCity
        this.props.userInfoActions.update(userinfo)
        console.log(this.props.userinfo.cityName)
        // 修改 cookie
        localStore.setItem(CITYNAME, newCity)
        console.log(this.props.userinfo.cityName)
        // 跳转页面
        this.props.history.push('/')
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export 
// export default City
function mapStateToProps(state) {
  console.log(111,state)
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(City)