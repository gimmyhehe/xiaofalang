import React from 'react'
import { NavBar, Icon } from 'antd-mobile';

export default class Header extends React.Component{
  render(){
    return(
      <div style={{height:'45px'}}>
        <NavBar
          style={{position:'fixed',top:'0',width:'100%',zIndex:'99',borderBottom:'1px solid #ccc'}}
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={this.backToPreviousPage.bind(this)}>
          {this.props.title ? this.props.title : '默认标题'}
        </NavBar>
      </div>
    )
  }
  backToPreviousPage(){
    window.history.back()
  }
}