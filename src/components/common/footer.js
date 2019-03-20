import React from 'react'
import { withRouter } from 'react-router-dom'
import { TabBar } from 'antd-mobile';
class Footer extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
      fullScreen: true,
    };
  }
  render(){
    return (
      <div className='g-footer'>
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
        hidden={this.state.hidden}
        noRenderContent={true}
      >
      <TabBar.Item title="首页"
        icon={<i className="iconfont iconhome"></i>}
        onPress={() => {
          this.props.history.push('/')
        }}
      ></TabBar.Item>
      <TabBar.Item title="发现"
        icon={<i className="iconfont iconfind"></i>}
        onPress={() => {
          this.props.history.push('/find')
        }}
      ></TabBar.Item>
      <TabBar.Item title="个人中心" 
        icon={<i className="iconfont iconuser"></i>}
        onPress={() => {
          this.props.history.push('/user')
        }}
      ></TabBar.Item>
      </TabBar>
      </div>
    )
  }
}
export default withRouter(Footer)