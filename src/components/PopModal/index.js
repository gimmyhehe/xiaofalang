import React from 'react'
import { NavBar, Icon } from 'antd-mobile';

 class PopModal extends React.Component{
  render(){
    return(
      <div className='g-pop-modal' ref="pop" style={{left:'100%'}}>
        <NavBar
          style={{position:'fixed',top:'0',width:'100%',zIndex:'99'}}
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={this.backToPreviousPage.bind(this)}>
          {this.props.title ? this.props.title : 'default title'}
        </NavBar>
        {this.props.children}
      </div>
    )
  }
  backToPreviousPage(){
    this.refs.pop.style ='left:100%;opacity:0;'
  }
  show(){
    this.refs.pop.style ='left:0%;opacity:1;'
  }
}
export default PopModal