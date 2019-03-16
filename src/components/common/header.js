import React from 'react'
import { NavBar, Icon } from 'antd-mobile';

export default class Header extends React.Component{
  render(){
    return(
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={this.backToPreviousPage.bind(this)}>
        {this.props.title ? this.props.title : 'default title'}
      </NavBar>
    )
  }
  backToPreviousPage(){
    window.history.back()
  }
}