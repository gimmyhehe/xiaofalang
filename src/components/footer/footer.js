import React from 'react'
import { TabBar } from 'antd-mobile';
export default class Footer extends React.Component{
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
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
        hidden={this.state.hidden}
      >
      <TabBar.Item title="首页"
        icon={<i className="iconfont iconhome"></i>}
      ></TabBar.Item>
      <TabBar.Item title="发现"
      icon={<i className="iconfont iconfind"></i>}
      onPress={() => {
        window.location.href ='/'
      }}
      ></TabBar.Item>
      <TabBar.Item title="个人中心" 
        icon={<i className="iconfont iconuser"></i>}
      ></TabBar.Item>
      </TabBar>
      </div>
    )
  }
}