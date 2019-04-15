import React from 'react'
import { withRouter } from 'react-router-dom'
import { TabBar } from 'antd-mobile';
class Footer extends React.Component{
  constructor(props) {
    super(props);
    console.log(this.props.history)
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
      fullScreen: true,
    };
  }
  render(){
    const pathname = this.props.history.location.pathname
    return (
      <div className='g-footer'>
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#ffd600"
        barTintColor="white"
        hidden={this.state.hidden}
        noRenderContent={true}
      >
      <TabBar.Item title="首页"
        icon={<i className="iconfont iconhome"></i>}
        selectedIcon={<img src='/static/imgs/icon/home.png' alt='' />}
        selected={pathname=='/'}
        onPress={() => {
          this.props.history.replace('/')
        }}
      ></TabBar.Item>
      <TabBar.Item title="发现"
        icon={<i className="iconfont iconfind"></i>}
        selectedIcon={<img src='/static/imgs/icon/find.png' alt='' />}
        selected={pathname=='/find'}
        onPress={() => {
          this.props.history.replace('/find')
        }}
      ></TabBar.Item>
      <TabBar.Item title="个人中心" 
        icon={<i className="iconfont iconuser"></i>}
        selected={pathname=='/user'}
        selectedIcon={<img src='/static/imgs/icon/user.png' alt='' />}
        onPress={() => {
          this.props.history.replace('/user')
        }}
      ></TabBar.Item>
      </TabBar>
      </div>
    )
  }
}
export default withRouter(Footer)